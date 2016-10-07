'use strict';


const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.get('/test', (req, res, next) => {
  res.send('booya');
})

router.get('/index', (req, res, next) => {
  res.render('index');
})

module.exports = router;
