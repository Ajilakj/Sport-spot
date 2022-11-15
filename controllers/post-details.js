const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const authMiddleware = require("../utils/authMiddleware");

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            "username",
          ],
        }
      ]
    });
    const dbCommentData = await Comment.findAll(
      {
        where:
          {post_id: req.params.id}
      },
      {
        include: User,
        attributes: [
          "username"
        ],
      });
    const post = dbPostData.get({ plain: true});

    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true }));

    res.render("post", { post, comments });
    // add loggedIn: req.session.loggedIn in when login is working

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports=router;
