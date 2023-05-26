const LocalStrategy = require("passport-local").Strategy;
const { emailExists, matchPassword, getId } = require("./helper");
const bcrypt = require('bcrypt');

const initialize = (passport) => {
    const authenticateUser = async (email, password, done) => {
        const user = await emailExists(email)
        console.log(user)
        if (user == null) {
            return done(null, false, {message: 'No user with that email'})
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Incorrect Password'})
            }
        }
        catch (e) {
            done(e)
        }
    }
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    // passport.serializeUser((user, done) => done(null, user.id))
    // passport.deserializeUser(async (id, done) => {
    //     return done(null, await getId(id))
    // })
}



module.exports = initialize;

