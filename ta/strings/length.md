---
chapter: 4
pageNumber: 34
---
# நீளம்

`.length` பண்பைப் பயன்படுத்தி JavaScript இல் ஒரு சரத்தில் எத்தனை எழுத்துகள் உள்ளன என்பதை அறிவது எளிது. `length` பண்பு இடைவெளிகள் மற்றும் சிறப்பு எழுத்துகள் உட்பட சரத்தில் உள்ள எழுத்துகளின் எண்ணிக்கையை திரும்பப் பெறுகிறது.

```javascript

let size = "நமது அழகான சரம்".length;
console.log(size);
// size: 17

let emptyStringSize = "".length
console.log(emptyStringSize);
// emptyStringSize: 0

```

ஒரு காலி சரத்தின் length பண்பு `0`.&#x20;

{% hint style="working" %}
`length` பண்பு ஒரு படிக்கமட்டும் பண்பு, எனவே அதற்கு புதிய மதிப்பை ஒதுக்க முடியாது.
{% endhint %}
