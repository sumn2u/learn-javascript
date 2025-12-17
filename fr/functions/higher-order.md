---
chapter: 8
pageNumber: 54
description: Les fonctions d'ordre supérieur sont des fonctions qui manipulent d'autres fonctions. Elles possèdent une puissance considérable car elles permettent la composition fonctionnelle, l'abstraction et la capacité de générer un code à la fois polyvalent et facilement réutilisable.
---

# Fonctions d'ordre supérieur

Les fonctions d'ordre supérieur sont des fonctions qui manipulent d'autres fonctions. Par exemple, une fonction peut prendre d'autres fonctions comme arguments et/ou produire une fonction comme valeur de retour. Ces techniques fonctionnelles fantaisistes sont des constructions puissantes disponibles en JavaScript et dans d'autres langages de haut niveau comme python, lisp, etc.

Nous allons maintenant créer deux fonctions simples, `add_2` et `double`, et une fonction d'ordre supérieur appelée `map`. `map` acceptera deux arguments, `func` et `list` (sa déclaration commencera donc par `map(func,list)`), et retournera un tableau. `func` (le premier argument) sera une fonction qui sera appliquée à chacun des éléments du tableau `list` (le second argument).

```javascript
// Définir deux fonctions simples
let add_2 = function (x) {
  return x + 2;
};
let double = function (x) {
  return 2 * x;
};

// map est une fonction qui accepte 2 arguments :
// func la fonction à appeler
// list un tableau de valeurs sur lequel appeler func
let map = function (func, list) {
  let output = []; // output est un tableau vide
  for (idx in list) {
    output.push(func(list[idx]));
  }
  return output;
};

// Nous utilisons map pour appliquer une fonction à une liste entière
// d'entrées pour les "mapper" à une liste de sorties correspondantes
map(add_2, [5, 6, 7]); // => [7, 8, 9]
map(double, [5, 6, 7]); // => [10, 12, 14]
```

Les fonctions de l'exemple ci-dessus sont simples. Cependant, lorsqu'elles sont transmises en tant qu'arguments à d'autres fonctions, elles peuvent être composées de manière imprévue pour construire des fonctions plus complexes.

Par exemple, si nous remarquons que nous utilisons les invocations `map(add_2, ...)` et `map(double, ...)` très souvent dans notre code, nous pourrions décider de créer deux fonctions spéciales de traitement de tableau qui ont l'opération désirée intégrée en elles. En utilisant la composition de fonctions, nous pourrions faire cela comme suit :

```javascript
process_add_2 = function (list) {
  return map(add_2, list);
};
process_double = function (list) {
  return map(double, list);
};
process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Maintenant, créons une fonction appelée `buildProcessor` qui prend une fonction `func` en entrée et renvoie un `func`-processor, c'est-à-dire une fonction qui applique `func` à chaque entrée de la liste.

```javascript
// une fonction qui génère un processeur de liste qui exécute
let buildProcessor = function (func) {
  let process_func = function (list) {
    return map(func, list);
  };
  return process_func;
};
// l'appel à buildProcessor renvoie une fonction qui est appelée avec une entrée de liste

// en utilisant buildProcessor, nous pourrions générer les processeurs add_2 et double list comme suit :
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Prenons un autre exemple. Nous allons créer une fonction appelée `buildMultiplier` qui prend un nombre `x` en entrée et renvoie une fonction qui multiplie son argument par `x` :

```javascript
let buildMultiplier = function (x) {
  return function (y) {
    return x * y;
  };
};

let double = buildMultiplier(2);
let triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```
