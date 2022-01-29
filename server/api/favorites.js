const express = require('express');
const faveRouter = express.Router();
const { Users, Favorites } = require('../models');

faveRouter.get('/', (req, res) => {
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

module.exports = faveRouter;