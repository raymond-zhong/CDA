var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function ($routeProvider) {
  $routeProvider
  // .when('/',{
  //   templateUrl: 'index.html',
  //   controller: 'editController'
  // })
  .when('/edit',{
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/new',{
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  // .when('/:teamname',{
  //   templateUrl: 'partials/teams.html'
  // })
  .otherwise({
    redirectTo: '/'
  });
});

myApp.factory('editFactory',['$http', function ($http){
  // var factory = {};
  // var players = [
    // {
    //   pname: "Speros",
    //   tname: "Seahawks"
    // },
  // ];
  // factory.index = function (callback){
  //
  //   // http request to back end
  //
  //   callback(players);
  // }
  // factory.addPlayer = function(player, callback){
  //
  //   players.push(player);
  //   callback(players);
  // }
  // factory.delPlayer = function(id, callback){
  //   // console.log(id);
  //   players.splice(id,1);
  //   callback(players);
  // }
  // factory.addTeam = function(data){
  //
  //   players[data.playerIdx].tname = data.team;
  // }
  // factory.delTeam = function(id, callback){
  //   players[id].tname = "";
  //   callback(players);
  // }

  // return factory;

}]);

myApp.factory('newFactory',['$http', function ($http){
  // var teams = [
  //   {
  //     tname: "Seahawks",
  //   },
  // ];
  // var factory ={};
  // factory.index = function (callback){
  //   callback(teams);
  // }
  // factory.addTeam = function(team, callback){
  //   teams.push(team);
  //   callback(teams);
  // }
  // factory.delTeam = function(id, callback){
  //   teams.splice(id,1);
  //   callback(teams);
  // }
  // return factory;
  }]);
myApp.controller('editController', ['$scope', 'editFactory', function ($scope, editFactory){
      // function setPlayers(data){
    //     $scope.players = data;
    //     $scope.player = {};
      // }
     //
    //  playerFactory.index(function(data){
    //    $scope.players = data;
    //    $scope.player = {}
    //  })
     //
    //   $scope.addPlayer = function(){
    //     playerFactory.addPlayer($scope.newPlayer, function(data){
    //       $scope.players = data;
    //       $scope.player = {}
    //     });
    //   }
    //   $scope.delPlayer = function(id){
    //     playerFactory.delPlayer(id,setPlayers);
    //     }
    //   $scope.delTeam = function(id){
    //     playerFactory.delTeam(id,setPlayers);
    //     }
    }]);
// myApp.controller('TeamsController', ['$scope', 'teamFactory', '$routeParams', function ($scope, teamFactory, $routeParams){
      // function setTeams(data){
      //   $scope.teams = data;
      //   $scope.team ={};
      // }
      // $scope.index=function(){
      //   teamFactory.index(setTeams);
      // }
      // $scope.index();
      // $scope.addTeam = function(){
      //   teamFactory.addTeam($scope.newTeam, setTeams);
      //   }
      // $scope.delTeam = function(id){
      //   teamFactory.delTeam(id,setTeams);
      //   }
      //   console.log($routeParams)
    // }]);

myApp.controller('newController', ['$scope', 'newFactory', 'editFactory', function ($scope, newFactory, editFactory){

      // playerFactory.index(function(data){
      //
      // })
      //
      // teamFactory.index(function(data){
      //
      // })
      //
      // function setPlayers(data){
      //   $scope.players = data;
      //   $scope.player ={};
      // }
      // function setTeams(data1){
      //   $scope.teams = data1;
      //   $scope.team ={};
      // }
      // $scope.index=function(){
      //   playerFactory.index(setPlayers);
      //   teamFactory.index(setTeams);
      // }
      // $scope.index();
      // $scope.addTeam = function(){
      //   playerFactory.addTeam($scope.newTeam);
      //   }
      // $scope.index();
      // $scope.delTeam = function(id){
      //   playerFactory.delTeam(id,setTeams);
      //   }
}]);
