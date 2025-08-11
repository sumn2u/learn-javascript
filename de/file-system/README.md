---
Kapitel: 24  
Seite: 242  
Beschreibung:  
---

# Kapitel 24  
# Dateisystem  
Dateisystemoperationen in JavaScript dienen der Interaktion mit dem Dateisystem der Host-Umgebung, wie etwa ein Webbrowser (Client-seitiges JavaScript) oder ein Server (Node.js). JavaScript bietet verschiedene APIs und Methoden zum Lesen und Schreiben im Dateisystem. Diese Operationen sind wichtig für Aufgaben wie das Speichern von Daten, das Auslesen von Konfigurationsdateien und das Verarbeiten von Benutzer-Uploads. Unten folgt eine Übersicht über Dateisystemoperationen in JavaScript:
#### Asynchrone und nicht blockierende I/O:

In Node.js können I/O-Operationen asynchron durchgeführt werden, was bedeutet, dass sie die Programmausführung nicht blockieren. Stattdessen werden sie in eine Warteschlange gestellt, und das Programm führt andere Aufgaben weiter aus. Wenn die I/O-Operation abgeschlossen ist, wird eine Callback-Funktion aufgerufen, um das Ergebnis zu verarbeiten. Dies ist besonders nützlich für I/O-Operationen, die viel Zeit in Anspruch nehmen können.
																																																																																					 
#### Lesen:  
In diesem Beispiel wird die Funktion `fs.readFile` verwendet, um Daten aus der Datei **test.txt** asynchron zu lesen. Sie nimmt eine Callback-Funktion entgegen, die ausgeführt wird, wenn der Lesevorgang abgeschlossen ist. Die Zeile `console.log("This gets printed at First")` wird unmittelbar nach dem Start des Lesevorgangs ausgeführt und wartet nicht auf den Abschluss des Lesevorgangs.

```javascript
const fs = require('fs');
// asynchrones, nicht blockierendes I/O – wird später ausgeführt, da es länger dauert
																
fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log(err, data)
})
console.log("This gets printed at First")
```

#### Schreiben:  
Hier wird `fs.writeFile` verwendet, um Daten asynchron in die Datei 'test.txt' zu schreiben. Die Callback-Funktion wird nach Abschluss des Schreibvorgangs ausgeführt. Sie gibt `"This runs after writing in a file: written to file"` aus, nachdem der Schreibvorgang abgeschlossen ist.

```javascript
fs.writeFile("test.txt", "mahima is good girl", () => {
    console.log("This runs after writing in a file: written to file")
})
```

### Synchrone I/O:

Synchrone I/O-Operationen unterbrechen die Programmausführung, bis die Operation abgeschlossen ist. In Node.js sollten synchrone Operationen sparsam verwendet werden, insbesondere bei Datei-I/O, da sie die Leistung beeinträchtigen und die Ereignisschleife blockieren können.

#### Lesen:  
Die Funktion `fs.readFileSync` wird für das synchrone Lesen von Dateien verwendet. Sie blockiert die Ausführung, bis die gesamte Datei gelesen ist, und fährt dann mit dem Rest des Codes fort. Dies wird im Allgemeinen nicht empfohlen, da das Programm währenddessen nicht reagiert.

```javascript
const a = fs.readFileSync("test.txt") // Node.js blockiert absichtlich
console.log(a.toString())
console.log("At last")
```

#### Schreiben:  
`fs.writeFileSync` wird für das synchrone Schreiben von Dateien verwendet. Es blockiert die Ausführung des Programms, bis der Schreibvorgang abgeschlossen ist. Auch hier sollte diese Methode mit Vorsicht eingesetzt werden, da das Programm während des Schreibvorgangs für längere Zeit blockiert werden kann.



```javascript
fs.writeFileSync("test.txt", "mahima is good girl")
console.log("This is sync: the process is intentionally blocked")
```


Node.js bietet sowohl synchrone als auch asynchrone Datei-I/O-Optionen. Asynchrone I/O wird typischerweise bevorzugt für bessere Leistung und Reaktionsfähigkeit, während synchrone I/O nur bei Bedarf und mit Bedacht eingesetzt wird, da sie die Ausführung des Programms blockieren kann.

