const router = require('express').Router();
const { Sport, Post } = require('../models');

// by AJILA to check the sport-postshandlebars
// router.get('/', async (req, res) => {
//   const { Sport, Post } = require('../models');
//   const dbPostData = await Post.findAll();
//   console.log(dbPostData)
//   const posts = dbPostData.map((post) =>
//         post.get({ plain: true })
//       );
  
//       res.render('sport-posts', {
//         posts,
//       });
//   });

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

    // Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;