---
chapter: 4
pageNumber: 30
---
# CharAt

The `str.charAt()` method returns the character at the given index of the string index holds the array element position.
* using the `charAt()` method
* using the template literal (introduced in ES6)

The charAt() method takes in:

Arguments: The only argument to this function is the index in the string from where the single character is to be extracted. 

index: The range of this index is between 0 and length – 1. If no index is specified then the first character of the string is returned as 0 is the default index used for this function. 
Return Value: Returns a single character located at the index specified as the argument to the function. If the index is out of range, then this function returns an empty string.

```javascript
//Example 1:
function func() {
	// Original string
	let str = 'JavaScript is object oriented language';

	// Finding the character at given index
	let value = str.charAt(0);
	let value1 = str.charAt(4);
	console.log(value);
	console.log(value1);
}
func();

//Output
j
s

//Example 2: 
function func() {

	// Original string
	let str = 'JavaScript is object oriented language';

	// Finding the character at given index
	let value = str.charAt(9);
	console.log(value);
}
func();


//Output
t
```