---
chapter: 5
pageNumber: 42
description: else முக்கிய சொல் (keyword) if அறிக்கையுடன் இணைந்து பயன்படுத்தப்பட்டு, if அறிக்கையில் குறிப்பிடப்பட்ட நிபந்தனை false என மதிப்பிடப்படும்போது (evaluates) செயல்படுத்த ஒரு மாற்று குறியீட்டுத் தொகுதியை (code block) வழங்குகிறது.
---
# Else

முதல் நிபந்தனை `true` ஆக இல்லாதபோது பயன்படுத்தப்படும் `else` பிரிவு (clause) ஒன்றும் உள்ளது. நீங்கள் எந்த மதிப்பிற்கும் பதிலளிக்க விரும்பினால் இது மிகவும் சக்திவாய்ந்தது, ஆனால் சிறப்புக் கவனிப்பிற்காக ஒன்றைக் குறிப்பாகத் தேர்ந்தெடுக்கலாம்.

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

`else` பிரிவை மற்றொரு `if` உடன் இணைக்கலாம். முந்தைய கட்டுரையிலிருந்து உதாரணத்தை மீண்டும் உருவாக்குவோம்.

```javascript
if (country === "England") {
  ...
} else if (country === "France") {
  ...
} else if (country === "Germany") {
  ...
}
```

{% exercise %}
பின்வரும் மதிப்புகளிலிருந்து `num1` ஆனது `num2` ஐ விட பெரியதா என்று சோதிக்கும் ஒரு நிபந்தனை அறிக்கையை (conditional statement) எழுதவும். அது பெரியதாக இருந்தால், `result` மாறிக்கு (variable) "num1 is greater than num2" என்பதை ஒதுக்கவும். அது இல்லையென்றால், "num1 is less than or equal to num2" என்பதை ஒதுக்கவும்.

{% initial %}
let num1 = 10;
let num2 = 5;
let result;

// num1 ஆனது num2 ஐ விட பெரியதா என சரிபார்க்கவும்
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;

// num1 ஆனது num2 ஐ விட பெரியதா என சரிபார்க்கவும்
if (num1 > num2) {
  result = "num1 is greater than num2";
} else {
  result = "num1 is less than or equal to num2";
}

{% validation %}
assert(result == "num1 is greater than num2" );

{% context %}
{% endexercise %}
