# Modules
# मोड्युलहरू

In the real world, a program grows organically to cope with the needs of new functionality. With growing codebase structuring and maintaining the code requires additional work. Though it will pay off in the future, it's tempting to neglect it and allow programs to be deeply tangled. In reality, it increases the complexity of the application, as one is forced to build a holistic understanding of the system and has difficulty to look any piece in isolation. Secondly, one has to invest more time in untangling to use its functionality.

वास्तविक संसारमा, एक कार्यक्रम नयाँ कार्यक्षमताको आवश्यकताहरूको सामना गर्न व्यवस्थित रूपमा बढ्छ। बढ्दो कोडबेस संरचना र कोड को रखरखाव को साथ अतिरिक्त काम को आवश्यकता छ। यद्यपि यसले भविष्यमा भुक्तानी गर्नेछ, यसलाई बेवास्ता गर्न र कार्यक्रमहरूलाई गहिरो रूपमा पेचिलो हुन अनुमति दिन यो लोभलाग्दो छ। वास्तविकतामा, यसले अनुप्रयोगको जटिलता बढाउँछ, किनकि एक प्रणालीको समग्र समझ निर्माण गर्न बाध्य हुन्छ र अलगावमा कुनै पनि टुक्रा हेर्न गाह्रो हुन्छ। दोस्रो, यसको कार्यक्षमता को उपयोग गर्न को लागी एक अनटैंगलिंग मा अधिक समय लगानी गर्नु पर्छ।

_Modules_ come to avoid these problems. A `module` specifies which pieces of code it depends on, along with what functionality it provides for other modules to use. Modules that are dependent on another module are called _dependencies_.  Various module libraries are there to organize code into modules and load it on demand.

मोड्युलहरू यी समस्याहरूबाट बच्न आउँदछन्। एक 'मोड्युल' ले निर्दिष्ट गर्दछ कि यो कोडको कुन टुक्राहरूमा निर्भर गर्दछ, साथै यसले अन्य मोड्युलहरू प्रयोग गर्नका लागि कुन कार्यक्षमता प्रदान गर्दछ। मोड्युलहरू जुन अन्य मोड्युलमा निर्भर छन् तिनीहरूलाई _निर्भरताहरू' भनिन्छ।  विभिन्न मोड्युल पुस्तकालयहरू मोड्युलहरूमा कोड व्यवस्थित गर्न र मागमा लोड गर्न त्यहाँ छन्।

* AMD - one of the oldest module systems, initially used by [require.js](https://requirejs.org/).

* AMD - सबैभन्दा पुरानो मोड्युल प्रणाली मध्ये एक हो। सुरुमा यो[require.js] (<https://reqirirejs.org/>) प्रयोग गरियो।
* CommonJS - module system created for Node.js server.

* CommonJS - मोड्युल प्रणाली नोड ट्रान्स सर्भर को लागी सिर्जना गरिएको हो।।
* UMD - module system that is compatible with AMD and CommonJS.

* UMD - मोड्युल प्रणाली जुन AMD र CommonJS सँग उपयुक्त छ।

Modules can load each other, and use special directives `import` and `export` to interchange functionality, and call functions of each other.

मोड्युलहरूले एक अर्कालाई लोड गर्न सक्दछन्, र कार्यक्षमता आदानप्रदान गर्न विशेष निर्देशनहरू आयात र निर्यात प्रयोग गर्न सक्दछन्, र एक अर्काको कार्यहरू कल गर्न सक्दछन्।

* `export` - labels functions and variables that should be accessible  from outside  the current module

* `निर्यात` ले लेबलहरू कार्यहरू र चरहरू जुन हालको मोड्युल बाहिरबाट पहुँच योग्य हुनुपर्दछ।
* `import` - imports functionality from outside module

* `आयात` - बाहिर मोड्युलबाट कार्यक्षमता आयात गर्दछ।

Let's see the `import`  , and `export` mechanism in modules.  We have  `sayHi` function exported from `sayHi.js` file.

मोड्युलमा 'आयात' र 'निर्यात' संयन्त्र हेरौं।  हामीसँग `sayHi` प्रकार्य `sayHi.js` फाइलबाट निर्यात गरिएको छ।

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Hello, ${user}!`);
}
```

The `sayHi` function is consumed in the `main.js` file with the help of the `import` directive.

'आयात' निर्देशनको सहायताले `main.js` फाइलमा `sayHi` प्रकार्य खपत हुन्छ।

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('Kelvin'); // Hello, Kelvin!
```

  Here, the import directive loads the module by importing the relative path and assigns the `sayHi` variable.

यहाँ, आयात निर्देशिकाले सापेक्ष पथ आयात गरेर मोड्युल लोड गर्दछ र `sayHi` चर प्रदान गर्दछ।


Modules can be exported in two ways: **Named** and **Default**. Furthermore, the Named exports can be assigned inline or individually.

मोड्युलहरू दुई तरिकामा निर्यात गर्न सकिन्छ: **नाम** र **पूर्वनिर्धारित** । यसबाहेक, नामित निर्यातहरू इनलाइन वा व्यक्तिगत रूपमा तोक्न सकिन्छ।

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

एउटा फाइलमा एउटा मात्र पूर्वनिर्धारित 'निर्यात' हुन सक्छ ।
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">// 📁 message.js
const message = (name, age) => {
<strong>    return `${name} is ${age} years old.`;
</strong>};
export default message;
</code></pre>

Based on the type of export, we can import it in two ways. The named export are constructed using curly braces whereas, default exports are not.

निर्यातको प्रकारका आधारमा हामी यसलाई दुई तरिकाले आयात गर्न सक्छौं। नामित निर्यात घुंघराले ब्रेसेस प्रयोग गरेर निर्माण गरिएको छ जबकि, पूर्वनिर्धारित निर्यात हरू छैनन्।

```javascript
import { name, age } from "./person.js"; // named export import
import message from "./message.js"; // default export import
```

While assigning modules, we should avoid _circular dependency_. Circular dependency is a situation where module A depends on B, and B  also depends on A directly or indirectly.

मोड्युलहरू निर्दिष्ट गर्दा, हामीले _circular dependency_ बच्नुपर्छ। सर्कुलर निर्भरता एक स्थिति हो जहाँ मोड्युल ए बी मा निर्भर गर्दछ, र बी पनि प्रत्यक्ष वा अप्रत्यक्ष रूपमा ए मा निर्भर गर्दछ।
