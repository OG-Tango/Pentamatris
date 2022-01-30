const express = require('express');
const scoreRouter = express.Router();
const { Users } = require('../models');
const passport = require('passport');

scoreRouter.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Users.findAll({
    attributes: ['high_score'],
  })
  .then((score) => {
    // console.log(score[0].dataValues, 12);
    const highScore = score[0].dataValues;
    // console.log(highScore, 18);
    res.status(200).send(highScore);
  })
  .catch(err => console.log('Failed get request to /score', err));

});

// scoreRouter.put('/', (req, res) => {
//   Users.
// })

module.exports = scoreRouter;