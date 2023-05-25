---
chapter: 5
pageNumber: 32
---
# Switch

A `switch` is a conditional statement that performs actions based on different conditions. It uses strict ( `===` ) comparison to match the conditions and executes the code blocks of matched condition.  The syntax of the `switch` expression is shown below.

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

The expression is evaluated once and is compared with each case. If a match is found, then the associated code block is executed if not `default` code block is executed. The `break` keyword stops the execution and can be placed anywhere. In its absence, the next condition is evaluated even if the conditions are not matched.&#x20;

An example of getting a weekday name based on the switch condition is shown below.&#x20;

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

In multiple matching cases, the **first** matching value is selected, if not the default value is selected. In the absence of default and no matching case, the program continues to the next statement(s) after switch conditions.&#x20;

{% exercise %}
From the following values write a `switch` statement that checks the value of dayOfWeek. If dayOfWeek is "Monday", "Tuesday", "Wednesday", "Thursday", or "Friday", assign "It's a weekday" to the result variable. If `dayOfWeek` is "Saturday" or "Sunday", assign "It's the weekend" to the result.

{% initial %}
let dayOfWeek = "Monday";
let result;
// check if it's a weekday or the weekend
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
{% solution %}
let dayOfWeek = "Monday";
let result;
// check if it's a weekday or the weekend
switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    result = "It's a weekday";
    break;
  case "Saturday":
  case "Sunday":
    result = "It's the weekend";
    break;
  default:
    result = "Invalid day of the week";
    break;
}
{% validation %}
assert(result == "It's a weekday" );

{% context %}
{% endexercise %}
