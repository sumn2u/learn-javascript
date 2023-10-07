---
layout: editorial
chapter: 13
pageNumber: 70
description: Les modules sont une manière d'organiser son code en composants séparés, réutilisables et imbriqués. Les modules permettent aux développeurs de fragmenter de larges et complexes parties de codes en morceaux plus petits, rendant la compréhension plus facile, ainsi que la maintenance et la collaboration des projets plus aisée.
---

# Chapitre 13

# Modules

Dans le monde réel, un programme grandit organiquement au gré de ses besoins en fonctionnalité. Avec une base de code qui s'élargit, la structuration et le besoin en maintenance de celui-ci réclame un travail supplémentaire. En dépit que cela puisse sembler fastidieux, il est tentant de le négliger et de permettre au code de s'enchevêtrer sans fin. En réalité, cela va rapidement accroître la complexité de l'application, nous obligeant à construire une compréhension globale du système dans laquelle on peinera à comprendre chaque élément de manière isolée.

Les _modules_ sont une solution à ce problème. Un `module` spécifie de quels morceaux de code il dépend, ainsi que les fonctionnalités qu'il permet aux autres modules d'utiliser. Les modules qui dépendent d'autres modules s'appellent des _dépendances_. De nombreuses bibliothèques de modules existent pour organiser le code en modules et les charger à la demande.

- AMD - est l'un des plus anciens systèmes de modules, utilisé à l'origine par [require.js](https://requirejs.org/).
- CommonJS - est un système de modules créés pour les serveurs Node.js.
- UMD - est un système de modules compatible avec AMD et CommonJS.

Les modules peuvent se charger l'un l'autre, avec les directives spéciales `import` et `export` pour partager leurs fonctionnalités et appeler mutuellement leurs propres fonctions.

- `export` - identifie les fonctions et les variables qui seront accessibles depuis l'extérieur du module courant
- `import` - importe les fonctionnalités depuis un module extérieur

Découvrons le fonctionnement de `import` et `export` au sein des modules. Nous avons ici la fonction `sayHi` qui est exportée depuis le fichier `sayHi.js`.

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Bonjour, ${user}!`);
};
```

La fonction `sayHi` est utilisée dans le fichier `main.js` grâce à la directive `import`.

```javascript
// 📁 main.js
import { sayHi } from "./sayHi.js";

alert(sayHi); // function...
sayHi("Kelvin"); // Bonjour, Kelvin!
```

Ici, la directive d'importation charge le module en important le chemin relatif et en assignant la variable `sayHi`.

Les modules peuvent être exportés de deux manières: **nommés** et **default (par défaut)**. De plus, les exports nommés peuvent être assignés en ligne ou individuellement.

```javascript
// 📁 person.js

// exports nommés en ligne
export const name = "Kelvin";
export const age = 30;

// immédiatement
const name = "Kelvin";
const age = 30;
export { name, age };
```

{% hint style="warning" %}
On ne peut avoir qu'un seul `export` par défaut dans un fichier.
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">// 📁 message.js 
const message = (name, age) => {
<strong>    return `${name} is ${age} years old.`;
</strong>};
export default message;
</code></pre>

En se basant sur le type d'export, on peut importer de deux manières. Les exports nommés sont construits en utilisant les crochets alors que les exports par défaut non. En conséquence, on procédera aux imports selon la même logique.

```javascript
import { name, age } from "./person.js"; // import d'export nommé
import message from "./message.js"; // import d'export par défaut
```

Lors de l'assignation des modules, on doit veiller à empêcher la _dépendance circulaire_. La dépendance circulaire est une situation où un module A dépend d'un module B, et le B dépend lui aussi de A directement ou indirectement.&#x20;
