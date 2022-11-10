const { Post } = require('../models');

const postdata = [
  {
    title: 'Basketball pickup on 11/12',
    content: 'We are looking for one player to join our team in a basketball tournament this weekend. Reach out if you are interested! All skill levels welcome.',
    looking_for_players: true,
    looking_for_students: false,
    looking_for_coach: false,
    date_created: '11/09/2022',
    user_id: 1,
  },
  {
    title: 'Tennis instructor available weekends',
    content: 'I am a retired pro tennis player and would love to find some athletes looking for lessons. My schedule is flexible on the weekends. Reach out if interested.',
    looking_for_players: false,
    looking_for_students: true,
    looking_for_coach: false,
    date_created: '11/09/2022',
    user_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;