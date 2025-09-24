
from fastapi import APIRouter, HTTPException
from app.config import db
from app.models.user import User
from bson import ObjectId

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/register")
async def register_user(user: User):
    # Check if user already exists
    existing_user = await db.users.find_one({"clerk_id": user.clerk_id})
    if existing_user:
        existing_user["_id"] = str(existing_user["_id"])  # serialize ObjectId
        return {
            "message": "User already registered",
            "user": existing_user
        }

    # Insert new user
    result = await db.users.insert_one(user.model_dump())

    # Fetch stored user to confirm
    stored_user = await db.users.find_one({"_id": result.inserted_id})
    stored_user["_id"] = str(stored_user["_id"])  # serialize ObjectId

    return {
        "message": "User registered successfully",
        "user": stored_user
    }

@router.get("/{clerk_id}")
async def get_user(clerk_id: str):
    user = await db.users.find_one({"clerk_id": clerk_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    user["_id"] = str(user["_id"])  # serialize ObjectId
    return user

