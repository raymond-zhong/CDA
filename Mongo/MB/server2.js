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
// var UserSchema = new Schema({
//   name: { type: String, required: true, minlength: 4},
//   message: [{ type: Schema.Types.ObjectId, ref: 'Message'}],
//   comment: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
// }, {timestamps:true
// });
var MessageSchema = new Schema({
  name: { type: String, required: true, minlength: 4},
  message: { type: String, required: true},
  // _user: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
},
 {timestamps:true});
var CommentSchema = new Schema({
  name: { type: String, required: true, minlength: 4},
  comment: { type: String, required: true},
  // _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
},
 {timestamps:true});

//Mongoose automatically looks for the plural version of your model name, so a User model in Mongoose looks for 'users' in Mongo.
// var User = mongoose.model('User', UserSchema);
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

//Routes go here!
app.get('/', function(req, res){
  Message.find({}).populate('comments').exec(function(err, results){
    console.log(results);
    if (err) {
      console.log(err);
    }
    else {
      res.render('index', {messages: results});
    };
  });
});
app.get('/message', function(req, res){
  //Create a new user!
  // Message.findOne({name: req.body.name}, function(err, message){
  // }})
  // var user = new User(req.body);
  // user.save(function(err){
  //   if(err){
  //     res.render('index', {title: 'you have errors!', errors: user.errors})
  //   }
  //   else {
  //     res. redirect('/');
  //   }
  // });
  //Create a new message!
  var message = new Message(req.body);
  message.save(function(err){
    if(err){
      res.render('index', {title: 'you have errors!', errors: message.errors})
    }
    else {
      res. redirect('/');
    }
  });
});
app.get('/comment', function(req, res){
  var comment = new Comment(req.body);
  comment.save(function(err){
    if(err){
      res.render('index', {title: 'you have errors!', errors: comment.errors})
    }
    else{
      Comment.findOne({_id: req.params.id}, function(err, message){
        comment._message = comment._id;
        comment.save(function(err){
          message.comments.push(comment);
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
})
