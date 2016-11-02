function personConstructor(name){
var person = {
  name: "name",
  distance_traveled: 0,
  say_name: function(){console.log(person.name);},
  say_something: function(phrase){console.log('${person.name} says ${phase}');},
  walk: function(){console.log('${person.name} is walking!'); person.distance_traveled += 3; return person;},
  run: function(){console.log('${person.name} is running!'); person.distance_traveled += 10; return person;},
  crawl: function(){console.log('${person.name} is crawling!'); person.distance_traveled += 1; return person;},
  }
}


function ninjaConstructor(name, cohort){
var belts = ["yellow", "red", "black"]
var ninja = {}
ninja.name = "name";
ninja.cohort = cohort;
ninja.beltLevel = 0;
ninja.levelUp = function(){if (ninja.beltLevel <2){ninja.beltLevel +=1; ninja.belt=belts[ninja.beltLevel]} return ninja;}
  ninja.belt=belts[ninja.beltLevel];
  return ninja;
}
