# app/routes/dataset_routes.py
from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from app.config import db
from app.models.dataset import Dataset
from datetime import datetime, timezone
import pandas as pd


router = APIRouter(prefix="/datasets", tags=["Datasets"])

@router.post("/upload")
async def upload_dataset(uploaded_by: str = Form(...), file: UploadFile = File(...)):
    if not (file.filename.endswith(".xlsx") or file.filename.endswith(".csv")):
        raise HTTPException(status_code=400, detail="Only .xlsx or .csv files allowed")

    try:
        if file.filename.endswith(".csv"):
            df = pd.read_csv(file.file)
        else:
            df = pd.read_excel(file.file)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error reading file: {str(e)}")

    dataset = Dataset(
        uploaded_by=uploaded_by,
        file_name=file.filename,
        columns=list(df.columns),
        data=df.to_dict(orient="records"),
        uploaded_at=datetime.now(timezone.utc)
    )

    # ✅ Insert and capture result
    result = await db.datasets.insert_one(dataset.model_dump())

    return {
        "message": "✅ Dataset uploaded successfully",
        "file_name": dataset.file_name,
        "rows": len(dataset.data),
        "columns": dataset.columns,
        "datasetId": str(result.inserted_id)
    }
@router.get("/recent")
async def get_recent_datasets():
    cursor = db.datasets.find().sort("uploaded_at", -1).limit(4)
    datasets = []
    async for ds in cursor:
        datasets.append({
            "datasetId": str(ds["_id"]),
            "filename": ds["file_name"],
            "uploadedAt": ds["uploaded_at"].strftime("%d/%m/%Y"),
            "samples": len(ds["data"]),
            "status": "Processed" if any("HPI" in row for row in ds["data"]) else "Processing"
        })
    return datasets




