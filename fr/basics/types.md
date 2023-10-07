---
chapter: 2
pageNumber: 13
description: Les types peuvent être vus comme les sortes de données qui possèdent une représentation dans le langage et qui peuvent être manipulés.
---

# Types

Les ordinateurs sont sophistiqués et peuvent utiliser une ou plusieurs variables plus complexes qu'un simple nombre. C'est ainsi que les types entrent en jeu. Les variables se décomposent en différentes sortes. Les types supportés sont propres à chaque langages de programmation.

Les types les plus courants sont les suivants:

- **Nombres**: Les nombres peuvent être des entiers (par ex., `1`, `-5`, `100`) ou des flottants décimaux (par ex., `3.14`, `-2.5`, `0.01`). JavaScript ne considère pas deux types séparés pour différencier les entiers des décimaux; il les considère toujours comme des nombres.
- **Chaînes de caractères**: Les chaînes de caractères sont des séquences de caractères. On les appelle communément `strings`. Elles peuvent être représentées aussi bien grâce à des apostrophes simples (par ex., `'hello'`) ou des apostrophes doubles (par ex., `"world"`).
- **Booléens**: Les booléens représentent une valeur vraie ou fausse. Ils prennent uniquement les valeurs `true` ou `false` (sans apostrophes).
- **Null**: Le type null représente une valeur null, ce qui signifie "aucune valeur." Il s'écrit `null` (sans apostrophes).
- **Undefined**: Le type indéfini, ou `undefined`, représente une valeur qui n'a pas été définie. Si une variable a été déclarée, mais n'a pas reçu de valeur (on dit qu'elle n'a pas été assignée), elle sera du type `undefined`.
- **Objet**: Un objet peut être vu comme un ensemble de propriétés dont chacune possède un nom et une valeur. Vous pouvez créer un objet en utilisant les accolades ouvrantes et fermantes (`{}`) et en lui assignant chaque propriété au moyen d'une paire nom-valeur pour chacune d'entre elles.
- **Tableau**: Un tableau est un type spécial d'objet qui est fait pour stocker des valeurs. Vous pouvez créer des tableaux en utilisant les crochets (`[]`) et en lui assignant une liste de valeurs.
- **Fonction**: Une fonction est un bloc de code qui peut être utilisé au moyen d'un appel. Les fonctions acceptent des arguments (des entrées) et renvoient une valeur (sortie). Vous pouvez créer une fonction en utilisant le mot clé `function`.

JavaScript est un langage "_faiblement typé_", cela signifie que vous n'avez pas l'obligation d'indiquer le type de variable que vous allez déclarer. En utilisant simplement le mot clé `var` quand vous déclarez une variable, l'interpréteur se chargera de déterminer le type de donnée en fonction des conventions de déclaration.

{% exercise %}
Déclarez trois variables et initialisez-les avec les valeurs suivantes: `age` doit être un nombre, `name` doit être une chaîne de caractères et `isMarried` un booléen.

{% initial %}
let age =
let name =
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true

{% validation %}
assert(typeof age === "number" && typeof name === "string" && typeof isMarried === "boolean");

{% context %}
{% endexercise %}

L'opérateur `typeof` est utilisé pour déterminer le type d'une variable.

```javascript
typeof "John"; // Retourne "string"
typeof 3.14; // Retourne "number"
typeof NaN; // Retourne "number"
typeof false; // Retourne "boolean"
typeof [1, 2, 3, 4]; // Retourne "object"
typeof { name: "John", age: 34 }; // Retourne "object"
typeof new Date(); // Retourne "object"
typeof function () {}; // Retourne "function"
typeof myCar; // Retourne "undefined" *
typeof null; // Retourne "object
```

En se basant sur les valeurs qu'ils peuvent contenir, les types de données utilisés en JavaScript peuvent être classés en deux catégories distinctes.

Les types de données qui peuvent contenir des valeurs:

- `string`
- `number`
- `boolean`
- `object`
- `function`

{% hint style="info" %}
`Object`, `Date`, `Array`, `String`, `Number`, et `Boolean` sont des types d'objets disponibles nativement en JavaScript.
{% endhint %}

Les types de données qui ne peuvent pas contenir de valeurs:

- `null`
- `undefined`

Une donnée primitive est une donnée simple sans propriété ni méthode, qui n'est pas un objet. Elles sont immutables, elles ne peuvent donc pas être altérées. Il existe 7 données primitives en JavaScript:

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

{% exercise %}
Déclarez une variable `person` et initialisez-là comme un objet avec les propriétés suivantes: `age` un nombre, `name` une chaîne de caractère et `isMarried` un booléen.

{% initial %}
let person =

{% solution %}
let person = {
name: "Mary",
age: 25,
isMarried: false
};

{% validation %}
assert(typeof person.age === "number" && typeof person.name === "string" && typeof person.isMarried === "boolean");

{% context %}
{% endexercise %}
