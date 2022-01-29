const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt')
const { Users, Favorites, User_Faves} = require('../models');
const passport = require('passport')
const sequelize = require('sequelize');





router.get('/login', (req, res) => {

});

router.get('/register', (req, res) => {

});


router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    
    const token = res.req.authInfo.token
    
    res.setHeader('Authorization', token);
    res.status(200).end();
    console.log('success', 38); 
  });

router.post('/register', async function(req, res){
  const { password , username , email } = req.body
  try {
    const hashedP = await bcrypt.hash(password, 10);
    await Users.create({
      username: username,
      password: hashedP,
      email: email
    });
    console.log('success');
    //  res.redirect('/');
  } catch {
    console.error();
    // res.redirect('/register');
  }
});





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


