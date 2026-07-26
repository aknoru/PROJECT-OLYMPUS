"""FastAPI Backend Application for Project Olympus Web Platform."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any

app = FastAPI(
    title="Project Olympus API",
    description="Decoupled FastAPI backend for AI Tutor, authentication, analytics, and user progress sync.",
    version="1.2.0",
)

# CORS configuration to allow local & GitHub Pages frontend consumption
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class HealthResponse(BaseModel):
    status: str
    version: str
    service: str


@app.get("/health", response_model=HealthResponse)
async def health_check():
    return {
        "status": "healthy",
        "version": "1.2.0",
        "service": "project-olympus-backend",
    }


@app.get("/")
async def root():
    return {
        "message": "Welcome to Project Olympus API",
        "docs_url": "/docs",
        "openapi_url": "/openapi.json",
    }


# Include API Routers
from app.api.auth import router as auth_router
from app.api.ai_tutor import router as ai_tutor_router

app.include_router(auth_router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(ai_tutor_router, prefix="/api/v1/ai", tags=["AI Tutor"])
