---
chapter: 26
pageNumber: 253
description: Création d’animations 3D avec Three.js, une bibliothèque JavaScript pour les graphiques 3D.
---

##  Animations 3D avec Three.js

Three.js s’agit d’une bibliothèque JavaScript qui facilite la création de graphiques 3D sur le web. Il est largement utilisé pour créer des expériences 3D immersives.

**Installation**

Vous pouvez inclure Three.js dans votre projet à l’aide de npm:

```bash
npm install three
```

Vous pouvez également utiliser un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

**Animation de base**

Voici un exemple simple d’utilisation de Three.js pour créer un cube rotatif:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation Three.js</title>
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

**Animation avancée**

Three.js fournit diverses fonctionnalités pour des animations avancées, telles que l’éclairage, les textures et la physique.

- **Éclairage**
L’ajout d’éclairage à votre scène peut la rendre plus réaliste. Voici un exemple:

```javascript
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);
```


- **Textures**
L’application de textures à vos objets peut les rendre plus détaillés. Voici un exemple:

```javascript
const texture = new THREE.TextureLoader().load('path/to/texture.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
```


- **Physique**
L’intégration de la physique peut rendre votre monde 3D plus dynamique. Un moteur physique populaire qui fonctionne avec Three.js est Cannon.js.

{% hint style="info" %}
Pour plus de détails et d’exemples, consultez la documentation Three.js.
{% endhint %}