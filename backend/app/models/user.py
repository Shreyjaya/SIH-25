from pydantic import BaseModel, EmailStr
from typing import Optional

class User(BaseModel):
    clerk_id: str        # Clerk user ID
    email: EmailStr
    name: Optional[str] = None
    role: str = "user"   # default role
