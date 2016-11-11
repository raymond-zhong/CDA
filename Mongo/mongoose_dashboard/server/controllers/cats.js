var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');
module.exports = {
  findall: function(req,res){
    Cat.find({}, function(err, results){
    if (err) {console.log(err); }
    res.render('index', {cats: results});
    })
  },
  findid: function(req,res){
    Cat.find({_id: req.params.id}, function(err, response){
    if (err) {console.log(err); }
    res.render('show',{cat:response[0]});
    })
  },
  findedit: function(req,res){
    Cat.find({_id: req.params.id}, function(err, response){
    if (err) {console.log(err); }
    console.log("CAT:", response)
    res.render('edit',{cat:response[0]});
    })
  },
  create: function(req,res){
    Cat.create(req.body, function(err, result){
    if (err) { console.log(err);}
    res.redirect('/');
    })
  },
  update: function(req,res){
    Cat.update({_id: req.params.id},req.body, function(err, result){
    if (err) { console.log(err);}
    res.redirect('/');
    })
  },
  remove: function(req,res){
    Cat.remove({_id: req.params.id}, function(err, result){
      if (err) { console.log(err);}
      res.redirect('/');
    })
  }
}
