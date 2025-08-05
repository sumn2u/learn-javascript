---
layout: editorial
Kapitel: 11
Seite: 82
Beschreibung: JSON (JavaScript Object Notation) ist ein leichtgewichtiges Datenformat zum Austausch von Daten zwischen verschiedenen Systemen und Plattformen. Es wird häufig zur Datenübertragung und -speicherung verwendet, insbesondere in der Webentwicklung.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Kapitel 11
# JSON

**J**ava**S**cript **O**bject **N**otation (JSON) ist ein textbasiertes Format zum Speichern und Übertragen von Daten. JavaScript-Objekte lassen sich leicht in JSON umwandeln und wieder zurück. Zum Beispiel:

```javascript
// ein JavaScript-Objekt
let myObj = { name:"Ryan", age:30, city:"Austin" };

// in JSON konvertiert:
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// Ergebnis: '{"name":"Ryan","age":30,"city":"Austin"}'

// zurückkonvertiert in ein JavaScript-Objekt
let originalJSON = JSON.parse(myJSON);
console.log(originalJSON);

// Ergebnis: {name: 'Ryan', age: 30, city: 'Austin'}
```



`stringify` und `parse` sind die beiden Methoden, die von JSON unterstützt werden.

| Methode       | Beschreibung                                                    |
| ------------- | --------------------------------------------------------------- |
| `parse()`     | Gibt ein JavaScript-Objekt aus dem geparsten JSON-String zurück |
| `stringify()` | Gibt einen JSON-String aus einem JavaScript-Objekt zurück       |



Die folgenden Datentypen werden von JSON unterstützt:

* [string](./strings/README.md)
* [number](./numbers/README.md)
* [array](./arrays/README.md)
* [boolean](./basics/types.md#Boolean)
* [object](./basics/types.md#Object) mit gültigen JSON-Werten
* [null](./basics/types.md#NULL)

JSON kann **keine** `function`, `date` oder `undefined` enthalten.

