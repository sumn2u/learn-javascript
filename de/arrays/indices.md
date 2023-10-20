---
Kapitel: 6
Seitenzahl: 48
Beschreibung: Arrays sind Sammlungen von Elementen, und jedem Element wird eine numerische Position zugewiesen, die als Index bezeichnet wird. Indizes sind nullbasiert, das bedeutet, das erste Element eines Arrays hat den Index 0, das zweite den Index 1 und so weiter.
---
# Indizes

Sie haben also Ihr Array von Datenelementen, aber was ist, wenn Sie auf ein bestimmtes Element zugreifen möchten? Hier kommen Indizes ins Spiel. Ein **Index** bezieht sich auf eine Stelle im Array. Indizes schreiten logisch eins nach dem anderen voran, aber es sollte beachtet werden, dass der erste Index in einem Array 0 ist, wie es in den meisten Programmiersprachen der Fall ist. Klammern `[]` werden verwendet, um anzuzeigen, dass Sie auf einen Index eines Arrays verweisen.

```javascript
// Dies ist ein Array von Zeichenketten
let obst = ["Apfel", "Banane", "Ananas", "Erdbeere"];

// Wir setzen die Variable "banane" auf den Wert des zweiten Elements des
// Obst-Arrays. Denken Sie daran, dass Indizes bei 0 beginnen, also ist 1 das
// zweite Element. Ergebnis: banane = "Banane"
let banane = obst[1];
```

Sie können auch einen Array-Index verwenden, um den Wert eines Elements in einem Array festzulegen:

```javascript
let array = ['a', 'b', 'c', 'd', 'e'];
//  Indizes:  0    1    2    3    4
array[4] = 'f';
console.log(array); // Ergebnis: ['a', 'b', 'c', 'd', 'f']
```

Beachten Sie, dass, wenn Sie versuchen, auf ein Element zuzugreifen oder den Wert eines Elements mit einem Index festzulegen, der außerhalb der Grenzen des Arrays liegt (d. h. ein Index, der kleiner als 0 ist oder größer oder gleich der Länge des Arrays ist), Sie einen Wert von `undefined` erhalten:

```javascript
console.log(array[5]); // Ausgabe: undefined
array[5] = 'g';
console.log(array); // Ergebnis: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
