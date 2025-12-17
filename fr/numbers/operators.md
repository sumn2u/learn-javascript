---
chapter: 3
pageNumber: 19
description: >-
  Les opérateurs peuvent être soit des symboles, soit des mots clés qu'on
  utilise pour réaliser diverses opérations sur les données, comme les
  variables, les valeurs ou les expressions. Ils sont une bri
---

# Opérateurs de base

Les opérations mathématiques sur les nombres peuvent être réalisées en utilisant certains opérateurs de base comme:

* **Opérateur d'addition (`+`)**: L'opérateur d'addition ajoute deux nombres l'un à l'autre. Par exemple:

```javascript
console.log(1 + 2); // 3
console.log(1 + -2); // -1
```

* **Opérateur de soustraction (`-`)**: L'opérateur de soustraction soustrait deux nombres l'un à l'autre. Par exemple:

```javascript
console.log(3 - 2); // 1
console.log(3 - -2); // 5
```

* **Opérateur de multiplication (`*`)**: L'opérateur de multiplication multiplie deux nombres l'un à l'autre. Par exemple:

```javascript
console.log(2 * 3); // 6
console.log(2 * -3); // -6
```

* **Opérateur de division (`/`)**: L'opérateur de division divise deux nombres l'un à l'autre et retourne la partie entière (le quotient) de la division euclidienne. Par exemple:

```javascript
console.log(6 / 2); // 3
console.log(6 / -2); // -3
```

* **Modulo (`%`)**: Le modulo retourne le reste d'une division euclidienne. Par exemple:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

L'interpréteur JavaScript fonctionne de la gauche vers la droite. Il est donc impératif d'utiliser les parenthèses pour séparer et regrouper les expressions: `c = (a / b) + d`

{% hint style="info" %}
En JavaScript on utilise aussi bien l'opérateur d'addition `+` pour réaliser des calculs que des concaténations. L'usage est implicite en fonction du type: les nombres seront additionnés, alors que les chaînes de caractères seront concaténées.
{% endhint %}

Le terme `NaN` est un mot clé réservé par le langage qui indique qu'un nombre n'est pas "légal". Ceci arrive quand on tente d'effectuer une opération arithmétique quand les opérandes ne sont pas tous du type numérique. Le résultat renvoyé sera `NaN`, ce qui signifie Not a Number.

```javascript
let x = 100 / "10";
```

La fonction `parseInt` analyse une valeur passée en paramètre et renvoie le premier entier rencontré exprimé dans une base décimale donnée. Attention, hormis si on indique explicitement la base en second paramètre pour convertir les nombres représentés par des chaînes de caractères, `parseInt` renverra `NaN` quand elle ne pourra pas convertir les caractères en entier.

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("ff", 16); // 255
parseInt("40 years"); //40
parseInt("He was 40"); //NaN
```

En JavaScript, si réalise une opération qui retourne un nombre plus grand que les capacités du langage, celui-ci retournera `Infinity`.

```javascript
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```
