const router = require('express').Router();
const { Sport, Post } = require('../models');

router.get('/', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const PostData = await Post.findAll();

  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const posts = PostData.map((post)=>post.get({ plain: true }));
  console.log(posts);
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('sport-posts', posts);
  } catch (err) {
      res.status(500).json(err);
  }
});

// GET one sport
router.get('/sport/:id', async (req, res) => {
  try {
    const dbSportData = await Sport.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
          ],
        },
      ],
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//     );
//     res.render('sport-posts', {
//       sport,
//      // loggedIn: req.session.loggedIn,
//     }); 
//    // console.log("testing"+sport);
//   } catch(err){
//     res.status(500).json(err)
//   }

// });

// GET one sport
// router.get('/sport/:id', async (req, res) => {
//   try {
//     const dbSportData = await Sport.findByPk(req.params.id, {
//       include: [
//         {
//           model: Post,
//           attributes: [
//             'id',
//             'title',
//           ],
//         },
//       ],
//     })
    
// GET one blog post
router.get('/post/:id', async (req, res) => {
  try {
    const dbSportData = await Post.findByPk(req.params.id, {
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
    const sport = dbSportData.get({ plain: true });
    res.render('sport', { sport, loggedIn: req.session.loggedIn });
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

    // Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;