const passport = require('passport');
const LocalStrategy = require("passport-local");
const bcrypt = require('bcrypt');
const { Users } = require('../models');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const sendJWT = require('../lib/utils.js')
const pathToKey = path.join(__dirname, '..', 'ec_public.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');



module.exports = passport => {
  passport.use('local',new LocalStrategy({
    usernameField: 'email',
    session: false,
    passReqToCallback: true
  },
  async function(req, email, password, done) {
    // console.log(req, 22);
    // console.log(req.res, 23);
    // console.log(res, 23);
    let user = await Users.findOne({ where: { email: email }})
    if (user !== null){
      user = user.dataValues
    } 
  
    if(user === null){
      return next('Cannot find user')
    }
    try {
      if(await bcrypt.compare(password, user.password)){
         
          
        const token = sendJWT(user)
          
      
        passport.serializeUser(function(user, done) {
           return done(null, user);
          
        });


        
          return done(null, user, token );
      
        
      } else {

        // return done(null, false)
        console.log(null,false);
      }
    } catch (err) {
      console.error(err);
    }
    
    
      
    }
  ));

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: PUB_KEY,
  };
  
  passport.use(
    'jwt',
    new JwtStrategy(opts, (jwt_payload, done) => {
      try {
        Users.findOne({
          where: {
            id: jwt_payload.sub,
          },
        }).then(user => {
          if (user) {
            console.log('user found in db in passport');
            // note the return removed with passport JWT - add this return for passport local
            done(null, user);
          } else {
            console.log('user not found in db');
            done(null, false);
          }
        });
      } catch (err) {
        done(err);
      }
    }),
  );
  
}
