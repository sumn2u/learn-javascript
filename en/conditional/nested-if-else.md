---
chapter: 5
pageNumber: 32
description: The else keyword used in conjunction with the if statement to provide an alternative code block to execute when the condition specified in the if statement evaluates to false. In the case of nested if-else statements, this construct allows for more complex conditional logic by providing multiple levels of conditions and alternative code blocks.
---

## Nested If-Else Statements in JavaScript

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

```JavaScript
// Program 1: Determining Student Status
// This program checks a person's age and student status and prints a message accordingly.

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

```JavaScript
// Program 2: Weather Conditions
// This program checks if it's raining, the temperature, and if it's snowing, then provides weather-related advice.


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

```JavaScript
// Program 3: Driver's License Eligibility
// This program checks a person's age, prior driving experience, and written test status to determine eligibility for a driver's license.

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
