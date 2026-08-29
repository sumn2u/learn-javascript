---
chapter: 19
pageNumber: 116
description: பாலிஃபில்கள் (Polyfills) மற்றும் டிரான்ஸ்பைலர்கள் (transpilers) என்பவை வலை மேம்பாட்டில் (web development) பயன்படுத்தப்படும் இரண்டு முக்கியமான கருவிகளாகும் (tools), இவை நவீன ஜாவாஸ்கிரிப்ட் குறியீடு பழைய உலாவிகளில் இயங்குவதை உறுதிசெய்யவும் மற்றும் பழைய சூழல்களுடன் (environments) பொருந்தக்கூடிய தன்மையைப் (compatibility) பராமரிக்கும் அதே வேளையில் சமீபத்திய ஜாவாஸ்கிரிப்ட் அம்சங்களைப் பயன்படுத்திக் கொள்ளவும் உதவுகின்றன.
---
# பாலிஃபில்கள் மற்றும் டிரான்ஸ்பைலர்கள் (Polyfills and Transpilers)

ஜாவாஸ்கிரிப்ட் அவ்வப்போது உருவாகிறது. தொடர்ந்து, புதிய மொழி முன்மொழிவுகள் (proposals) சமர்ப்பிக்கப்பட்டு, பகுப்பாய்வு செய்யப்பட்டு, [https://tc39.github.io/ecma262/ ](https://tc39.github.io/ecma262/) இல் சேர்க்கப்பட்டு பின்னர் விவரக்குறிப்பில் (specification) இணைக்கப்படுகின்றன. உலாவியைப் (browser) பொறுத்து ஜாவாஸ்கிரிப்ட் இயந்திரங்களில் (engines) அது எவ்வாறு செயல்படுத்தப்படுகிறது என்பதில் வேறுபாடுகள் இருக்கலாம். சிலர் வரைவு முன்மொழிவுகளைச் (draft proposals) செயல்படுத்தலாம், மற்றவர்கள் முழு விவரக்குறிப்பு வெளியாகும் வரை காத்திருக்கலாம். புதிய விஷயங்கள் அறிமுகப்படுத்தப்படும்போது பின்தங்கிய இணக்கத்தன்மை (Backward compatibility) சிக்கல்கள் எழுகின்றன.&#x20;

பழைய உலாவிகளில் நவீன குறியீட்டை ஆதரிக்க நாம் இரண்டு கருவிகளைப் பயன்படுத்துகிறோம்: `transpilers` மற்றும் `polyfills`.

**டிரான்ஸ்பைலர்கள் (Transpilers)**

இது நவீன குறியீட்டை மொழிபெயர்க்கும் ஒரு நிரலாகும் (program) மற்றும் பழைய தொடரியல் கட்டமைப்புகளைப் (syntax constructs) பயன்படுத்தி அதை மீண்டும் எழுதுகிறது, இதனால் பழைய இயந்திரம் அதைப் புரிந்து கொள்ள முடியும். உதாரணமாக, "`nullish` coalescing operator" `??` 2020 இல் அறிமுகப்படுத்தப்பட்டது, மேலும் காலாவதியான உலாவிகளால் (outdated browsers) அதைப் புரிந்து கொள்ள முடியாது.&#x20;

இப்போது, `nullish` coalescing operator" `??` ஐப் பழைய உலாவிகளுக்குப் புரியும் வகையில் செய்வது டிரான்ஸ்பைலரின் வேலையாகும்.&#x20;

```javascript
// before running the transpiler
height = height ?? 200;

// after running the transpiler
height = (height !== undefined && height !== null) ? height: 200;

```

{% hint style="info" %}
&#x20;[Babel](https://babeljs.io/) என்பது மிகவும் பிரபலமான டிரான்ஸ்பைலர்களில் ஒன்றாகும். மேம்பாட்டுச் செயல்பாட்டில், குறியீட்டை டிரான்ஸ்பைல் செய்ய [webpack](https://webpack.js.org/) அல்லது [parcel](https://parceljs.org/) போன்ற உருவாக்கக் கருவிகளைப் (build tools) பயன்படுத்தலாம்.
{% endhint %}

**பாலிஃபில்கள் (Polyfills)**

காலாவதியான உலாவி இயந்திரங்களில் புதிய செயல்பாடுகள் கிடைக்காத நேரங்களும் உள்ளன. இந்த நிலையில், புதிய செயல்பாட்டைப் பயன்படுத்தும் குறியீடு இயங்காது. இடைவெளிகளை நிரப்ப, காணாமல் போன செயல்பாட்டைச் சேர்க்கிறோம், இது `polyfill` என்று அழைக்கப்படுகிறது. எடுத்துக்காட்டாக, `filter()` முறை ES5 இல் அறிமுகப்படுத்தப்பட்டது மற்றும் சில பழைய உலாவிகளில் ஆதரிக்கப்படவில்லை. இந்த முறை ஒரு செயல்பாட்டை (function) ஏற்றுக்கொள்கிறது மற்றும் செயல்பாடு `true` என்று திருப்பித் தரும் அசல் வரிசையின் (original array) மதிப்புகளை மட்டுமே கொண்ட வரிசையைத் திருப்பித் தருகிறது.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // filter outs the even number
console.log(filtered);

// [2, 4, 6]
```

வடிகட்டிக்கான (filter) பாலிஃபில் கீழே கொடுக்கப்பட்டுள்ளது.

```javascript
Array.prototype.filter = function (callback) {
  // Store the new array
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // call the callback with the current element, index, and context.
    //if it passes the test then add the element in the new array.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  //return the array
  return result
}
```

{% hint style="info" %}
வெவ்வேறு உலாவி இயந்திரங்களால் ஆதரிக்கப்படும் புதுப்பிக்கப்பட்ட செயல்பாடு மற்றும் தொடரியலை [caniuse](https://caniuse.com/) காட்டுகிறது.
{% endhint %}
