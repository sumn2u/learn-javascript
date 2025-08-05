---
layout: editorial
Kapitel: 17
Seite: 106
Beschreibung: In der Programmierung sind Ereignisse Aktionen oder Vorkommnisse in einem System, über die das System informiert, damit du darauf reagieren kannst. Wenn du zum Beispiel auf den Zurücksetzen-Button klickst, wird die Eingabe gelöscht.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Kapitel 17
# Ereignisse

In der Programmierung sind *Ereignisse* Aktionen oder Vorkommnisse in einem System, über die das System informiert, damit du darauf reagieren kannst. Wenn du zum Beispiel auf den Zurücksetzen-Button klickst, wird die Eingabe gelöscht.

Interaktionen über die Tastatur, wie z. B. Tastendrücke, müssen ständig gelesen werden, um den Zustand der Taste zu erfassen, bevor sie wieder losgelassen wird. Wenn gleichzeitig rechenintensive Operationen durchgeführt werden, kann es passieren, dass ein Tastendruck verpasst wird. Das war früher die Eingabeverarbeitung auf einigen primitiven Maschinen. Eine Weiterentwicklung davon ist die Verwendung einer Warteschlange, also ein Programm, das regelmäßig die Warteschlange auf neue Ereignisse überprüft und darauf reagiert. Dieser Ansatz wird *Polling* genannt.

Der Hauptnachteil dieses Ansatzes ist, dass er die Warteschlange in regelmäßigen Abständen prüfen muss, was zu Störungen führen kann, wenn ein Ereignis ausgelöst wird. Die bessere Lösung ist es, den Code direkt zu benachrichtigen, wenn ein Ereignis auftritt. Moderne Browser ermöglichen genau das, indem sie erlauben, Funktionen als *Handler* für bestimmte Ereignisse zu registrieren.

```javascript
<p>Click me to activate the handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("clicked");
  });
</script>
```

Hier wird `addEventListener` am `window`-Objekt (ein vom Browser bereitgestelltes eingebautes Objekt) aufgerufen, um einen Handler für das gesamte `window` zu registrieren. Der Aufruf der Methode `addEventListener` registriert das zweite Argument als Funktion, die aufgerufen wird, sobald das durch das erste Argument beschriebene Ereignis eintritt.

{% hint style="info" %}
Ereignis-Listener werden nur aufgerufen, wenn das Ereignis im Kontext des Objekts passiert, auf dem sie registriert wurden.
{% endhint %}

Einige der häufigen HTML-Ereignisse sind hier aufgeführt:

| Ereignis      | Beschreibung                                            |
| ------------- |---------------------------------------------------------|
| `onclick`     | Wenn der Benutzer auf das Element klickt                |
| `onchange`    | Wenn der Benutzer den Wert einer Formulareingabe ändert |
| `onkeydown`   | Wenn der Benutzer eine Taste drückt                     |
| `onload`      | Wenn der Browser das Laden abgeschlossen hat            |
| `onmouseout`  | Wenn der Mauszeiger das Element verlässt                |
| `onmouseover` | Wenn der Mauszeiger über das Element bewegt wird        |


Es ist üblich, dass Handler, die auf Knoten mit Kindelementen registriert sind, auch Ereignisse von diesen Kindknoten empfangen. Wenn beispielsweise ein Button innerhalb eines Absatzes geklickt wird, empfängt auch der Handler des Absatzes das Klick-Ereignis. Wenn in beiden ein Handler vorhanden ist, wird der innere zuerst ausgeführt. Man sagt, das Ereignis *propagiert* nach außen – vom auslösenden Knoten über dessen Eltern bis hin zur Wurzel des Dokuments.

Der Ereignis-Handler kann die Methode `stopPropagation` am Ereignisobjekt aufrufen, um zu verhindern, dass weiter oben liegende Handler das Ereignis ebenfalls erhalten. Das ist nützlich, wenn du zum Beispiel einen Button in einem klickbaren Element hast und vermeiden möchtest, dass ein Klick auf den Button das äußere Element ebenfalls auslöst.

```javascript
<p>A paragraph with a <button>button</button>.</p>
<script>
  let para = document.querySelector("p"),
      button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Paragraph handler.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Button handler.");
    event.stopPropagation();
  });
</script> 
```

Hier sind sowohl am Absatz als auch am Button *`mousedown`*-Handler registriert. Beim Klick auf den Button ruft der Handler des Buttons `stopPropagation` auf, wodurch verhindert wird, dass der Handler des Absatzes ausgeführt wird.

Ereignisse können ein Standardverhalten haben. Zum Beispiel: Ein Link navigiert beim Anklicken zur Zieladresse, beim Drücken der Abwärtstaste wird zum unteren Seitenbereich navigiert usw. Dieses Standardverhalten kann durch Aufruf der Methode `preventDefault` am Ereignisobjekt verhindert werden.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
  });
</script>
```

Hier wird das Standardverhalten des Links beim Klick verhindert – also das Navigieren zur Zieladresse des Links.

