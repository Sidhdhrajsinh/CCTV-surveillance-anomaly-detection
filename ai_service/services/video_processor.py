import cv2
import os
import time
import shutil
import numpy as np

from ai.detector import detect_people
from ai.tracker import track_objects
from ai.event_engine import detect_events

UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "outputs"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)


async def process_video(video, zone_coords):

    zone_polygon = np.array(zone_coords, np.int32)

    video_path = os.path.join(UPLOAD_FOLDER, video.filename)

    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    cap = cv2.VideoCapture(video_path)

    fps = cap.get(cv2.CAP_PROP_FPS)

    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    fourcc = cv2.VideoWriter_fourcc(*"mp4v")

    output_filename = f"annotated_{int(time.time())}_{video.filename}"

    output_path = os.path.join(OUTPUT_FOLDER, output_filename)

    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

    frame_count = 0
    events = []

    while True:

        ret, frame = cap.read()

        if not ret:
            break

        frame_count += 1

        if frame_count % 3 != 0:
            continue

        detections = detect_people(frame)

        tracks = track_objects(detections, frame)

        for track in tracks:

            if not track.is_confirmed():
                continue

            track_id = track.track_id

            l, t, w, h = map(int, track.to_ltrb())

            center_x = int(l + w / 2)
            center_y = int(t + h / 2)

            center = (center_x, center_y)

            cv2.rectangle(frame, (l, t), (l+w, t+h), (0,255,0), 2)

            cv2.putText(
                frame,
                f"ID {track_id}",
                (l, t-10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.5,
                (0,255,0),
                2
            )

            cv2.polylines(frame, [zone_polygon], True, (0,0,255), 2)

            timestamp = frame_count / fps

            detected_events = detect_events(
                track_id,
                center,
                zone_polygon,
                timestamp
            )

            events.extend(detected_events)

        out.write(frame)

    cap.release()
    out.release()

    os.remove(video_path)

    return {
        "status": "done",
        "events": events,
        "annotated_video": output_filename
    }