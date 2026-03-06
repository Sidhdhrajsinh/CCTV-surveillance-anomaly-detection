from fastapi import FastAPI
from api.routes import router

app = FastAPI(title="AI Surveillance System")

app.include_router(router)