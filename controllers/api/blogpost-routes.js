const router = require('express').Router();
const {User, Sport, Post } = require('../../models');

//POST for blog post to create a new post
router.post('/create', async (req, res) => {
    try {
      const postData = await Post.create({
        ...req.body, 
        //making code less verbose, grabbing everything in body with spread operator
        
        date_posted: new Date().toLocaleDateString(),
    });
    //not really needed here since should be logged in, need nothing here as global variable
      // req.session.save(() => {
      //   req.session.loggedIn = true;
        res.status(200).json(postData);
      // });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //PUT route for user to edit their own blog posts
  router.put('/:id', (req, res) => {
    Post.update(
      {
        ...req.body, 
        //leaning out code by doing the spread operator
        //example username:req.body.user, user is what the frontend called it and username is what it is called in model
        // letting them edit all fields so if for example looking for 5 players then get a few and now only need 2 that they can update the post to reflect what they currently need
        //updated posts populate near top so new information isn't buried, in future any abuse of this system of dates could be punished on the site
        date_posted: new Date().toLocaleDateString(),
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
  

module.exports = router;
