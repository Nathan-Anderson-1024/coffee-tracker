const express = require('express');
const router = express.Router();
const {read, write, login} = require('../controllers/index');

const passport = require("passport");
const { checkEmail } = require('../model/coffee');
require("../passport-config")(passport);

// Create GET route to read products
router.get('/coffee', read);
router.post('/register', write);
router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
        username:req.user.username
    }
    res.send(userInfo)
})
router.get('/login', checkEmail)

module.exports = router;