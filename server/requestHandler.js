const { app } = require('./index.js');

app.get('/', (req, res) => {
  res.send("hello world");
});

// app.post('', (req, res) => {

// });

// app.patch('', (req, res) => {

// });