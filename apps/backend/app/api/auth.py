"""Authentication API Router for Project Olympus."""

from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel, EmailStr
from typing import Optional

router = APIRouter()


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


@router.post("/login", response_model=TokenResponse)
async def login(req: LoginRequest):
    if req.email == "demo@olympus.org" and req.password == "olympus2026":
        return {
            "access_token": "demo-jwt-token-olympus-2026",
            "token_type": "bearer",
            "user": {
                "id": "usr-001",
                "email": req.email,
                "name": "Olympus Learner",
                "role": "student",
            },
        }

    # Default fallback demo login
    return {
        "access_token": f"jwt-token-{req.email}",
        "token_type": "bearer",
        "user": {
            "id": f"usr-{hash(req.email) % 10000}",
            "email": req.email,
            "name": req.email.split("@")[0].title(),
            "role": "student",
        },
    }
