---
Kapitel: 6
Seite: 59 
Beschreibung: Um die Reihenfolge eines Arrays umzukehren, kann die reverse-Methode verwendet werden. Sie verändert das ursprüngliche Array und gibt eine Referenz auf das Array zurück.
---
# Reverse

Die Methode `reverse` kann bei jedem Array-Typ verwendet werden, einschließlich Arrays von Strings, Zahlen oder Objekten. Zum Beispiel:

```javascript
let users = [{
  name: "John Smith",
  age: 30
}, {
  name: "Jane Doe",
  age: 25
}];

users.reverse();

console.log(users);

// ERGEBNIS: 
[{
  name: "Jane Doe",
  age: 25
}, {
  name: "John Smith",
  age: 30
}];
```

Die Methode `reverse` vertauscht die Elemente des aufrufenden Array-Objekts direkt im Array, verändert es also (mutiert das Array) und gibt eine Referenz auf das Array zurück.
Hier ist ein Beispiel für die Verwendung von `reverse` mit einem Array:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.reverse();
console.log(numbers); // [3, 2, 1]
```
