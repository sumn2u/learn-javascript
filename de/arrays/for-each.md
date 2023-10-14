---
Kapitel: 6
Seitenzahl: 46
Beschreibung: Die forEach-Methode führt eine bereitgestellte Funktion einmal für jedes Array-Element aus.
---
# Für Jedes Element

Die `forEach`-Methode führt eine bereitgestellte Funktion einmal für jedes Array-Element aus. Hier ist die Syntax für die Verwendung von `forEach`:

```javascript
array.forEach(function(element, index, array) {
  // element: das aktuell verarbeitete Element im Array
  // index: der Index des aktuell verarbeiteten Elements im Array
  // array: das Array, auf dem `forEach` aufgerufen wurde
});
```

Beispielsweise nehmen wir an, Sie haben ein Array von Zahlen und möchten das Doppelte jeder Zahl in der Konsole ausgeben. Dies können Sie mit `forEach` wie folgt tun:

```typescript
let zahlen = [1, 2, 3, 4, 5];
zahlen.forEach(function(zahl) {
  console.log(zahl * 2);
});
```

Sie können auch die Pfeilfunktionssyntax verwenden, um die Funktion, die an `forEach` übergeben wird, zu definieren:

```typescript
zahlen.forEach((zahl) => {
  console.log(zahl * 2);
});
```

oder

```typescript
zahlen.forEach(zahl => console.log(zahl * 2));
```

Die `forEach`-Methode ändert nicht das ursprüngliche Array. Sie durchläuft lediglich die Elemente des Arrays und führt die bereitgestellte Funktion für jedes Element aus.

{% hint style="warning" %}
Die `forEach()`-Methode wird nicht für die leere Anweisung ausgeführt.
{% endhint %}
```
