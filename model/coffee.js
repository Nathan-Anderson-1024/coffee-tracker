const pool = require('./database');

const create = (name, price, dateAdded) => pool.query('INSERT INTO coffee (name, price, date_added) VALUES ($1, $2, $3) RETURNING *', [name, price, dateAdded]);

module.exports = { create }