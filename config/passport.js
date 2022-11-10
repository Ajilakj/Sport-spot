const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(async(email, password, done) => {
    // looks for user
    db.User.findOne({
        where: {email: email}
    });
    // checks for user
    await((dbUser)=> {
        if (!dbUser) {
            return done(null, false, {
                message: "No user found."
            });
        // checks for password
        } else if (!dbUser.validPassword(password)){
            return done(null, false, {
                message: "Incorrect password."
            });
        }
        // success
        return done(null, dbUser)
    })
})
)

module.exports = passport;