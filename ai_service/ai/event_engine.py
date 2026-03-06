import time
from utils.geometry import point_inside_polygon, calculate_speed

zone_state = {}
track_history = {}
last_event_time = {}
loitering_start = {}

EVENT_COOLDOWN = 10
RUNNING_SPEED_THRESHOLD = 40
LOITERING_TIME_THRESHOLD = 8


def detect_events(track_id, center, polygon, timestamp):

    events = []

    current_time = time.time()

    inside = point_inside_polygon(center, polygon)

    if inside:

        if track_id not in zone_state:

            events.append({
                "event_type": "restricted_area_entry",
                "person_id": int(track_id),
                "timestamp_seconds": round(timestamp,2),
                "risk_level": "high"
            })

            zone_state[track_id] = True

    else:
        zone_state.pop(track_id, None)

    if track_id not in track_history:
        track_history[track_id] = []

    track_history[track_id].append(center)

    if len(track_history[track_id]) > 10:

        speed = calculate_speed(
            track_history[track_id][-1],
            track_history[track_id][-10]
        )

        if speed > RUNNING_SPEED_THRESHOLD:

            if track_id not in last_event_time or \
               current_time - last_event_time[track_id] > EVENT_COOLDOWN:

                events.append({
                    "event_type": "sudden_running",
                    "person_id": int(track_id),
                    "timestamp_seconds": round(timestamp,2),
                    "risk_level": "medium"
                })

                last_event_time[track_id] = current_time

    if track_id not in loitering_start:
        loitering_start[track_id] = time.time()

    else:

        history = track_history[track_id]

        if len(history) > 20:

            movement = calculate_speed(history[0], history[-1])

            if movement < 30:

                duration = time.time() - loitering_start[track_id]

                if duration > LOITERING_TIME_THRESHOLD:

                    if track_id not in last_event_time or \
                        current_time - last_event_time[track_id] > EVENT_COOLDOWN:

                        events.append({
                            "event_type": "loitering",
                            "person_id": int(track_id),
                            "timestamp_seconds": round(timestamp,2),
                            "risk_level": "medium"
                        })

                        last_event_time[track_id] = current_time

    return events