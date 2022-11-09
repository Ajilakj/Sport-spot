const router = require('express').Router();
const { Sport, Post } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbSportData = await Sport.findAll({
      include: [
        {
          model: Post,
          attributes: ['title', 'content'],
        },  
      ],
    })
  } catch(err){
    res.status(500).json(err)
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