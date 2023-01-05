# Shift

`shift` deletes the first index of that array and moves all indexes to the left. It changes the original array. Here's the syntax for using `shift`:

```c
array.shift();
```

For example:&#x20;

```javascript
let array = [1, 2, 3]; 
array.shift(); 

// Result: array = [2,3]
```

You can also use the `shift` method in conjunction with a loop to remove all elements from an array. Here's an example of how you might do this:

```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Result: []
```

{% hint style="warning" %}
The `shift` method only works on arrays, and not on other objects that are similar to arrays such as arguments objects or NodeList objects. If you need to shift elements from one of these types of objects, you will need to convert it to an array first using the `Array.prototype.slice()` method.
{% endhint %}
