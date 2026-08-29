---
chapter: 21
pageNumber: 154
---
# பொருள்கள் (Objects)

பொருள்கள் (Objects) என்பவை `key` (திறவுகோல்), `value` (மதிப்பு) ஜோடிகளின் தொகுப்பாகும், மேலும் ஒவ்வொரு key-value ஜோடியும் பண்பு (property) எனப்படும். இங்கே, `key` இன் பண்பு ஒரு `string` ஆக (சரம்) இருக்கலாம், அதேசமயம் அதன் `value` எந்த மதிப்பாகவும் இருக்கலாம்.

### 📝 பணிகள் (Tasks):

இரண்டு உறுப்பினர்களைக் கொண்ட ஒரு Doe குடும்பம் கொடுக்கப்பட்டுள்ளது, அங்கு ஒவ்வொரு உறுப்பினரின் தகவலும் ஒரு பொருளின் (object) வடிவத்தில் வழங்கப்படுகிறது.&#x20;

```javascript
let person = {
    name: "John",                    //String
    lastName: "Doe",
    age: 35,                         //Number
    gender: "male",
    luckyNumbers: [ 7, 11, 13, 17], //Array
    significantOther: person2       //Object, 
};

let person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [ 2, 4, 6, 8],
    significantOther: person
};

let family = {
    lastName: "Doe",
    members: [person, person2]       //Array of objects
};
```

* [ ] Doe குடும்பத்தின் முதல் உறுப்பினரின் பெயரை `console` இல் அச்சிடுவதற்கான வழியைக் கண்டறியவும்.
* [ ] Doe குடும்பத்தின் இரண்டாவது உறுப்பினரின் நான்காவது `luckyNumbers` ஐ `33` ஆக மாற்றவும்.
* [ ] ஒரு புதிய நபரை (`Jimmy` `Doe`, `13`, `male`, `[1, 2, 3, 4]`, `null`) உருவாக்குவதன் மூலம் குடும்பத்தில் ஒரு புதிய உறுப்பினரைச் சேர்த்து உறுப்பினர் பட்டியலைப் புதுப்பிக்கவும்.
* [ ] `console` இல் Doe குடும்பத்தின் அதிர்ஷ்ட எண்களின் (lucky numbers) கூட்டுத்தொகையை (`SUM`) அச்சிடவும்.&#x20;

### 💡 குறிப்புகள் (Hints):

* பொருள் எவ்வாறு செயல்படுகிறது என்பதைப் புரிந்து கொள்ள [பொருள்கள் (objects)](../objects/) அத்தியாயத்தைப் பார்வையிடவும்.
* family பொருளுக்குள் இருக்கும் ஒவ்வொரு person பொருளில் இருந்தும் `luckyNumbers` ஐ நீங்கள் பெறலாம்.
* ஒவ்வொரு வரிசையையும் (array) பெற்றவுடன் ஒவ்வொரு உறுப்பையும் (element) சேர்த்து லூப் (loop) செய்து, பிறகு 3 குடும்ப உறுப்பினர்களின் கூட்டுத்தொகையையும் சேர்க்கவும்.

{% if output.name == "website" %}
{% aceeditor compilerTitle="Try it!" %}
{% endaceeditor %}
{% endif %}