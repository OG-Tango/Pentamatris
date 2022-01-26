const express = require('express');
const app = express();
const path = require('path');
const { router } = require('./routes/routes.js')
const { Users } = require('./models')
const passport = require('passport');

require('./auth/passport-config')(passport);


const models = require('./models');

const CLIENT_PATH = path.resolve(__dirname, "../dist");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


const PORT = 3000;
app.use(passport.initialize());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Serving listeng on ${PORT}`);
})

app.use(express.static(CLIENT_PATH));

module.exports = {
  app,
};