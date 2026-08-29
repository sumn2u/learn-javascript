---
chapter: 8
pageNumber: 56
Title: Set Timeout
---

# Set Timeout
ஒரு செயல்பாடு (function) இயங்குவதற்கு முன்பு தாமதத்தை (மில்லி விநாடிகளில்) சேர்க்க `setTimeout` global முறை பயன்படுத்தப்படுகிறது.

உதாரணமாக, இந்த எடுத்துக்காட்டில் "தயார்..." என்று console இல் எழுதப்பட்ட பிறகு, `start()` செயல்பாடு இயங்குவதற்கு முன்பு 3 வினாடிகள் காத்திருக்க வேண்டும்.

```js
console.log("தயார்...");

function start() {
console.log("போ!!");
}

setTimeout(start, 3000);

//Output: "தயார்..." பின்னர் 3 வினாடிகளுக்குப் பிறகு, "போ!!"
```

# Clear Timeout
மாறிகளில் சேமிக்கப்பட்டுள்ள எந்த `setTimeout()` முறைகளையும் அகற்ற `clearTimeout` global முறை பயன்படுத்தப்படுகிறது. உதாரணமாக, `setTimeout()` ஐ ஒரு மாறியில் சேமிப்பதன் மூலம் நமது கடைசி எடுத்துக்காட்டை மாற்றுவோம்.

```js
console.log("தயார்...");

function start() {
console.log("போ!!");
}

let timeBeforeStart = setTimeout(start, 3000);

clearTimeout(timeBeforeStart);
// செயல்பாடு முழுமையாக இயங்குவதை நிறுத்துகிறது
```