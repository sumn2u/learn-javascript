---
chapter: 26
pageNumber: 254
description: Creating fast animations with Velocity.js, a high-performance animation engine.
---

## Fast Animations with Velocity.js

Velocity.js is a high-performance animation engine that is easy to use and works with and without jQuery.

**Installation**

You can include Velocity.js in your project using npm:

```bash
npm install velocity-animate
```

Or you can use a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
```

**Basic Animation**
Here's a simple example of using Velocity.js to animate an element:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velocity.js Animation</title>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background-color:red;"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
    <script>
        Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000 });
    </script>
</body>
</html>
```

**Advanced Animation**

Velocity.js provides various features for advanced animations, such as sequences, easing, and SVG animations.


- **Sequences**

Sequences allow you to chain animations together. Here's an example:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000 })
    .then(() => {
        return Velocity(document.getElementById('box'), { top: "100px" }, { duration: 1000 });
    });
```


- **Easing**

Velocity.js provides a variety of easing options to make animations look more natural. Here's an example:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000, easing: "spring" });
```


- **SVG Animations**

Velocity.js can also animate SVG elements. Here's an example:

```javascript
Velocity(document.querySelector('svg'), { strokeDashoffset: 0 }, { duration: 1000 });
```

{% hint style="info" %}
For more details and examples, check out the Velocity.js documentation.
{% endhint %}
