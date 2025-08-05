---
layout: editorial
Kapitel: 14
Seite: 89
Beschreibung: Ein regulärer Ausdruck, oft als "RegEx" abgekürzt, ist ein leistungsstarkes Werkzeug zum Musterabgleich und zur Suche innerhalb von Zeichenfolgen. Es bietet eine prägnante und flexible Möglichkeit, Text basierend auf bestimmten Mustern zu durchsuchen, abzugleichen und zu manipulieren.
---

# Kapitel 14
# Regulärer Ausdruck

Ein regulärer Ausdruck ist ein Objekt, das entweder mit dem `RegExp`-Konstruktor erstellt werden kann oder als Literalwert, indem ein Muster in Schrägstriche `(/)` eingeschlossen wird. Die Syntaxen zum Erstellen eines regulären Ausdrucks sind unten gezeigt.

```javascript
// Verwendung des regulären Ausdrucks-Konstruktors
new RegExp(pattern[, flags]);

// Verwendung von Literalen
/pattern/flags
```

Die Flags sind optional beim Erstellen eines regulären Ausdrucks mit Literalen. Beispiel für die Erstellung eines identischen regulären Ausdrucks mit den oben genannten Methoden:

```javascript
let re1 = new RegExp("xyz"); 
let re2 = /xyz/;
```

Beide Methoden erzeugen ein Regex-Objekt und haben die gleichen Methoden und Eigenschaften. Es gibt Fälle, in denen wir dynamische Werte zum Erstellen eines regulären Ausdrucks benötigen – in diesem Fall funktionieren Literale nicht und wir müssen den Konstruktor verwenden.

{% hint style="info" %}
In Fällen, in denen wir einen Schrägstrich als Teil eines regulären Ausdrucks haben möchten, müssen wir den Schrägstrich `(/)` mit einem Backslash `(\)` maskieren.
{% endhint %}

Die verschiedenen Modifikatoren, die verwendet werden, um eine Groß-/Kleinschreibung-unabhängige Suche durchzuführen, sind:

* `g` – globale Suche (findet alle Übereinstimmungen, anstatt nach der ersten Übereinstimmung zu stoppen)

Beispiel :

```javascript
const str = "Hello world, hello again!";
const regex = /hello/gi;
const matches = str.match(regex);
// Wenn du über .match() nachdenkst, lies das hier 👇
// Es ist eine eingebaute Methode in JavaScript, die verwendet wird, um eine Zeichenkette nach einem Ausdruck abzugleichen. Wenn eine Übereinstimmung gefunden wird, gibt sie ein Array aller gefundenen Übereinstimmungen zurück.
// Wenn nicht, gibt die .match()-Methode null zurück.

console.log(matches); // ["Hello", "hello"]
```

* `i` – Suche ohne Beachtung der Groß-/Kleinschreibung

Beispiel :

```javascript
const str = "HeLlO WoRlD";
const regex = /hello/i;
const match = regex.test(str);
// Die .test()-Methode gibt einen booleschen Wert zurück:
// true, wenn eine Übereinstimmung gefunden wird, und false, wenn nicht.

console.log(match); // true
```

* `m` – mehrzeiliges Matching

Beispiel :

```javascript
const str = "This is a\nmultiline string.";
const regex = /./mg;
const matches = str.match(regex);
// Das m-Flag wird verwendet, um Zeilenumbrüche (\n) abzugleichen.
// Das bedeutet, dass der RegEx alle 26 Zeichen in der Zeichenkette abgleicht,
// einschließlich des Zeilenumbruchs.

console.log(matches.length); // 26
```

*Klammern* werden in einem regulären Ausdruck verwendet, um einen Zeichenbereich zu finden. Einige davon sind unten aufgeführt.

* `[abc]` – findet jedes Zeichen zwischen den Klammern

Beispiel :

```javascript
const str = "The cat and the dog are both animals.";
const regex = /[abc]/g;
const matches = str.match(regex);

console.log(matches); // Array aller Vorkommen von a, b und c

[
  'c', 'a', 'a',
  'a', 'b', 'a',
  'a'
]
```

* `[^abc]` – findet jedes Zeichen, das nicht zwischen den Klammern ist

Beispiel :

```javascript
const str = "The cat and dog.";
const regex = /[^abc]/g; // Findet jedes Zeichen, das nicht 'a', 'b' oder 'c' ist
const matches = str.match(regex);

console.log(matches); // Array aller Vorkommen von Zeichen, die nicht 'a', 'b' oder 'c' sind

[
  'T', 'h', 'e', ' ',
  't', ' ', 'n', 'd',
  ' ', 'd', 'o', 'g',
  '.'
]

```

											  

* `[0-9]` – findet jede Ziffer zwischen den Klammern

Beispiel :

```javascript
const str = "The price of the item is $25, but it may change to $30.";
const regex = /[0-9]/g; // Findet jede Ziffer von 0 bis 9
const matches = str.match(regex);

console.log(matches); // Array aller Ziffernvorkommen

[
  '2', '5', '3', '0'
]

```

* `[^0-9]` – findet jedes Zeichen, das nicht zwischen den Klammern ist (keine Ziffer)

Beispiel:

```javascript
const str = "The price is $25.";
const regex = /[^0-9]/g; // Findet jedes Zeichen, das keine Ziffer ist
const matches = str.match(regex);

console.log(matches); // Array aller Vorkommen von Nicht-Ziffern

[
  'T', 'h', 'e', ' ',
  'p', 'r', 'i', 'c',
  'e', ' ', 'i', 's',
  ' ', '$', '.'
]

```

*`(x|y)`– findet eines der Alternativen, getrennt durch ein `|`

Beispiel:

```javascript
const str = "The words 'xylophone' and 'yellow' contain the letters 'x' and 'y'.";
const regex = /(x|y)/g; // Findet entweder 'x' oder 'y'
const matches = str.match(regex);

console.log(matches); // Array aller Vorkommen von 'x' oder 'y'

[
  'x', 'y', 'y', 'x', 'x', 'y'
]

```

Metazeichen sind Sonderzeichen, die in regulären Ausdrücken eine besondere Bedeutung haben. Hier eine Übersicht:

| Metazeichen | Beschreibung                                                           |
| ----------- | ---------------------------------------------------------------------- |
| `.`         | Entspricht einem beliebigen Zeichen außer Zeilenumbruch oder Begrenzer |
| `\w`        | Entspricht einem Wortzeichen (alphanumerisch: `[a-zA-Z0–9_]`)          |
| `\W`        | Entspricht einem Nicht-Wortzeichen (wie `[^a-zA-Z0–9_]`)               |
| `\d`        | Entspricht einer Ziffer (wie `[0-9]`)                                  |
| `\D`        | Entspricht einem Nicht-Ziffernzeichen                                  |
| `\s`        | Entspricht einem Leerzeichen (z. B. Space, Tab)                        |
| `\S`        | Entspricht einem Nicht-Leerzeichen                                     |
| `\b`        | Entspricht dem Anfang oder Ende eines Wortes                           |
| `\B`        | Entspricht **nicht** dem Anfang oder Ende eines Wortes                 |
| `\0`        | Entspricht einem `NULL`-Zeichen                                        |
| `\n`        | Entspricht einem Zeilenumbruch                                         |
| `\f`        | Entspricht einem Form-Feed-Zeichen                                     |
| `\r`        | Entspricht einem Wagenrücklauf                                         |
| `\t`        | Entspricht einem Tabulator                                             |
| `\v`        | Entspricht einem vertikalen Tabulator                                  |
| `\xxx`      | Entspricht einem Zeichen im Oktal-Format `xxx`                         |
| `\xdd`      | Entspricht einem Zeichen im Hexadezimal-Format `dd`                    |
| `\udddd`    | Entspricht einem Unicode-Zeichen im Hexadezimalformat `dddd`           |

Eigenschaften und Methoden, die von RegEx unterstützt werden:

| Name          | Beschreibung                                                          |
| ------------- | --------------------------------------------------------------------- |
| `constructor` | Gibt die Funktion zurück, die den RegExp-Prototyp erstellt hat        |
| `exec()`      | Testet einen Treffer und gibt den ersten zurück (sonst `null`)        |
| `global`      | Prüft, ob das `g`-Modifikator gesetzt ist                             |
| `ignoreCase`  | Prüft, ob das `i`-Modifikator gesetzt ist                             |
| `lastIndex`   | Gibt den Index an, ab dem die nächste Suche beginnt                   |
| `multiline`   | Prüft, ob das `m`-Modifikator gesetzt ist                             |
| `source`      | Gibt den ursprünglichen Text des Musters zurück                       |
| `test()`      | Testet, ob ein Treffer existiert, und gibt `true` oder `false` zurück |
| `toString()`  | Gibt das Muster als Zeichenkette zurück                               |

{% hint style="warning" %}
Eine `compile()` Methode zum Kompilieren eines regulären Ausdrucks ist veraltet. Sie war früher nützlich, um bestehende RegEx-Objekte neu zu konfigurieren, ist aber heute durch direktes Neuerstellen überflüssig.
{% endhint %}

### Ein häufiges Beispiel für reguläre Ausdrücke

```javascript
let text = "The best things in life are free";
let result = /e/.exec(text); // sucht nach einem "e" in einem String
console.log(result); // Ausgabe: ["e", 2, "The best things in life ar...]


let helloWorldText = "Hello world!";
// Suche nach "Hello"
let pattern1 = /Hello/g;
let result1 = pattern1.test(helloWorldText);
// result1: true

let pattern1String = pattern1.toString();
// pattern1String : '/Hello/g'
```

### Ein Praxisbeispiel: PLZ-Prüfung mit RegEx

```javascript
const handleSubmit = (e) => {
  // Verhindert das automatische Absenden des Formulars
  e.preventDefault(); 

  // Definiert eine Liste gültiger Postleitzahlen
  const validPincodes = [
    110001, 110002, 110003, 110004, 110005, 110006, 110007, 110008, 110009,
    110010, 110011, 110012, 110013, 110014, 110015, 110016, 110017, 110018,
    110019, 110020, 110021, 110022, 110023, 110050, 110051, 110056, 110048,
    110057, 110058, 110059, 110060, 110061, 110062, 110063, 110064
  ];

  // Umwandlung der Postleitzahlen in Zeichenketten
  const validPincodeStrings = validPincodes.map((pincode) => String(pincode));

  // Erzeugt ein RegEx-Muster, das nur gültige PLZ zulässt
  const regexPattern = new RegExp(`^(${validPincodeStrings.join("|")})$`);

  // Bekommt die PLZ vom Eingabefeld
  const submittedPincode = pincode; // 'pincode' muss irgendwo definiert sein

  // Prüfung, ob die eingegebne PLZ ein gültiges Eingabemuster ist
  if (regexPattern.test(submittedPincode)) {
    // Erfolgsmeldung anzeigen
    // ...
  } else if (submittedPincode === "") {
    // Fehlermeldung bei leerer Eingabe
    // ...
  } else if (submittedPincode.length < 6) {
    // Fehlermeldung bei falscher Eingabelänge
    // ...
  }
}
```
