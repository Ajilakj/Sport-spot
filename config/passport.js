const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(async(email, password, done) => {
    // looks for user
    db.User.findOne(
        { email: email }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: "No user found."
                });
            // checks for password
            } 
            if (!user.validPassword(password)){
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // success
            return done(null, user)
        })
    })
    )


module.exports = passport;