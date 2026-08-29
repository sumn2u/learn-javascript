---
chapter: 26
pageNumber: 254
description: உயர் செயல்திறன் அனிமேஷன் இயந்திரமான (high-performance animation engine) Velocity.js மூலம் வேகமான அனிமேஷன்களை உருவாக்குதல்.
---

## Velocity.js உடன் வேகமான அனிமேஷன்கள் (Fast Animations with Velocity.js)

Velocity.js என்பது உயர் செயல்திறன் அனிமேஷன் இயந்திரமாகும், இது பயன்படுத்த எளிதானது மற்றும் jQuery உடனும் அல்லது இல்லாமலும் செயல்படுகிறது.

**நிறுவுதல் (Installation)**

npm ஐப் பயன்படுத்தி உங்கள் திட்டத்தில் Velocity.js ஐ சேர்க்கலாம்:

```bash
npm install velocity-animate
```

அல்லது நீங்கள் CDN ஐப் பயன்படுத்தலாம்:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
```

**அடிப்படை அனிமேஷன் (Basic Animation)**
ஒரு உறுப்பை (element) அனிமேஷன் செய்ய Velocity.js ஐப் பயன்படுத்துவதற்கான எளிய உதாரணம் இங்கே:

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

**மேம்பட்ட அனிமேஷன் (Advanced Animation)**

தொடர்கள் (sequences), ஈசிங் (easing) மற்றும் SVG அனிமேஷன்கள் போன்ற மேம்பட்ட அனிமேஷன்களுக்கான பல்வேறு அம்சங்களை Velocity.js வழங்குகிறது.


- **தொடர்கள் (Sequences)**

அனிமேஷன்களை ஒன்றாகச் சங்கிலிபோல் இணைக்க (chain) தொடர்கள் உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000 })
    .then(() => {
        return Velocity(document.getElementById('box'), { top: "100px" }, { duration: 1000 });
    });
```


- **ஈசிங் (Easing)**

அனிமேஷன்களை இயல்பானதாக மாற்ற Velocity.js பல்வேறு ஈசிங் விருப்பங்களை வழங்குகிறது. ஒரு உதாரணம் இங்கே:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000, easing: "spring" });
```


- **SVG அனிமேஷன்கள் (SVG Animations)**

Velocity.js ஆனது SVG உறுப்புகளையும் அனிமேஷன் செய்ய முடியும். ஒரு உதாரணம் இங்கே:

```javascript
Velocity(document.querySelector('svg'), { strokeDashoffset: 0 }, { duration: 1000 });
```

{% hint style="info" %}
மேலும் விவரங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு, Velocity.js ஆவணங்களைப் பார்க்கவும்.
{% endhint %}
