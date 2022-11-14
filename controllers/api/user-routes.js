const router = require('express').Router();
const { User } = require('../../models');

// route is /users

// CREATE new user
// sign up
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//////////////////////////////////////////////////////////
      // **** Moved this over to home-routes ***** //

// Login
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({
//       where: {
//         username: req.body.username,
//       },
//     });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password. Please try again!' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password. Please try again!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       console.log(
//         '🚀 ~ file: user-routes.js ~ req.session.save ~ req.session.cookie',
//         req.session.cookie
//       );

//       res
//         .status(200)
//         .json({ user: userData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
//////////////////////////////////////////////////////////



// Logout
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).redirect("/");
    });
  } else {
    res.status(404).end();
  }
});


// view profile
// will req.body.username remain in order to display that user's profile?
router.get('/profile', async (req, res) => {
  try {
     const userData = await User.findOne({
      where: {
        username: req.body.username,
      }
    })
    const user = userData.get({ plain: true });
    res.render('user', user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;
