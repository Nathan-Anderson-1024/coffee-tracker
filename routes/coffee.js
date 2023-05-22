const express = require('express');
const router = express.Router();
const {read, write} = require('../controllers/index');
// Create GET route to read products
router.get('/coffee', read);
router.post('/register', write);
module.exports = router;