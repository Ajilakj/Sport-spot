const router = require("express").Router();
const {Post } = require("../../models");
const authMiddleware = require("../../utils/authMiddleware");


//POST for blog post to create a new post
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const postData = await Post.create({
      //making code less verbose, grabbing everything in body with spread operator
      ...req.body,
      date_posted: new Date().toLocaleDateString(),
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//PUT route for user to edit their own blog posts
router.put("/:id", authMiddleware, (req, res) => {
  Post.update(
    {
      //leaning out code by doing the spread operator
      ...req.body,
      // future development: allow users to edit all fields so if for example looking for 5 players then get a few and now only need 2 that they can update the post to reflect what they currently need
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
    .then((updatedPost) => {
      // Sends the updated post as json
      res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});


module.exports = router;
