const pool = require('./database');

const create = (name, price, dateAdded, vendor) => pool.query('INSERT INTO coffee (name, price, date_added, vendor) VALUES ($1, $2, $3, $4) RETURNING *', [name, price, dateAdded, vendor]);

const get = () => pool.query('SELECT name, array_agg(price) as price_array, array_agg(date_added) as added_array, array_agg(img) as img FROM coffee GROUP BY name');

const createUser = (email, password, firstName, lastName) => pool.query('INSERT INTO users (username, first_name, last_name, password, email, created_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [email, firstName, lastName, password, email, new Date().toISOString().split('T')[0]]);

const checkEmail = (email) => pool.query('SELECT user_id, first_name, last_name, username, password, email FROM users WHERE email = $1', [email]);

const getUserId = (email) => pool.query('SELECT user_id FROM users WHERE email = $1', [email])

const updateUserInfo = (username, email, firstName, lastName) => pool.query('UPDATE users SET username = $1, email = $2, first_name = $3, last_name = $4 WHERE email = $2 RETURNING *', [username, email, firstName, lastName])

const updateUserPassword = (NewPassword, email) => pool.query('UPDATE users SET password = $1 WHERE email = $2 RETURNING *', [NewPassword, email]);

module.exports = { create, createUser, get, checkEmail, getUserId, updateUserInfo, updateUserPassword }