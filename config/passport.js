const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(async(username, password, done) => {
    // looks for user
    const user = await db.User.findOne({ where: {
        username: username
    }})

    return done(null, user)

//     db.User.findOne(
//         function(err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {
//                     message: "No user found."
//                 });
//             // checks for password
//             } 
//             if (!user.validPassword(password)){
//                 return done(null, false, {
//                     message: "Incorrect password."
//                 });
//             }
//             // success
//             return done(null, user)
//         })
//     })
})
)


module.exports = passport;