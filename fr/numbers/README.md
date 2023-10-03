---
layout: editorial
chapter: 3
pageNumber: 16
description: Les nombres se rapportent à un type de données utilisé pour représenter des valeurs numériques. En JavaScript, les nombres peuvent tout aussi bien être des entiers que des décimaux (nombres à virgule).
---

# Chapitre 3

# Nombres

JavaScript n'admet qu'**un seul type de nombre** – les flottants stockés sur 64 bits. Pour ceux et celles qui connaissent Java, il s'agit des nombres `double`. À la différence de la plupart des autres langages de programmation, JavaScript ne différencie pas les nombres en mettant à disposition un type spécial pour les entiers par exemple. Aussi, en JavaScript, 1 et 1.0 représentent exactement la même valeur (attention, on utilise le point numérique `.` pour indiquer un décimal). Créer un nombre en JavaScript est simplissime, il suffit de rentrer une valeur numérique à la suite du mot clé `var`, du nom de sa variable et de l'opérateur d'affectation `=`.

Les nombres peuvent être créés à partir de valeurs définies:

```javascript
// Ceci est un nombre décimal:
let a = 1.2;

// Ceci est un nombre entier:
let b = 10;
```

Par ailleurs, il est possible d'affecter un nombre par l'intermédiaire d'une autre variable:

```javascript
let a = 2;
let b = a;
```

La précision des entiers est le plus souvent déterminée sur 15 chiffres et peut monter à 17 chiffres au maximum.

```javascript
let x = 999999999999999; // x sera 999999999999999
let y = 9999999999999999; // y sera 10000000000000000
```

Les constantes numériques peuvent être passées en hexadécimal si elles sont préfixées par `0x`.

```javascript
let z = 0xff; // 255
```
