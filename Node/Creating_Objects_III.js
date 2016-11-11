function Vehicle(name, wheel_num, pass_num, speed){
  if (!(this instanceof Vehicle)) {
   return new Vehicle(name, wheel_num, pass_num, speed);
 }
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  this.distance_traveled = 0;
  this.name = name;
  this.wheels = wheel_num;
  this.pass = pass_num;
  this.speed = speed;
  this.VIN_Number=VIN();
  function VIN(){
    var vin ="";
    for (var i =0; i < 17; i+=1){
    vin +=chars[Math.floor(Math.random()*35)];
  }
  return vin;
  }
}
Vehicle.prototype.updateDistanceTraveled = function(){
this.distance_traveled += this.speed;
return this;
}
Vehicle.prototype.makeNoise = function(noise) {
    var noise = noise || "Vroom Vroom!";
    console.log(noise);
    return this;
  };
Vehicle.prototype.move = function(){
    this.makeNoise();
    Vehicle.prototype.updateDistanceTraveled();
    return this;
  };
Vehicle.prototype.checkMiles = function(){
    console.log(this.distance_traveled);
    return this;
  };

bike = new Vehicle("bike", 2, 2, 10);
// bike.makeNoise("ring, ring!");
bike.move().checkMiles();
console.log(bike.speed);
console.log(bike);

bike1 = new Vehicle("bike1", 2, 2, 10);
// bike.makeNoise("ring, ring!");
bike1.move().checkMiles();
console.log(bike1.speed);
console.log(bike1);

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
