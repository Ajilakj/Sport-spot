const router = require('express').Router();
var db = require("../../models");
var passport = require("../../config/passport");

  
  // If the user has valid login credentials log them in 
  // Otherwise the user will be sent an error
  router.post("/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(`We're logginin with passport`)
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // send back an error
  router.post("/signup", function(req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  router.get("/user_data", function(req, res) {
    if (!req.user) {
      // Since the user hasn't logged in so nothing will be returned with nothing 
      res.json({});
    } else {
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });


module.exports = router;