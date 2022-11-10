const { User } = require('../models');

const userdata = [
  {
    username: 'ballislyfe',
    password: 'password',
    email: 'ballislyfe@email.com',
    bio: 'I luv basketball!',
    phone_number: '555-555-5555',
  },
  {
    username: 'tennisgirl',
    password: 'password',
    email: 'tennisgirl@email.com',
    bio: 'Retired tennis pro looking for athletes to coach in NYC!',
    phone_number: '555-555-5556',
  },

];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;