import pandas as pd
import sqlite3
import logging
from rich.logging import RichHandler

logging.basicConfig(level=logging.INFO,
                    format=' %(asctime)s | %(filename)s | %(levelname)s | %(message)s | %(lineno)d ',
                    handlers=[RichHandler(rich_tracebacks=True)])

def load_csv(csv_file_path):
    try:
        df = pd.read_csv(csv_file_path)
        logging.info(f'CSV file loaded successfully: {csv_file_path}')
        return df
    except Exception as e:
        logging.error(f'Error loading csv file: {e}')
        return None
    
def save_to_sqlite(df, db_path, table_name, if_exists='replace'):
    try:
        conn = sqlite3.connect(db_path)
        df.to_sql(table_name, conn, if_exists=if_exists, index=False)
        conn.close()
        logging.info(f'Saved Dataframe to {db_path} in table {table_name}')
    except Exception as e:
        logging.error(f'Error saving the Dataframe to Sqlite: {e}')

def csv_to_sqlite(csv_file, sqlite_db, table_name):
    df=load_csv(csv_file)
    if df is not None:
        save_to_sqlite(df, sqlite_db, table_name)

if __name__ == "__main__":
    csv_file = 'database/sunglass.csv'
    sqlite_db = 'database/sunglass.db'
    table_name = 'sunglasses'
    csv_to_sqlite(csv_file=csv_file,sqlite_db=sqlite_db, table_name=table_name)