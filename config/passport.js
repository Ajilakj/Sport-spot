const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(async(email, password, done) => {
    db.User.findOne({
        where: {email: email}
    });
    await((dbUser)=> {
        if (!dbUser) {
            return done(null, false, {
                message: "No user found."
            });
        } else if (!dbUser.validPassword(password)){
            return done(null, false, {
                message: "Incorrect password."
            });
        }
        return done(null, dbUser)
    })
})
)

module.exports = passport;