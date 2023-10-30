---
layout: editorial
chapter: 7
pageNumber: 61
description: Loops are control structures that allow you to execute a block of code repeatedly until a specified condition is met. They are essential for automating repetitive tasks and iterating over data structures like arrays and strings.
---

# Chapter 7
# Loops

Loops are repetitive instructions where one variable in the loop changes. Loops are handy, if you want to run the same code over and over again, each time with a different value.

Instead of writing:

```javascript
doThing(cars[0]);
doThing(cars[1]);
doThing(cars[2]);
doThing(cars[3]);
doThing(cars[4]);
```

You can write:

```javascript
for (var i = 0; i < cars.length; i++) {
  doThing(cars[i]);
}
```

