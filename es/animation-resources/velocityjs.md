---
chapter: 26
pageNumber: 298
description: Creación de animaciones rápidas con Velocity.js, un motor de animación de alto rendimiento.
---

# Animaciones rápidas con Velocity.js

Velocity.js es un motor de animación de alto rendimiento que es fácil de usar y funciona con y sin jQuery.

## Instalación

Puedes incluir Velocity.js en tu proyecto usando npm:

```bash
npm install velocity-animate
```

O puedes utilizar un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
```

## Animación básica

A continuación se muestra un ejemplo sencillo del uso de Velocity.js para animar un elemento:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animación Velocity.js</title>
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

## Animación avanzada

Velocity.js proporciona varias funciones para animaciones avanzadas, como secuencias, facilitación y animaciones SVG.

- **Secuencias**

Las secuencias permiten encadenar animaciones. A continuación, se muestra un ejemplo:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000 })
    .then(() => {
        return Velocity(document.getElementById('box'), { top: "100px" }, { duration: 1000 });
    });
```

- **Suavizado**

Velocity.js ofrece una variedad de opciones de suavizado para que las animaciones se vean más naturales. A continuación, se muestra un ejemplo:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000, easing: "spring" });
```

- **Animaciones SVG**

Velocity.js también puede animar elementos SVG. A continuación, se muestra un ejemplo:

```javascript
Velocity(document.querySelector('svg'), { strokeDashoffset: 0 }, { duration: 1000 });
```

{% hint style="info" %}
Para obtener más detalles y ejemplos, consulte la documentación de Velocity.js.
{% endhint %}
