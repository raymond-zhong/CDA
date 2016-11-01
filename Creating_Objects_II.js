function VehicleConstrutor(name, wheel_num, pass_num, speed){
  if (!(this instanceof VehicleConstrutor)) {
   return new VehicleConstrutor(name, wheel_num, pass_num, speed);
 }
  var distance_traveled = 0;
  var self = this;
  function updateDistanceTraveled(){
  distance_traveled += self.speed;
  }
  this.name = name;
  this.wheels = wheel_num;
  this.pass = pass_num;
  this.speed = speed;

  this.makeNoise = function(noise) {
    var noise = noise || "Vroom Vroom!";
    console.log(noise);
  }
  this.move = function(){
    this.makeNoise();
    updateDistanceTraveled();
  }

  this.checkMiles = function(){
    console.log(distance_traveled);
  }
}

var bike = VehicleConstrutor("bike", 2, 2, 10);
// bike.makeNoise("ring, ring!");
bike.move();
bike.checkMiles();
console.log(bike.speed);

// var sedan = VehicleConstrutor("sedan", 4, 4);
// sedan.makeNoise("Honk Honk!");
//
// var bus = VehicleConstrutor("bus", 16, 2);
// bus.pickUp = function(addPass) {
//   bus.pass += addPass;
// }
// console.log(bus.pass);
// bus.pickUp(6);
// console.log(bus.pass);
