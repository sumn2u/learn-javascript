---
chapter: 6
pageNumber: 60 
description:  The Javascript arr.slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.
---
# Slice

The `slice` method accepts two parameters begin and end.
* **begin**: This parameter defines the starting index from where the portion is to be extracted. 
  If this argument is missing then the method takes begin as `0` as it is the default start value.
* **end**: This parameter is the index up to which the portion is to be extracted (excluding the end index). 
  If this argument is not defined then the array till the end is extracted as it is the default end value If the end value is greater than the length of the array, then the end value changes to the length of the array.

```javascript
function func() {
	//Original Array
	let arr = [23, 56, 87, 32, 75, 13];
	//Extracted array
	let new_arr = arr.slice();
	console.log(arr);
	console.log(new_arr);
}
func();


// RESULT: 
[23,56,87,32,75,13]
[23,56,87,32,75,13]
```

The `slice()` method copies object references to the new array (example, a nested array). So, if the referenced object is modified, the changes are visible in the returned new array.

```javascript
let human = {
  name: "David",
  age: 23,
};

let arr = [human, "Nepal", "Manager"];
let new_arr = arr.slice();

// original object
console.log(arr[0]); // { name: 'David', age: 23 }

// making changes to the object in new array
new_arr[0].name = "Levy";

// changes are reflected
console.log(arr[0]); // { name: 'Levy', age: 23 }
```
