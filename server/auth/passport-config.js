const passport = require('passport');
const LocalStrategy = require("passport-local");
const bcrypt = require('bcrypt');
const { Users } = require('../models');

module.exports = passport => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
  },
  async function(email, password, done) {
  
    let user = await Users.findOne({ where: { email: email }})
    if (user !== null){
      user = user.dataValues
    } 
  
    if(user === null){
      console.log('Cannot find user')
    }
    try {
      if(await bcrypt.compare(password, user.password)){
        console.log('success')
      } else {
        console.log('Not Allowed');
      }
    } catch (err) {
      console.error(err);
    }
    
    
      
    }
  ));
  
}
