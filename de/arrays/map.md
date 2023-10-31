---
Kapitel: 6
Seitenzahl: 39
Beschreibung: Die "map"-Methode durchläuft ein Array und ändert seine Elemente mithilfe einer Rückruffunktion. Diese Rückruffunktion wird auf jedes Element des Arrays angewendet.
---
# Map

Die Methode `Array.prototype.map()` durchläuft ein Array und ändert seine Elemente mithilfe einer Rückruffunktion. Diese Rückruffunktion wird dann auf jedes Element des Arrays angewendet.

Hier ist die Syntax für die Verwendung von `map`.

```javascript
let newArray = oldArray.map(function(element, index, array) {
  // element: aktuell verarbeitetes Element im Array
  // index: Index des aktuell verarbeiteten Elements im Array
  // array: das Array, auf dem "map" aufgerufen wurde
  // Rückgabe des Elements, das zu newArray hinzugefügt werden soll
});
```

Beispielsweise nehmen wir an, Sie haben ein Array von Zahlen, und Sie möchten ein neues Array erstellen, das die Werte der Zahlen im ursprünglichen Array verdoppelt. Dies können Sie mithilfe von "map" wie folgt tun.

```javascript
const zahlen = [2, 4, 6, 8];

const verdoppelteZahlen = zahlen.map(zahl => zahl * 2);

console.log(verdoppelteZahlen);

// Ergebnis: [4, 8, 12, 16]
```

Sie können auch die Pfeilfunktionssyntax verwenden, um die Funktion, die an "map" übergeben wird, zu definieren.

<pre class="language-typescript"><code class="lang-typescript"><strong>let verdoppelteZahlen = zahlen.map((zahl) => {
</strong>  return zahl * 2;
});
</code></pre>
oder

```typescript
let verdoppelteZahlen = zahlen.map(zahl => zahl * 2);
```

{% hint style="info" %}
Die "map()"-Methode führt die Funktion nicht für leere Elemente aus und ändert das ursprüngliche Array nicht.
{% endhint %}
