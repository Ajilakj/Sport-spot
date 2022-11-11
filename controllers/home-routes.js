const router = require('express').Router();
const { Sport, Post } = require('../models');

// GET all sports for homepage
router.get('/', async (req, res) => {
  try {
    const dbSportData = await Sport.findAll({
      include: [
          {
          model: Post,
          attributes: [
            'title', 
            'content'
          ]
          },
        ],
    })
   
    const sport = dbSportData.map((sport) =>
      sport.get({ plain: true })
    );
    res.render('homepage', {
      sport,
      loggedIn: req.session.loggedIn,
    }); 
  } catch(err){
    res.status(500).json(err)
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