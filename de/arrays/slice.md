---
Kapitel: 6
Seite: 60 
Beschreibung: Die JavaScript-Methode arr.slice() gibt ein neues Array zurück, das einen Teil des Arrays enthält, auf dem sie angewendet wird. Das Original bleibt unverändert.
---
# Slice

Die Methode `slice` akzeptiert zwei Parameter: begin und end.
* **begin**: Dieser Parameter definiert den Startindex, ab dem der Teil extrahiert werden soll. 
  Wenn dieses Argument fehlt, wird begin als `0` verwendet, da dies der Standard-Startwert ist.
* **end**: Dieser Parameter ist der Index, bis zu dem der Teil extrahiert werden soll (der Endindex wird ausgeschlossen). 
  Wenn dieses Argument nicht definiert ist, wird bis zum Ende des Arrays extrahiert, da dies der Standard-Endwert ist. Wenn der Endwert größer als die Länge des Arrays ist, wird der Endwert auf die Länge des Arrays gesetzt.

```javascript
function func() {
	// Ursprüngliches Array
	let arr = [23, 56, 87, 32, 75, 13];
	// Extrahiertes Array
	let new_arr = arr.slice();
	console.log(arr);
	console.log(new_arr);
}
func();


// ERGEBNIS: 
[23,56,87,32,75,13]
[23,56,87,32,75,13]
```

Die Methode `slice()` kopiert Objekt-Referenzen in das neue Array (zum Beispiel ein verschachteltes Array). Wenn das referenzierte Objekt geändert wird, sind die Änderungen auch im zurückgegebenen neuen Array sichtbar.

```javascript
let human = {
  name: "David",
  age: 23,
};

let arr = [human, "Nepal", "Manager"];
let new_arr = arr.slice();

// ursprüngliches Objekt
console.log(arr[0]); // { name: 'David', age: 23 }

// Änderung am Objekt im neuen Array
new_arr[0].name = "Levy";

// Änderungen werden übernommen
console.log(arr[0]); // { name: 'Levy', age: 23 }
```
