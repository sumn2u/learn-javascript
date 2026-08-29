---
chapter: 12
pageNumber: 86
description: try catch finally டெவலப்பர்களை ஒரு குறியீட்டுத் தொகுதியைச் செயல்படுத்தும் போது நிகழக்கூடிய விதிவிலக்குகளை (பிழைகள்) நேர்த்தியாகக் கையாளவும், விதிவிலக்கு எறியப்பட்டதா இல்லையா என்பதைப் பொருட்படுத்தாமல் குறிப்பிட்ட துப்புரவுச் செயல்கள் (cleanup actions) எப்போதும் செயல்படுத்தப்படுவதை உறுதி செய்யவும் அனுமதிக்கிறது.
---
# try...catch...finally

`try...catch` உடன் `finally` எனப்படும் மேலும் ஒரு கட்டமைப்பைச் சேர்க்கலாம், இந்தக் குறியீடு எல்லாச் சந்தர்ப்பங்களிலும் செயல்படும். அதாவது பிழை இல்லாதபோது `try` க்குப் பிறகும், பிழை ஏற்பட்டால் `catch` க்குப் பிறகும். `try ...catch...finally` க்கான தொடரியல் (syntax) கீழே காட்டப்பட்டுள்ளது.

```javascript
try {
   // குறியீட்டைச் செயல்படுத்த முயற்சிக்கவும்
} catch (err) {
    // பிழைகளைக் கையாளவும் 
} finally {
   // எப்போதும் செயல்படுத்தவும்
}
```

நிஜ உலக எடுத்துக்காட்டுக் குறியீட்டை இயக்குதல்.

```javascript
try {
  alert( 'try' );
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

மேலே உள்ள எடுத்துக்காட்டில், `try` தொகுதி முதலில் செயல்படுத்தப்படுகிறது, பின்னர் பிழைகள் எதுவும் இல்லாததால் `finally` தொடர்கிறது.

{% exercise %}
numerator மற்றும் denominator என்ற இரண்டு வாதங்களை (arguments) எடுத்து, பின்வரும் அமைப்புகளைப் பயன்படுத்தி numerator ஐ denominator ஆல் வகுப்பதன் முடிவைத் திரும்பப் பெறும் `divideNumbers()` என்ற செயல்பாட்டை (function) எழுதவும்.

{% initial %}
function divideNumbers(numerator, denominator) {
    try {
      // numerator ஐ denominator ஆல் வகுக்க try அறிக்கை.
    } catch (error) {
      // பிழை செய்தியை அச்சிடுக
    } finally {
      // செயல்படுத்துதல் முடிந்தது என்பதை அச்சிடுக
    }
   // முடிவை திரும்பப் பெறுக
  }
  let answer = divideNumbers(10, 2);

{% solution %}
function divideNumbers(numerator, denominator) {
  let result;
    try {
      result = numerator / denominator;
    } catch (error) {
      console.error(`பிழை: ${error}`);
    } finally {
      console.log('செயல்பாடு செயல்படுத்துவதை முடித்தது');
    }
    return result;
  }
let answer = divideNumbers(10, 2);
{% validation %}
assert(answer == 5);

{% context %}
{% endexercise %}
