---
chapter: 7
pageNumber: 50
description:  La boucle for est une structure de controle très puissante utilisée pour exécuter un bloc de code plusieurs fois, que ça soit pour un nombre d'itération fixé ou alors sur un interval défini. Cette instruction est très polyvalente est couramment utilisée pour parcourir les tableaux, les chaîne de caracètres et les autres objets itérables.
---
# For

La form la plus simple et intuitive des boucles est la boucle *for*. Sa syntaxe est presque similaire à celle de l'instruction `if()` mais avec plus d'options:

```javascript
for (initialisation; condition de sortie; changement) {
    // do it, do it now
}
```

## Explication:

* Dans la partie `initialisation`, exécutée avant la première itération, initialisez votre variable de boucle.
* Dans la partie `condition de sortie`, mettez une condition qui sera vérifiée avant chaque itération. La boucle s'arrête le moment où cette condition s'avère fausse.
* Dans la partie `changement`, dites au programme comment mettre à jour la variable de boucle.


Voyons comment exécuter un bloc d'instruction 10 fois avec une boucle for: 

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // do this code ten-times
}
```

> _**Note**_: `i = i + 1` peut être écrit: `i++`.

Les boucles `for in` peuvent aussi être utilisées pour parcourir un objet ou un tableau.

```javascript
for (cle in object) {
  // code block to be executed
}
```

Exemple de boucles `for in` pour un objet:

```javascript
const personne = {prenom:"John", nom:"Doe", age:25};
let info = "";
for (let x in personne) {
  info += personne[x];
}

// Resultat: info = "JohnDoe25"
```

Exemple de boucles `for in` pour un tableau:

```javascript
const nombres = [45, 4, 9, 16, 25];
let txt = "";
for (let x in nombres) {
  txt += nombres[x];
}

// Resultat: txt = '45491625'
```

La valeur des objets itérables comme `Arrays`, `Strings`, `Maps`, `NodeLists` peuvent être parcourues en utilisant l'instruction `for of`.&#x20;

```javascript
let langage = "JavaScript";
let txt = "";
for (let x of langage) {
  txt += x;
}

// Resultat: langage = 'JavaScript'
```
