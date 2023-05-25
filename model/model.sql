CREATE DATABASE coffee;
-- creates table to store coffee info
CREATE TABLE coffee (
  id serial PRIMARY KEY, 
  name varchar(255) NOT NULL, 
  price numeric(8,4) NOT NULL,
  date_added date NOT NULL,
  vendor varchar(255) NOT NULL,
  img varchar(255)
);
-- creates table to store user info
CREATE TABLE users(
  user_id serial PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  created_date TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);