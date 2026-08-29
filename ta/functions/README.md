---
layout: editorial
chapter: 8
pageNumber: 68
description: Functions ஒரு குறிப்பிட்ட பணி அல்லது பணிகளின் தொகுப்பை செய்யும் குறியீட்டுத் தொகுதிகள். அவை ஒரு நிரலில் எந்த நேரத்திலும் அழைக்கப்படக்கூடிய மற்றும் இயக்கப்படக்கூடிய மீண்டும் பயன்படுத்தக்கூடிய குறியீட்டு அலகுகளாகும்.
---

# அத்தியாயம் 8
# செயல்பாடுகள் (Functions)

நிரலாக்கத்தில் மிக சக்திவாய்ந்த மற்றும் அவசியமான கருத்துக்களில் Functions ஒன்றாகும். கணித சார்புகளைப் போன்ற Functions மாற்றங்களைச் செய்கின்றன, அவை **arguments** எனப்படும் உள்ளீட்டு மதிப்புகளை எடுத்து ஒரு வெளியீட்டு மதிப்பை **return** செய்கின்றன. &#x20;

Functions இரண்டு வழிகளில் உருவாக்கப்படலாம்: `function declaration` அல்லது `function expression` ஐப் பயன்படுத்துதல். `function expression` இல் _function name_ தவிர்க்கப்படலாம், இது ஒரு `anonymous function` ஆக மாற்றும். மாறிகளைப் போலவே Functions உம் அறிவிக்கப்பட வேண்டும். `x` என்ற _argument_ ஐ ஏற்கும் மற்றும் x இன் இரட்டிப்பை **return** செய்யும் `double` என்ற செயல்பாட்டை அறிவிப்போம்:

```javascript
// ஒரு function declaration எடுத்துக்காட்டு
function double(x) {
  return 2 * x;
}
```

> _குறிப்பு:_ மேலே உள்ள function அது வரையறுக்கப்படுவதற்கு முன்பே குறிக்கப்படலாம்.

Functions ஜாவாஸ்கிரிப்டில் மதிப்புகளாகவும் உள்ளன; அவை மாறிகளில் சேமிக்கப்படலாம் (எண்கள், சரங்கள் போன்றவை) மற்றும் பிற functions க்கு வாதங்களாக கொடுக்கப்படலாம்:

```javascript
// ஒரு function expression எடுத்துக்காட்டு
let double = function (x) {
  return 2 * x;
};
```

> _குறிப்பு:_ மற்ற எந்த மாறியையும் போலவே மேலே உள்ள function வரையறுக்கப்படுவதற்கு முன்பு அதைக் குறிக்க **முடியாது**.

{% hint style="info" %}
&#x20;Callback என்பது மற்றொரு function க்கு வாதமாக அனுப்பப்படும் ஒரு function ஆகும்.
{% endhint %}

Arrow function என்பது பாரம்பரிய functions க்கு ஒரு கச்சிதமான மாற்றாகும், இது சில வரம்புகளுடன் சில சொற்பொருள் வேறுபாடுகளைக் கொண்டுள்ளது. இந்த functions க்கு `this`, `arguments` மற்றும் `super` ஆகியவற்றுக்கான சொந்த பிணைப்புகள் இல்லை, மேலும் இவற்றை constructors ஆகப் பயன்படுத்த முடியாது. ஒரு arrow function எடுத்துக்காட்டு:

```javascript
const double =  (x) =>  2 * x;
```

{% hint style="working" %}
Arrow function இல் உள்ள `this` முக்கிய சொல் arrow function ஐ வரையறுத்த பொருளைக் குறிக்கிறது.&#x20;
{% endhint %}

இந்த அத்தியாயத்தில், பின்வரும் தலைப்புகளை ஆராய்வோம்:
* [Closures](./for-each.md)
* [High Order Functions](./higher-order.md)
* [Recursive Functions](./recursive-functions.md)
* [Set Interval](./set-interval.md)
* [Set Timeout](./set-timeout.md)
* [This Keyword](./this-keyword.md)
* [Rest Operator](./rest-operator.md)
* [Hoisting](./hoisting.md)
* [Getters and Setters](./getters-setters.md)