

---

layout: editorial
Kapitel: 10
Seite: 79
description: Das `Date`-Objekt speichert Datum und Uhrzeit und bietet Methoden zu deren Verwaltung. `Date`-Objekte sind statisch und verwenden die Standard-Zeitzone des Browsers, um das Datum als vollständige Zeichenkette anzuzeigen.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Kapitel 10
	   

# Datum und Uhrzeit

Das `Date`-Objekt speichert Datum und Uhrzeit und bietet Methoden zu deren Verwaltung. `Date`-Objekte sind statisch und verwenden die Standard-Zeitzone des Browsers, um das Datum als vollständige Zeichenkette anzuzeigen.

Um ein `Date` zu erstellen, verwenden wir den Konstruktor `new Date()`, welcher auf folgende Weise aufgerufen werden kann:

```javascript
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```

{% hint style="working" %}
Monate können von `0` bis `11` angegeben werden, darüber hinaus erfolgt ein Überlauf in das nächste Jahr.
{% endhint %}

Die von `Date` unterstützten Methoden und Eigenschaften sind unten beschrieben:

| Name                   | Beschreibung                                                                                              |
| ---------------------- |-----------------------------------------------------------------------------------------------------------|
| `constructor`          | Gibt die Funktion zurück, die das Prototypobjekt von Date erstellt hat                                    |
| `getDate()`            | Gibt den Tag (1–31) des Monats zurück                                                                     |
| `getDay()`             | Gibt den Wochentag (0–6) zurück                                                                           |
| `getFullYear()`        | Gibt das Jahr (vierstellig) zurück                                                                        |
| `getHours()`           | Gibt die Stunde (0–23) zurück                                                                             |
| `getMilliseconds()`    | Gibt die Millisekunden (0–999) zurück                                                                     |
| `getMinutes()`         | Gibt die Minuten (0–59) zurück                                                                            |
| `getMonth()`           | Gibt den Monat (0–11) zurück                                                                              |
| `getSeconds()`         | Gibt die Sekunden (0–59) zurück                                                                           |
| `getTime()`            | Gibt den numerischen Wert des Datums in Millisekunden seit Mitternacht am 1. Januar 1970 zurück           |
| `getTimezoneOffset()`  | Gibt die Zeitverschiebung zur UTC in Minuten zurück                                                       |
| `getUTCDate()`         | Gibt den Tag (1–31) des Monats nach UTC zurück                                                 |
| `getUTCDay()`          | Gibt den Wochentag (0–6) nach UTC zurück                                                             |
| `getUTCFullYear()`     | Gibt das Jahr (vierstellig) nach UTC zurück                                                          |
| `getUTCHours()`        | Gibt die Stunde (0–23) nach UTC zurück                                                               |
| `getUTCMilliseconds()` | Gibt die Millisekunden (0–999) nach UTC zurück                                                       |
| `getUTCMinutes()`      | Gibt die Minuten (0–59) nach UTC zurück                                                              |
| `getUTCMonth()`        | Gibt den Monat (0–11) nach UTC zurück                                                                |
| `getUTCSeconds()`      | Gibt die Sekunden (0–59) nach UTC zurück                                                             |
| `now()`                | Gibt den numerischen Wert in Millisekunden seit Mitternacht am 1. Januar 1970 zurück                      |
| `parse()`              | Parst den Datumsstring und gibt den numerischen Wert in Millisekunden seit Mitternacht am 1.1.1970 zurück |
| `prototype`            | Ermöglicht das Hinzufügen von Eigenschaften und Methoden zum Date-Prototyp                                |
| `setDate()`            | Setzt den Tag des Monats                                                                                  |
| `setFullYear()`        | Setzt das Jahr                                                                                            |
| `setHours()`           | Setzt die Stunde                                                                                          |
| `setMilliseconds()`    | Setzt die Millisekunden                                                                                   |
| `setMinutes()`         | Setzt die Minuten                                                                                         |
| `setMonth()`           | Setzt den Monat                                                                                           |
| `setSeconds()`         | Setzt die Sekunden                                                                                        |
| `setTime()`            | Setzt die Zeit                                                                                            |
| `setUTCDate()`         | Setzt den Tag des Monats nach UTC                                                                    |
| `setUTCFullYear()`     | Setzt das Jahr nach UTC                                                                              |
| `setUTCHours()`        | Setzt die Stunde nach UTC                                                                            |
| `setUTCMilliseconds()` | Setzt die Millisekunden nach UTC                                                                     |
| `setUTCMinutes()`      | Setzt die Minuten nach UTC                                                                           |
| `setUTCMonth()`        | Setzt den Monat nach UTC                                                                             |
| `setUTCSeconds()`      | Setzt die Sekunden nach UTC                                                                          |
| `toDateString()`       | Gibt das Datum in menschenlesbarem Format zurück                                                          |
| `toISOString()`        | Gibt das Datum im ISO-Format zurück                                                                       |
| `toJSON()`             | Gibt das Datum als Zeichenkette im JSON-Datumsformat zurück                                               |
| `toLocaleDateString()` | Gibt das Datum als Zeichenkette unter Verwendung lokaler Konventionen zurück                              |
| `toLocaleTimeString()` | Gibt die Zeit als Zeichenkette unter Verwendung lokaler Konventionen zurück                               |
| `toLocaleString()`     | Gibt Datum und Zeit unter Verwendung lokaler Konventionen zurück                                          |
| `toString()`           | Gibt die Zeichenketten-Darstellung des angegebenen Datums zurück                                          |
| `toTimeString()`       | Gibt den *Zeit*-Anteil in menschenlesbarem Format zurück                                                  |
| `toUTCString()`        | Konvertiert das Datum in eine Zeichenkette im UTC-Format                                                  |
| `valueOf()`            | Gibt den primitiven Wert des `Date` zurück                                                                |
