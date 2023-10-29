---
Kapitel: 6
Seitenzahl: 38
Beschreibung: Um ein Element am Anfang eines Arrays hinzuzufügen, können wir die "unshift"-Methode verwenden. Sie ändert das ursprüngliche Array und gibt die neue Array-Länge zurück.
---
# Unshift (Hinzufügen am Anfang)

Die "unshift"-Methode fügt neue Elemente nacheinander am Anfang des Arrays hinzu. Sie ändert das ursprüngliche Array und gibt die neue Länge des Arrays zurück. Zum Beispiel:

```javascript
let array = [0, 5, 10];
array.unshift(-5);  // 4

// ERGEBNIS: array = [-5 , 0, 5, 10];
```
{% hint style="warning" %}
Die Methode unshift() überschreibt das ursprüngliche Array.
{% endhint %}

Die "unshift"-Methode akzeptiert ein oder mehrere Argumente, die die am Anfang des Arrays hinzuzufügenden Elemente darstellen. Sie fügt die Elemente in der Reihenfolge hinzu, in der sie bereitgestellt werden, sodass das erste Element das erste Element des Arrays sein wird.

Hier ist ein Beispiel zur Verwendung von "unshift", um mehrere Elemente zu einem Array hinzuzufügen:

```javascript
const numbers = [1, 2, 3];
const neueLänge = numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3]
console.log(neueLänge); // 5
```
