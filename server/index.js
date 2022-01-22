const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const { router } = require('./routes')


const models = require('./models')

const CLIENT_PATH = path.resolve(__dirname, "../dist");

app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('views', 'server/views');
app.set('view engine', '.hbs');



const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Serving listeng on ${PORT}`);
})

app.use(express.static(CLIENT_PATH));

module.exports = {
  app,
};