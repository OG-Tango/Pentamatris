const jsonwebtoken = require('jsonwebtoken');


function sendJWT(userObj) {
  const id = user.id;
  const expiresIn = '1d';

  const payload = {
    sub: id,
    iat: Date.now().toString('hex')
  };

  const signedJWT = jsonwebtoken.sign(payload,key, { expiresIn: expiresIn, algorithm: 'ES256'})
  
  return {
    token: `Bearer ${signedJWT}`,
    expires: expiresIn
  }
}

module.export = sendJWT;
