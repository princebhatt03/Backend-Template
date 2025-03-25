var express = require('express');
var router = express.Router();
const mongoose = require('../db/db');

router.get('/', function (req, res, next) {
  res.send('Hello, This is Home Page');
});

module.exports = router;
