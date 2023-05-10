CREATE DATABASE coffee;

CREATE TABLE coffee (
  id serial PRIMARY KEY, 
  name varchar(255) NOT NULL, 
  price numeric(8,4) NOT NULL,
  date_added date NOT NULL
);