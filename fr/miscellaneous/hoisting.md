---
chapter: 19
pageNumber: 94
description: Le Hosting est un comportement par défaut en JavaScript qui consiste à déplacer les déclaration en haut. En exécutant un code, le programme crée un contexte global d'exécution (création et exécution). Lors de la phase de création, JavaScript déplace les déclarations de fonctions et de variables en haut du fichier, ce principe est appelé hoisting.
---
# Le hoisting

Le Hosting est un comportement par défaut en JavaScript qui consiste à déplacer les déclaration en haut. En exécutant un code, le programme crée un contexte global d'exécution : création et exécution. Lors de la phase de création, JavaScript déplace les déclarations de fonctions et de variables en haut du fichier, ce principe est appelé hoisting.&#x20;

> `Hoist` est un mot anglais qui signifie `éléver` ou `déplacer en haut` en français.

```javascript
// Le hoisting
console.log(counter);
let counter = 1; // Déclenche une erreur ReferenceError: Cannot access 'counter' before initialization
```

L'erreur est déclenché car même si `counter` est présent en mémoire mais parce qu'il n'oa pas été initialisé. A cause du `hoisting`, la variable `counter` est élevée ici.&#x20;


<pre class="language-javascript"><code class="lang-javascript"><strong>// function hoisting
</strong><strong>const x = 20,
</strong>    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y; 
</code></pre>

Ici, la fonction `add` function est déplacée en haut (`hoisting`) et initialisée avec `undefined` dans la mémoire lors de la phase création du contexte global d'exécution. C'est pourquoi, le déclenchement de l'erreur.&#x20;