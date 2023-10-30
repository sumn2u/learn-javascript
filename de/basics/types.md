---
Kapitel: 2
Seitenzahl: 13
Beschreibung: Typen sind die Arten von Daten, die in der Sprache dargestellt und manipuliert werden können.
---

# Typen

Computer sind komplex und können auf komplexere Variablen als nur Zahlen zurückgreifen. Hier kommen Variablentypen ins Spiel. Variablen gibt es in verschiedenen Typen, und verschiedene Programmiersprachen unterstützen unterschiedliche Typen.

Die häufigsten Typen sind:

* **Nummer**: Zahlen können Ganzzahlen (z. B. `1`, `-5`, `100`) oder Fließkommazahlen (z. B. `3.14`, `-2.5`, `0.01`) sein. JavaScript hat keinen separaten Typ für Ganzzahlen und Fließkommazahlen; es behandelt beide als Nummern.
* **Zeichenkette**: Zeichenketten sind Sequenzen von Zeichen, dargestellt durch einfache Anführungszeichen (z. B. `'hallo'`) oder doppelte Anführungszeichen (z. B. `"Welt"`).
* **Boolean**: Booleans repräsentieren einen Wahrheitswert. Sie können als `true` oder `false` (ohne Anführungszeichen) geschrieben werden.
* **Null**: Der Null-Typ repräsentiert einen Nullwert, was "kein Wert" bedeutet. Er kann als `null` (ohne Anführungszeichen) geschrieben werden.
* **Undefiniert**: Der undefinierte Typ repräsentiert einen Wert, der nicht festgelegt wurde. Wenn eine Variable deklariert, aber kein Wert zugewiesen wurde, ist sie `undefiniert`.
* **Objekt**: Ein Objekt ist eine Sammlung von Eigenschaften, von denen jede einen Namen und einen Wert hat. Sie können ein Objekt mit geschweiften Klammern (`{}`) erstellen und Eigenschaften mit Namen-Wert-Paaren zuweisen.
* **Array**: Ein Array ist eine besondere Art von Objekt, das eine Sammlung von Elementen aufnehmen kann. Sie können ein Array mit eckigen Klammern (`[]`) erstellen und eine Liste von Werten zuweisen.
* **Funktion**: Eine Funktion ist ein Codeblock, der definiert und dann nach Namen aufgerufen werden kann. Funktionen können Argumente (Eingaben) akzeptieren und einen Wert (Ausgabe) zurückgeben. Sie können eine Funktion mit dem Schlüsselwort `function` erstellen.

JavaScript ist eine "_schwach typisierte_" Sprache, was bedeutet, dass Sie nicht explizit deklarieren müssen, welchen Datentyp die Variablen haben. Sie müssen lediglich das Schlüsselwort `var` verwenden, um anzuzeigen, dass Sie eine Variable deklarieren, und der Interpreter wird den Datentyp aus dem Kontext und der Verwendung von Anführungszeichen ableiten.

{% exercise %}
Deklarieren Sie drei Variablen und initialisieren Sie sie mit den folgenden Werten: `age` als Nummer, `name` als Zeichenkette und `isMarried` als Boolean.

{% initial %}
let age =
let name = 
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true

{% validation %}
assert(typeof age === "number" && typeof name === "string" && typeof isMarried === "boolean");

{% context %}
{% endexercise %}

Der `typeof` Operator wird verwendet, um die Datentypen einer Variable zu überprüfen.

```javascript
typeof "John"                 // Gibt "string" zurück
typeof 3.14                   // Gibt "number" zurück
typeof NaN                    // Gibt "number" zurück
typeof false                  // Gibt "boolean" zurück
typeof [1,2,3,4]              // Gibt "object" zurück
typeof {name:'John', age:34}  // Gibt "object" zurück
typeof new Date()             // Gibt "object" zurück
typeof function () {}         // Gibt "function" zurück
typeof myCar                  // Gibt "undefined" zurück *
typeof null                   // Gibt "object" zurück
In JavaScript verwendete Datentypen können in zwei Kategorien unterteilt werden, basierend auf den enthaltenen Werten.

Datentypen, die Werte enthalten können:

string
number
boolean
object
function
{% hint style="info" %}
Object, Date, Array, String, Number und Boolean sind die verfügbaren Objekttypen in JavaScript.
{% endhint %}

Datentypen, die keine Werte enthalten können:

null
undefined
Ein primitiver Datenwert ist ein einfacher Datenwert ohne zusätzliche Eigenschaften und Methoden und kein Objekt. Sie sind unveränderlich, d.h. sie können nicht verändert werden. Es gibt 7 primitive Datentypen:

Zeichenkette
Nummer
bigint
Boolean
Undefiniert
Symbol
Null
{% exercise %}
Deklarieren Sie eine Variable namens person und initialisieren Sie sie mit einem Objekt, das die folgenden Eigenschaften enthält: age als Nummer, name als Zeichenkette und isMarried als Boolean.

{% initial %}
let person =

{% solution %}
let person = {
name: "Mary",
age: 25,
isMarried: false
};

{% validation %}
assert(typeof person.age === "number" && typeof person.name === "string" && typeof person.isMarried === "boolean");

{% context %}
{% endexercise %}



