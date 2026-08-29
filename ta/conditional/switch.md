---
chapter: 5
pageNumber: 43
description: Switch என்பது வெவ்வேறு நிபந்தனைகளின் அடிப்படையில் செயல்களைச் செய்யும் நிபந்தனை அறிக்கை (conditional statement). இது நிபந்தனைகளைப் பொருத்த (match) கண்டிப்பான (strict) ஒப்பீட்டைப் பயன்படுத்துகிறது மற்றும் பொருந்திய நிபந்தனையின் குறியீட்டுத் தொகுதிகளை (code blocks) செயல்படுத்துகிறது.
---
# Switch

`switch` என்பது வெவ்வேறு நிபந்தனைகளின் அடிப்படையில் செயல்களைச் செய்யும் ஒரு நிபந்தனை அறிக்கையாகும். நிபந்தனைகளைப் பொருத்த இது கண்டிப்பான ( `===` ) ஒப்பீட்டைப் பயன்படுத்துகிறது மற்றும் பொருந்திய நிபந்தனையின் குறியீட்டுத் தொகுதிகளைச் செயல்படுத்துகிறது. `switch` வெளிப்பாட்டின் (expression) தொடரியல் கீழே காட்டப்பட்டுள்ளது.

```javascript
switch(expression) {
  case x:
    // குறியீட்டுத் தொகுதி (code block)
    break;
  case y:
    // குறியீட்டுத் தொகுதி
    break;
  default:
    // குறியீட்டுத் தொகுதி
}
```

வெளிப்பாடு (expression) ஒரு முறை மதிப்பிடப்பட்டு (evaluated) ஒவ்வொரு case உடனும் ஒப்பிடப்படுகிறது. பொருத்தம் (match) கண்டறியப்பட்டால், தொடர்புடைய குறியீட்டுத் தொகுதி செயல்படுத்தப்படும், இல்லையெனில் `default` குறியீட்டுத் தொகுதி செயல்படுத்தப்படும். `break` முக்கிய சொல் (keyword) செயல்படுத்துவதை நிறுத்துகிறது மற்றும் எங்கும் வைக்கப்படலாம். அது இல்லாத நிலையில், நிபந்தனைகள் பொருந்தவில்லை என்றாலும் கூட, அடுத்த நிபந்தனை மதிப்பிடப்படும்.&#x20;

switch நிபந்தனையின் அடிப்படையில் வார நாளின் (weekday) பெயரைப் பெறுவதற்கான எடுத்துக்காட்டு கீழே காட்டப்பட்டுள்ளது.&#x20;

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

பல பொருந்தும் நிகழ்வுகளில் (matching cases), **முதல்** பொருந்தும் மதிப்பு தேர்ந்தெடுக்கப்படுகிறது, இல்லையெனில் default மதிப்பு தேர்ந்தெடுக்கப்படும். default மற்றும் பொருந்தும் case இல்லாத நிலையில், நிரல் switch நிபந்தனைகளுக்குப் பிறகு அடுத்த அறிக்கை(களுக்கு) தொடர்கிறது.&#x20;

{% exercise %}
பின்வரும் மதிப்புகளிலிருந்து dayOfWeek இன் மதிப்பைச் சரிபார்க்கும் ஒரு `switch` அறிக்கையை எழுதவும். dayOfWeek "Monday", "Tuesday", "Wednesday", "Thursday" அல்லது "Friday" ஆக இருந்தால், result மாறிக்கு "It's a weekday" என்பதை ஒதுக்கவும். `dayOfWeek` "Saturday" அல்லது "Sunday" ஆக இருந்தால், result க்கு "It's the weekend" என்பதை ஒதுக்கவும்.

{% initial %}
let dayOfWeek = "Monday";
let result;
// இது வேலை நாளா (weekday) அல்லது வார இறுதியா (weekend) என்பதைச் சரிபார்க்கவும்
switch(expression) {
  case x:
    // குறியீட்டுத் தொகுதி
    break;
  case y:
    // குறியீட்டுத் தொகுதி
    break;
  default:
    // குறியீட்டுத் தொகுதி
}
{% solution %}
let dayOfWeek = "Monday";
let result;
// இது வேலை நாளா அல்லது வார இறுதியா என்பதைச் சரிபார்க்கவும்
switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    result = "It's a weekday";
    break;
  case "Saturday":
  case "Sunday":
    result = "It's the weekend";
    break;
  default:
    result = "Invalid day of the week";
    break;
}
{% validation %}
assert(result == "It's a weekday" );

{% context %}
{% endexercise %}
