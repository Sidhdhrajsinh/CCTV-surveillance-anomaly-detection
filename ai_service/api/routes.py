from fastapi import APIRouter, UploadFile, File, Form
from services.video_processor import process_video
import json

router = APIRouter()

@router.post("/analyze-video")
async def analyze_video(
        video: UploadFile = File(...),
        zones: str = Form(...)
):

    zone_coords = json.loads(zones)

    result = await process_video(video, zone_coords)

    return result