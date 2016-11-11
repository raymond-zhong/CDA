var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(session({secret:'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/css', express.static('css'));
app.get('/', function(request, response){
  response.render('index', {title:"Dojo Survey"});
});
app.post('/results', function(request, response){
  //  console.log("POST DATA \n\n", request.body)
  request.session.name = request.body.name;
  request.session.location = request.body.location;
  request.session.language = request.body.language;
  request.session.comment = request.body.comment;
  // console.log(__dirname + "/public");
  response.render('results', {name:request.session.name, location:request.session.location, language:request.session.language, comment:request.session.comment});
});

app.listen(8000, function(){
  console.log("listening on port 8000");
})
