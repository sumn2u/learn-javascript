---
chapter: 21
pageNumber: 151
---

# Concatenation

In any programming language, string concatenation simply means appending one or more strings to another string. For example, when strings "_World_" and "_Good Afternoon_" are concatenated with string "_Hello_", they form the string "_Hello World, Good Afternoon_". We can concatenate a string in several ways in JavaScript.

### Example:

```javascript
const icon = "👋";

// using template Strings
`hi ${icon}`;

// using join() Method
["hi", icon].join(" ");

// using concat() Method
"".concat("hi ", icon);

//  using + operator
"hi " + icon;

// RESULT
// hi 👋
```

### 📝 Task:

- [ ] Write a program to set the values for `str1`and `str2` so the code prints '_Hello World_' to the console.

- [ ] Write a program that prompt user to enter their first name(`first_name`) and last name(`last_name`). Then, use string concatenation to create and display their full name(`full_name`).

- [ ] Write a program that prompt user to enter their name. Then, use string concatenation to create a greeting message that include their name. For examples: `Good morning, Aman`.

### 💡 Hints:

- Visit the [concatenation](../strings/concat.md) chapter of strings for more info about string concatenation.
