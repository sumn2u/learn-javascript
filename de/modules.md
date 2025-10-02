---
layout: editorial
Kapitel: 13
Seite: 87
Beschreibung: Module sind eine Möglichkeit, Code in separate, wiederverwendbare und gekapselte Komponenten zu organisieren. Sie ermöglichen es Entwicklern, große und komplexe Codebasen in kleinere, handhabbare Teile zu zerlegen, was das Verständnis, die Wartung und die Zusammenarbeit erleichtert.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Kapitel 13
# Module

In der realen Welt wächst ein Programm organisch mit den Anforderungen neuer Funktionalitäten. Mit wachsendem Codeumfang erfordert die Strukturierung und Wartung des Codes zusätzlichen Aufwand. Auch wenn sich dieser Aufwand langfristig auszahlt, ist es verlockend, ihn zu vernachlässigen und zuzulassen, dass Programme stark miteinander verflochten werden. In Wirklichkeit erhöht das jedoch die Komplexität der Anwendung, da man gezwungen ist, ein ganzheitliches Verständnis des Systems zu entwickeln und Schwierigkeiten hat, einzelne Teile isoliert zu betrachten. Außerdem muss man mehr Zeit investieren, um Funktionen aus einem stark verflochtenen Code herauszulösen.

*Module* helfen dabei, diese Probleme zu vermeiden. Ein `Modul` gibt an, von welchen Codeteilen es abhängt, und welche Funktionalität es anderen Modulen zur Verfügung stellt. Module, die von anderen Modulen abhängen, nennt man *Abhängigkeiten*. Es gibt verschiedene Bibliotheken zur Modulverwaltung, die Code in Module organisieren und bei Bedarf laden können:

* **AMD** – eines der ältesten Modulsysteme, ursprünglich verwendet von [require.js](https://requirejs.org/)
* **CommonJS** – Modulsystem, das für den Node.js-Server entwickelt wurde
* **UMD** – Modulsystem, das mit [AMD](https://requirejs.org/docs/whyamd.html#amd) und [CommonJS](https://requirejs.org/docs/whyamd.html#commonjs) kompatibel ist

Module können andere Module laden und sich gegenseitig verwenden. Dazu nutzen sie spezielle Direktiven wie `import` und `export`, um Funktionalität auszutauschen und Funktionen aufzurufen:

* `export` – markiert Funktionen und Variablen, die von außerhalb des aktuellen Moduls zugänglich sein sollen
* `import` – importiert Funktionalität aus einem externen Modul

Sehen wir uns den Mechanismus von `import` und `export` in Modulen an. Die Funktion `sayHi` wird aus der Datei `sayHi.js` exportiert:

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Hello, ${user}!`);
}
```

Die Funktion `sayHi` wird in der Datei `main.js` mithilfe der Direktive `import` verwendet:

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('Kelvin'); // Hello, Kelvin!
```

Hier lädt die `import`-Direktive das Modul über den relativen Pfad und weist die Variable `sayHi` zu.

Module können auf zwei Arten exportiert werden: **Named** (benannter Export) und **Default** (Standardexport). Zudem können benannte Exporte inline oder gesammelt angegeben werden:

```javascript
// 📁 person.js 

// inline benannte Exporte
export const name = "Kelvin";
export const age = 30;

// gesammelt
const name = "Kelvin";
const age = 30;
export {name, age};
```

{% hint style="working" %}
Eine Datei darf nur einen einzigen Standard-`export` enthalten.
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">// 📁 message.js 
const message = (name, age) => {
<strong>    return `${name} is ${age} years old.`;
</strong>};
export default message;
</code></pre>

Je nach Exporttyp importieren wir auf zwei verschiedene Weisen. Benannte Exporte werden in geschweiften Klammern angegeben, während Standardexporte ohne Klammern importiert werden:

```javascript
import { name, age } from "./person.js"; // Import eines benannten Exports
import message from "./message.js"; // Import eines Standardexports
```

Beim Zuweisen von Modulen sollte man *zirkuläre Abhängigkeiten* vermeiden. Eine zirkuläre Abhängigkeit entsteht, wenn Modul `A` von `B` abhängt und `B` wiederum direkt oder indirekt von `A` abhängig ist.
