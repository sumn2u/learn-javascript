---
title: Continue
description: An explanation of the continue statement in JavaScript with an example.
---

# Continue 

The `continue` statement in JavaScript is a control flow statement used to skip the current iteration of a loop and continue with the next iteration. It allows you to bypass specific code within a loop under certain conditions. This document provides an overview of the `continue` statement in JavaScript, its syntax, common use cases, and best practices.

## Syntax

In JavaScript, the `continue` statement is used within loops. The syntax is straightforward:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3.");
        continue;
    }
    console.log(`Current value of i: ${i}`);
}

