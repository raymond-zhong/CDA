//This is the first javascript file to load, so it initializes the module
var myAppModule = angular.module("myApp", ["ngRoute"]);

console.log('FriendsFactory');
myApp.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  factory.getFriends = function(callback){
    $http.get('/friends').then(function(returned_data){
      console.log(returned_data.data);
      friends = returned_data.data;
      callback(friends);
    })};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(ufriend,callback){ // what parameters do we need?
      //call this method if you want to update or set the friends variable
      $http.put('/friends/:id', ufriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
    }});
  };
    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(callback){// what parameters do we need?
      $http.delete('/friends/:id', friend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
    }});
  };
    this.show = function(callback){// what parameters do we need?
      $http.get('/friends/:id').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
    });
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
