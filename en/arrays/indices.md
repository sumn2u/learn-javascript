# Indices

So you have your array of data elements, but what if you want to access a specific element? That is where indices come in. An **index** refers to a spot in the array. Indices logically progress one by one, but it should be noted that the first index in an array is 0, as it is in most languages. Brackets `[]` are used to signify you are referring to an index of an array.

```javascript
// This is an array of strings
let fruits = ["apple", "banana", "pineapple", "strawberry"];

// We set the variable banana to the value of the second element of
// the fruits array. Remember that indices start at 0, so 1 is the
// second element. Result: banana = "banana"
let banana = fruits[1];
```

You can also use an array index to set the value of an element in an array:

```javascript
let array = ['a', 'b', 'c', 'd', 'e'];
//  indices:  0    1    2    3    4
array[4] = 'f';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f']
```

Note that if you try to access or set an element using an index that is outside the bounds of the array (i.e., an index that is less than 0 or greater than or equal to the length of the array), you will get an `undefined` value.

```javascript
console.log(array[5]); // Output: undefined
array[5] = 'g';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
