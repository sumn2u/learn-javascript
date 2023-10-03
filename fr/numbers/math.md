---
chapter: 3
pageNumber: 17
description: L'objet Math permet d'effectuer des opérations mathématiques en JavaScript. C'est un objet statique qui ne possède pas de constructeur. Cela signifie qu'il est possible d'utiliser les méthodes de l'objet Math sans l'instancier au préalable.
---

# Math

L'objet `Math` permet d'effectuer des opérations mathématiques en JavaScript. C'est un objet statique qui ne possède pas de constructeur. Cela signifie qu'il est possible d'utiliser les méthodes de l'objet Math sans l'instancier au préalable. Pour accéder à ses propriétés on utilisera _Math.propriété_. Dans cette notation, le point numérique `.`, est appelé un accesseur de propriété. Quelques propriétés de l'objet Math sont définies ci-après:

```javascript
Math.E; // retourne le nombre d'Euler
Math.PI; // retourne le nombre PI
Math.SQRT2; // retourne la racine carrée de 2
Math.SQRT1_2; // retourne la racine carrée de 1/2
Math.LN2; // retourne le logarithme naturel de 2
Math.LN10; // retourne le logarithme naturel de 10
Math.LOG2E; // retourne la valeur du logarithme en base 2 de E
Math.LOG10E; // retourne la valeur du logarithme en base 10 de E
```

Examples of some of the math methods are:

```javascript
Math.pow(8, 2); // 64
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin((90 * Math.PI) / 180); // 1 (le sinus de 90 degrés)
Math.cos((0 * Math.PI) / 180); // 1 (le cosinus de 0 degré)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

Pour accéder aux méthodes de Math, on appelle celles-ci directement en précisant les arguments attendus si ces derniers sont nécessaires.

| Méthode            | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| `abs(x)`           | Retourne la valeur absolue de `x`                                                                  |
| `acos(x)`          | Retourne l'arc cosinus de `x`, en radians                                                          |
| `acosh(x)`         | Retourne l'arc cosinus hyperbolique de `x`                                                         |
| `asin(x)`          | Retourne l'arc sinus de `x`, en radians                                                            |
| `asinh(x)`         | Retourne l'arc sinus hyperbolique de `x`                                                           |
| `atan(x)`          | Retourne l'arc tangente de `x` comme une valeur numérique comprise entre `-PI/2` et `PI/2` radians |
| `atan2(y,x)`       | Retourne l'arc tangente du quotient de ses arguments                                               |
| `atanh(x)`         | Retourne l'arc tangent hyperbolique de `x`                                                         |
| `crbt(x)`          | Retourne la racine cubique de `x`                                                                  |
| `ceil(x)`          | Retourne l'arrondi vers le haut à l'entier le plus proche de `x`                                   |
| `cos(x)`           | Retourne le cosinus de `x`, en radians                                                             |
| `cosh(x)`          | Retourne le cosinus hyperbolique de `x`                                                            |
| `exp(x)`           | Retourne la valeur exponentielle de `x`                                                            |
| `floor(x)`         | Retourne l'arrondi vers le bas à l'entier le plus proche de `x`                                    |
| `log(x)`           | Retourne le logarithme naturel de `x`                                                              |
| `max(x,y,z,... n)` | Retourne nombre avec la valeur la plus haute                                                       |
| `min(x,y,z,... n)` | Retourne nombre avec la valeur la plus basse                                                       |
| `pow(x,y)`         | Retourne la valeur de `x` élevé à la puissance `y`                                                 |
| `random()`         | Retourne un nombre pseudo-aléatoire compris entre 0 et 1                                           |
| `round(x)`         | Retourne la valeur de x arrondi à l'entier le plus proche                                          |
| `sign(x)`          | Retourne si x est négatif, `null` ou positif (-1,0,1)                                              |
| `sin(x)`           | Retourne le sinus de x, en radians                                                                 |
| `sinh(x)`          | Retourne le sinus hyperbolique de x                                                                |
| `sqrt(x)`          | Retourne la racine carrée de x                                                                     |
| `tan(x)`           | Retourne la tangente de x, en radians                                                              |
| `tanh(x)`          | Retourne la tangente hyperbolique de x                                                             |
| `trunc(x)`         | Retourne la partie entière d'un nombre (x)                                                         |
