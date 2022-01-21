const express = require('express');
const app = express();

const { Sequelize } = require('sequelize');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serving listeng on ${PORT}`);
})

app.use(express.static('../client/src/index.html'));


// const sequelize = new Sequelize(‘database’, ‘username’, ‘password’, {
//   host: ‘localhost’,
//   dialect: /* one of ‘mysql’ | ‘mariadb’ | ‘postgres’ | ‘mssql’ */
// });

module.exports = {
  app,
};