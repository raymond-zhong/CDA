var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/index1.html',
    controller: 'indexController'
  })
  .when('/new',{
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  .when('/edit/:id',{
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/show/:id',{
    templateUrl: 'partials/edit.html',
  })
  .otherwise({
    redirectTo: '/'
  });
});
