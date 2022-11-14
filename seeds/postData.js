const { Post } = require('../models');

const postdata = [
  {
    title: 'Basketball pickup on 11/12',
    content: 'We are looking for one player to join our team in a basketball tournament this weekend. Reach out if you are interested! All skill levels welcome.',
    looking_for_players: true,
    looking_for_students: false,
    looking_for_coach: false,
    date_created: '11/09/2022',
    sports_id: 1,
    user_id: 1,
  },
  {
    title: 'Tennis instructor available weekends',
    content: 'I am a retired pro tennis player and would love to find some athletes looking for lessons. My schedule is flexible on the weekends. Reach out if interested.',
    looking_for_players: false,
    looking_for_students: true,
    looking_for_coach: false,
    date_created: '11/09/2022',
    sports_id: 2,
    user_id: 2,
  },
  {
    title: 'GOAT looking for other GOAT tennis players',
    content: 'I have recently retired and am still the GOAT. I want to be challenged, so am looking for others to play some pickup tennis in NYC. Must be REALLY GOOD.',
    looking_for_players: true,
    looking_for_students: false,
    looking_for_coach: false,
    date_created: '11/11/2022',
    sports_id: 2,
    user_id: 4,
  },
  {
    title: 'Volo league champion looking for my next challenge',
    content: 'Looking for the next challenge after winning the volo league championship. Let me know if you are interested in starting a team or if your team wants to challenge mine!',
    looking_for_players: true,
    looking_for_students: false,
    looking_for_coach: false,
    date_created: '11/11/2022',
    sports_id: 3,
    user_id: 3,
  },
  {
    title: 'Looking for volo teams to coach this summer for sand volleyball',
    content: 'Hey! I am looking to coach a volo team this upcoming summer. Reach out if you or your peers know of anyone in the league looking for a coach!',
    looking_for_players: false,
    looking_for_students: true,
    looking_for_coach: false,
    date_created: '11/11/2022',
    sports_id: 4,
    user_id: 7,
  },
];

const seedPost = async () => await Post.bulkCreate(postdata);

module.exports = seedPost;