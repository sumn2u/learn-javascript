---
chapter: 6
pageNumber: 46  
---
# Sort

The `sort` method sorts the items of an array in a specific order (ascending or descending).

Here's the syntax for using `sort`:

```c
array.sort([compareFunction]);
```

The `compareFunction` argument is optional and specifies a function that defines the sort order. If omitted, the elements are sorted in ascending order according to their string representation.

For example:

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort(); 

console.log(sortedCity);

// Result: ['Barcelona', 'California', 'Kathmandu', 'Paris']

```

{% hint style="info" %}
Numbers can be sorted incorrectly when they are sorted. For example, "35" is bigger than "100", because "3" is bigger than "1".
{% endhint %}

To fix the sorting issue in numbers, compare functions are used. Compare functions defines sort orders and return a **negative**, **zero**, or **positive** value based on arguments, like this:

* A negative value if `a` should be sorted before `b`
* A positive value if `a` should be sorted after `b`
* `0` if `a` and `b` are equal and their order doesn't matter

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {return a-b});

// Result: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
The `sort()` method overrides the original array.
{% endhint %}
