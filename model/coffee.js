const pool = require('./database');

const create = (name, price, dateAdded, vendor) => pool.query('INSERT INTO coffee (name, price, date_added, vendor) VALUES ($1, $2, $3, $4) RETURNING *', [name, price, dateAdded, vendor]);

const get = () => pool.query('SELECT * FROM coffee');

module.exports = { create, get }