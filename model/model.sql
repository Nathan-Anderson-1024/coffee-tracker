CREATE DATABASE coffee;

CREATE TABLE coffee (
  id serial PRIMARY KEY, 
  name varchar(255) NOT NULL, 
  price int NOT NULL
);