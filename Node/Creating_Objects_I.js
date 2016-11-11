function VehicleConstrutor(name, wheel_num, pass_num){
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels= wheel_num;
  vehicle.pass= pass_num;

  vehicle.makeNoise = function(noise) {
    var noise = noise || "Vroom Vroom!";
    console.log(noise);
  }
  return vehicle;
}

var bike = VehicleConstrutor("bike", 2, 2);
bike.makeNoise("ring, ring!");

var sedan = VehicleConstrutor("sedan", 4, 4);
sedan.makeNoise("Honk Honk!");

var bus = VehicleConstrutor("bus", 16, 2);
bus.pickUp = function(addPass) {
  bus.pass += addPass;
}
console.log(bus.pass);
bus.pickUp(6);
console.log(bus.pass);
