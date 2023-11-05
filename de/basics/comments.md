---
Kapitel: 2
Seitenzahl: 10
Beschreibung: Kommentare werden verwendet, um Anmerkungen für andere Programmierer oder kurze Beschreibungen des Codes zu kennzeichnen, die anderen helfen, ihn zu verstehen. Diese Anweisungen werden vom Interpreter nicht ausgeführt.
---

# Kommentare

Kommentare sind Anweisungen, die nicht vom Interpreter ausgeführt werden. Sie dienen dazu, Anmerkungen für andere Programmierer zu kennzeichnen oder kleine Beschreibungen dessen, was der Code tut, um es anderen zu erleichtern, Ihren Code zu verstehen. Sie werden auch verwendet, um vorübergehend Code zu deaktivieren, ohne den Programmfluss zu beeinflussen.

In JavaScript können Kommentare auf 2 verschiedene Arten geschrieben werden:

* _Einzelnzeilige Kommentare_: Sie beginnen mit zwei Schrägstrichen (`//`) und erstrecken sich bis zum Ende der Zeile. Alles, was den Schrägstrichen folgt, wird vom JavaScript-Interpreter ignoriert. Zum Beispiel:

```javascript
// Dies ist ein Kommentar, er wird vom Interpreter ignoriert
let a = "das ist eine in einer Anweisung definierte Variable";
```

* Mehrzeilige Kommentare: Sie beginnen mit einem Schrägstrich und einem Sternchen (/*) und enden mit einem Sternchen und einem Schrägstrich (*/). Alles zwischen den Eröffnungs- und Schlussmarkierungen wird vom JavaScript-Interpreter ignoriert. Zum Beispiel:

```javascript
/*
Dies ist ein mehrzeiliger Kommentar,
er wird vom Interpreter ignoriert
*/
let a = "das ist eine in einer Anweisung definierte Variable";
```

Das Einbeziehen von Kommentaren in den Code ist wesentlich, um die Codequalität zu erhalten, die Zusammenarbeit zu ermöglichen und den Debugging-Prozess zu vereinfachen. Kommentare bieten Kontext und Erläuterungen zu verschiedenen Teilen des Programms und erleichtern so das Verständnis des Codes in der Zukunft. Daher wird es als vorteilhafte Praxis angesehen, Kommentare in den Code aufzunehmen.