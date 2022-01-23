const Sequelize = require('sequelize');
const { db } = require('../db/index.js');

const Users = db.define('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  high_score: Sequelize.INTEGER
});

Users.sync();

const Favorites = db.define('Favorites', {
  text: Sequelize.STRING
});

Favorites.sync();

const UserFaves = db.define('UserFaves', {
  user_id: Sequelize.INTEGER,
  faves_id: Sequelize.INTEGER
});

UserFaves.sync();

module.exports = {
  Users,
  Favorites,
  UserFaves,
};