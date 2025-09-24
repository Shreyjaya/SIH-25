from pydantic import BaseModel
from typing import Dict, Any, List
from datetime import datetime, timezone

class Dataset(BaseModel):
    uploaded_by: str         # clerk_id of official
    file_name: str
    columns: List[str]       # store column names from Excel
    data: List[Dict[str, Any]]  # actual rows
    uploaded_at: datetime = datetime.now(timezone.utc)
