'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const knex = require('./knex');

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {}
}));

const ejs = require('ejs');

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Declare routes variables
const test = require('./routes/route');
// Assign Routes to Server
app.use(test);



app.use((_req, res) => {
  res.sendStatus(404);
});


const port = process.env.PORT || 3000;
// Server Listener
app.listen(port, function() {
    console.log('listening on port: ' + port);
});

module.exports = app;




// SET SESSION SECRET
// bash -c 'echo "SESSION_SECRET="$(openssl rand -hex 64)' > .env
