const Sequelize = require('sequelize');


const db = new Sequelize('pentamatris', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});

// const db = new Sequelize('pentamatris', 'root', '');


// sequelize.authenticate()
//   .then(() => console.log('Connection established successfully'))
//   .catch(err => console.log('Unable to connect to database', err));


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = {
  db,
}