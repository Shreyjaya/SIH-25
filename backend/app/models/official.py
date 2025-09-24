from pydantic import BaseModel, EmailStr
from typing import Optional

class Official(BaseModel):
    clerk_id: str
    email: EmailStr
    name: Optional[str] = None
    department: Optional[str] = None
    role: str = "official"
