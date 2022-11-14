const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
     try {
     res.render('signup');
     } catch (err) {
          res.status(500).json(err);
     }
});
 
 // CREATE new user
router.post('/', async (req, res) => {
     try {
          const dbUserData = await User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone_number: req.body.phone_number,
          bio: req.body.bio,
     });

     req.session.save(() => {
          res.status(200).json(dbUserData);
     });
     } catch (err) {
     console.log(err);
     res.status(500).json(err);
     }
});
router.get('/:username', async (req, res) => {
     const userData = await User.findAll({where:
             {username:req.params.username}});
           const user = userData.map((name) =>
           name.get({ plain: true }));
           console.log(user);
         res.render('profile', {
           user
         })
   });
module.exports=router;