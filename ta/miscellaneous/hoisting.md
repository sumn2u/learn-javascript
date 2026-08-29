---
chapter: 19
pageNumber: 114
description: ஹொயிஸ்டிங் (Hoisting) என்பது ஜாவாஸ்கிரிப்டில் அறிவிப்புகளை (declarations) மேலே நகர்த்துவதற்கான இயல்புநிலை (default) நடத்தையாகும். ஒரு குறியீட்டைச் செயல்படுத்துகையில், இது உருவாக்கம் (creation) மற்றும் செயலாக்கம் (execution) என்ற ஒரு உலகளாவிய செயல்பாட்டுச் சூழலை (global execution context) உருவாக்குகிறது. உருவாக்கும் கட்டத்தில் (creation phase), ஜாவாஸ்கிரிப்ட் மாறி மற்றும் செயல்பாட்டு அறிவிப்பைப் (variable and function declaration) பக்கத்தின் மேற்பகுதிக்கு நகர்த்துகிறது, இது ஹொயிஸ்டிங் (hoisting) என்று அழைக்கப்படுகிறது.
---
# ஹொயிஸ்டிங் (Hoisting)

ஹொயிஸ்டிங் என்பது ஜாவாஸ்கிரிப்டில் அறிவிப்புகளை மேலே நகர்த்துவதற்கான இயல்புநிலை நடத்தையாகும். ஒரு குறியீட்டைச் செயல்படுத்துகையில், இது ஒரு உலகளாவிய செயல்பாட்டுச் சூழலை உருவாக்குகிறது:  **உருவாக்கம் (creation)** மற்றும் **செயலாக்கம் (execution)**. உருவாக்கும் கட்டத்தில், ஜாவாஸ்கிரிப்ட் மாறி மற்றும் செயல்பாட்டு அறிவிப்பைப் பக்கத்தின் மேற்பகுதிக்கு நகர்த்துகிறது, இது ஹொயிஸ்டிங் என்று அழைக்கப்படுகிறது.&#x20;

```javascript
// variable hoisting
console.log(counter);
let counter = 1; // throws ReferenceError: Cannot access 'counter' before initialization
```

`counter` ஹீப் நினைவகத்தில் (heap memory) இருந்தாலும், அது தொடங்கப்படாததால் (initialized) அது பிழையை (error) எறியும். ஹொயிஸ்டிங் காரணமாக இது நிகழ்கிறது, `counter` மாறி இங்கே மேலே கொண்டுவரப்படுகிறது.&#x20;

<pre class="language-javascript"><code class="lang-javascript"><strong>// function hoisting
</strong><strong>const x = 20,
</strong>    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y; 
</code></pre>

இங்கே, `add` செயல்பாடு ஹொயிஸ்டிங் செய்யப்பட்டு, உலகளாவிய செயல்பாட்டுச் சூழலின் உருவாக்கக் கட்டத்தில் ஹீப் நினைவகத்தில் `undefined` என்று தொடங்கப்படுகிறது. இதனால் பிழை ஏற்படுகிறது.&#x20;
