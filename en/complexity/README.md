---
layout: editorial
chapter: 27
pageNumber: 258
description: Analyzing an algorithm's efiiciency is most important part of writing an optimal program. This chapter deep dives into analayzing the efficiency by understanding the space and time complexity.
---

# Chapter 27
# Complexity

From previous chapter you should have understood how to create an algorithm. In this chapter, we will explore the intricacies of algorithmic complexity in JavaScript.

When designing an algorithm, it's not merely about achieving the right output; it's about attaining that result efficiently. Given that multiple algorithms can address a single problem, it's imperative to seek the most efficient solution. In computer science, the efficiency of an algorithm can be analyzed in two primary dimensions: **time** and **space**.

Analyzing the complexity of an algorithm is a practical necessity and not just a theoretical concept. Some benefits of an optimal algorithm is faster performance, resource conservation and improved user experience.

Let's take an example:
```javascript
function printElement(arr){
    for (let i=0; i<arr.length; t++){
        console.log(arr[i])
    }
}
```

Time complexity of the above algorithm is: **O(n)**

Space complexity of the above algorithm is: **O(1)**

While this might seem unfamiliar to you at the moment, as you progress through the upcoming chapters, you will begin to understand all these values more clearly.

In this chapter, we will explore following topics:
* [Time Complexity](./time-complexity.md)
* [Space Complexity](./space-complexity.md)
