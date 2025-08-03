import sqlite3
from tabulate import tabulate

def connect_db(data_path = '../database/sunglass.db'):
    conn = sqlite3.connect(data_path)
    cursor = conn.cursor()
    return conn, cursor

def get_tables(cursor):
    """Return a list of table names in the database."""
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    return [table[0] for table in cursor.fetchall()]

def get_table_columns(cursor, table_name):
    """Return the column names of a specific table."""
    cursor.execute(f"PRAGMA table_info({table_name});")
    return [col[1] for col in cursor.fetchall()]

def get_table_data(cursor, table_name):
    """Return all rows from a specific table."""
    cursor.execute(f"SELECT * FROM {table_name}")
    return cursor.fetchall()

def display_database(db_path='../database/sunglass.db'):
    """Connect to the database and print all table data."""
    conn, cursor = connect_db(db_path)
    try:
        tables = get_tables(cursor)
        if not tables:
            print("No tables found in the database.")
            return

        print("Tables in the database:")
        for table in tables:
            print(f"- {table}")

        for table in tables:
            print(f"\n📝 Table: {table}")
            columns = get_table_columns(cursor, table)
            rows = get_table_data(cursor, table)

            if rows:
                print(tabulate(rows, headers=columns, tablefmt='grid'))
            else:
                print("No data in this table.")

    finally:
        conn.close()

# Example usage
if __name__ == '__main__':
    display_database('../database/sunglass.db')