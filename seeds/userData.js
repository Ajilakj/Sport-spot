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
  {
    username: 'soccerpro',
    password: 'password',
    email: 'soccerpro@email.com',
    bio: 'Played some D1 soccer and just won the volo league championship!',
    phone_number: '555-555-5556',
  },
  {
    username: 'SerenaWilliams',
    password: 'password',
    email: 'serenawilliams@email.com',
    bio: 'Retired tennis pro looking for athletes on my level to play pickup games in NYC!',
    phone_number: '555-555-5556',
  },
  {
    username: 'LionelMessi',
    password: 'password',
    email: 'lionelmessi@email.com',
    bio: 'Looking for students to coach in soccer!',
    phone_number: '555-555-5556',
  },
  {
    username: 'VballMaster',
    password: 'password',
    email: 'vballmaster@email.com',
    bio: 'Looking for fellow volleyball players to rent a sand court on Pier 25!',
    phone_number: '555-555-5556',
  },

];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;