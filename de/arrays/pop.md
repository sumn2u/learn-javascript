---
Kapitel: 6
Seitenzahl: 42
Beschreibung: Die "pop"-Methode entfernt das letzte Element aus einem Array und gibt dieses Element zurück. Diese Methode ändert die Länge des Arrays.
---
# Pop

Die "pop"-Methode entfernt das letzte Element aus einem Array und gibt dieses Element zurück. Diese Methode ändert die Länge des Arrays.

Hier ist die Syntax für die Verwendung von "pop":

```c
array.pop();
```

Beispiel:

```javascript
let arr = ["eins", "zwei", "drei", "vier", "fünf"];
arr.pop();

console.log(arr);

// Ergebnis: ['eins', 'zwei', 'drei', 'vier']
```

Sie können die "pop"-Methode auch in Verbindung mit einer Schleife verwenden, um alle Elemente aus einem Array zu entfernen. Hier ist ein Beispiel, wie Sie dies tun könnten:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Ergebnis: []
```

{% hint style="warning" %}
Die "pop"-Methode funktioniert nur bei Arrays und nicht bei anderen Objekten, die Arrays ähneln, wie z.B. Argument-Objekten oder NodeList-Objekten. Wenn Sie Elemente aus einem dieser Arten von Objekten entfernen müssen, müssen Sie es zuerst in ein Array umwandeln, indem Sie die Methode Array.prototype.slice() verwenden.

{% endhint %}
