from fastapi import FastAPI
from api.routes import router
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI CCTV Surveillance API Running"}

app.include_router(router)

app.mount("/videos", StaticFiles(directory="outputs"), name="videos")