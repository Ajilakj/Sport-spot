const router = require('express').Router();
const { Sport, Post } = require('../models');

// GET all sports cards
router.get('/', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const sportData = await Sport.findAll();
  const sports = sportData.map((sport) =>
      sport.get({ plain: true })
    );
  res.render('homepage', sports);
  } catch (err) {
      res.status(500).json(err);
  }
});

 

// GET one sport with all posts for that sport
router.get('/sport/:id', async (req, res) => {
  try {
    // sport
    const sportData = await Sport.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
          ],
        },
      ],
    });
    const sport = sportData.get({ plain: true });
    // posts under that sport
    const postData = await Post.findAll({
      where: {
        sports_id: req.params.id
      }
    });
    console.log(postData)
    const posts = postData.map((post) =>
      post.get({ plain: true })
    );
    // render both
    res.render('sport-posts', { sport, posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
    

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
          model: Post,  
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


// Create a new post



// GET Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


  // POST Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      console.log(
        '🚀 ~ file: user-routes.js ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;