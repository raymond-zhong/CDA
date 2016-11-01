var x = [3,5,'Dojo','rocks','Michael','Sensei'];

for (var i = 0; i < x.length; i++)
  console.log(x[i]);

x.push(100);

console.log(x);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

var sum = 0;
for (var i =1; i<501; i++){
  sum = sum + i;
  }
  console.log(sum);

var array = [1, 5, 90, 25, -3, 0];
var min = array[0];
for (var i = 0; i < array.length; i++)
  if (array[i] < min){
    min = array[i];
  }
  console.log(min);

var avg = 0;
var sum = 0;
for (var i = 0; i < array.length; i++){
    sum = sum + array[i];
    console.log(sum);
  }
  avg = sum/array.length;
  console.log(avg);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in new_ninja) {
if (new_ninja.hasOwnProperty(key)) {
console.log(key);
console.log(new_ninja[key]);
}
}
