---
chapter: 6
pageNumber: 49  
description: map முறை ஒரு வரிசையை மீண்டும் செல்கிறது மற்றும் ஒரு callback செயல்பாட்டைப் பயன்படுத்தி அதன் உறுப்பைத் திருத்துகிறது. இந்த callback செயல்பாடு வரிசையின் ஒவ்வொரு உறுப்பிலும் பயன்படுத்தப்படுகிறது.
---
# Map

`Array.prototype.map()` முறை ஒரு வரிசையை மீண்டும் செல்கிறது மற்றும் ஒரு callback செயல்பாட்டைப் பயன்படுத்தி அதன் உறுப்புகளை மாற்றுகிறது. callback செயல்பாடு பின்னர் வரிசையின் ஒவ்வொரு உறுப்பிலும் பயன்படுத்தப்படும்.

`map` பயன்படுத்துவதற்கான தொடரியல் இங்கே.

```javascript
let newArray = oldArray.map(function(element, index, array) {
  // element: வரிசையில் செயலாக்கப்படும் தற்போதைய உறுப்பு
  // index: வரிசையில் செயலாக்கப்படும் தற்போதைய உறுப்பின் குறியீடு
  // array: map அழைக்கப்பட்ட வரிசை
  // newArray இல் சேர்க்கப்படும் உறுப்பை திரும்பப் பெறுங்கள்
});
```

எடுத்துக்காட்டாக, உங்களிடம் எண்களின் வரிசை இருக்கிறது என்று வைத்துக்கொள்வோம் மற்றும் அசல் வரிசையில் உள்ள எண்களின் மதிப்புகளை இரண்டு மடங்கு ஆக்கும் புதிய வரிசையை உருவாக்க விரும்புகிறீர்கள். `map` ஐப் பயன்படுத்தி இவ்வாறு செய்யலாம்.

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// Result: [4, 8, 12, 16]
```

`map` க்கு அனுப்பப்படும் செயல்பாட்டை வரையறுக்க arrow செயல்பாடு தொடரியலையும் பயன்படுத்தலாம்.

<pre class="language-typescript"><code class="lang-typescript"><strong>let doubledNumbers = numbers.map((number) => {
</strong>  return number * 2;
});
</code></pre>

அல்லது

```typescript
let doubledNumbers = numbers.map(number => number * 2);
```

{% hint style="info" %}
`map()` முறை காலி உறுப்புகளுக்கு செயல்பாட்டை இயக்காது மற்றும் அசல் வரிசையை மாற்றாது.
{% endhint %}
