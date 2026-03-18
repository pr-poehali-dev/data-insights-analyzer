import json
import psycopg2
import os

def handler(event: dict, context) -> dict:
    """Возвращает список преимуществ для спонсоров из БД"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute("""
        SELECT id, title, description, category, package_level, icon, sort_order
        FROM t_p17613445_data_insights_analyz.sponsor_benefits
        WHERE is_active = TRUE
        ORDER BY sort_order ASC
    """)
    rows = cur.fetchall()
    cur.close()
    conn.close()

    benefits = [
        {"id": r[0], "title": r[1], "description": r[2], "category": r[3], "package_level": r[4], "icon": r[5], "sort_order": r[6]}
        for r in rows
    ]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({"benefits": benefits}, ensure_ascii=False)
    }
