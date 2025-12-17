---
layout: editorial
chapter: 28
pageNumber: 260
description: JavaScript is a versatile language used in both browsers and servers. This guide explains key concepts like the JavaScript engine, execution context, call stack, memory heap, runtime environment, and event loop to help you write more efficient code.
---

# Chapter 28

# JavaScript Behind the Scenes

JavaScript is a versatile language that powers both browsers and servers. To write efficient code, it helps to understand how JavaScript works behind the scenes. At its core is the JavaScript engine, a program responsible for executing your code. Popular engines like V8 (used in Chrome and Node.js), SpiderMonkey (in Firefox), and JavaScriptCore (in Safari) break down your code and run it. Alongside this, the execution context defines the environment in which your code is evaluated. Whether it's global, function, or eval, each context goes through a setup phase (creating variables, functions, and this) before executing the code line by line.

Key components like the call stack and memory heap further support JavaScript's execution. The call stack manages function calls in a Last-In, First-Out order, while the memory heap stores objects, with JavaScript automatically freeing up memory through garbage collection. The runtime environment—whether in the browser or Node.js—provides additional resources, such as the DOM or Node.js-specific modules. Finally, the event loop plays a crucial role in enabling asynchronous programming by offloading tasks and processing callbacks, ensuring JavaScript remains non-blocking and efficient.


In this chapter we are going to talk about following topics.

* [Call Stack](./call-stack.md)
* [Event Loop](./runtime-environment.md)
* [Execution Context](./execution-context.md)
* [JavaScript Engine](./engine.md)
* [Memory Heap](./memory-heap.md)
* [Runtime Environment](./runtime-environment.md)