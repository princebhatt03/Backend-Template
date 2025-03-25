var express = require('express');
var router = express.Router();
const mongoose = require('../db/db');

router.get('/', function (req, res, next) {
  res.send('Home Page, For Backend API');
});

module.exports = router;
