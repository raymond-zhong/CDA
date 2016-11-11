//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 8000;

// Create express app
var app = express();

// Use bodyParser to parse from data sent via HTTP post
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client/static")))
// Tell server where views are and what templating engine using
app.set('views', path.join(__dirname, './client/views'));

//Create connection to database
require('./server/config/mongoose.js');

//Create cat schema and attach it as a model to our database

// Routes go here!
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(port, function(){
  console.log("Running on", port);
})
