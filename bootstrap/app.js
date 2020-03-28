const express  = require('express');
const bodyParser  = require('body-parser');
const dotenv = require('dotenv').config();
const db = require('../database/db');   //for making the connection to database
const routes = require('../routes/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();   //Handling CORS Policy
});

app.use('/', routes);

module.exports = app;