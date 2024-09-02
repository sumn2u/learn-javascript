---
chapter: 26
pageNumber: 253
description: Getting started with GSAP, a powerful library for creating high-performance animations.
---

## Getting Started with GSAP

GSAP (GreenSock Animation Platform) is a powerful library for creating high-performance animations. It is widely used due to its robustness and flexibility.

**Installation**

You can include GSAP in your project using npm:

```bash
npm install gsap
```

Or you can use a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
```

**Basic Animation**

Here's a simple example of using GSAP to animate an element:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP Animation</title>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background-color:red;"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script>
        gsap.to("#box", {x: 100, duration: 1});
    </script>
</body>
</html>
```

**Advanced Animation**

GSAP provides various features for advanced animations, such as timelines, stagger, and easing.


- **Timelines:**
Timelines allow you to sequence animations. Here's an example:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```


- **Stagger:**
Stagger allows you to animate multiple elements with a delay between each. Here's an example:

```javascript
gsap.to(".box", {x: 100, duration: 1, stagger: 0.2});
```


- **Easing:**
GSAP provides a variety of easing options to make animations look more natural. Here's an example:

```javascript
gsap.to("#box", {x: 100, duration: 1, ease: "bounce"});
```

{% hint style="info" %}
For more details and examples, check out the GSAP documentation.
{% endhint %}