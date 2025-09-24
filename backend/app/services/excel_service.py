import pandas as pd
from app.models.dataset import Dataset

async def process_excel(file, uploaded_by: str) -> Dataset:
    df = pd.read_excel(file.file)

    dataset = Dataset(
        uploaded_by=uploaded_by,
        file_name=file.filename,
        columns=df.columns.tolist(),
        data=df.to_dict(orient="records")
    )

    return dataset
