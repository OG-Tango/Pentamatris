const express = require('express'); 
const router = express.Router();

const Sequelize = require('sequelize');
const { Users, Favorites, User_Faves } = require('./models');

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

router.get('/favorites', (req, res) => {
  Users.findAll({
    include: { 
      model: Favorites,
    },
    where: { 
      id: 'REPLACE WITH LOGGED IN USER ID'
    }
  })
  .then((data) => {
    // console.log(data, 51);
    
    const userData = data[0].dataValues.Favorites
    const userFaves = userData.map(fave => fave.dataValues.text);

    console.log(userFaves, 56)
    res.status(200).send(userFaves);
  })
  .catch(err => console.log('Failed get request to /favorites', err));
    
})


module.exports = {
  router
};
