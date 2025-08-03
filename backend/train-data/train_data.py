from sentence_transformers import SentenceTransformer
import pandas as pd
import sqlite3
import faiss  # type: ignore
import numpy as np
import logging
from rich.logging import RichHandler

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(filename)s | %(message)s | %(name)s | %(levelname)s",
    handlers=[RichHandler(rich_tracebacks=True)]
)
logger = logging.getLogger("train_data")

DB_PATH = '../database/sunglass.db'
MODEL_NAME = 'all-MiniLM-L12-v2'
FAISS_INDEX_PATH = '../model/faiss_index.idx'
METADATA_PATH = '../model/metadata.pkl'

def load_data(db_path=DB_PATH):
    logger.info(f"📥 Loading data from {db_path}")
    conn = sqlite3.connect(db_path)
    try:
        query = 'SELECT titles, images, prices, ratings, purls FROM sunglasses'
        df = pd.read_sql(query, conn)
        logger.info(f"✅ Loaded {len(df)} rows from database")
    except Exception as e:
        logger.error(f"❌ Failed to load data: {e}")
        raise
    finally:
        conn.close()

    df.fillna('', inplace=True)
    df['text'] = df['titles']
    return df

def generate_embeddings(texts, model_name=MODEL_NAME):
    logger.info(f"🧠 Loading SentenceTransformer model: {model_name}")
    model = SentenceTransformer(model_name)
    logger.info(f"📐 Generating embeddings for {len(texts)} items")
    embeddings = model.encode(texts, show_progress_bar=True, normalize_embeddings=True)
    return embeddings, model

def build_faiss_index(embeddings):
    dim = embeddings.shape[1]
    logger.info(f"📊 Building FAISS index with dimension {dim}")
    index = faiss.IndexFlatL2(dim)
    index.add(np.array(embeddings))
    return index

def save_index_and_metadata(index, df):
    logger.info("💾 Saving FAISS index and metadata...")
    faiss.write_index(index, FAISS_INDEX_PATH)
    df.to_pickle(METADATA_PATH)
    logger.info("✅ Model and metadata saved")

def load_index_and_metadata():
    logger.info("📂 Loading saved FAISS index and metadata...")
    index = faiss.read_index(FAISS_INDEX_PATH)
    df = pd.read_pickle(METADATA_PATH)
    return index, df

def similar_search_products(query_text, model, index, df, top_k=5):
    logger.info(f"🔍 Searching similar products for: '{query_text}'")
    query_vec = model.encode([query_text], normalize_embeddings=True)
    D, I = index.search(query_vec, k=top_k)
    return df.iloc[I[0]].copy().assign(score=D[0])

if __name__ == "__main__":
    try:
        df = load_data()
        embeddings, model = generate_embeddings(df['text'].tolist())
        index = build_faiss_index(embeddings)
        save_index_and_metadata(index, df)

        index, df = load_index_and_metadata()
        results = similar_search_products('stylish sunglasses', model, index, df)
        logger.info("\n📈 Top results:\n")
        print(results[['titles', 'images', 'prices', 'ratings', 'purls', 'score']])
    except Exception as e:
        logger.exception("Unhandled error occurred")