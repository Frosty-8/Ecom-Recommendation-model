import sqlite3
from typing import List, Dict

DB_PATH="database/sunglass.db"

def get_all_products()->List[Dict]:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT titles, images, prices, ratings, purls FROM sunglasses")
    products = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return products 