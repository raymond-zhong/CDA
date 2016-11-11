//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;

//Create express app
var app = express();

//Use bodyParser to parse from data sent via HTTP post
app.use(bodyParser.urlencoded({extended:false}));

//Tell server where views are and what templating engine using
app.set('views', path. join(__dirname, './views'));
app.set('view engine', 'ejs');

//Create connection to database
var connection = mongoose.connect("mongodb://localhost/mb_db");

//Create user schema and attach it as a model to our database
var Schema = mongoose.Schema;
var MessageSchema = new Schema({
  name: { type: String, required: true, minlength: 4},
  message: { type: String, required: true},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
},
 {timestamps:true});
var CommentSchema = new Schema({
  name: { type: String, required: true, minlength: 4},
  comment: { type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
},{timestamps:true});

//Mongoose automatically looks for the plural version of your model name, so a User model in Mongoose looks for 'users' in Mongo.
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

//Routes go here!
app.get('/', function(req, res){
  Message.find({}).populate('comments').exec(function(err, messages){
    // console.log(messages);
    // console.log(messages[1].comments[0].name);
    if (err) {
      console.log(err);
    }
    else {
      res.render('index', {messages: messages});
    };
  });
});

app.post('/message', function(req, res){
  var message = new Message(req.body);
  message.save(function(err){
    if(err){
      Message.find({}).populate('comments').exec(function(err, messages){
        // console.log(messages);
        // console.log(messages[1].comments[0].name);
        if (err) {
          console.log(err);
        }
        else {
          res.render('index', {title: 'you have errors!', errors: message.errors, messages: messages});
        };
      });
    }
    else {
      res. redirect('/');
    }
  });
});
app.post('/comment/:id', function(req, res){
  var comment = new Comment(req.body);
  comment.save(function(err){
    if(err){
      Message.find({}).populate('comments').exec(function(err, messages){
        // console.log(messages);
        // console.log(messages[1].comments[0].name);
        if (err) {
          console.log(err);
        }
        else {
          res.render('index', {title: 'you have errors!', errors: comment.errors, messages: messages});
        };
      });
    }
    else{
      Message.findOne({_id: req.params.id}, function(err, message){
        // console.log(req.body);
        // var comment = new Comment(req.body);
        comment._message = message._id;
          message.comments.push(comment);
          comment.save(function(err){
            message.save(function(err){
              if(err) {
                console.log('Error');
              } else {
                  res.redirect('/');
            }
          });
        });
      });
    }});
  });
app.listen(port, function(){
  console.log("listening on port", port);
});
