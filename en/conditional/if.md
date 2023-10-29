---
chapter: 5
pageNumber: 30
description: The if condition evaluates the condition, and if the condition is true, the code block following the if statement is executed; otherwise, it is skipped.
---

# If

The easiest condition is an if statement and its syntax is `if(condition){ do this … }`. The condition has to be true for the code inside the curly braces to be executed. You can for example test a string and set the value of another string dependent on its value as described below.

```javascript
let country = "France";
let weather;
let food;
let currency;

if (country === "England") {
  weather = "horrible";
  food = "filling";
  currency = "pound sterling";
}

if (country === "France") {
  weather = "nice";
  food = "stunning, but hardly ever vegetarian";
  currency = "funny, small and colourful";
}

if (country === "Germany") {
  weather = "average";
  food = "worst thing ever";
  currency = "funny, small and colourful";
}

let message =
  "this is " +
  country +
  ", the weather is " +
  weather +
  ", the food is " +
  food +
  " and the " +
  "currency is " +
  currency;

console.log(message);
// 'this is France, the weather is nice, the food is stunning, but hardly ever vegetarian and the currency is funny, small and colourful'
```

## Nested If-Else

In JavaScript, you can use nested `if-else` statements to create more complex conditional logic.

### Basic Syntax

```javascript
if (condition1) {
  // Code to execute when condition1 is true
} else {
  if (condition2) {
    // Code to execute when condition1 is false and condition2 is true
  } else {
    // Code to execute when both condition1 and condition2 are false
  }
}
```

The following program determines a person's student status based on their age and prints a corresponding message.

```JavaScript
let age = 20;
let isStudent = true;

if (age >= 18) {
  if (isStudent) {
    console.log("You are an adult student.");
  } else {
    console.log("You are an adult, but not a student.");
  }
} else {
  console.log("You are not an adult.");
}

// Output: You are an adult student.
```

This program checks for rain, temperature, and snow to provide weather advice.

```JavaScript
let temperature = 25;
let isRaining = true;
let isSnowing = false;

if (isRaining) {
  console.log("It's raining. Don't forget your umbrella.");

  if (temperature < 10) {
    console.log("And it's cold. You might need a coat too.");
  }
} else if (isSnowing) {
  console.log("It's snowing. Be prepared for slippery roads.");
} else {
  console.log("No rain or snow. Enjoy the weather!");
}

// Output: It's raining. Don't forget your umbrella.
```

This program checks a person's age, prior driving experience, and written test status to determine eligibility for a driver's license.

```JavaScript
let age = 19;
let hasPriorExperience = true;
let hasPassedWrittenTest = true;

if (age >= 18) {
  if (hasPriorExperience) {
    console.log("Congratulations! You are eligible for a driver's license.");
  } else {
    console.log("Sorry, you need prior driving experience to get a driver's license.");
  }
} else {
  console.log("Sorry, you must be 18 or older to apply for a driver's license.");

  if (hasPassedWrittenTest) {
    console.log("You've passed the written test, but you need to wait until you're 18 to apply.");
  } else {
    console.log("You need to pass the written test first and wait until you're 18 to apply.");
  }
}

// Output: Congratulations! You are eligible for a driver's license.

```
