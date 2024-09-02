---
chapter: 26
pageNumber: 254
description: Creating animations with Anime.js, a lightweight JavaScript animation library.
---

## Creating Animations with Anime.js

Anime.js is a lightweight JavaScript animation library with a simple yet powerful API.

**Installation**

You can include Anime.js in your project using npm:

```bash
npm install animejs
```

Or you can use a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

**Basic Animation**

Here's a simple example of using Anime.js to animate an element:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anime.js Animation</title>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background-color:red;"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script>
        anime({
            targets: '#box',
            translateX: 250,
            duration: 1000
        });
    </script>
</body>
</html>
```

**Advanced Animation**

Anime.js provides various features for advanced animations, such as keyframes, timeline, and easing.


- **Keyframes:**
Keyframes allow you to define multiple stages of an animation. Here's an example:

```javascript
anime({
    targets: '#box',
    keyframes: [
        {translateX: 100},
        {translateY: 100},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 4000
});
```


- **Timeline:**
Timelines allow you to sequence animations. Here's an example:

```javascript
var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

tl.add({
    targets: '#box',
    translateX: 250
}).add({
    targets: '#box',
    translateY: 250
}, '-=500'); // Starts 500ms before the previous animation ends
```


- **Easing:**
Anime.js provides a variety of easing options to make animations look more natural. Here's an example:

```javascript
anime({
    targets: '#box',
    translateX: 250,
    duration: 1000,
    easing: 'easeInOutQuad'
});
```

{% hint style="info" %}
For more details and examples, check out the Anime.js documentation.
{% endhint %}