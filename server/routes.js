const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('home')
});

router.post('', (req, res) => {

});

router.patch('', (req, res) => {

});

module.exports = {
  router
};