const router = require('express').Router();
const { Sport, Post, User, Comment } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: [
                   'username', 
                ],
                model: Sport,
                attributes: [
                    'name',
                ]
            }
        ]
      });
      const dbCommentData = await Comment.findAll(
        {
        where:
            {post_id: req.params.id}
        },
        // { 
        // include: {
        //     model: User,
        //     attributes: [
        //         'username',
        //     ]
        // }
      );
      const post = dbPostData.get({ plain: true});

      const comment = dbCommentData.map((commentDetails) =>
      commentDetails.get({ plain: true }));

      res.render('post', { post, comment });
    // add loggedIn: req.session.loggedIn in when login is working

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports=router;