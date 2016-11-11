1. Index.ejs


2. Dependencies
-express
-ejs
-body-parser
-mongoose
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;

3. Create app
// Create express app
var app = express();

// Use bodyParser to parse from data sent via HTTP post
app.use(bodyParser.urlencoded({ extended:true}));

// Tell server where views are and what templating engine using
app.set('views', path.join(__dirname, './static/views'));
app.set('view engine', 'ejs');

//Create connection to database
var connection = mongoose.connect("mongodb://localhost/cat_db");

//Create cat schema and attach it as a model to our database
var CatSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

//Mongoose automatically looks for the plural version of your model name, so a Cat model in Mongoose looks for 'cats' in Mongo.
var Cat = mongoose.model('Cat', CatSchema);

// Routes go here!
app.get('/', function(req, res){
  Cat.find({}, function(err, results){
    if (err) {console.log(err); }
    res.render('index', {cats: results});
  });
});
app.post('/cat', function(req, res){
  //Create a new cat!
  Cat.create(req.body, function(err, result){
    if (err) { console.log(err);}
    res.redirect('/');
  });
app.listen(port, function(){
  console.log("Running on", port);
})


4. Database
-Schema
-set up connection
-models


5. Routes
