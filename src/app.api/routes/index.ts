import express = require('express');
let router = express.Router();
import { UserController } from '../controllers/user.controller';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({name: 'Debasis'});
});
router.get('/notes', function (req, res, next) {
  res.send({name: 'Notes'});
});

router.get('/users', new UserController().retrieve);

module.exports = router;