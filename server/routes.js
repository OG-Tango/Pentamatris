const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt')
const { Users} = require('./models');
const sequelize = require('sequelize');

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/register', (req, res) => {
  res.render('register')
});

router.post('/login', (req, res) => {

});

router.post('/register', async function(req, res){
  
  const { password , name , email } = req.body

  try {
    const hashedP = await bcrypt.hash(password, 10);
    console.log(hashedP);
    await Users.create({
      username: name,
      password: hashedP,
      email: email
    });
    res.redirect('/login');
  } catch {
    console.error()
    res.redirect('/register');
  }
});
module.exports = {
  router
};