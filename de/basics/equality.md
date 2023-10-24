---
Kapitel: 2
Seitenzahl: 15
Beschreibung: Der Gleichheitsoperator wird zur Vergleich verwendet. Er kann feststellen, ob zwei Variablen gleich sind, selbst wenn sie nicht denselben Typ haben.
---

# Gleichheit

Beim Schreiben eines Programms müssen wir häufig die Gleichheit von Variablen in Bezug auf andere Variablen feststellen. Dies erfolgt mithilfe eines Gleichheitsoperators. Der einfachste Gleichheitsoperator ist der `==` Operator. Dieser Operator versucht, so gut wie möglich festzustellen, ob zwei Variablen gleich sind, selbst wenn sie nicht denselben Typ haben.

Nehmen wir zum Beispiel an:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```


Here's the translation of the provided text into German:

markdown
Copy code
---
Kapitel: 2
Seitenzahl: 15
Beschreibung: Der Gleichheitsoperator wird zur Vergleich verwendet. Er kann feststellen, ob zwei Variablen gleich sind, selbst wenn sie nicht denselben Typ haben.
---

# Gleichheit

Beim Schreiben eines Programms müssen wir häufig die Gleichheit von Variablen in Bezug auf andere Variablen feststellen. Dies erfolgt mithilfe eines Gleichheitsoperators. Der einfachste Gleichheitsoperator ist der `==` Operator. Dieser Operator versucht, so gut wie möglich festzustellen, ob zwei Variablen gleich sind, selbst wenn sie nicht denselben Typ haben.

Nehmen wir zum Beispiel an:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";

`foo == bar` ergibt true, und `baz == qux` ergibt false, wie man erwarten würde. Jedoch wird `foo == baz` trotz unterschiedlicher Typen ebenfalls true ergeben. Hinter den Kulissen versucht der `==` Gleichheitsoperator, seine Operanden auf denselben Typ zu zwingen, bevor er ihre Gleichheit feststellt. Dies steht im Gegensatz zum `=== `Gleichheitsoperator.

Der `===` Gleichheitsoperator bestimmt, dass zwei Variablen gleich sind, wenn sie denselben Typ und denselben Wert haben. Unter denselben Annahmen wie zuvor bedeutet dies, dass `foo === bar` immer noch true ergibt, aber `foo === baz` nun false ergibt. baz `===` qux wird weiterhin false ergeben.

{% exercise %}
Verwenden Sie den `==` und den `===` Operator, um die Werte von str1 und str2 zu vergleichen.

{% initial %}
let str1 = "hallo";
let str2 = "HALLO";
let bool1 = true;
let bool2 = 1;
// Vergleichen Sie mit ==
let stringResult1 =
let boolResult1 =
// Vergleichen Sie mit ===
let stringResult2 =
let boolResult2 =
{% solution %}
let str1 = "hallo";
let str2 = "HALLO";
let bool1 = true;
let bool2 = 1;
// Vergleichen Sie mit ==
let stringResult1 = str1 == str2 // false
let boolResult1 = bool1 == bool2 // true

// Vergleichen Sie mit ===
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false

{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 === true && boolResult2 === false);

{% context %}
{% endexercise %}

