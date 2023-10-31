---
Kapitel: 6
Seitenzahl: 47
Beschreibung: Die "sort"-Methode sortiert die Elemente eines Arrays in einer bestimmten Reihenfolge (aufsteigend oder absteigend). Standardmäßig sortiert die "sort"-Methode die Elemente als Zeichenketten und ordnet sie in aufsteigender Reihenfolge basierend auf ihren UTF-16-Codeeinheiten.

---
# Sortieren

Die "sort"-Methode sortiert die Elemente eines Arrays in einer bestimmten Reihenfolge (aufsteigend oder absteigend). Standardmäßig sortiert die "sort"-Methode die Elemente als Zeichenketten und ordnet sie in aufsteigender Reihenfolge basierend auf ihren UTF-16-Codeeinheiten.

Hier ist die Syntax für die Verwendung von "sort":

```c
array.sort([vergleichsfunktion]);
```

Das Argument vergleichsfunktion ist optional und definiert die Sortierreihenfolge. Wenn es ausgelassen wird, werden die Elemente in aufsteigender Reihenfolge gemäß ihrer Zeichenkettenrepräsentation sortiert.

Beispiel:

```javascript
let stadt = ["Kalifornien", "Barcelona", "Paris", "Kathmandu"];
let sortierteStadt = stadt.sort(); 

console.log(sortierteStadt);

// Ergebnis: ['Barcelona', 'Kalifornien', 'Kathmandu', 'Paris']


```

{% hint style="info" %}
Zahlen können falsch sortiert werden, wenn sie als Zeichenketten sortiert werden. Zum Beispiel ist "35" größer als "100", weil "3" größer ist als "1".
{% endhint %}

Um das Sortierproblem bei Zahlen zu lösen, werden Vergleichsfunktionen verwendet. Vergleichsfunktionen definieren die Sortierreihenfolge und geben einen negativen, null oder positiven Wert basierend auf den Argumenten zurück, wie folgt:

* Ein negativer Wert, wenn a vor b sortiert werden sollte
* Ein positiver Wert, wenn a nach b sortiert werden sollte
* 0, wenn a und b gleich sind und ihre Reihenfolge nicht wichtig ist

```javascript
const punkte = [40, 100, 1, 5, 25, 10];
punkte.sort((a, b) => {return a-b});

// Ergebnis: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
Die sort()-Methode überschreibt das ursprüngliche Array.
{% endhint %}
