---
chapter: 5
pageNumber: 31
---
# Else

There is also an `else` clause that will be applied when the first condition isn’t true. This is very powerful if you want to react to any value, but single out one in particular for special treatment.

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

The `else` clause can be joined with another `if`. Let's remake the example from the previous article.

```javascript
if (country === "England") {
  ...
} else if (country === "France") {
  ...
} else if (country === "Germany") {
  ...
}
```

{% exercise %}
From the following values write a conditional statement that checks if `num1` is greater than `num2`. If it is, assign "num1 is greater than num2" to the `result` variable. If it is not, assign "num1 is less than or equal to num2".

{% initial %}
let num1 = 10;
let num2 = 5;
let result;

// check if num1 is greater than num2
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;

// check if num1 is greater than num2
if (num1 > num2) {
  result = "num1 is greater than num2";
} else {
  result = "num1 is less than or equal to num2";
}

{% validation %}
assert(result == "num1 is greater than num2" );

{% context %}
{% endexercise %}
