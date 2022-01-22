const express = require('express');
const app = express();

const models = require('./models');

const path = require('path');
const CLIENT_PATH = path.resolve(__dirname, '../dist');

// const init = async () => {
//   await models.sync({force: true}) // force true will drop the table if it already exists
//   console.log('Tables have synced!')
// }

// init()


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serving listeng on ${PORT}`);
})

app.use(express.static(CLIENT_PATH));

module.exports = {
  app,
};