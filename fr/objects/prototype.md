---
chapter: 9
pageNumber: 61
description: Chaque objet a une propriété spécifique appellée prototype qui est une référence d'un autre objet. La proprité prototype est une notion essentielle du système d'héritage par prototype en JavaScript et elle permet à un objet d'hériter les propriétés et méthodes d'un autre objet.
---
# Prototype

Chaque objet est lié à une propriété `prototype` qui est un autre objet duquel il hérite des propriéts. Les objets créés directement avec les accolades (`{}`) sont automatiquement associés à `Object.prototype`, qui est un standard du JavaScript.

Lorsque l'interpréteur JavaScrit essaye de trouver une propriété à laquelle on essaie d'accéder comme à travers ce code:
```javascript
let adult = { age: 26 },
  retrievedProperty = adult.age;
// The line above
```

L'interpréteur recherche d'abord à travers toutes les propriétés de l'objet lui-même. Par exemple l'objet `adult` n'a qu'une seule propriété — `age`. Mais à côté de celui-là, en réalité il en a d'autres qu'il a hérité de `Object.prototype.`

```javascript
let stringRepresentation = adult.toString();
// the variable has value of '[object Object]'
```

La méthode `toString` est une propriété de l'objet `Object.prototype ` dont `adult` a hérité. C'est une fonction qui renvoie la représentation textuelle de l'objet. Si vous voulez avoir une représentation plus personnalisée, alors vous pouvez surcharger la méthode (ou la fonction); c'est-à-dire, définir votre propre version de la méthode. Et pour ce faire, on procède comme suit:

```javascript
adult.toString = function () {
  return "J'ai " + this.age + ' ans';
};
```

Si maintenant nous appelons la méthode `toString`, l'interpréteur va retrouver cette propriété dans l'objet `adult` lui-même.

Ainsi, l'interpréteur retourne la première valeur qu'il retrouve en partant de l'objet lui-même et descendant prototype par prototype.

Pour déclarer notre objet `adult` comme prototype au lieu de `Object.prototype`, nous pouvons invoquerla méthode `Object.create` comme suit:

```javascript
let child = Object.create(adult);
/**
 * Cette façon de créer les objets nous laisse le champ libre de remplacer l'objet par défaut qui est Object.prototype avec celui que l'on vaut.
 * Dans ce cas-ci, le prototype de child est l'objet adult.
*/
child.age = 8;
/**
 * Avant, child n'avait pas sa propriété age, donc pour la trouver, l'interpréteur devait aller chercher sur son prototype.
 * Maintenant, quand nous affectons un age à child, l'interpréteur ne va pas trop loin pour la trouver.
 * Note: La propriété age de adult démeure 26.
*/
let stringRepresentation = child.toString();
// Maintenant, le résultat de cet appel est évidemment : "J'ai 8 ans".
/**
 * Note: Nous n'avons pas ici surchargé la propriété toString, donc c'est l'implémentation qu'on a mise dans adult qui sera invoquée.
 * Si adult n'avait pas de méthode toString, alors il s'agit de celle de Object.prototype qui serait invoquée et nous aurions eu comme résultat: "[object Object]" au lieu de  "J'ai 8 ans"   
*/
```

Le prototype de `child` est `adult`, dont le prototype est lui même `Object.prototype`. Cette séquence de prototype est appelée **chaîne de prototypes**.
