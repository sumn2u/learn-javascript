---
chapter: 6
pageNumber: 45  
---
# For Each

The `forEach` method executes a provided function once for each array element. Here's the syntax for using `forEach`:

```javascript
array.forEach(function(element, index, array) {
  // element: current element being processed in the array
  // index: index of the current element being processed in the array
  // array: the array forEach was called upon
});
```


For example, let's say you have an array of numbers and you want to print the double of each number to the console. You could do this using `forEach` like this:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2);
});
```

You can also use the arrow function syntax to define the function passed to `forEach`:

```typescript
numbers.forEach((number) => {
  console.log(number * 2);
});
```

or

```typescript
numbers.forEach(number => console.log(number * 2));
```

The `forEach` method does not modify the original array. It simply iterates over the elements of the array and executes the provided function for each element.

{% hint style="warning" %}
The `forEach()` method is not executed for the empty statment.
{% endhint %}
