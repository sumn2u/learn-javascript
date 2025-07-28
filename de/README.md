---
Kapitel: 1
Seite: 9
Beschreibung: JavaScript ist eine hochentwickelte, interpretierte und dynamisch typisierte Programmiersprache, die hauptsächlich für die Webentwicklung verwendet wird. Sie gehört zu den drei zentralen Technologien, mit denen interaktive und dynamische Websites sowie Webanwendungen erstellt werden.
---
# Kapitel 1
# Vorstellung

Computer sind in der heutigen Welt weit verbreitet, da sie eine Vielzahl von Aufgaben schnell und präzise ausführen können. Sie werden in vielen verschiedenen Branchen eingesetzt, z. B. in der Wirtschaft, im Gesundheits- und Bildungswesen und in der Unterhaltungsbranche. Sie sind für viele Menschen zu einem wesentlichen Bestandteil des täglichen Lebens geworden. Darüber hinaus werden sie auch zur Durchführung komplexer wissenschaftlicher und mathematischer Berechnungen, zur Speicherung und Verarbeitung großer Datenmengen und zur Kommunikation mit Menschen in aller Welt eingesetzt. Computer sind in der heutigen Welt weit verbreitet, da sie in der Lage sind, eine Vielzahl von Aufgaben schnell und genau auszuführen. Sie werden in vielen verschiedenen Branchen wie Wirtschaft, Gesundheitswesen, Bildung und Unterhaltung eingesetzt und sind für viele Menschen zu einem wesentlichen Bestandteil des täglichen Lebens geworden. Darüber hinaus werden sie auch zur Durchführung komplexer wissenschaftlicher und mathematischer Berechnungen, zur Speicherung und Verarbeitung großer Datenmengen sowie zur Kommunikation mit Menschen auf der ganzen Welt eingesetzt.

Beim Programmieren wird ein Satz von Anweisungen, ein sogenanntes Programm, erstellt, den ein Computer ausführen muss. Das Schreiben eines Programms kann mühsam und manchmal frustrierend sein, da Computer sehr präzise arbeiten und spezifische Anweisungen benötigen, um Aufgaben zu erledigen.

![Intro Page](../.gitbook/assets/intro.png)

Programmiersprachen sind künstliche Sprachen, die dazu dienen, Computern Anweisungen zu geben. Sie werden für die meisten Programmieraufgaben verwendet und basieren auf der Art und Weise, wie Menschen miteinander kommunizieren. Wie menschliche Sprachen ermöglichen Programmiersprachen die Kombination von Wörtern und Ausdrücken, um neue Konzepte auszudrücken. Interessanterweise ist die effektivste Art der Kommunikation mit Computern die Verwendung einer Sprache, die der menschlichen Sprache ähnelt.

Früher erfolgte die Interaktion mit Computern hauptsächlich über sprachbasierte Schnittstellen wie BASIC und DOS-Eingabeaufforderungen. Diese wurden weitgehend durch visuelle Schnittstellen ersetzt, die zwar leichter zu erlernen, aber weniger flexibel sind. Computersprachen wie JavaScript werden jedoch weiterhin verwendet und sind in modernen Webbrowsern und auf den meisten Geräten zu finden.

JavaScript (kurz JS) ist eine Programmiersprache für dynamische Interaktionen bei der Entwicklung von Webseiten, Spielen, Anwendungen und sogar Servern. JavaScript entstand in den 1990er Jahren bei Netscape, einem Webbrowser, und ist heute eine der bekanntesten und am häufigsten verwendeten Programmiersprachen.

Ursprünglich wurde es entwickelt, um Webseiten lebendig zu gestalten und konnte nur im Browser ausgeführt werden. Jetzt läuft es auf jedem Gerät, das die JavaScript-Engine unterstützt. Standardobjekte wie [Array](./arrays/README.md), [Date](./date-and-time.md), and [Math](./numbers/math.md) are available in JavaScript, as well as operators, control structures, and statements. _Client-side JavaScript_ and _Server-side JavaScript_ are the extended versions of core JavaScript.

* _Clientseitiges JavaScript_ ermöglicht die Verbesserung und Bearbeitung von Webseiten und Client-Browsern. Reaktionen auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation sind einige Beispiele.
* [_Serverseitiges JavaScript_](./server-side/README.md) ermöglicht den Zugriff auf Server, Datenbanken und Dateisysteme.

JavaScript ist eine Interpretersprache. Bei der Ausführung von Javascript übersetzt ein Interpreter nacheinander jede Zeile und führt sie aus. Der moderne Browser verwendet [Just In Time (JIT)](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/) Compiler zur Kompilierung, die JavaScript in ausführbaren Bytecode übersetzen.

{% hint style="info" %}
„LiveScript“ war der ursprüngliche Name von JavaScript.
{% endhint %}

### Code, was man damit macht und typografische Konventionen

_Code_ sind die schriftlichen Anweisungen, aus denen ein Programm besteht. Viele Kapitel enthalten viel Code, und es ist wichtig, Code zu lesen und zu schreiben, um Programmieren zu lernen. Sie sollten die Beispiele nicht nur überfliegen, sondern sorgfältig lesen und versuchen, sie zu verstehen. Das mag anfangs schwierig sein, aber mit etwas Übung werden Sie besser. Dasselbe gilt für die Übungen – bitte stellen Sie sicher, dass Sie wirklich versuchen, eine Lösung zu schreiben, bevor Sie davon ausgehen, sie verstanden zu haben. Es ist außerdem hilfreich, Ihre Lösungen in einem JavaScript-Interpreter auszuführen, da Sie so überprüfen können, ob Ihr Code korrekt funktioniert. Dies kann Sie zudem dazu ermutigen, zu experimentieren und über die Aufgaben hinauszugehen.

Hier wird Text in der Schrift Monospaced dargestellt, was die Elemente eines Programms darstellt. Dabei kann es sich um einen eigenständigen Programmabschnitt oder einen Verweis auf einen Teil eines nahegelegenen Programms handeln. Programme – wie das unten gezeigte – werden auf diese Weise geschrieben:


```javascript
const zahlen = [45, 4, 9, 16, 25];
let txt = "";
for (let x in zahlen) {
  txt += zahlen[x];
}
```

Manchmal wird die erwartete Ausgabe eines Programms direkt nach dem Programmcode notiert, und zwar eingeleitet durch zwei Schrägstriche mit einem _Ergebnis_, etwa so:

```javascript
console.log(txt);

// Ergebnis: txt = '45491625'
```
