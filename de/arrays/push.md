---
Kapitel: 6
Seitenzahl: 45
Beschreibung: Mit der "push"-Methode können bestimmte Elemente am Ende eines Arrays hinzugefügt werden, wobei der letzte Index das neu hinzugefügte Element ist. Dies ändert die Länge des Arrays und gibt eine neue Länge zurück.
---
# Push

Mit der "push"-Methode können bestimmte Elemente am Ende eines Arrays hinzugefügt werden, wobei der letzte Index das neu hinzugefügte Element ist. Dies ändert die Länge des Arrays und gibt eine neue Länge zurück.

Hier ist die Syntax für die Verwendung von "push":

```c
array.push(element1[, ...[, elementN]]);
```

Die Argumente element1, ..., elementN repräsentieren die Elemente, die am Ende des Arrays hinzugefügt werden sollen.

Beispiel:

```javascript
let array = [1, 2, 3];
array.push(4);

console.log(array);

// Ergebnis: array = [1, 2, 3, 4]
```

Sie können "push" auch verwenden, um Elemente am Ende eines arrayähnlichen Objekts (wie einem Argumente-Objekt oder einem NodeList-Objekt) hinzuzufügen, indem Sie es zuerst in ein Array umwandeln, indem Sie die Methode Array.prototype.slice() verwenden:

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push('d', 'e', 'f');
  console.log(args);
}

printArguments('a', 'b', 'c'); // Ergebnis: ["a", "b", "c", "d", "e", "f"]
```

> **Hinweis**: Die "push"-Methode ändert das ursprüngliche Array. Sie erstellt kein neues Array.
