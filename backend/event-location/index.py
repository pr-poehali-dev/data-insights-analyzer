import json
import psycopg2
import os

def handler(event: dict, context) -> dict:
    """Возвращает основную локацию мероприятия Саранская красавица"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute("""
        SELECT id, name, address, city, region, description, capacity, area_sqm,
               parking, parking_spaces, landmark, latitude, longitude, photo_url, website, phone
        FROM t_p17613445_data_insights_analyz.event_locations
        WHERE is_active = TRUE AND is_main = TRUE
        LIMIT 1
    """)
    row = cur.fetchone()
    cur.close()
    conn.close()

    if not row:
        return {'statusCode': 404, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': json.dumps({"error": "Локация не найдена"})}

    location = {
        "id": row[0], "name": row[1], "address": row[2], "city": row[3], "region": row[4],
        "description": row[5], "capacity": row[6], "area_sqm": row[7],
        "parking": row[8], "parking_spaces": row[9], "landmark": row[10],
        "latitude": float(row[11]) if row[11] else None,
        "longitude": float(row[12]) if row[12] else None,
        "photo_url": row[13], "website": row[14], "phone": row[15]
    }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({"location": location}, ensure_ascii=False)
    }
