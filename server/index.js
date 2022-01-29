const path = require('path');
dotenv.config({path: path.resolve(__dirname, '../.env')});

const express = require('express');
const leadersRouter = require('./api/leaders');
const externalRouter = require('./api/external');
const scoreRouter = require('./api/score');
const faveRouter = require('./api/favorites');
const globalRouter = require('./api/global');

const app = express();
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

app.use(express.static(CLIENT_PATH));
app.use('/api/leaders', leadersRouter);
app.use('/api/external', externalRouter);
app.use('/api/favorites', faveRouter);
app.use('/api/score', scoreRouter);
app.use('/api/global', globalRouter);
app.listen(PORT, () => {
  console.log(`Serving listening on ${PORT}`);
})


module.exports = {
  app,
};