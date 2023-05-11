const express = require('express');

const router = express.Router();

const {read} = require('../controllers');
// Create GET route to read products
router.get('/', read);

module.exports = router;