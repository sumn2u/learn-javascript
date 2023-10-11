---
chapter: 9
pageNumber: 57
description: Un objet est un type de données composite qui nous permet de stocker et organiser les données en des paires de clé-valeur. Chaque paire est appelée propriété. Les propriétés sont utilisée pour représenter des caractéristiques, des attributs ou des fonctionnalités de l'objet.
---
# Les propriétés

On appelle propriété une paire `nom propriété`: `valeur propriété` où **nom propriété** est une chaîne de caractères. Si ce n'est pas le cas, il est transformé en chaîne. On précise la propriété lors de la création de l'objet ou plutard. On peut avoir plusieurs propriétés, séparées par des virgules ou aucune.

```javascript
let language = {
  name: "JavaScript",
  isSupportedByBrowsers: true,
  createdIn: 1995,
  author: {
    firstName: "Brendan",
    lastName: "Eich",
  },

  // Oui ! On peut imbriquer les objets!
  getAuthorFullName: function () {
    return this.author.firstName + " " + this.author.lastName;
  },
  // Oui ! On peut mettre des fonctions comme valeurs
};
```

Le code suivant démontre comment on récupère la valeur d'une propriété.

```javascript
let variable = language.name;
// variable contient maintenant "JavaScript"
variable = language["name"];
// Les lignes ci-dessus font la même chose. La seule différence est que la seconde syntaxe vous donne la possibilité d'utiliser n'importe quelle chaine comme nom de propriété, mais tout de même c'est moins lisible.
variable = language.newProperty;
// variable est maintenant undefined, parce que nous n'avons pas assigné cette propriété encore.
```

L'exemple suivant nous montre comment **ajouter** ou **modifier** une propriété qui existe.

```javascript
language.newProperty = "new value";
// Désormais, l'objet a une propriété newProperty. Si la propriété existait, sa valeur aurait été remplacée.
language["newProperty"] = "changed value";
// Une fois de plus, vous pouvez accéder aux propriété des deux façons, mais la première (notation avec un point) est plus recommandée.
```
