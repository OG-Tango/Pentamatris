const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const pathToKey = path.join(__dirname, '..', 'ec_private.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');


function sendJWT(userObj) {
  const id = userObj.id;
  const expiresIn = '1d';

  const payload = {
    sub: id,
    iat: Date.now()
  };

  const signedJWT = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'ES256'})
  
  return {
    token: `Bearer ${signedJWT}`,
    expires: expiresIn
  }
}

module.exports = sendJWT;
