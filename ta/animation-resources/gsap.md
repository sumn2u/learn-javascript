---
chapter: 26
pageNumber: 253
description: உயர் செயல்திறன் (high-performance) அனிமேஷன்களை உருவாக்குவதற்கான சக்திவாய்ந்த நூலகமான GSAP உடன் தொடங்குதல்.
---

## GSAP உடன் தொடங்குதல் (Getting Started with GSAP)

GSAP (GreenSock Animation Platform) என்பது உயர் செயல்திறன் அனிமேஷன்களை உருவாக்குவதற்கான ஒரு சக்திவாய்ந்த நூலகமாகும். அதன் வலிமை (robustness) மற்றும் நெகிழ்வுத்தன்மை (flexibility) காரணமாக இது பரவலாகப் பயன்படுத்தப்படுகிறது.

**நிறுவுதல் (Installation)**

npm ஐப் பயன்படுத்தி உங்கள் திட்டத்தில் GSAP ஐ சேர்க்கலாம்:

```bash
npm install gsap
```

அல்லது நீங்கள் CDN ஐப் பயன்படுத்தலாம்:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
```

**அடிப்படை அனிமேஷன் (Basic Animation)**

ஒரு உறுப்பை (element) அனிமேஷன் செய்ய GSAP ஐப் பயன்படுத்துவதற்கான எளிய உதாரணம் இங்கே:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP Animation</title>
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

**மேம்பட்ட அனிமேஷன் (Advanced Animation)**

டைம்லைன்கள் (timelines), ஸ்டாகர் (stagger) மற்றும் ஈசிங் (easing) போன்ற மேம்பட்ட அனிமேஷன்களுக்கான பல்வேறு அம்சங்களை GSAP வழங்குகிறது.


- **டைம்லைன்கள் (Timelines):**
டைம்லைன்கள் அனிமேஷன்களை வரிசைப்படுத்த (sequence) உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```


- **ஸ்டாகர் (Stagger):**
ஒவ்வொன்றுக்கும் இடையில் தாமதத்துடன் பல கூறுகளை (multiple elements) அனிமேஷன் செய்ய ஸ்டாகர் உங்களை அனுமதிக்கிறது. ஒரு உதாரணம் இங்கே:

```javascript
gsap.to(".box", {x: 100, duration: 1, stagger: 0.2});
```


- **ஈசிங் (Easing):**
அனிமேஷன்களை இயல்பானதாக மாற்ற GSAP பல்வேறு ஈசிங் விருப்பங்களை வழங்குகிறது. ஒரு உதாரணம் இங்கே:

```javascript
gsap.to("#box", {x: 100, duration: 1, ease: "bounce"});
```

{% hint style="info" %}
மேலும் விவரங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு, GSAP ஆவணங்களைப் பார்க்கவும்.
{% endhint %}