const sequelize = require('../config/connection');
const seedSport = require('./sportData');
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSport();
  await seedPost();
  await seedUser();
  await seedComment();

  process.exit(0);
};

seedAll();