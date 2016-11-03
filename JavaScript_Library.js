var _ = {
   map: function(arr, callback) {
      this.array1=[];
       for (var i =0; i < arr.length; i++){
         this.array1.push(callback(this.arr[i]));
       }
       return this.array1;
   },
   reduce: function(arr, callback) {
     var sum =0;
      for (var i =0; i < arr.length; i++){
        sum =callback(sum, arr[i]);
      }
      return sum;
   },
   find: function(arr, callback) {
     if (arr.length == 0){
       return undefined;
     }
      for (var i =0; i < arr.length; i++){
        if (callback(arr[i])) {
          return arr[i];
        }
      }
  },
   filter: function(arr, callback) {
     this.array2=[];
     if (arr.length == 0){
       return undefined;
     }
     else{
      for (var i =0; i < arr.length; i++){
        if (callback(arr[i]))
        {
        this.array2.push(arr[i]);
      }
      }
   }
   return this.array2;
  },
   reject: function(arr, callback) {
     this.array3=[];
     if (arr.length == 0){
       return undefined;
     }
     else{
      for (var i =0; i < arr.length; i++){
        if (callback(arr[i]) == false)
        {
        this.array3.push(arr[i]);
      }
   }
 }
   return this.array3;
 }
}
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(odds); // if things are working right, this will return [2,4,6].
