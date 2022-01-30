const express = require('express');
const faveRouter = express.Router();
const { Users, Favorites } = require('../models');
const passport = require('passport');

faveRouter.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Users.findAll({
    include: { 
      model: Favorites,
    },
    
  })
  .then((data) => {
    // console.log(data, 51);
    
    const userData = data[0].dataValues.Favorites
    const userFaves = userData.map(fave => fave.dataValues.text);

    //console.log(userFaves, 56)
    res.status(200).send(userFaves);
  })
  .catch(err => console.log('Failed get request to /favorites', err));
    
})

faveRouter.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  console.log(req.body, "27");
  Favorites.create({
    text: req.body.text
  })
  .then(() => {
    res.status(201).end();
  })
  .catch(() => {
    res.status(404).end();
  })
})

module.exports = faveRouter;