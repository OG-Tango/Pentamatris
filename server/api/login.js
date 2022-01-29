const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');

loginRouter.post('/', 
  passport.authenticate('local', { session: false }),
  function(req, res) {
    
    const token = res.req.authInfo.token
    
    res.setHeader('Authorization', token);
    res.status(200).end();
    console.log('success', 38); 
  });


module.exports = loginRouter;