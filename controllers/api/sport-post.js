const router = require('express').Router();
const { Sport, Post } = require('../../models');
const authMiddleware = require('../../utils/authMiddleware')

// GET one sport with all posts for that sport
router.get('/:id', authMiddleware, async (req, res) => {
      const dbPostData = await Post.findAll(
      {
            order: [
                  ['date_created', 'DESC'],
            ],
            where:{
                  sports_id:req.params.id
            }
      }
);
     const  dbSportData = await Sport.findAll({where:
           {id:req.params.id}});
     const posts = dbPostData.map((post) =>
           post.get({ plain: true })
         );
         console.log(posts)
     const sportsName = dbSportData.map((name) =>
           name.get({ plain: true })
         );
 
         res.render('sport-posts', {posts,sportsName});
});

// Get all sports 
// router.get('/home', async (req, res) => {
// const dbSportData = await Sport.findAll();
// const sport = dbSportData.map((sport) =>
// sport.get({ plain: true })
//       );
//       res.render('homepage', {
//       sport
//       });
// });
     
module.exports=router;
