var mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
  findall: function(req,res){
    Person.find({}, function(err, people){
    if (err) {console.log(err); }
    res.json(people);
    })
  },
  findname: function(req,res){
    Person.find({name: req.params.name}, function(err, people){
    if (err) {console.log(err); }
    res.json(people);
    })
  },
  create: function(req,res){
    var person = new Person({name: req.params.name});
    person.save(function(err){
      if(err){
        console.log("something went wrong");
      } else {
    res.redirect('/');
    }
  })
},
  remove: function(req,res){
    Person.remove({name: req.params.name}, function(err, people){
      if (err) { console.log(err);}
      res.json(people);
    })
  }
}
