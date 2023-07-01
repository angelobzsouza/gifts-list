CREATE DATABASE wedding_db;

CREATE TABLE gifts (
    id SERIAL PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    guest VARCHAR(255)
);

INSERT INTO
    gifts (NAME, description, link, image, guest)
VALUES
    (
        'Gift 1',
        'Description of Gift 1',
        'https://example.com/gift1',
        'image1.jpg',
        'Guest 1'
    ),
    (
        'Gift 2',
        'Description of Gift 2',
        'https://example.com/gift2',
        'image2.jpg',
        'Guest 2'
    ),
    (
        'Gift 3',
        'Description of Gift 3',
        'https://example.com/gift3',
        'image3.jpg',
        'Guest 3'
    );

INSERT INTO
    gifts (NAME, description, link, image)
VALUES
    (
        'Gift 4',
        'Description of Gift 4',
        'https://example.com/example-gift',
        'example-image.jpg'
    );