const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');

loginRouter.post('/', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    
    const token = res.req.authInfo.token
    
    res.setHeader('Authorization', token);
    res.status(200).end();
    console.log('success', 38); 
  });

  loginRouter.get('/', (req, res) => {

  });

module.exports = loginRouter;