---
chapter: 12
pageNumber: 87
description: ஒத்திசைவான (synchronous) பிழைகளை விட ஒத்திசைவற்ற (asynchronous) பிழைகளைக் கையாள்வது சற்று சிக்கலானது. சிக்கல் என்னவென்றால், பிழையை உருவாக்கும் குறியீடு பிழையைக் கையாள்வதற்கு நேரடியாகப் பொறுப்பல்ல. மாறாக, ஒத்திசைவற்ற செயல்பாடு முடிந்ததும் இயக்கப்படும் callback செயல்பாட்டால் பிழை கையாளப்படும்.
---

# ஒத்திசைவற்ற பிழை கையாளுதல் (Asynchronous Error Handling)

ஒத்திசைவான பிழைகளை விட ஒத்திசைவற்ற பிழைகளைக் கையாள்வது சற்று சிக்கலானது. சிக்கல் என்னவென்றால், பிழையை உருவாக்கும் குறியீடு பிழையைக் கையாள்வதற்கு நேரடியாகப் பொறுப்பல்ல. மாறாக, ஒத்திசைவற்ற செயல்பாடு முடிந்ததும் இயக்கப்படும் callback செயல்பாட்டால் பிழை கையாளப்படும்.

ஒத்திசைவற்ற பிழைகளை நீங்கள் எவ்வாறு கையாளலாம் என்பதை கீழே உள்ள எடுத்துக்காட்டு காட்டுகிறது:
## எடுத்துக்காட்டுகள்

ஒரு சேவையகத்திலிருந்து (server) சில தரவிறக்கம் செய்ய `fetch` API ஐப் பயன்படுத்தும்போது ஒரு பொதுவான உதாரணம். `fetch` API சேவையகத்தின் பதிலுடன் தீர்க்கப்படும் (resolves) ஒரு promise ஐத் திரும்பப் பெறுகிறது. சேவையகம் பிழையைத் திருப்பியளித்தால், promise பிழையுடன் நிராகரிக்கப்படும் (reject).

#### `async/await` உடன் `try...catch` ஐப் பயன்படுத்துதல்

`async/await` ஐப் பயன்படுத்துவது ஒத்திசைவற்ற குறியீட்டை ஒத்திசைவான குறியீட்டைப் போல தோற்றமளிக்கவும் செயல்படவும் செய்கிறது, இது படிக்கவும் புரிந்துகொள்ளவும் எளிதாக்கும். `try...catch` ஐப் பயன்படுத்தி பிழைகளை எவ்வாறு கையாளலாம் என்பது இங்கே:

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
    }
}
```


#### Promises இல் `.catch()` மூலம் பிழைகளைக் கையாளுதல்
நேரடியாக Promises ஐப் பயன்படுத்தும்போது, நீங்கள் `.catch()` முறையைப் பயன்படுத்தி பிழைகளைக் கையாளலாம்:

```javascript

fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
    });

```


### சிறந்த நடைமுறைகள் (Best Practices)

எப்பொழுதும் பிழைகளைக் கையாளவும்: ஒவ்வொரு ஒத்திசைவற்ற செயல்பாட்டிலும் பிழை கையாளுதல் இருப்பதை உறுதிசெய்யவும்.


```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
    }
}
```


`async/await` உடன் `try...catch` ஐப் பயன்படுத்தவும்: இது குறியீட்டைப் படிக்க எளிதாக்குகிறது மற்றும் பராமரிக்க எளிதாக்குகிறது.

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
    }
}
```


#### நேர்த்தியான சரிவு (Graceful Degradation): மாற்று நடத்தை (fallback behavior) அல்லது பயனர் நட்பு பிழை செய்திகளை வழங்கவும்.

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
        return { fallbackData: true }; // மாற்று நடத்தை
    }
}
```


#### பதிவு செய்தல் (Logging): பிழைதிருத்தம் மற்றும் கண்காணிப்பு நோக்கங்களுக்காக பிழைகளைப் பதிவு செய்யவும்.

```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
        // கண்காணிப்பு சேவைக்கு பிழையைப் பதிவு செய்யவும்
        logErrorToService(error);
    }
}

function logErrorToService(error) {
    // கண்காணிப்பு சேவைக்கு பிழையைப் பதிவு செய்வதற்கான செயலாக்கம்
}
```


#### அமைதியான தோல்விகளைத் தவிர்க்கவும் (Avoid Silent Failures): பிழைகள் அமைதியாக விழுங்கப்படாமல் பார்த்துக் கொள்ளுங்கள்; எப்பொழுதும் அவற்றைப் பதிவு செய்யவும் அல்லது கையாளவும்.


```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('தரவைப் பெறுவதில் பிழை:', error);
    }
}
```



#### மையப்படுத்தப்பட்ட பிழை கையாளுதல் (Centralized Error Handling): பெரிய பயன்பாடுகளுக்கு மையப்படுத்தப்பட்ட பிழை கையாளும் பொறிமுறையைப் பயன்படுத்துவதைக் கருத்தில் கொள்ளவும்.


```javascript
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    console.error('பிழை:', error);
    // மையப்படுத்தப்பட்ட பிழை கையாளுதல் தர்க்கம்
}
```


ஒத்திசைவற்ற செயல்பாடுகளில் முறையான பிழை கையாளுதல் நெகிழ்ச்சியான (resilient) ஜாவாஸ்கிரிப்ட் பயன்பாடுகளை உருவாக்குவதற்கு முக்கியமானது. இந்த வழிகாட்டியில் விவரிக்கப்பட்டுள்ள எடுத்துக்காட்டுகள் மற்றும் சிறந்த நடைமுறைகளைப் பின்பற்றுவதன் மூலம், உங்கள் குறியீடு பிழைகளை நேர்த்தியாகக் கையாளுவதையும், பயனர்களுக்கு அர்த்தமுள்ள பின்னூட்டங்களை வழங்குவதையும், ஒட்டுமொத்த பயன்பாட்டின் நிலைத்தன்மையைப் பராமரிப்பதையும் உறுதிசெய்யலாம். ஒவ்வொரு ஒத்திசைவற்ற செயல்பாட்டிலும் பிழைகளைக் கையாள எப்போதும் நினைவில் கொள்ளுங்கள், வாசிப்புத்திறனுக்காக `async/await` உடன் `try...catch` ஐப் பயன்படுத்தவும், மேலும் பெரிய பயன்பாடுகளுக்கு மையப்படுத்தப்பட்ட பிழை கையாளுதலைச் செயல்படுத்தவும். இந்த உத்திகள் மூலம், நீங்கள் ஒத்திசைவற்ற பிழைகளை திறம்பட நிர்வகிக்கலாம் மற்றும் மிகவும் நம்பகமான மற்றும் பயனர் நட்பு பயன்பாடுகளை உருவாக்கலாம்.
