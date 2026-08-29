---
chapter: 21
pageNumber: 156
---
# தலைப்புகளைப் பெறுங்கள்! (Get the Titles!)

_Get the Titles!_ பிரச்சனை (problem) ஒரு சுவாரஸ்யமான பிரச்சனையாகும், அங்குப் புத்தகங்களின் பட்டியலிலிருந்து நாம் தலைப்பைப் பெற வேண்டும். வரிசைகள் (arrays) மற்றும் பொருள்களைச் (objects) செயல்படுத்துவதற்கான சிறந்த பயிற்சி இது.

### 📝 பணிகள் (Tasks):

ஒரு ஆசிரியருடன் (author) புத்தகங்களைக் குறிக்கும் பொருள்களின் வரிசை கொடுக்கப்பட்டுள்ளது.

```javascript
const books = [
  {
    title: "Eloquent JavaScript, Third Edition",
    author: "Marijn Haverbeke"
  },
  {
    title: "Practical Modern JavaScript",
    author: "Nicolás Bevacqua"
  }
]
```

* [ ] ஒரு வரிசையை (array) எடுத்துத் தலைப்பின் வரிசையைத் திரும்பப் பெறும் மற்றும் அதன் மதிப்பைக் `console` இல் அச்சிடும் `getTheTitles` என்ற செயல்பாட்டை உருவாக்க ஒரு நிரலை எழுதவும்.

### 💡 குறிப்புகள் (Hints):

* வரிசை மற்றும் பொருள் எவ்வாறு செயல்படுகிறது என்பதைப் புரிந்து கொள்ள [வரிசைகள் (arrays)](../arrays/) மற்றும் [பொருள்கள் (objects)](../objects/) அத்தியாயத்தைப் பார்வையிடவும்.

{% if output.name == "website" %}
{% aceeditor compilerTitle="Try it!" %}
{% endaceeditor %}
{% endif %}