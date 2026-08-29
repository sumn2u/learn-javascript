---
chapter: 26
pageNumber: 253
description: 3D கிராபிக்ஸிற்கான ஜாவாஸ்கிரிப்ட் நூலகமான Three.js உடன் 3D அனிமேஷன்களை உருவாக்குதல்.
---

## Three.js உடன் 3D அனிமேஷன்கள் (3D Animations with Three.js)

Three.js என்பது இணையத்தில் 3D கிராபிக்ஸ் (3D graphics) உருவாக்குவதை எளிதாக்கும் ஜாவாஸ்கிரிப்ட் நூலகமாகும் (library). இது தலைசிறந்த 3D அனுபவங்களை உருவாக்கப் பரவலாகப் பயன்படுத்தப்படுகிறது.

**நிறுவுதல் (Installation)**

npm ஐப் பயன்படுத்தி உங்கள் திட்டத்தில் Three.js ஐ சேர்க்கலாம்:

```bash
npm install three
```

அல்லது நீங்கள் CDN ஐப் பயன்படுத்தலாம்:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

**அடிப்படை அனிமேஷன் (Basic Animation)**

சுழலும் கனசதுரத்தை (rotating cube) உருவாக்க Three.js ஐப் பயன்படுத்துவதற்கான எளிய உதாரணம் இங்கே:

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

**மேம்பட்ட அனிமேஷன் (Advanced Animation)**

லைட்டிங் (lighting), இழைமங்கள் (textures) மற்றும் இயற்பியல் (physics) போன்ற மேம்பட்ட அனிமேஷன்களுக்கான பல்வேறு அம்சங்களை Three.js வழங்குகிறது.


- **லைட்டிங் (Lighting):**
உங்கள் காட்சிக்கு (scene) லைட்டிங் சேர்ப்பது மிகவும் யதார்த்தமாக இருக்கும். ஒரு உதாரணம் இங்கே:

```javascript
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);
```


- **இழைமங்கள் (Textures):**
உங்கள் பொருள்களுக்கு (objects) இழைமங்களைப் பயன்படுத்துவது அவற்றை மிகவும் விரிவாக மாற்றும். ஒரு உதாரணம் இங்கே:

```javascript
const texture = new THREE.TextureLoader().load('path/to/texture.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
```


- **இயற்பியல் (Physics):**
இயற்பியலை ஒருங்கிணைப்பது உங்கள் 3D உலகத்தை மேலும் மாறும் தன்மையுடையதாக (dynamic) மாற்றும். Three.js உடன் வேலை செய்யும் ஒரு பிரபலமான இயற்பியல் இயந்திரம் (physics engine) Cannon.js ஆகும்.

{% hint style="info" %}
மேலும் விவரங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு, Three.js ஆவணங்களைப் பார்க்கவும்.
{% endhint %}