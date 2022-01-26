const express = require('express'); 
const router = express.Router();

const Sequelize = require('sequelize');
const { Users, Favorites, UserFaves } = require('./models');

router.get('/score', (req, res) => {
  Users.findAll({
    attributes: ['high_score'],
    where: {
      id: 'REPLACE WITH LOGGED IN USER ID'
    }
  })
  .then((score) => {
    // console.log(score[0].dataValues, 12);
    const highScore = score[0].dataValues;
    // console.log(highScore, 18);
    res.status(200).send(highScore);
  })
  .catch(err => console.log('Failed get request to /score', err));

});

router.get('/leaders', (req, res) => {
  Users.findAll({
    attributes: ['username', 'high_score']
  })
  .then((data) => {
    // console.log(data, 23);
    const scores = data.map((user) => user.dataValues);
    // console.log(scores, 31);

    const sortedScores = scores.sort((a, b) => b.high_score - a.high_score);
    // console.log(sortedScores, 33);

    const top5 = sortedScores.slice(0, 5);
    res.status(200).send(top5);
  })
  .catch(err => console.log('Failed get request to /leaders', err));
});


module.exports = {
  router
};
