---
Kapitel: 6
Seitenzahl: 43
Beschreibung: Die join-Methode wandelt das Array in einen String um und fügt alles zusammen, ohne das ursprüngliche Array zu verändern.
---
# Verbinden (Join)

Die `join`-Methode verwandelt ein Array in einen String und fügt alles zusammen. Sie ändert das ursprüngliche Array nicht. Hier ist die Syntax für die Verwendung von `join`:

```c
array.join([Trennzeichen]);
```

Das Argument `Trennzeichen` ist optional und legt das Zeichen fest, das zur Trennung der Elemente im resultierenden String verwendet werden soll. Wenn es ausgelassen wird, werden die Array-Elemente mit einem Komma (`,`) getrennt.

Beispiel:

```javascript
let array = ["eins", "zwei", "drei", "vier"];

console.log(array.join(" "));

// Ergebnis: eins zwei drei vier
```

{% hint style="warning" %}
Es kann ein beliebiges Trennzeichen angegeben werden, aber das Standardtrennzeichen ist ein Komma `(,)`.
{% endhint %}

In dem obigen Beispiel wird ein Leerzeichen als Trennzeichen verwendet. Sie können `join` auch verwenden, um ein arrayähnliches Objekt (wie ein Argumente-Objekt oder ein NodeList-Objekt) in einen String umzuwandeln, indem Sie es zuerst in ein Array umwandeln, das die Methode `Array.prototype.slice()` verwendet:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(', '));
}

printArguments('a', 'b', 'c'); // Ergebnis: "a, b, c"
```