const router = require('express').Router();
const { Sport, Post } = require('../models');
// by AJIJLA
router.get('/', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const PostData = await Post.findAll();
  console.log(PostData);
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const posts = PostData.get({ plain: true });

  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('sport-posts', posts);
  } catch (err) {
      res.status(500).json(err);
  }
});

//GET all sports for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbSportData = await Sport.findAll({
//       include: [
//           {
//           model: Post,
//           attributes: [
//             'title', 
//             'content'
//           ]
//           },
//         ],
//     })
   
//     const sport = dbSportData.map((sport) =>
//       sport.get({ plain: true })

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
        {
          model: Comment,
        }, 
      ],
    });

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