---
Kapitel: 6
Seitenzahl: 41
Beschreibung: Die "shift"-Methode löscht das erste Indexelement des Arrays und verschiebt alle Indizes nach links. Sie ändert das ursprüngliche Array.
---
# Shift

Die "shift"-Methode löscht das erste Indexelement des Arrays und verschiebt alle Indizes nach links. Sie ändert das ursprüngliche Array. Hier ist die Syntax für die Verwendung von "shift":

```c
array.shift();
```

Beispiel:&#x20;

```javascript
let array = [1, 2, 3]; 
array.shift(); 

// Ergebnis: array = [2,3] 

```

Sie können die "shift"-Methode auch in Verbindung mit einer Schleife verwenden, um alle Elemente aus einem Array zu entfernen. Hier ist ein Beispiel, wie Sie dies tun könnten:

```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Ergebnis: []
```

{% hint style="warning" %}
Die "shift"-Methode funktioniert nur bei Arrays und nicht bei anderen Objekten, die Arrays ähneln, wie zum Beispiel Argument-Objekten oder NodeList-Objekten. Wenn Sie Elemente aus einem dieser Arten von Objekten verschieben müssen, müssen Sie es zuerst in ein Array umwandeln, indem Sie die Methode Array.prototype.slice() verwenden.
{% endhint %}
