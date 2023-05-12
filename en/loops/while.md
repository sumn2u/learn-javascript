# While

While loops repetitively execute a block of code as long as a specified condition is true.

```javascript
while (condition) {
  // do it as long as condition is true
}
```

For example, the loop in this example will repetitively execute its block of code as long as the variable i is less than 5:

```javascript
var i = 0,
  x = "";
while (i < 5) {
  x = x + "The number is " + i;
  i++;
}
```

{% hint style="warning" %}
&#x20;Be careful to avoid infinite looping if the condition is always true!
{% endhint %}
