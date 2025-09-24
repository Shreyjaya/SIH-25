# app/routes/dataset_stats.py
from fastapi import APIRouter
from app.config import db
from bson import ObjectId
import pandas as pd

router = APIRouter(prefix="/datasets", tags=["Dataset Stats"])

@router.get("/stats")
async def get_dataset_stats():
    # Fetch all datasets
    datasets = await db.datasets.find().to_list(100)  # adjust limit if needed

    if not datasets:
        return {
            "total_samples": 0,
            "safe": 0,
            "moderate": 0,
            "risky": 0,
            "avg_hpi": 0
        }

    all_rows = []
    for ds in datasets:
        all_rows.extend(ds.get("data", []))

    df = pd.DataFrame(all_rows)

    if df.empty:
        return {
            "total_samples": 0,
            "safe": 0,
            "moderate": 0,
            "risky": 0,
            "avg_hpi": 0
        }

    # Total samples
    total_samples = len(df)

    # HPI classification
    safe_hpi = len(df[df["HPI"] < 60])
    moderate_hpi = len(df[(df["HPI"] >= 60) & (df["HPI"] <= 100)])
    risky_hpi = len(df[df["HPI"] > 100])

    # HEI classification
    safe_hei = len(df[(df["HEI"] >= 100) & (df["HEI"] <= 200)])
    moderate_hei = len(df[(df["HEI"] > 200) & (df["HEI"] <= 400)])
    risky_hei = len(df[df["HEI"] > 400])

    avg_hpi = float(df["HPI"].mean())

    return {
        "total_samples": total_samples,
        "safe": safe_hpi + safe_hei,
        "moderate": moderate_hpi + moderate_hei,
        "risky": risky_hpi + risky_hei,
        "avg_hpi": avg_hpi
    }
