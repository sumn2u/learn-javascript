---
chapter: 21
pageNumber: 151
---

# இணைத்தல் (Concatenation)

எந்தவொரு நிரலாக்க மொழியிலும், சரம் இணைத்தல் (string concatenation) என்பது ஒன்று அல்லது அதற்கு மேற்பட்ட சரங்களை மற்றொரு சரத்துடன் சேர்ப்பதைக் குறிக்கிறது. எடுத்துக்காட்டாக, "_World_" மற்றும் "_Good Afternoon_" ஆகிய சரங்கள் "_Hello_" என்ற சரத்துடன் இணைக்கப்படும்போது, அவை "_Hello World, Good Afternoon_" என்ற சரத்தை உருவாக்குகின்றன. ஜாவாஸ்கிரிப்டில் நாம் பல வழிகளில் சரத்தை இணைக்க முடியும்.

### எடுத்துக்காட்டு:

```javascript
const icon = "👋";

// using template Strings
`hi ${icon}`;

// using join() Method
["hi", icon].join(" ");

// using concat() Method
"".concat("hi ", icon);

//  using + operator
"hi " + icon;

// RESULT
// hi 👋
```

### 📝 பணி (Task):

- [ ] கன்சோலில் '_Hello World_' என்பதை அச்சிட `str1` மற்றும் `str2` க்கான மதிப்புகளை அமைப்பதற்கான நிரலை எழுதவும்.

- [ ] பயனரின் முதல் பெயரையும் (`first_name`) கடைசி பெயரையும் (`last_name`) உள்ளிடுமாறு (prompt) கேட்கும் ஒரு நிரலை எழுதவும். பின்னர், அவர்களின் முழுப் பெயரை (`full_name`) உருவாக்கவும் காண்பிக்கவும் சரம் இணைப்பைப் பயன்படுத்தவும்.

- [ ] பயனரின் பெயரை உள்ளிடுமாறு கேட்கும் ஒரு நிரலை எழுதவும். பின்னர், அவர்களின் பெயரைக் கொண்ட வாழ்த்துச் செய்தியை (greeting message) உருவாக்கச் சரம் இணைப்பைப் பயன்படுத்தவும். எடுத்துக்காட்டுகளுக்கு: `Good morning, Aman`.

### 💡 குறிப்புகள் (Hints):

- சரம் இணைப்பைப் பற்றிய கூடுதல் தகவலுக்கு, சரங்களின் (strings) [இணைத்தல் (concatenation)](../strings/concat.md) அத்தியாயத்தைப் பார்வையிடவும்.
Console output: {{ output.name }}
{% if output.name == "website" %}
{% aceeditor compilerTitle="Try it!" %}
{% endaceeditor %}
{% endif %}