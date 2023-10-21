---
chapter: 4
pageNumber: 32
---
# substr()

JavaScript str.substr() method returns the specified number of characters from the specified index from the given string. It basically extracts a part of the original string.

# Syntax:

*str.substr(start , length)

* using the `substr()` method
* using the template literal (introduced in ES6)

The substr() method takes in:

Parameters:

start: It defines the starting index from where the substring is to be extracted from the base string.

length: It defines the number of characters to be extracted starting from the start in the given string. If the second argument to the method is undefined then all the characters from the start till the end of the length are extracted.
Return value: This method returns a string that is part of the given string. If the length is 0 or a negative value then it returns an empty string. If we want to extract the string from the end then use a negative start position.

```javascript
//Example 1:
// JavaScript to illustrate substr() method

function func() {

	// Original string
	let str = 'It is a great day.';
	let sub_str = str.substr(5);
	console.log(sub_str);
}

func();


//Output
a great day.

//Example 2: 
// JavaScript to illustrate substr() method

function func() {

	// Original string
	let str = 'It is a great day.';

	let sub_str = str.substr(5, 6);
	console.log(sub_str);
}

// Function calling
func();



//Output
a gre
