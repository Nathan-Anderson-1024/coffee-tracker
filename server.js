if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express')

const productRouter = require('./routes/coffee');
const passport = require('passport');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');

const app = express()
// const initializePassport = require('./passport-config');
// initializePassport(passport)
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: 'strict' }
}))

app.use( (req, res, next) => {  console.log('req.session', req.session);  return next()});
app.use(passport.initialize())
app.use(passport.session())



app.use(express.urlencoded({extended: false}))





PORT = process.env.PORT || 3001

app.use('/api', productRouter)
// add to submit a resource routes


app.listen(PORT, () => {console.log(`Server listening on ${PORT}.`)})

