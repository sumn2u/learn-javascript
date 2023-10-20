---
Kapitel: 6
Seitenzahl: 44
Beschreibung: Arrays haben eine Eigenschaft namens "length", die die Länge eines Arrays misst.
---
# Länge (Length)

Arrays haben eine Eigenschaft namens "length", und sie ist ziemlich genau das, wonach sie klingt - es ist die Länge des Arrays.

```javascript
let array = [1, 2, 3];

let l = array.length;

// Ergebnis: l = 3
```

Die "length"-Eigenschaft legt auch die Anzahl der Elemente in einem Array fest. Zum Beispiel:

```javascript
let obst = ["Banane", "Orange", "Apfel", "Mango"];
obst.length = 2;

console.log(obst);
// Ergebnis: ['Banane', 'Orange']
```

Sie können die "length"-Eigenschaft auch verwenden, um das letzte Element eines Arrays zu erhalten, indem Sie sie als Index verwenden. Zum Beispiel:

```c
console.log(obst[obst.length - 1]); // Ergebnis: Orange
```

Sie können die "length"-Eigenschaft auch verwenden, um Elemente am Ende eines Arrays hinzuzufügen. Zum Beispiel:

```c
obst[obst.length] = "Ananas";
console.log(obst); // Ergebnis: ['Banane', 'Orange', 'Ananas']
```

{% hint style="info" %}
Die "length"-Eigenschaft wird automatisch aktualisiert, wenn Elemente dem Array hinzugefügt oder daraus entfernt werden.
{% endhint %}

Es ist auch erwähnenswert, dass die "length"-Eigenschaft keine Methode ist, daher müssen Sie keine Klammern verwenden, wenn Sie darauf zugreifen. Es handelt sich einfach um eine Eigenschaft des Array-Objekts, auf die Sie wie auf jede andere Objekteigenschaft zugreifen können.
