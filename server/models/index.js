const Sequelize = require('sequelize');
const { db } = require('../db/index.js');

const Users = db.define('User', {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  high_score: Sequelize.INTEGER
});

const Favorites = db.define('Favorites', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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