const dotenv = require("dotenv")
const path = require('path');
dotenv.config({path: path.resolve(__dirname, '../.env')});

const express = require('express');
const leadersRouter = require('./api/leaders');
const externalRouter = require('./api/external');
const scoreRouter = require('./api/score');
const faveRouter = require('./api/favorites');
const globalRouter = require('./api/global');

const app = express();


const models = require('./models');

const CLIENT_PATH = path.resolve(__dirname, '../dist');

const PORT = 3000;
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