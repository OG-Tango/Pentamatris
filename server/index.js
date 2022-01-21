const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serving listeng on ${PORT}`);
})

app.use(express.static('../client/src/index.html'));


module.exports = {
  app,
};