from deep_sort_realtime.deepsort_tracker import DeepSort

tracker = DeepSort(
    max_age=50,
    n_init=3,
    max_cosine_distance=0.4
)

def track_objects(detections, frame):

    tracks = tracker.update_tracks(detections, frame=frame)

    return tracks