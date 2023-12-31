-- 사용자 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
);

INSERT OR IGNORE INTO users(id, username, password) VALUES 
    (1, "user1", "password1"),
    (2, "user2", "password2");


-- 상품 테이블 생성
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER
);

INSERT OR IGNORE INTO products (id, name, price) VALUES 
    (1, "Product 1", 2000),
    (2, "Product 2", 3000),
    (3, "Product 3", 1500);

-- 도서 테이블 생성
CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    genre TEXT
);

INSERT OR IGNORE INTO books (id, title, author, genre) VALUES
    (1, "Book 1", "Author 1", "Fiction"),
    (2, "Book 2", "Author 2", "Non-Fiction"),
    (3, "Book 3", "Author 3", "Mystery");