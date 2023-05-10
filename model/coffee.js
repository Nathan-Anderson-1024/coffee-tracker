const pool = require('./database')

const create = (name, price) => pool.query('INSERT INTO coffee (name, price) VALUES ($1, $2) RETURNING *', [name, price]);

module.exports = { create }