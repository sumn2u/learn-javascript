# Modules

In the real world, a program grows organically to cope with the needs of new functionality. With growing codebase structuring and maintaining the code requires additional work. Though it will pay off in the future, it's tempting to neglect it and allow programs to be deeply tangled. In reality, it increases the complexity of the application, as one is forced to build a holistic understanding of the system and has difficulty to look any piece in isolation. Secondly, one has to invest more time in untangling to use its functionality.

वास्तविक संसारमा, नयाँ कार्यक्षमताको आवश्यकताको सामना गर्न एक कार्यक्रम एक कार्यक्रम बढ्छ। वृवृधित कोण चाउचाउनको साथ संरचना र संरचनाको साथ अतिरिक्त काम चाहिन्छ। यद्यपि यसले भविष्यमा भुक्तानी गर्नेछ, यो उपेक्षा गर्न लोभ्याउने र कार्यक्रमहरूलाई गहिरो तर्काउन अनुमति दिईन्छ। वास्तविकतामा, यसले आवेदनको जटिलता बढाउँदछ, किनकि एक प्रणालीको समग्र समझलाई निर्माण गर्न बाध्य हुन्छ र एक्लोपनामा कुनै टुक्रा हेर्न गाह्रो हुन्छ। दोस्रो, एकले कसैलाई पनि अपर्याप्त मा अधिक समय लगानी गर्न छ आफ्नो कार्यक्षमता को उपयोग गर्न।

_Modules_ come to avoid these problems. A `module` specifies which pieces of code it depends on, along with what functionality it provides for other modules to use. Modules that are dependent on another module are called _dependencies_.  Various module libraries are there to organize code into modules and load it on demand.

_Mudys_ यी समस्याहरूबाट बच्न आउनुहोस्। एक `मोड्युल`` निर्दिष्ट गर्दछ कि कुन कोडका टुक्राहरू यसको लागि निर्भर गर्दछ, साथै कस्तो मोड्युलहरूको प्रयोग गर्न को लागी काम गर्दछ। मोड्युलहरू जुन अर्को मोड्युलमा निर्भर छन् _देनदें_ भनिन्छ। बिभिन्न मोड्युल पुस्तकालयहरू त्यहाँ मोड्युलहरूमा संगठित गर्न र यसलाई मांग मा लोड गर्न को लागी।

* AMD - one of the oldest module systems, initially used by [require.js](https://requirejs.org/).

* Amd - सबैभन्दा पुरानो मोड्युल प्रणाली मध्ये एक, सुरुमा [आवश्यक छ .js] (https://reqirirejs.org/) प्रयोग गरियो।
* CommonJS - module system created for Node.js server.

* सामान्यराज - मोड्युल प्रणाली नोड ट्रान्स सर्भर को लागी सिर्जना गरिएको।
* UMD - module system that is compatible with AMD and CommonJS.

* UMD - मोड्युल प्रणाली जुन AMD र AMBJs सँग उपयुक्त छ।

Modules can load each other, and use special directives `import` and `export` to interchange functionality, and call functions of each other.

मोड्युलहरू एक अर्कालाई लोड गर्न सक्छन्, र विशेष निर्देशनहरू `आयात" आयात गर्नुहोस् र "एक अर्काको कामका प्रकार्यहरू कल गर्नुहोस्।

* `export` - labels functions and variables that should be accessible  from outside  the current module

* `निर्यात" ले लेबलहरू कार्यहरू र चरहरू जुन हालको मोड्युल बाहिरबाट पहुँच योग्य हुनुपर्दछ
* `import` - imports functionality from outside module

* `आयात गर्नुहोस् - बाहिर मोड्युलबाट कार्यक्षमता आयात गर्दछ

Let's see the `import`  , and `export` mechanism in modules.  We have  `sayHi` function exported from `sayHi.js` file.

आउनुहोस्, आदान "आदान", र मोड्युलहरूमा `निर्यात संयन्त्रहरू हेर्नुहोस्। हामीसँग `हो 'बाट निर्यात गरिएको छ' '।

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Hello, ${user}!`);
}
```

The `sayHi` function is consumed in the `main.js` file with the help of the `import` directive.

`होया` प्रकार्य` import import main `आयात" आयात "को मद्दतको साथ` main.js's फाईलमा खपत गरिएको छ।

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('Kelvin'); // Hello, Kelvin!
```

Here, the import directive loads the module by importing the relative path and assigns the `sayHi` variable.

यहाँ, आयात निर्देशक सापेक्ष मार्ग आयात गरेर मोड्युल लोड गर्दछ र `होथि 'भ्यारीएबललाई निर्दिष्ट गर्दछ।

Modules can be exported in two ways: **Named** and **Default**. Furthermore, the Named exports can be assigned inline or individually.

मोड्युलहरू दुई तरिकामा निर्यात गर्न सकिन्छ: ** नाम ** र ** पूर्वनिर्धारित **। यसबाहेक, नाम गरेको निर्यातलाई इनलाइन वा व्यक्तिगत रूपमा तोक्न सकिन्छ।

```javascript
// 📁 person.js 

// inlined named exports
export const name = "Kelvin";
export const age = 30;

// at once
const name = "Kelvin";
const age = 30;
export {name, age};
```

{% hint style="warning" %}


One can only have one default `export` in a file.

एक मात्र एक मात्र पूर्व पूर्वनिर्धारित `निर्यात को एक पूर्वनिर्धारित गर्न सक्छ।
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">// 📁 message.js 
const message = (name, age) => {
<strong>    return `${name} is ${age} years old.`;

<कडा> रिटर्न `$ ne name} $ {उमेर {उमेर {उमेर} छ;
</strong>};
export default message;
</code></pre>

Based on the type of export, we can import it in two ways. The named export are constructed using curly braces whereas, default exports are not.

निर्यातको प्रकारमा आधारित हामी यसलाई दुई तरिकामा आयात गर्न सक्छौं। नाम गरिएको निर्यात कतारको ब्रेसहरू प्रयोग गरेर बनाइएको छ, पूर्वनिर्धारित निर्यातमा छैन।

```javascript
import { name, age } from "./person.js"; // named export import
import message from "./message.js"; // default export import
```

While assigning modules, we should avoid _circular dependency_. Circular dependency is a situation where module A depends on B, and B  also depends on A directly or indirectly.&#x20;

मोड्युलहरू तोक्दा, हामीले _cristic निर्भरताबाट अलग रहनु पर्छ। गोलाकार निर्भरता एक स्थिति हो जहाँ मोड्युल बीमा बी, र बीमा निर्भर गर्दछ, एक सीधा वा अप्रत्यक्ष रूपमा निर्भर गर्दछ। & # X20;
