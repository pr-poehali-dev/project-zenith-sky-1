CREATE TABLE IF NOT EXISTS requests (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    product TEXT,
    diameter TEXT,
    volume TEXT,
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);