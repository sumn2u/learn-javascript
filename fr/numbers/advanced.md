---
chapter: 3
pageNumber: 21
description: Il existe quelques opérateurs avancés qui offrent des fonctionnalités puissantes et qui nous permettent de réaliser différentes opérations au-delà des opérations arithmétiques et logiques de base. Ces opérateurs avancés peuvent être très utiles pour manipuler des données, réaliser des opérations au niveau des bits, travailler avec les objets et beaucoup plus encore.
---

# Opérateurs avancés

Quand les opérateurs se succèdent sans parenthèses, l'ordre dans lequel il s'appliquent est déterminé par la _précédence_ des opérateurs. Ainsi, la multiplication `(*)` et la division `(/)` ont une précédence supérieure que l'addition `(+)` et la soustraction `(-)`.

```javascript
// la multiplication est réalisée en premier lieu, suivie par l'addition
let x = 100 + 50 * 3; // 250
// en présence de parenthèses, c'est l'opération contenue entre ces dernières qui est exécutée en premier lieu
let y = (100 + 50) * 3; // 450
// des opérations ayant une précédence équivalente sont exécutées de gauche à droite
let z = (100 / 50) * 3; // 6
```

Quelques opérateurs mathématiques avancés peuvent être utilisés lors de l'écriture d'un programme. Voici une liste de certains des principaux opérateurs mathématiques avancés:

- **Modulo (`%`)**: Le modulo operator retourne le reste d'une division euclidienne. Par exemple:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

- **Opérateur puissance (\* \*)**: L'opérateur puissance permet de calculer la valeur d'un nombre élevé à la puissance du second. Il s'agit d'un nouvel opérateur et il se peut qu'il ne soit pas supporté par tous les navigateurs, vous pourriez avoir besoin de le substituer par la méthode `Math.pow`, qui produit exactement le même effet. Par exemple:

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

- **Opérateur d'incrémentation (`++`)**: L'opérateur d'incrémentation augmente un nombre d'une quantité de 1. On peut l'utiliser avant la variable (comme un préfixe, dans ce-cas là l'incrémentation sera faite en premier lieu) ou comme un suffixe.

```javascript
let x = 1;
x++; // x vaut à présent 2
++x; // x vaut à présent 3
```

- **Opérateur de décrémentation (`--`)**: L'opérateur de décrémentation diminue un nombre d'une quantité de 1. On peut l'utiliser avant la variable (comme un préfixe, dans ce cas-là la décrémentation sera faite en premier lieu) ou comme un suffixe. Par exemple:

```javascript
let y = 3;
y--; // y vaut à présent 2
--y; // y vaut à présent 1
```

- **Objet math**: L'objet `Math` est un objet natif en JavaScript. Celui-ci fournit des fonctions mathématiques et des constantes. Vous pouvez utiliser les méthodes de l'objet `Math` pour réaliser des opérations avancées, comme trouver la racine carrée d'un nombre, calculer le sinus d'un angle ou encore générer un nombre pseudo-aléatoire. Par exemple:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); // un nombre pseudo-aléatoire compris entre 0 et 1
```

Il s'agit là de quelques exemples succincts des opérateurs mathématiques avancés et des fonctions disponibles en JavaScript. En réalité, il en existe bien plus et ceux-ci peuvent être utilisés pour réaliser des opérations avancées lors de l'écriture d'un programme.

{% exercise %}
Utilisez les opérateurs avancés suivants pour réaliser les opérations sur `num1` et `num2`.

{% initial %}
let num1 = 10;
let num2 = 5;

// ++ opérateur d'incrémentation pour incrémenter la valeur de num1.
const result1 =
// -- opérateur de décrémentation pour décrémenter la valeur de num2.
const result2 =
// += opérateur pour additionner num2 à num1 et stocker le résultat dans num1.
const result3 =
// -= opérateur pour soustraire num2 à num1 et stocker le résultat dans num1.
const result4 =

{% solution %}
let num1 = 10;
let num2 = 5;

// ++ opérateur d'incrémentation pour incrémenter la valeur de num1.
num1++;
const result1 = num1; // 11
// -- opérateur de décrémentation pour décrémenter la valeur de num2.
num2--;
const result2 = num2; // 4
// += opérateur pour additionner num2 à num1 et stocker le résultat dans num1.
num1 += num2;
const result3 = num1 // 15
// -= opérateur pour soustraire num2 à num1 et stocker le résultat dans num1.
num1 -= num2;
const result4 = num1 // 11

{% validation %}
assert(result1 === 11 && result2 === 4 && result3 === 15 && result4 === 11 );

{% context %}
{% endexercise %}

## Opérateur de coalescence des nuls '??'

L'opérateur de coalescence des `nuls` retourne l'opérande de gauche si celle-ci ne vaut pas `null/undefined`, sinon il renvoie l'opérande de droite. Il s'écrit avec deux points d'interrogation `??`. Le résultat de `x ?? y` est:

- `x` si `x` est défini
- `y` si `x` n'est pas défini.

{% hint style="info" %}
L'opérateur de coalescence des nuls est une implémentation récente dans le langage, il doit être substitué par un polyfill pour assurer sa compatibilité avec les anciens navigateurs.
{% endhint %}
