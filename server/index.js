const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.resolve(__dirname, '../.env')});

const express = require('express');
const leadersRouter = require('./api/leaders');
const externalRouter = require('./api/external');
const scoreRouter = require('./api/score');
const faveRouter = require('./api/favorites');
const globalRouter = require('./api/global');
const loginRouter = require('./api/login');
const registerRouter = require('./api/register');

const app = express();

const passport = require('passport');

require('./auth/passport-config')(passport);

const CLIENT_PATH = path.resolve(__dirname, "../dist");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


const PORT = 3000;
app.use(passport.initialize());
// app.use('/', router);

app.use(express.static(CLIENT_PATH));
app.use('/api/leaders', leadersRouter);
app.use('/api/external', externalRouter);
app.use('/api/favorites', faveRouter);
app.use('/api/score', scoreRouter);
app.use('/api/global', globalRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

app.listen(PORT, () => {
  console.log(`Serving listening on ${PORT}`);
})


module.exports = {
  app,
};