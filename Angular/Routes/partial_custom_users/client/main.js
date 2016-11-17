var myApp = angular.module('myApp', ['ngRoute']);
myApp.factory('userFactory',['$http', function ($http){
  var users = [
    {
      fname: "Yukihiro",
      lname: "Matsumoto",
      flang: "Ruby"
    },
    {
      fname: "Ryan",
      lname: "Dahl",
      flang: "JavaScript"
    },
    {
      fname: "Brendan",
      lname: "Eich",
      flang: "JavaScript"
    },
  ];
  var factory ={};
  factory.index = function (callback){
    callback(users);
  }
  factory.addUser = function(user, callback){
    users.push(user);
    callback(users);
  }
  factory.delUser = function(id, callback){
    // console.log(id);
    users.splice(id,1);
    callback(users);
  }
  return factory;
  }]);
myApp.config(function ($routeProvider) {
           $routeProvider
             .when('/',{
                  templateUrl: 'partials/customizeUsers.html',
                controller: 'CustomizeUsersController'

             })
          .when('/list',{
              templateUrl: 'partials/userList.html',
            controller: 'UserListController'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
myApp.controller('CustomizeUsersController', ['$scope', 'userFactory', '$location', function ($scope, userFactory, $location){
      function setUsers(data){
        $scope.users = data;
        $scope.user ={};
      }
      // $scope.user{};
      // $scope.users{};

      $scope.index=function(){
        userFactory.index(setUsers);
      }
      $scope.index();
      $scope.addUser = function(){
        userFactory.addUser($scope.newUser, setUsers);
        $location.url('/list');
        }
        // $scope.delUser = function(val){
        //   console.log(val);
        //   $scope.users.splice(val,1);
        // }
      $scope.delUser = function(id){
        userFactory.delUser(id,setUsers);
        }
    }]);
  myApp.controller('UserListController', ['$scope', 'userFactory', function ($scope, userFactory){
        function setUsers(data){
          $scope.users = data;
          $scope.user ={};
        }
        // $scope.user{};
        // $scope.users{};

        $scope.index=function(){
          userFactory.index(setUsers);
        }
        $scope.index();
        }]);
