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

//POST for blog post to create a new post
router.post('/post/create', async (req, res) => {
  res.render('create-blog-post');
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      looking_for_players: req.body.looking_for_players,
      looking_for_coach: req.body.looking_for_coach,
      looking_for_students: req.body.looking_for_students,
      date_posted: Date.toLocalDateString(),
  });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(postData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT route for user to edit their own blog posts
router.put('/post/:id', (req, res) => {
  Post.update(
    {
      // listed fields are fields that can be edited
      title: req.body.title,
      content: req.body.content,
      looking_for_players: req.body.looking_for_players,
      looking_for_coach: req.body.looking_for_coach,
      looking_for_students: req.body.looking_for_students,
    },
    {
      // Gets the blog post based on id
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updated) => {
      // Sends the updated post as json
      res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});

// GET Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
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
        ' ~ file: user-routes.js ~ req.session.save ~ req.session.cookie',
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