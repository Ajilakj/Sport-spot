const router = require("express").Router();
const {User, Sport, Post} = require("../models");
// const authMiddleware = require("../utils/authMiddleware");

// GET login page
router.get("/", async (req, res) => {
  // if (req.session.loggedIn) {
  res.redirect("/home");
//     return;
//   }else {
//     // otherwise, lets user log in
//     res.render("login");
//   }
});

// GET all sports cards
router.get("/home", async (req, res) => {
  const dbSportData = await Sport.findAll();
  const sport = dbSportData.map((sport) =>
    sport.get({ plain: true })
  );
  res.render("homepage", {
    sport
  });
});

// By Ajila to check the create user handlebars
router.get("/create-user", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post("/create-user", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
    });

    req.session.save(() => {
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//added this code below to associate a user with any blog post they create
router.get("/post/create", async (req, res) => {
  const postsData = await Post.findAll({
    include: [User]
  });
  const posts = postsData.map(post => post.get({plain:true}));
  res.render("create-post",{loggedIn: req.session.loggedIn, posts});
});


// GET Login route
// redirects user to home if already logged in
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }else {
    // otherwise, lets user log in
    res.render("login");
  }
});

router.get("/:id", async (req, res) => {
  try {
  // Search the database for a user with an id that matches params
    const userData = await User.findByPk(id,req.params.id);
    const user = userData.map((user) =>
      user.get({ plain: true })
    );
    res.render("profile", user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  const userData = await User.findAll({where:
          {id:req.params.id}});
  const user = userData.map((name) =>
    name.get({ plain: true }));
  console.log(user);
  res.render("profile", {
    user
  });
});
module.exports = router;