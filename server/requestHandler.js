const { app } = require('./index.js');
const Sequelize = require('sequelize');

app.get('/score', (req, res) => {
  Users.findAll({
    attributes: ['high_score'],
    where: {
      id: 'REPLACE WITH CURRENT LOGGED IN USER ID'
    }
  })

});

app.post('', (req, res) => {

});

app.patch('', (req, res) => {

});