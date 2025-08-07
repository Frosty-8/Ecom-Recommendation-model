from sentence_transformers import SentenceTransformer
import faiss 
import numpy as np
import pandas as pd
import logging
from rich.logging import RichHandler

MODEL_NAME = 'all-MiniLM-L12-v2'
FAISS_INDEX_PATH = 'model/faiss_index.idx'
METADATA_PATH = 'model/metadata.pkl'

logging.basicConfig(
    level=logging.INFO,
    format="%(filename)s | %(message)s | %(name)s | %(levelname)s",
    handlers=[RichHandler(rich_tracebacks=True)]
)
logger = logging.getLogger("recommend")

class ProductRecommender:
    def __init__(self):
        logger.info("🔁 Loading model and index...")
        self.model = SentenceTransformer(MODEL_NAME)
        self.index = faiss.read_index(FAISS_INDEX_PATH)
        self.df = pd.read_pickle(METADATA_PATH)

    def recommend(self, query_text: str,top_k: int=5):
        logger.info(f"🔍 Searching similar items for: {query_text}")
        query_vec = self.model.encode([query_text],normalize_embeddings=True)
        D,I = self.index.search(query_vec, top_k)
        results = self.df.iloc[I[0]].copy()
        results['score'] = D[0]
        return results.to_dict(orient='records')