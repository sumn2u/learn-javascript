---
chapter: 26
pageNumber: 254
description: இலகுரக (lightweight) ஜாவாஸ்கிரிப்ட் அனிமேஷன் நூலகமான Anime.js மூலம் அனிமேஷன்களை உருவாக்குதல்.
---

## Anime.js மூலம் அனிமேஷன்களை உருவாக்குதல் (Creating Animations with Anime.js)

Anime.js என்பது எளிமையான மற்றும் சக்திவாய்ந்த API கொண்ட இலகுரக ஜாவாஸ்கிரிப்ட் அனிமேஷன் நூலகமாகும்.

**நிறுவுதல் (Installation)**

npm ஐப் பயன்படுத்தி உங்கள் திட்டத்தில் Anime.js ஐ சேர்க்கலாம்:

```bash
npm install animejs
```

அல்லது நீங்கள் CDN ஐப் பயன்படுத்தலாம்:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

**அடிப்படை அனிமேஷன் (Basic Animation)**

ஒரு உறுப்பை (element) அனிமேஷன் செய்ய Anime.js ஐப் பயன்படுத்துவதற்கான எளிய உதாரணம் இங்கே:

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

**மேம்பட்ட அனிமேஷன் (Advanced Animation)**

கீஃப்ரேம்கள் (keyframes), டைம்லைன் (timeline) மற்றும் ஈசிங் (easing) போன்ற மேம்பட்ட அனிமேஷன்களுக்கான பல்வேறு அம்சங்களை Anime.js வழங்குகிறது.


- **கீஃப்ரேம்கள் (Keyframes):**
ஒரு அனிமேஷனின் பல நிலைகளை வரையறுக்க கீஃப்ரேம்கள் உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

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


- **டைம்லைன் (Timeline):**
டைம்லைன்கள் அனிமேஷன்களை வரிசைப்படுத்த உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

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


- **ஈசிங் (Easing):**
அனிமேஷன்களை இயல்பானதாக மாற்ற Anime.js பல்வேறு ஈசிங் விருப்பங்களை வழங்குகிறது. ஒரு உதாரணம் இங்கே:

```javascript
anime({
    targets: '#box',
    translateX: 250,
    duration: 1000,
    easing: 'easeInOutQuad'
});
```

{% hint style="info" %}
மேலும் விவரங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு, Anime.js ஆவணங்களைப் பார்க்கவும்.
{% endhint %}