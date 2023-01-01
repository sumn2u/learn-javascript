# Spread

An array or object can be quickly copied into another array or object by using the Spread Operator `(...)`.

```javascript
let arr = [1, 2, 3, 4, 5]; 

console.log(...arr); 
// Result: 1 2 3 4 5

let arr1;
arr1 = [...arr]; //copies the arr into arr1 

console.log(arr1);    //output will be [1, 2, 3, 4, 5]

arr1 = [6,7];
arr = [...arr,...arr1];

console.log(arr);   //output will be [1, 2, 3, 4, 5, 6, 7]

```
