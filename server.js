if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express')

const productRouter = require('./routes/coffee');
const passport = require('passport');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');

const initializePassport = require('./passport-config')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)
const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.urlencoded({extended: false}))


app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

const {createUser} = require('./model/coffee')

// app.post('/register', async (req, res) => {
//     try {
//         console.log(req.body)
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         console.log(hashedPassword)
//         const email = req.body.email;
//         console.log(email)
//         await createUser(email, hashedPassword);
//         res.redirect('/');
//     }
//     catch {
//         res.redirect('/register');
//     }
// })


PORT = process.env.PORT || 3001

app.use('/api', productRouter)
// add to submit a resource routes

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}
//add to register route
const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    }
    next();
}

app.listen(PORT, () => {console.log(`Server listening on ${PORT}.`)})

