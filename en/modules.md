---
layout: editorial
chapter: 13
pageNumber: 69
---

# Chapter 13
# Modules

In the real world, a program grows organically to cope with the needs of new functionality. With growing codebase structuring and maintaining the code requires additional work. Though it will pay off in the future, it's tempting to neglect it and allow programs to be deeply tangled. In reality, it increases the complexity of the application, as one is forced to build a holistic understanding of the system and has difficulty to look any piece in isolation. Secondly, one has to invest more time in untangling to use its functionality.

_Modules_ come to avoid these problems. A `module` specifies which pieces of code it depends on, along with what functionality it provides for other modules to use. Modules that are dependent on another module are called _dependencies_.  Various module libraries are there to organize code into modules and load it on demand.

* AMD - one of the oldest module systems, initially used by [require.js](https://requirejs.org/).
* CommonJS - module system created for Node.js server.
* UMD - module system that is compatible with AMD and CommonJS.

Modules can load each other, and use special directives `import` and `export` to interchange functionality, and call functions of each other.

* `export` - labels functions and variables that should be accessible  from outside  the current module
* `import` - imports functionality from outside module

Let's see the `import`  , and `export` mechanism in modules.  We have  `sayHi` function exported from `sayHi.js` file.

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Hello, ${user}!`);
}
```

The `sayHi` function is consumed in the `main.js` file with the help of the `import` directive.

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('Kelvin'); // Hello, Kelvin!
```

Here, the import directive loads the module by importing the relative path and assigns the `sayHi` variable.

Modules can be exported in two ways: **Named** and **Default**. Furthermore, the Named exports can be assigned inline or individually.

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
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">// 📁 message.js 
const message = (name, age) => {
<strong>    return `${name} is ${age} years old.`;
</strong>};
export default message;
</code></pre>

Based on the type of export, we can import it in two ways. The named export are constructed using curly braces whereas, default exports are not.

```javascript
import { name, age } from "./person.js"; // named export import
import message from "./message.js"; // default export import
```

While assigning modules, we should avoid _circular dependency_. Circular dependency is a situation where module A depends on B, and B  also depends on A directly or indirectly.&#x20;
