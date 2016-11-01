function sums(x,y){
  var sum = 0;
  for (var i = x; i < y+1; i++){
    sum = sum + i;
  }
  return sum;
}

function min(array){
  var min = array[0];
  for (var i = 0; i < array.length; i++){
    if (array[i] < min){
      min = array[i];
    }
  }
    return min;
  }

function avg(array){
var sum = 0;
for (var i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum/array.length;
}

var sum = function(x,y){
  var sum = 0;
  for (var i = x; i < y+1; i++){
    sum = sum + i;
  }
  return sum;
};

var min = function(array){
  var min = array[0];
  for (var i = 0; i < array.length; i++){
    if (array[i] < min){
      min = array[i];
    }
  }
  return min;
};

var avg = function avg(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
      sum = sum + array[i];
  }
  return sum/array.length;
}

var object = {
  sums:function sums(x,y){
    var sum = 0;
    for (var i = x; i < y+1; i++){
      sum = sum + i;
    }
    return sum;
  },
  min:function min(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++){
      if (array[i] < min){
        min = array[i];
      }
      return min;
    }
},
  avg: function avg(array){
   var avg = 0;
   var sum = 0;
   for (var i = 0; i < array.length; i++){
       sum = sum + array[i];
     }
     avg = sum/array.length;
     return avg;
   }
}
var person = {};
person = {
  name: "Raymond",
  distance_traveled: 0,
  say_name: function(){console.log(person.name);},
  say_something: function(phrase){console.log('${person.name} says ${param}');},
  walk: function(){console.log('${person.name} is walking!'); person.distance_traveled += 3;},
  run: function(){console.log('${person.name} is running!'); person.distance_traveled += 10;},
  crawl: function(){console.log('${person.name} is crawling!'); person.distance_traveled += 1;},
  }
