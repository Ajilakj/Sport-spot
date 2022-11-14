const { Comment } = require('../models');

const commentdata = [
  {
    content: 'I would love to join!',
    date_created: '11/10/2022',
    user_id: 2,
    post_id: 1
  },
  {
    content: 'I need you. I am so bad at tennis :(',
    date_created: '11/10/2022',
    user_id: 1,
    post_id: 2
  },
];

const seedComment = async () => await Comment.bulkCreate(commentdata);

module.exports = seedComment;