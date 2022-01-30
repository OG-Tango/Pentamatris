const passport = require('passport');
const LocalStrategy = require("passport-local");
const bcrypt = require('bcrypt');
const { Users } = require('../models');
const JWTStrategy = require('passport-jwt').Strategy
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
    let user = await Users.findOne({ where: { email: email }})
    if (user !== null){
      user = user.dataValues
    } 
  
    if(user === null){
      console.log(user, "user")
      return done('Cannot find user')
    }
    try {
      if(await bcrypt.compare(password, user.password)){  
        const token = sendJWT(user)
          return done(null, user, token );
      } else {
        return done(null, false)
      }
    } catch (err) {
      console.log(err);
      return done(err);
    }
    }
  ));

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
  };
  passport.use(
    'jwt',
    new JWTStrategy(opts, (jwt_payload, done) => {
      console.log(opts, "50");
      try {
        Users.findOne({
          where: {
            id: jwt_payload.sub,
          },
        }).then(user => {
          if (user) {

            console.log('user found in db in passport');
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
