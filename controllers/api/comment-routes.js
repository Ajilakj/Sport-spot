const router = require('express').Router();
const { Comment } = require('../../models')
const authMiddleware = require('../../utils/authMiddleware')

// POST for create comment
// add comment
router.post('/create', async (req, res) => {
  try {
    const commentData = await Comment.create({
        ...req.body,
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;