var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

//Mongoose automatically looks for the plural version of your model name, so a Cat model in Mongoose looks for 'cats' in Mongo.
var Cat = mongoose.model('Cat', CatSchema);
