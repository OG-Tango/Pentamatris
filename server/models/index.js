const Sequelize = require('sequelize');
const { db } = require('../db/index.js');

const Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  high_score: Sequelize.INTEGER
},
{
  timestamps: false
});

Users.sync();

const Favorites = db.define('Favorites', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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