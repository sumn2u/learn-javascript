---
chapter: 25
pageNumber: 245
description: Certainly! Let's discuss the `let` and `const` declarations in the context of ES6 (ECMAScript 2015) and compare them to their ES5 counterparts.
---

## let and const in ES6

1. **`let` Declaration:**
   - In ES6, the `let` declaration is introduced to create block-scoped variables. This means that a variable declared with `let` is only accessible within the block (e.g., inside a function or a pair of curly braces) where it's defined.

   - `let` variables are not hoisted to the top of their containing function or block. This prevents issues where variables are accessed before they're declared.

   - `let` allows you to reassign a value to the variable after its initial declaration, making it a mutable variable.

   - Example:
     ```javascript
     function exampleFunction() {
       if (true) {
         let x = 10;
         console.log(x); // 10
       }
       console.log(x); // Error: x is not defined
     }
     ```

2. **`const` Declaration:**
   - The `const` declaration also introduces block-scoped variables, but it comes with an additional constraint: variables declared with `const` cannot be reassigned after their initial assignment. They are constant.

   - `const` is often used for values that should not change, such as constants or references to immutable objects.

   - Example:
     ```javascript
     const pi = 3.14159;
     pi = 3.14; // Error: Assignment to constant variable.
     ```

**Comparison with ES5:**

In ES5, JavaScript primarily used the `var` keyword for variable declaration. Here are the key differences when comparing `let` and `const` in ES6 with `var` in ES5:

1. **Block Scope vs. Function Scope:**
   - ES6 (`let` and `const`): Variables declared with `let` and `const` are block-scoped, meaning they are limited to the block where they are defined, be it a block within a function or a standalone block.

   - ES5 (`var`): Variables declared with `var` are function-scoped, meaning they are accessible throughout the entire function containing the `var` declaration.

2. **Hoisting:**
   - ES6 (`let` and `const`): Variables declared with `let` and `const` are not hoisted to the top of their containing block, which prevents the use of variables before they are declared.

   - ES5 (`var`): Variables declared with `var` are hoisted to the top of their containing function, which can lead to unexpected behavior if not managed carefully.

3. **Reassignment:**
   - ES6 (`let` and `const`): Variables declared with `let` can be reassigned after their initial declaration. Variables declared with `const` cannot be reassigned, making them constants.

   - ES5 (`var`): Variables declared with `var` can be reassigned at any point in the function where they are declared.

4. **Constants:**
   - ES6 (`const`): ES6 introduces the `const` keyword, allowing the creation of constants, which cannot be changed after their initial assignment.

`let` and `const` in ES6 provide more predictable and controlled variable scoping compared to `var` in ES5. They help avoid common issues associated with variable hoisting and provide the flexibility to choose between mutable and immutable variables based on your needs.