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
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  high_score: Sequelize.INTEGER
},
{
  timestamps: false
});

// Users.sync();

const Favorites = db.define('Favorites', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  text: Sequelize.STRING
},
{
  timestamps: false
});

const User_Faves = db.define('User_Faves', {
  UserId: {
    type: Sequelize.INTEGER,
    references: {
      model: Users,
      key: 'id'
    }
  },
  FavoriteId: {
    type: Sequelize.INTEGER,
    references: {
      model: Favorites,
      key: 'id'
    }
  }
}, 
{ 
  timestamps: false 
});

// Favorites.sync();
Users.belongsToMany(Favorites, { through: 'User_Faves'});
Favorites.belongsToMany(Users, { through: 'User_Faves'});

db.sync();

// const UserFaves = db.define('UserFaves', {
//   user_id: Sequelize.INTEGER,
//   faves_id: Sequelize.INTEGER
// },
// {
//   timestamps: false
// });

// UserFaves.sync();

module.exports = {
  Users,
  Favorites,
  User_Faves
};