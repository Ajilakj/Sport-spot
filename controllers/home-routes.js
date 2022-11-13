const router = require('express').Router();
const {User, Sport, Post } = require('../models');

// GET all sports cards
router.get('/', async (req, res) => {
  try {
  // Search the database for a sport with an id that matches params
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
// router.get('/sport/:id', async (req, res) => {
//   try {
//     // sport
//     const sportData = await Sport.findByPk(req.params.id, {
//       include: [
//         {
//           model: Post,
//           attributes: [
//             'id',
//             'post_title',
//           ],
//         },
//       ],
//     });
//     const sport = sportData.get({ plain: true });
//     // posts under that sport
//     const postData = await Post.findAll({
//       where: {
//         sports_id: req.params.id
//       }
//     });
//     console.log(postData)
//     const posts = postData.map((post) =>
//       post.get({ plain: true })
//     );
//     // render both
//     res.render('sport-posts', { sport, posts, loggedIn: req.session.loggedIn });
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




module.exports = router;