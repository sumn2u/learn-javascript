---
chapter: 26
pageNumber: 293
description: Creación de animaciones con Anime.js, una biblioteca de animación JavaScript ligera.
---

# Creación de animaciones con Anime.js

Anime.js es una biblioteca de animación de JavaScript liviana con una API simple pero poderosa.

## Instalación

Puedes incluir Anime.js en tu proyecto usando npm:

```bash
npm install animejs
```

O puedes utilizar un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

## Animación básica

A continuación se muestra un ejemplo sencillo del uso de Anime.js para animar un elemento:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animación Anime.js</title>
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

## Animación avanzada

Anime.js proporciona varias funciones para animaciones avanzadas, como fotogramas clave, línea de tiempo y suavizado.

- **Fotogramas clave:**
Los fotogramas clave permiten definir varias etapas de una animación. A continuación, se muestra un ejemplo:

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

- **Línea de tiempo:**
Las líneas de tiempo permiten secuenciar animaciones. A continuación, se muestra un ejemplo:

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
}, '-=500'); // Comienza 500 ms antes de que finalice la animación anterior.
```

- **Suavizado:**
Anime.js ofrece una variedad de opciones de suavizado para que las animaciones se vean más naturales. A continuación, se muestra un ejemplo:

```javascript
anime({
    targets: '#box',
    translateX: 250,
    duration: 1000,
    easing: 'easeInOutQuad'
});
```

{% hint style="info" %}
Para obtener más detalles y ejemplos, consulte la documentación de Anime.js.
{% endhint %}
