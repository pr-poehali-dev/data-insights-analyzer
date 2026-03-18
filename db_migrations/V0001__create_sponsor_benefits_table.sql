CREATE TABLE t_p17613445_data_insights_analyz.sponsor_benefits (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL DEFAULT 'general',
    package_level VARCHAR(50) NOT NULL DEFAULT 'all',
    icon VARCHAR(100),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

COMMENT ON TABLE t_p17613445_data_insights_analyz.sponsor_benefits IS 'Преимущества для спонсоров: брендирование и PR';
COMMENT ON COLUMN t_p17613445_data_insights_analyz.sponsor_benefits.category IS 'Категория: branding, pr, media, vip, digital';
COMMENT ON COLUMN t_p17613445_data_insights_analyz.sponsor_benefits.package_level IS 'Уровень пакета: all, bronze, silver, gold';

INSERT INTO t_p17613445_data_insights_analyz.sponsor_benefits (title, description, category, package_level, icon, sort_order) VALUES
('Логотип на афише', 'Размещение логотипа спонсора на всех печатных и цифровых афишах мероприятия', 'branding', 'all', 'Image', 1),
('Логотип на баннерах', 'Размещение логотипа на баннерах и растяжках в зале и на входе', 'branding', 'all', 'Flag', 2),
('Брендированная зона на площадке', 'Выделенное пространство для стенда или активации бренда в зоне мероприятия', 'branding', 'silver', 'MapPin', 3),
('Эксклюзивное брендирование сцены', 'Логотип генерального спонсора на сцене, задниках и всех ключевых локациях', 'branding', 'gold', 'Star', 4),
('Пресс-волл с логотипом', 'Присутствие логотипа на официальном пресс-волле для фотосессий и интервью', 'pr', 'gold', 'Camera', 5),
('Упоминание в пресс-релизах', 'Упоминание бренда во всех официальных пресс-релизах и новостных публикациях', 'pr', 'all', 'FileText', 6),
('Публикации в соцсетях', 'Пост с упоминанием бренда в официальных соцсетях (охват 30 000+ подписчиков)', 'digital', 'all', 'Share2', 7),
('Интеграция в трансляцию', 'Упоминание и показ логотипа в онлайн-трансляции мероприятия', 'media', 'silver', 'Tv', 8),
('Видеоролик о бренде', 'Показ видеоролика спонсора во время шоу на экранах и в трансляции', 'media', 'gold', 'Video', 9),
('Именная номинация', 'Специальная номинация от бренда с вручением приза победительнице', 'pr', 'gold', 'Trophy', 10),
('VIP-билеты', 'Билеты в VIP-зону на мероприятие для команды спонсора', 'vip', 'all', 'Ticket', 11),
('VIP-фуршет', 'Приглашение на закрытый фуршет для генерального спонсора и партнёров', 'vip', 'gold', 'UtensilsCrossed', 12);
