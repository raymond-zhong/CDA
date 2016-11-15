var myApp = angular.module('myApp', ['ngRoute']);
myApp.factory('playerFactory',['$http', function ($http){
  var players = [
    {
      pname: "Speros",
      tname: "Seahawks"
    },
    {
      pname: "Jimmy",
      tname: "49ers"
    },
    {
      pname: "Jay",
      tname: "Honeybadgers",
    },
  ];
  var factory ={};
  factory.index = function (callback){
    callback(players);
  }
  factory.addPlayer = function(player, callback){
    players.push(player);
    callback(players);
  }
  factory.delPlayer = function(id, callback){
    // console.log(id);
    players.splice(id,1);
    callback(players);
  }
  factory.addTeam = function(data){
    players[data.playerIdx].tname = data.team;
  }
  factory.delTeam = function(id, callback){
    players[id].tname = "";
    callback(players);
  }
  return factory;
  }]);
myApp.factory('teamFactory',['$http', function ($http){
  var teams = [
    {
      tname: "Seahawks",
    },
    {
      tname: "49ers",
    },
    {
      tname: "Honeybadgers",
    },
  ];
  var factory ={};
  factory.index = function (callback){
    callback(teams);
  }
  factory.addTeam = function(team, callback){
    teams.push(team);
    callback(teams);
  }
  factory.delTeam = function(id, callback){
    // console.log(id);
    teams.splice(id,1);
    callback(teams);
  }
  return factory;
  }]);
myApp.config(function ($routeProvider) {
           $routeProvider
             .when('/',{
                  templateUrl: 'partials/players.html',
                controller: 'PlayersController'

             })
          .when('/teams',{
              templateUrl: 'partials/teams.html',
            controller: 'TeamsController'
          })
          .when('/associations',{
              templateUrl: 'partials/associations.html',
            controller: 'AssociationsController'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
myApp.controller('PlayersController', ['$scope', 'playerFactory', function ($scope, playerFactory){
      function setPlayers(data){
        $scope.players = data;
        $scope.player ={};
      }
      // $scope.players{};
      // $scope.player{};

      $scope.index=function(){
        playerFactory.index(setPlayers);
      }
      $scope.index();
      $scope.addPlayer = function(){
        playerFactory.addPlayer($scope.newPlayer, setPlayers);
        }
        // $scope.delUser = function(val){
        //   console.log(val);
        //   $scope.users.splice(val,1);
        // }
      $scope.delPlayer = function(id){
        playerFactory.delPlayer(id,setPlayers);
        }
      $scope.delTeam = function(id){
        playerFactory.delTeam(id,setPlayers);
        }
    }]);
myApp.controller('TeamsController', ['$scope', 'teamFactory', function ($scope, teamFactory){
      function setTeams(data){
        $scope.teams = data;
        $scope.team ={};
      }
      // $scope.user{};
      // $scope.users{};

      $scope.index=function(){
        teamFactory.index(setTeams);
      }
      $scope.index();
      $scope.addTeam = function(){
        teamFactory.addTeam($scope.newTeam, setTeams);
        }
      $scope.delTeam = function(id){
        teamFactory.delTeam(id,setTeams);
        }
    }]);
myApp.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', function ($scope, playerFactory, teamFactory){
      function setPlayers(data){
        $scope.players = data;
        $scope.player ={};
      }
      function setTeams(data1){
        $scope.teams = data1;
        $scope.team ={};
      }
      $scope.index=function(){
        playerFactory.index(setPlayers);
        teamFactory.index(setTeams);
      }
      $scope.index();
      $scope.addTeam = function(){
        playerFactory.addTeam($scope.newTeam);
        }
      $scope.index();
      $scope.delTeam = function(id){
        playerFactory.delTeam(id,setTeams);
        }
    }]);
