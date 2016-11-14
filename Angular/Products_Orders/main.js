var app = angular.module('app', []);
app.factory('productFactory',['$http', function ($http){
  var products = [
    {
      name: "Keyboard",
      price: 149.00,
      qty:25,
    },
    {
      name: "Mouse",
      price: 59.99,
      qty:24,
    },
    {
      name: "Basketball",
      price: 59.99,
      qty:24,
    },
  ];
  var factory ={};
  factory.index = function (callback){
    callback(products);
  }
  factory.addProduct = function(product, callback){
  if(product.price && Number(parseFloat(product.price))==product.price){
    product.qty=50;
    products.push(product);
    callback(products);
  }
  else{
console.log("error price not be blank")
}
}
  factory.delProduct = function(id, callback){
    // console.log(id);
    products.splice(id,1);
    callback(products);
  }
  factory.buyProduct = function(id, callback){
    // console.log(products[id].qty);
    if (products[id].qty >0){
     products[id].qty -=1;
   }
   else {
     console.log ('qty can not be less than 0.')
   }
    callback(products);
  }
  return factory;
}]);

app.controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory){
  function setProducts(data){
    $scope.products = data;
    $scope.product ={};
  }
  $scope.product = {};
  $scope.products = {};

  $scope.index=function(){
    productFactory.index(setProducts);
  }
  $scope.index();
  $scope.addProduct=function(){
    productFactory.addProduct($scope.product, setProducts);
  }
  $scope.delProduct = function(id){
    productFactory.delProduct(id,setProducts);
  }
}]);
app.controller('ordersController', ['$scope', 'productFactory', function ($scope, productFactory){
  function setProducts(data){
    $scope.products = data;
    $scope.product ={};
  }
  $scope.product = {};
  $scope.products = {};

  $scope.index=function(){
    productFactory.index(setProducts);
  }
  $scope.index();
  $scope.buyProduct = function(id){
    productFactory.buyProduct(id,setProducts);
  }
}]);
