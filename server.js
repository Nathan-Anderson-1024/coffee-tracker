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


app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))


PORT = process.env.PORT || 3001

app.use('/api', productRouter)

app.listen(PORT, () => {console.log(`Server listening on ${PORT}.`)})
