CREATE TABLE t_p17613445_data_insights_analyz.event_locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL DEFAULT 'Саранск',
    region VARCHAR(100) NOT NULL DEFAULT 'Республика Мордовия',
    description TEXT,
    capacity INTEGER,
    area_sqm INTEGER,
    parking BOOLEAN DEFAULT FALSE,
    parking_spaces INTEGER,
    metro_nearby VARCHAR(255),
    landmark VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    photo_url TEXT,
    website VARCHAR(255),
    phone VARCHAR(50),
    is_main BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

COMMENT ON TABLE t_p17613445_data_insights_analyz.event_locations IS 'Локации проведения мероприятия Саранская красавица';
COMMENT ON COLUMN t_p17613445_data_insights_analyz.event_locations.capacity IS 'Вместимость зала (человек)';
COMMENT ON COLUMN t_p17613445_data_insights_analyz.event_locations.area_sqm IS 'Площадь в кв.м.';
COMMENT ON COLUMN t_p17613445_data_insights_analyz.event_locations.is_main IS 'Основная площадка мероприятия';

INSERT INTO t_p17613445_data_insights_analyz.event_locations
    (name, address, city, description, capacity, area_sqm, parking, parking_spaces, landmark, latitude, longitude, is_main)
VALUES (
    'Государственный музыкальный театр им. И.М. Яушева',
    'ул. Советская, 29',
    'Саранск',
    'Главная концертная площадка Саранска с богатой историей и великолепной акустикой. Классический зал с бархатными креслами и профессиональным световым и звуковым оборудованием. Идеальная сцена для конкурса красоты высокого уровня.',
    800,
    2400,
    TRUE,
    120,
    'Центр города, рядом с площадью Тысячелетия',
    54.18720000,
    45.18340000,
    TRUE
);
