from fastapi import FastAPI
from api.routes import router
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="AI Surveillance System")

app.include_router(router)

# Serve annotated videos
app.mount("/videos", StaticFiles(directory="outputs"), name="videos")