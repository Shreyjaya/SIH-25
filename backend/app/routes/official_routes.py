from fastapi import APIRouter
from app.config import db
from app.models.official import Official

router = APIRouter(prefix="/officials", tags=["Officials"])

@router.post("/register")
async def register_official(official: Official):
    await db.officials.insert_one(official.dict())
    return {"message": "Official registered successfully"}

@router.get("/{clerk_id}")
async def get_official(clerk_id: str):
    official = await db.officials.find_one({"clerk_id": clerk_id})
    return official
