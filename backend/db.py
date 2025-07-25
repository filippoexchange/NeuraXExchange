import psycopg2

def save_report(user, title, details):
    conn = psycopg2.connect(dbname="neurax", user="postgres", password="PASSWORD", host="localhost")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO reports (user, title, details) VALUES (%s, %s, %s);", (user, title, details))
    conn.commit()
    cursor.close()
    conn.close()
