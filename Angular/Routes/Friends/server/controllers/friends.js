console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
    if (err) {console.log(err); }
    res.json({friends: friends});
  })
  };
  this.create = function(req,res){
    Friend.create(req.body, function(err, result){
    if (err) { console.log(err);}
    res.json({placeholder:'create'});
  })
  };
  this.update = function(req,res){
    Friend.update({_id: req.params.id},req.body, function(err, result){
    if (err) { console.log(err);}
    res.json({placeholder:'update'});
  })
};
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err, friends){
      if (err) { console.log(err);}
    res.json({placeholder:'delete'});
  })
  };
  this.show = function(req,res){
    Friend.find({_id: req.params.id}, function(err, friends){
    if (err) {console.log(err); }
    res.json({placeholder:'show'});
  });
  }
}
module.exports = new FriendsController();
