---
layout: editorial
chapter: 11
pageNumber: 67
description: Le JSON (JavaScript Object Notation) est un format léger d'échange de données utilisé pour représenter et partager la donnée entre les différents systèmes et/ou plateformes. Le format JSON est largement utilisé pour transmettre des données et les stocker, spécialement dans le développement web.
---

# Chapitre 11

# JSON

**J**ava**S**cript **O**bject **N**otation (JSON) est un format textuele dévolu à stocker et transporter des données. Les objets Javascript peuvent être facilement convertis en JSON et vice versa. Par exemple:

```javascript
//  un objet JavaScript
let myObj = { name: "Ryan", age: 30, city: "Austin" };

// convertit en JSON:
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// Résultat: '{"name":"Ryan","age":30,"city":"Austin"}'

//convertit à nouveau en objet JavaScript
let originalJSON = JSON.parse(myJSON);
console.log(originalJSON);

// Résultat: {name: 'Ryan', age: 30, city: 'Austin'}
```

`stringify` et `parse` sont deux méthodes disponibles pour JSON.

| Method        | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `parse()`     | Renvoie un objet JavaScript depuis une chaîne JSON analysée  |
| `stringify()` | Renvoie une chaîne au format JSON depuis un objet JavaScript |

Les types de données suivants sont supportés en JSON.

- chaîne de caractères
- nombre
- tableau
- booléen
- un objet contenant des valeurs JSON valides
- `null`

Par contre, JSON ne supporte pas les `function`, les `date` ou les `undefined`.
