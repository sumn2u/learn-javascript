---
chapter: 8
pageNumber: 54
description: 
---

# Time Complexity

Time complexity is a mathematical calculation to measure the amount of time an algorithm takes to complete considering the size of its input. 
It helps in evaluating the efficiency of an algorithm by estimating the number of basic operations it performs. 
**Big O notation**, is one of the ways to represent the time complexity.

We might think of measuring an algorithm's time complexity by looking at how long it takes to run. 
For example, if a program runs in 16 minutes, we might say its time complexity is 16 minutes.

But this method is incorrect because the running time can vary depending on different factors like:

- the device used
- the programming language
- the network
- and other conditions

That's why we determine time complexity by counting the number of steps an algorithm takes for a given input size. For instance,

If the time complexity is **O(n)**:

- it takes 5 steps for an input size of 5
- it takes 10 steps for an input size of 10

<hr>

### **Big O Notation**
Big Oh (Big O) is a mathematical notation used to represent the time complexity of an algorithm.
```
let total = 0;
const n = 100;

// iterate n times
for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total);
// Output: 5050

```
The code takes n steps to run. Instead of using just plain n for time complexity, we use the O(n) notation—read as Big Oh of n—to represent it.

### **Types of Big O**

Some common types of Big O notations are as follows:

- O(log n) - logarithmic time complexity
- O($n^2$) - quadratic time complexity
- O(n) - linear time complexity
- O(1) - constant time complexity
