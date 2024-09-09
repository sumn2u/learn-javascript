---
chapter: 26
pageNumber: 291
description: Introducción a GSAP, una potente biblioteca para crear animaciones de alto rendimiento.
---

# Introducción a GSAP

GSAP (GreenSock Animation Platform) es una potente biblioteca para crear animaciones de alto rendimiento. Es muy utilizada debido a su robustez y flexibilidad.

## Instalación

Puede incluir GSAP en su proyecto usando npm:

```bash
npm install gsap
```

O puedes utilizar un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
```

## Animación básica

A continuación se muestra un ejemplo sencillo del uso de GSAP para animar un elemento:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animación GSAP</title>
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

## Animación avanzada

GSAP proporciona varias funciones para animaciones avanzadas, como líneas de tiempo, escalonamiento y suavizado.

- **Líneas de tiempo:**
Las líneas de tiempo permiten secuenciar animaciones. A continuación, se muestra un ejemplo:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```

- **Escalonamiento:**
El escalonamiento te permite animar varios elementos con un retraso entre cada uno. A continuación, se muestra un ejemplo:

```javascript
gsap.to(".box", {x: 100, duration: 1, stagger: 0.2});
```


- **Suavizado:**
GSAP ofrece una variedad de opciones de suavizado para que las animaciones se vean más naturales. A continuación, se muestra un ejemplo:

```javascript
gsap.to("#box", {x: 100, duration: 1, ease: "bounce"});
```

{% hint style="info" %}
Para obtener más detalles y ejemplos, consulte la documentación de GSAP.
{% endhint %}
