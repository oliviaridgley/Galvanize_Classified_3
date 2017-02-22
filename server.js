'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messages = require('./routes/classifieds');
const path = require('path');

app.use(express.static('./public'));
app.use(bodyParser.json());


app.use('/jquery', express.static('node_modules/jquery/dist'))
app.use('/angular-ui-router', express.static('node_modules/angular-ui-router/release'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/js'))

app.use('/classifieds', messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});



module.exports = app;
