---
chapter: 18
pageNumber: 111
description: Async/Await என்பது ECMAScript 2017 இல் (ES8) அறிமுகப்படுத்தப்பட்ட ஒரு அம்சமாகும், இது ஒத்திசைவற்ற (asynchronous) ஜாவாஸ்கிரிப்ட் குறியீட்டுடன் பணிபுரிய மிகவும் சுருக்கமான மற்றும் படிக்கக்கூடிய தொடரியலை (syntax) வழங்குகிறது. இது ஜாவாஸ்கிரிப்ட் Promises இன் மேல் கட்டமைக்கப்பட்டுள்ளது மற்றும் ஒத்திசைவான (synchronous) முறையில் ஒத்திசைவற்ற செயல்பாடுகளைக் கையாளப் பயன்படுகிறது.
---

# Async/Await

promises உடன், ஒரு promise ஐத் திரும்பப் பெறும் ஒரு ஒத்திசைவற்ற செயல்பாட்டை அறிவிக்க `async` முக்கிய சொல்லை (keyword) ஒருவர் பயன்படுத்தலாம், அதேசமயம் `await` தொடரியல் ஜாவாஸ்கிரிப்டை அந்த promise தீர்க்கப்பட்டு (settles) அதன் மதிப்பைக் கொடுக்கும் வரை காத்திருக்கச் செய்கிறது. இந்த முக்கிய சொற்கள் promises ஐ எழுத எளிதாக்குகின்றன. async இன் எடுத்துக்காட்டு கீழே காட்டப்பட்டுள்ளது.

```javascript
//async செயல்பாடு f
async function f() {
  return 1;
}
// promise தீர்க்கப்படுகிறது (resolved)
f().then(alert); // 1
```

மேலே உள்ள உதாரணத்தை பின்வருமாறு எழுதலாம்:

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async` செயல்பாடு ஒரு promise ஐத் திரும்பப் பெறுவதை உறுதிசெய்கிறது, மேலும் promises அல்லாதவற்றை (non-promises) அதனுள் சுற்றிக் கட்டுகிறது (wraps). `await` உடன், promise அதன் மதிப்பைக் கொடுக்கும் வரை நாம் ஜாவாஸ்கிரிப்டைக் காத்திருக்கச் செய்யலாம்.&#x20;

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Learn JavaScript க்கு வரவேற்கிறோம்!"), 1000)
  });
  
  let result = await promise; // promise தீர்க்கப்படும் வரை காத்திருக்கவும் (*)
  alert(result); // "Learn JavaScript க்கு வரவேற்கிறோம்!"
}

f();
```

{% hint style="working" %}
`await` முக்கிய சொல்லை ஒரு `async` செயல்பாட்டிற்குள் மட்டுமே பயன்படுத்த முடியும்.
{% endhint %}
