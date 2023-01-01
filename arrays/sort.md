# Sort

The `sort` method sorts the items of an array in a specific order (ascending or descending).

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort(); 

console.log(sortedCity);

// Result: ['Barcelona', 'California', 'Kathmandu', 'Paris']

```

{% hint style="info" %}
Numbers can be sorted incorrectly when they are sorted. For example, "35" is bigger than "100", because "3" is bigger than "1". &#x20;
{% endhint %}

To fix the sorting issue in numbers, compare functions are used. Compare functions defines ort orders and return a **negative**, **zero**, or **positive** value based on the arguments.

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {return a-b});

// Result: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
The `sort()` method overrides the original array.
{% endhint %}
