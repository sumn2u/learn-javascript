---
chapter: 16
pageNumber: 105
description: location என்பது உலாவியில் காட்டப்படும் வலைப்பக்கத்தின் தற்போதைய URL ஐக் குறிக்கும் உள்ளமைக்கப்பட்ட பொருளாகும் (built-in object). இது தற்போதைய வலைப்பக்கத்தின் இருப்பிடத்தை வழங்குகிறது மற்றும் URL கள் தொடர்பான பல்வேறு செயல்பாடுகளைச் செய்ய அனுமதிக்கிறது.
---
# இருப்பிடம் (Location)

ஆவணத்தின் (document) தற்போதைய இருப்பிடத்தை (URL) மீட்டெடுக்க (retrieve) `location` பொருள் பயன்படுத்தப்படுகிறது மற்றும் ஆவண இருப்பிடத்தைக் கையாள வெவ்வேறு முறைகளை (methods) வழங்குகிறது. ஒருவர் தற்போதைய இருப்பிடத்தை இதன் மூலம் அணுகலாம்

```javascript
window.location
//அல்லது
document.location
//அல்லது
location
```

> _**குறிப்பு**_: `window.location` மற்றும் `document.location` ஆகியவை ஒரே location பொருளைக் குறிக்கின்றன.

பின்வரும் URL இன் உதாரணத்தை எடுத்துக்கொண்டு `location` இன் வெவ்வேறு பண்புகளை ஆராய்வோம்

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)

```javascript
location.href //தற்போதைய ஆவண URL ஐ அச்சிடுகிறது
location.protocol //http: அல்லது https: போன்ற நெறிமுறையை (protocol) அச்சிடுகிறது
location.host //localhost அல்லது localhost:3000 போன்ற போர்ட் (port) கொண்ட ஹோஸ்ட்பெயரை (hostname) அச்சிடுகிறது
location.hostname //localhost அல்லது www.example.com போன்ற ஹோஸ்ட்பெயரை அச்சிடுகிறது
location.port //3000 போன்ற போர்ட் (port) எண்ணை அச்சிடுகிறது
location.pathname // /js/index.html போன்ற பாதைபெயரை (pathname) அச்சிடுகிறது
location.search // ?type=listing&page=2 போன்ற வினவல் சரத்தை (query string) அச்சிடுகிறது
location.hash // #title போன்ற துண்டு அடையாளங்காட்டியை (fragment identifier) அச்சிடுகிறது
```
