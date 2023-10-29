---
Kapitel: 6
Seitenzahl: 40
Beschreibung: Der Spread-Operator ermöglicht es, Arrays oder Objekte schnell zu manipulieren. Er bietet eine prägnante Syntax zum Kopieren, Zusammenführen oder Extrahieren von Elementen aus Arrays sowie zum Kopieren von Eigenschaften aus Objekten.
---

# Spread (Verbreitung)

Ein Array oder Objekt kann schnell in ein anderes Array oder Objekt kopiert werden, indem der Spread-Operator `(...)` verwendet wird. Er ermöglicht es, ein Iterable wie ein Array an Stellen zu erweitern, an denen null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden, oder einen Objektausdruck an Stellen zu erweitern, an denen null oder mehr Schlüssel-Wert-Paare (für Objekt-Literale) erwartet werden.

Hier sind einige Beispiele:

```javascript
let arr = [1, 2, 3, 4, 5]; 

console.log(...arr); 
// Ergebnis: 1 2 3 4 5

let arr1;
arr1 = [...arr]; // kopiert das Array in arr1 

console.log(arr1);    // Ergebnis: [1, 2, 3, 4, 5]

arr1 = [6,7];
arr = [...arr,...arr1];

console.log(arr);   // Ergebnis: [1, 2, 3, 4, 5, 6, 7]

```

{% hint style="warning" %}
Der Spread-Operator funktioniert nur in modernen Browsern, die diese Funktion unterstützen. Wenn Sie ältere Browser unterstützen müssen, müssen Sie einen Transpiler wie Babel verwenden, um die Syntax des Spread-Operators in äquivalenten ES5-Code umzuwandeln.
{% endhint %}
