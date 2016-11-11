//Problem 1

//declarations get hoisted
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
//assignments and invocation maintain order
console.log(first_variable);
first_variable = "Yipee I was first!"
console.log(first_variable);
// Prediction 1
// Yipee I was first!

//Problem 2
//declarations get hoisted
var food;
function eat() {
  //declarations get hoisted
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);
// Prediction 2
// half-chicken
// gone
// Chicken

//Problem 3
//declarations get hoisted
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
// Prediction 3
// NEW!
