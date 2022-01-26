const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt')
const { Users} = require('../models');
const passport = require('passport')
const sequelize = require('sequelize');
const LocalStrategy = require("passport-local");










router.get('/login', (req, res) => {

});

router.get('/register', (req, res) => {

});


router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    console.log('success' ,60);

    res.sendStatus(200);
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

module.exports = {
  router
};