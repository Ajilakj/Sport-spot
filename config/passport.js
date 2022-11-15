const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  async(username, password, done) => {
    // looks for user
    const user = await db.User.findOne({ where: {
      username: username
    }},
    function(err, user) {
      if (err) {
        return done(err);
      }
      // checks for user
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
    }
    );
    return done(null, user);
  })
);


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;