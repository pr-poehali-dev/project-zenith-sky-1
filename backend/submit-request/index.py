import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта (имя, телефон, продукт, диаметр, объём, комментарий) и сохраняет в БД."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
            "body": {"error": "name and phone are required"},
        }

    product = body.get("product", "")
    diameter = body.get("diameter", "")
    volume = body.get("volume", "")
    comment = body.get("comment", "")

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO requests (name, phone, product, diameter, volume, comment) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
        (name, phone, product, diameter, volume, comment),
    )
    request_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
        "body": {"ok": True, "id": request_id},
    }