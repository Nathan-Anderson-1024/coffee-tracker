const pool = require('./database');

const create = (name, price, dateAdded, vendor) => pool.query('INSERT INTO coffee (name, price, date_added, vendor) VALUES ($1, $2, $3, $4) RETURNING *', [name, price, dateAdded, vendor]);

const get = () => pool.query('SELECT name, array_agg(price) as price_array, array_agg(date_added) as added_array, array_agg(img) as img FROM coffee GROUP BY name');


module.exports = { create, get }