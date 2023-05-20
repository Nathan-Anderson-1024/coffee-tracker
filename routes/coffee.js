const express = require('express');
const router = express.Router();
const {read} = require('../controllers/index');
// Create GET route to read products
router.get('/coffee', read);

module.exports = router;