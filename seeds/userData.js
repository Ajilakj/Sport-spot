const { User } = require('../models');

const userdata = [
  {
    username: 'ballislyfe',
    password: 'password',
    firstName: 'balli',
    lastName: ' slyfe',
    email: 'ballislyfe@email.com',
    bio: 'I luv basketball!',
    phone_number: '555-555-5555',
  },
  {
    username: 'tennisgirl',
    password: 'password',
    firstName: 'tennis',
    lastName: ' girl',
    email: 'tennisgirl@email.com',
    bio: 'Retired tennis pro looking for athletes to coach in NYC!',
    phone_number: '555-555-5556',
  },
  {
    username: 'soccerpro',
    password: 'password',
    firstName: 'soccer',
    lastName: ' pro',
    email: 'soccerpro@email.com',
    bio: 'Played some D1 soccer and just won the volo league championship!',
    phone_number: '555-555-5556',
  },
  {
    username: 'SerenaWilliams',
    password: 'password',
    firstName: 'Serena',
    lastName: ' Williams',
    email: 'serenawilliams@email.com',
    bio: 'Retired tennis pro looking for athletes on my level to play pickup games in NYC!',
    phone_number: '555-555-5556',
  },
  {
    username: 'LionelMessi',
    password: 'password',
    firstName: 'Lionel',
    lastName: ' Messi',
    email: 'lionelmessi@email.com',
    bio: 'Looking for students to coach in soccer!',
    phone_number: '555-555-5556',
  },
  {
    username: 'VballMaster',
    password: 'password',
    firstName: 'Vball',
    lastName: ' Master',
    email: 'vballmaster@email.com',
    bio: 'Looking for fellow volleyball players to rent a sand court on Pier 25!',
    phone_number: '555-555-5556',
  },
  {
    username: 'VolleyballCoach',
    password: 'password',
    firstName: 'Volleyball',
    lastName: ' Coach',
    email: 'volleyballcoach@email.com',
    bio: 'Looking to coach any volo teams this upcoming summer for sand volleyball',
    phone_number: '555-555-5556',
  },
  {
    username: 'volosoccer',
    password: 'password',
    firstName: 'volo',
    lastName: ' soccer',
    email: 'voloosoccer@email.com',
    bio: 'Hey everyone! lookig for 5 additional soccer players to join my volo soccer team and fill out our roster. Games are Wednesday evenings.',
    phone_number: '555-555-5556',
  },

];

const seedUser = async () => await  User.bulkCreate(userdata);

module.exports = seedUser;