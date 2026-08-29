---
chapter: 21
pageNumber: 150
---

# மாறிலிகள் (Constants)

மாறிலிகள் ES6 இல் (2015) அறிமுகப்படுத்தப்பட்டன, மேலும் அவை `const` முக்கிய சொல்லைப் (keyword) பயன்படுத்துகின்றன. `const` உடன் அறிவிக்கப்பட்ட (declared) மாறிகளை மீண்டும் ஒதுக்கவோ (reassigned) அல்லது மீண்டும் அறிவிக்கவோ (redeclared) முடியாது.&#x20;

### எடுத்துக்காட்டு:

```javascript
const VERSION = "1.2";
```

### 📝 பணி (Task):

- [ ] கீழே குறிப்பிடப்பட்டுள்ள நிரலை இயக்கி, கன்சோலில் நீங்கள் காணும் பிழையைச் சரிசெய்யவும். குறியீடு கன்சோலில் சரி செய்யப்படும்போது அதன் முடிவு `0.9` என்பதை உறுதிப்படுத்தவும்.

  ```javascript
  const VERSION = "0.7";
  VERSION = "0.9";
  console.log(VERSION);
  ```

- [ ] _டிகிரி செல்சியஸ் (degrees Celsius)_ இல் வெப்பநிலையை (temperature) உள்ளிடுமாறு (prompt) பயனரைக் கேட்கும் நிரலை எழுதவும், பின்னர் அதை _டிகிரி ஃபாரன்ஹீட் (degrees Fahrenheit)_ ஆக மாற்றுவதற்கு `9/5`க்குச் சமமான மாறிலி (constant) `CONVERSION_FACTOR` ஐப் பயன்படுத்தவும்.

  ```javascript
  const CONVERSION_FACTOR = 9 / 5;

  /* Start your code from here*/
  ```

### 💡 குறிப்புகள் (Hints):

- const பற்றிய கூடுதல் தகவலுக்கு [மாறிகள் (Variables)](../basics/variables.md) அத்தியாயத்தைப் பார்வையிடவும், மேலும் ஒரு திருத்தத்தைக் கற்றுக்கொள்ளத் தேடுபொறிகளில் (search engines) "_TypeError assignment to constant variable_" என்பதைத் தேடவும்.&#x20;

{% if output.name == "website" %}
{% aceeditor compilerTitle="Try it!" %}
{% endaceeditor %}
{% endif %}