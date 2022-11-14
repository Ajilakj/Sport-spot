const { Sport } = require('../models');

const sportdata = [
  {
    name: 'Basketball',
    filename: 'basketball.jpg',
  },
  {
    name: 'Tennis',
    filename: 'tennis.jpg',
  },
  {
    name: 'Soccer',
    filename: 'soccer.jpg',
  },
  {
    name: 'Volleyball',
    filename: 'volleyball.jpg',
  },
];

const seedSport = async () => await Sport.bulkCreate(sportdata);

module.exports = seedSport;
