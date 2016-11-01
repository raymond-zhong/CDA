function runningLogger(){
  console.log("I am running!")
}
// Test Output:
runningLogger();
// ----------------------------------
function multiplyByTen(input){
  if (typeof(input)=="number"){
    return input*10;
    }
  }
// Test Output:
multiplyByTen(5);
// ----------------------------------
function stringReturnOne(){
  return "stringReturnOne";
}
function stringReturnTwo(){
  return "stringReturnTwo";
}
// Test Output:
stringReturnOne();
stringReturnTwo();
// ----------------------------------
function caller(input){
  if (typeof(input)=="function"){
    input();
  }
}
// Test Output:
caller(stringReturnOne);
// ----------------------------------
function myDoubleConsoleLog(x,y){
  if (typeof(x) == "function" && typeof(y) == "function"){
    console.log(x(),y());
  }
}
// Test Output:
function returnFive(){
  return 5;
}
function returnHello(){
  return "Hello";
}
myDoubleConsoleLog(stringReturnTwo,stringReturnTwo);
// ----------------------------------
function caller2(v){
  console.log('Starting...');
  setTimeout(function(){
  if (typeof v === 'function'){
    console.log("About to invoke function")
    v(returnFive, returnHello);
    }
  }, 2000);
  console.log("Ending?");
  return "interesting";
}
console.log(caller2(myDoubleConsoleLog));
// Test Output:
// caller2(myDoubleConsoleLog);
// ----------------------------------
