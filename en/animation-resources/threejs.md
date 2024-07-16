---
chapter: 26
pageNumber: 253
description: Creating 3D animations with Three.js, a JavaScript library for 3D graphics.
---

## 3D Animations with Three.js

Three.js is a JavaScript library that makes creating 3D graphics on the web easier. It is widely used for creating immersive 3D experiences.

**Installation**

You can include Three.js in your project using npm:

```bash
npm install three
```

Or you can use a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

**Basic Animation**

Here's a simple example of using Three.js to create a rotating cube:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Animation</title>
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
```

**Advanced Animation**

Three.js provides various features for advanced animations, such as lighting, textures, and physics.


- **Lighting**
Adding lighting to your scene can make it more realistic. Here's an example:

```javascript
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);
```


- **Textures**
Applying textures to your objects can make them more detailed. Here's an example:

```javascript
const texture = new THREE.TextureLoader().load('path/to/texture.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
```


- **Physics**
Integrating physics can make your 3D world more dynamic. One popular physics engine that works with Three.js is Cannon.js.

{% hint style="info" %}
For more details and examples, check out the Three.js documentation.
{% endhint %}