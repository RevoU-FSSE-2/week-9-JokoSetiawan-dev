CREATE DATABASE mbanking_app;
USE mbanking_app;

CREATE TABLE user_table (
    id integer PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address TEXT NOT NULL
);

INSERT INTO user_table (name, address)
VALUES
('Joko Setiawan', 'Pekanbaru, Riau');

USE mbanking_app;

CREATE TABLE transaction_table (
    id integer PRIMARY KEY AUTO_INCREMENT,
    user_id integer NOT NULL,
    type ('income','expense') NOT NULL,
    amount double NOT NULL
);

INSERT INTO transaction_table (user_id, type, amount)
VALUES
(1, 'income', 30000000),