---
chapter: 26
pageNumber: 253
description: Creación de animaciones 3D con Three.js, una biblioteca JavaScript para gráficos 3D.
---

# Animaciones 3D con Three.js

Three.js es una biblioteca de JavaScript que facilita la creación de gráficos 3D en la web. Se utiliza ampliamente para crear experiencias 3D inmersivas.

## Instalación

Puedes incluir Three.js en tu proyecto usando npm:

```bash
npm install three
```

O puedes utilizar un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

## Animación básica

A continuación se muestra un ejemplo sencillo del uso de Three.js para crear un cubo giratorio:

````html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animación Three.js</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();
    </script>
</body>
</html>
````

## Animación avanzada

Three.js proporciona varias funciones para animaciones avanzadas, como iluminación, texturas y física.

- **Iluminación**
Añadir iluminación a la escena puede hacerla más realista. Aquí tienes un ejemplo:

```javascript
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);
```

- **Texturas**
La aplicación de texturas a los objetos puede hacer que tengan más detalles. A continuación, se muestra un ejemplo:

```javascript
const texture = new THREE.TextureLoader().load('path/to/texture.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
```

- **Física**
La integración de la física puede hacer que tu mundo 3D sea más dinámico. Un motor de física popular que funciona con Three.js es Cannon.js.

{% hint style="info" %}
Para obtener más detalles y ejemplos, consulte la documentación de Three.js.
{% endhint %}
