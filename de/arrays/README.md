---
layout: editorial
Kapitel: 6
Seitenzahl: 36
Beschreibung: Arrays sind ein grundlegender Bestandteil der Programmierung. Ein Array ist eine Liste von Daten. Wir können viele Daten in einer Variablen speichern, was unseren Code lesbarer und verständlicher macht. Es erleichtert auch die Durchführung von Funktionen in Bezug auf verwandte Daten.
---

# Kapitel 6
# Arrays

Arrays sind ein grundlegender Bestandteil der Programmierung. Ein Array ist eine Liste von Daten. Wir können viele Daten in einer Variablen speichern, was unseren Code lesbarer und verständlicher macht. Es erleichtert auch die Durchführung von Funktionen in Bezug auf verwandte Daten.

Die Daten in Arrays werden als **Elemente** bezeichnet.

Hier ist ein einfaches Array:

```javascript
// 1, 1, 2, 3, 5 und 8 sind die Elemente in diesem Array
let zahlen = [1, 1, 2, 3, 5, 8];
```

Arrays können leicht mit Array-Literalen oder mit dem 'new'-Schlüsselwort erstellt werden.

```javascript
const autos = ["Saab", "Volvo", "BMW"]; // Verwendung von Array-Literalen
const autos = new Array("Saab", "Volvo", "BMW"); // Verwendung des new-Schlüsselworts
```

Eine Indexnummer wird verwendet, um auf die Werte eines Arrays zuzugreifen. Der Index des ersten Elements in einem Array ist immer '0', da Array-Indizes mit '0' beginnen. Die Indexnummer kann auch verwendet werden, um die Elemente eines Arrays zu ändern.

```javascript
const autos = ["Saab", "Volvo", "BMW"];
console.log(autos[0]); 
// Ergebnis: Saab

autos[0] = "Opel"; // Ändern des ersten Elements eines Arrays
console.log(autos);
// Ergebnis: ['Opel', 'Volvo', 'BMW']
```
{% hint style="warning" %}
Arrays sind eine spezielle Art von Objekt. Es können Objekte in einem Array vorhanden sein.
{% endhint %}

Die length-Eigenschaft eines Arrays gibt die Anzahl der Elemente zurück. Die von Arrays unterstützten Methoden werden unten angezeigt:

| Name              | Beschreibung                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | RGibt zwei oder mehr kombinierte Arrays zurück                                                                              |
| `join()`          | Verbindet alle Elemente in einem Array zu einem String                                                                                 |
| `push()`          | Fügt ein oder mehrere Elemente am Ende des Arrays hinzu und gibt die Länge zurück
                    |
| `pop()`           | Entfernt das letzte Element eines Arrays und gibt dieses Element zurück                                                                                     |
| `shift()`         | Entfernt das erste Element eines Arrays und gibt dieses Element zurück                                                                                    |
| `unshift()`       | Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die Länge zurück                                                                         |
| `slice()`         | Extrahiert den Abschnitt eines Arrays und gibt das neue Array zurück                                                                                        |
| `at()`            | Gibt das Element am angegebenen Index oder `undefined` zurück                                                                                             |
| `splice()`        | Entfernt Elemente aus einem Array und ersetzt sie (optional) und gibt das Array zurück                                                              |
| `reverse()`       | TVertauscht die Elemente eines Arrays und gibt eine Referenz auf ein Array zurück                                                                           |
| `flat()`          | Gibt ein neues Array zurück, in dem alle Unterarray-Elemente rekursiv bis zur angegebenen Tiefe zusammengefügt sind                                        |
| `sort()`          | Sortiert die Elemente eines Arrays an Ort und Stelle und gibt eine Referenz auf das Array zurück                                                                     |
| `indexOf()`       | Gibt den Index des ersten Übereinstimmungselements zurück                                                                                        |
| `lastIndexOf()`   | Gibt den Index des letzten Übereinstimmungselements zurück                                                                                         |
| `forEach()`       | Führt eine Rückruffunktion in jedem Element eines Arrays aus und gibt undefined zurück                                                                             |
| `map()`           | Gibt ein neues Array zurück, das einen Rückgabewert ausführt, indem `callback` für jedes Array-Element ausgeführt wird.                                                           |
| `flatMap()`       | Führt map() gefolgt von flat() der Tiefe 1 aus                                                                                                      |
| `filter()`        | Gibt ein neues Array zurück, das die Elemente enthält, für die callback true zurückgegeben hat                                                                     |
| `find()`          | Gibt das erste Element zurück, für das `callback` `true` zurückgegeben hat                                                                                       |
| `findLast()`      | Gibt das letzte Element zurück, für das `callback` `true` zurückgegeben hat                                                                                        |
| `findIndex()`     | Gibt den Index des ersten Elements zurück, für das `callback` `true` zurückgegeben hat                                                                          |
| `findLastIndex()` | Gibt den Index des letzten Elements zurück, für das `callback` `true` zurückgegeben hat                                                                          |
| `every()`         | Gibt `true` zurück, wenn `callback` für jedes Element im Array `true` zurückgibt                                                                           |
| `some()`          | Gibt `true` zurück, wenn `callback` für mindestens ein Element im Array `true` zurückgibt                                                                   |
| `reduce()`        | Verwendet `callback(Akkumulator, aktueller Wert, aktueller Index, Array)` zu Reduzierungszwecken und gibt den endgültigen von der `callback`-Funktion zurückgegebenen Wert zurück  |
| `reduceRight()`   | Funktioniert ähnlich wie `reduce()`, beginnt jedoch mit dem letzten Element                                                                                   |

