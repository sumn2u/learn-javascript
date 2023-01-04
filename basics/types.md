# Types

Computers are sophisticated and can make use of more complex variables than just numbers. This is where variable types come in. Variables come in several types and different languages support different types.

The most common types are:

* **Number**: Numbers can be integers (e.g., `1`, `-5`, `100`) or floating-point values (e.g., `3.14`, `-2.5`, `0.01`). JavaScript does not have a separate type for integers and floating-point values; it treats them both as numbers.
* **String**: Strings are sequences of characters, represented by either single quotes (e.g., `'hello'`) or double quotes (e.g., `"world"`).
* **Boolean**: Booleans represent a true or false value. They can be written as `true` or `false` (without quotes).
* **Null**: The null type represents a null value, which means "no value." It can be written as `null` (without quotes).
* **Undefined**: The undefined type represents a value that has not been set. If a variable has been declared, but has not been assigned a value, it is undefined.
* **Object**: An object is a collection of properties, each of which has a name and a value. You can create an object using curly braces (`{}`) and assigning properties to it using name-value pairs.
* **Array**: An array is a special type of object that can hold a collection of items. You can create an array using square brackets (`[]`) and assigning a list of values to it.
* **Function**: A function is a block of code that can be defined and then called by name. Functions can accept arguments (inputs) and return a value (output). You can create a function using the `function` keyword.

JavaScript is a " _loosely typed_"  language, which means that you don't have to explicitly declare what type of data the variables are. You just need to use the `var` keyword to indicate that you are declaring a variable, and the interpreter will work out what data type you are using from the context, and use of quotes.

The `typeof` operator is used to checking the datatypes of a variable.

```javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object
```

Data types used in JavaScript can be differentiated into two categories based on containing values.

Data types that can contain values:

* `string`
* `number`
* `boolean`
* `object`
* `function`

{% hint style="info" %}
`Object`, `Date`, `Array`, `String`, `Number`, and `Boolean` are the types of objects available in JavaScript.
{% endhint %}

Data types that cannot contain values:

* `null`
* `undefined`

A primitive data value is a simple data value with no additional properties and methods and is not an object. They are immutable, meaning that they can't be altered. There are 7 primitive data types:

* string
* number
* bigint
* boolean
* undefined
* symbol
* null
