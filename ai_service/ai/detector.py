from ultralytics import YOLO

model = YOLO("models/yolov8n.pt")

def detect_people(frame):

    results = model(frame)

    detections = []

    for r in results:
        for box in r.boxes:

            cls = int(box.cls[0])
            conf = float(box.conf[0])

            if cls == 0 and conf > 0.5:

                x1, y1, x2, y2 = map(int, box.xyxy[0])

                detections.append(
                    ([x1, y1, x2-x1, y2-y1], conf, "person")
                )

    return detections