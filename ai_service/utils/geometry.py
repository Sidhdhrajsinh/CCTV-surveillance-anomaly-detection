import cv2
import numpy as np

def point_inside_polygon(point, polygon):

    return cv2.pointPolygonTest(polygon, point, False) >= 0


def calculate_speed(p1, p2):

    return np.linalg.norm(np.array(p1) - np.array(p2))