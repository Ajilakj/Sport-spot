const router = require("express").Router();
const { Comment } = require("../../models");
const authMiddleware = require("../../utils/authMiddleware");

// POST for creating a new comment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      date_posted: new Date().toLocaleDateString(),
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;