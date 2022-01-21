const Sequelize = require('sequelize');
const db = require('../db');

const Users = db.define('User', {
  id: Sequelize.INTEGER,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  high_score: Sequelize.INTEGER
});

const Favorites = db.define('Favorites', {
  id: Sequelize.INTEGER,
  text: Sequelize.STRING
});

const UserFaves = db.define('UserFaves', {
  user_id: Sequelize.INTEGER,
  faves_id: Sequelize.INTEGER
});

module.exports = {
  Users,
  Favorites,
  UserFaves,
};