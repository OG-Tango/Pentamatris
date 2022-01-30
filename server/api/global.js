const express = require('express');
const globalRouter = express.Router();
const { Favorites } = require('../models');
const passport = require('passport');

globalRouter.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  // Favorites.findAll({
  //   attributes: ['text']
  // })
  // .then((data) => {
  //   // console.log(data, 10);
  //   const allFaves = data.map(fave => fave.dataValues.text);
  //   // console.log(allFaves, 12);
  //   res.status(200).send(allFaves);
  // })
  // .catch(err => console.log('Failed to get global faves', err))
})

module.exports = globalRouter;