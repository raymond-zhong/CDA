var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/file_structure_db');
var models_path = path.join(__dirname, './../models');

console.log('future mongoose connection and model loading')

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >=0) {
    require(models_path + '/' + file);
  }
});
