const { app } = require('./index.js');
const Sequelize = require('sequelize');
const { Users, Favorites, UserFaves } = require('./models');

app.get('/score', (req, res) => {
  Users.findAll({
    attributes: ['high_score'],
    where: {
      id: 'REPLACE WITH LOGGED IN USER ID'
    }
  })
  .then((score) => {
    console.log(score, 12);
    res.status(200).send(score);
  })
  .catch(err => console.log('Failed get request to /score', err));

});

app.get('/leaders', (req, res) => {
  Users.findAll({
    attributes: ['high-score']
  })
  .then((scores) => {
    console.log(scores, 23);
  })
  .catch(err => console.log('Failed get request to /leaders', err));
});

app.post('', (req, res) => {

});

app.patch('', (req, res) => {

});