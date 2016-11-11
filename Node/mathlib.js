module.exports = {
    add1: function(num1, num2) {
      console.log("the sum is:", num1 + num2);
    },
    multiply:function(num1, num2) {
      console.log("the product is:", num1 * num2);
    },
    square: function(num){
      console.log("the square is:", num * num);
    },
    random: function(min, max){
      console.log("the random number is:", Math.floor(Math.random() *((max+1) - min) + min));
    }
};
