const express = require('express');
const registerRouter = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

registerRouter.post('/', async function(req, res){
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

registerRouter.get('/', (req, res) => {

});

module.exports = registerRouter;