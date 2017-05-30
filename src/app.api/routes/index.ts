import express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({name: 'Debasis'});
});
router.get('/notes', function (req, res, next) {
  res.send({name: 'Notes'});
});

module.exports = router;