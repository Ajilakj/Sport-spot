const router = require('express').Router();
const {User, Sport, Post } = require('../models');

// GET all sports cards
// router.get('/', async (req, res) => {
//   try {
//   // Search the database for a sport with an id that matches params
//   const sportData = await Sport.findAll();
//   const sports = sportData.map((sport) =>
//       sport.get({ plain: true })
//     );
//   res.render('homepage', sports);
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

// GET login page
router.get('/', async (req, res) => {
  try {
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }
});

// GET all sports cards
router.get('/home', async (req, res) => {
  const dbSportData = await Sport.findAll();
  const sport = dbSportData.map((sport) =>
  sport.get({ plain: true })
        );
        res.render('homepage', {
        sport
        });
  });


//     req.session.save(() => {
//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one sport with all posts for that sport
router.get('/sport/:id', async (req, res) => {
    const dbPostData = await Post.findAll({where:
          {sports_id:req.params.id}});
    const dbSportData = await Sport.findAll({where:
          {id:req.params.id}});
    const posts = dbPostData.map((post) =>
          post.get({ plain: true })
        );
    const sportsName = dbSportData.map((name) =>
          name.get({ plain: true })
        );

        res.render('sport-posts', {posts,sportsName});
    });

    // By Ajila to check the create user handlebars
  router.get('/create-user', async (req, res) => {
    try {
    res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
  });

// CREATE new user
router.post('/create-user', async (req, res) => {
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
router.get('/post/create', async (req, res) => {
  const postsData = await Post.findAll({
    include: [User]
  })
  const posts = postsData.map(post => post.get({plain:true}))
  res.render('create-post',{loggIn: req.session.loggedIn, posts});
})



// GET one blog post
router.get('/post/:id', async (req, res) => {
  try {
    const sportData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
          ],
          model: Comment,  
        }
      ]
  })
    const sport = sportData.get({ plain: true });
    res.render('post', { sport, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
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
//         ' ~ file: user-routes.js ~ req.session.save ~ req.session.cookie',
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

router.get('/:id', async (req, res) => {
  try {
  // Search the database for a user with an id that matches params
  const userData = await User.findByPk(id,req.params.id);
  const user = userData.map((user) =>
  user.get({ plain: true })
    );
  res.render('profile', user);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/profile/:id', async (req, res) => {
  const userData = await User.findAll({where:
          {id:req.params.id}});
        const user = userData.map((name) =>
        name.get({ plain: true }));
        console.log(user);
      res.render('profile', {
        user
      })
});
module.exports = router;