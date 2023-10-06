---
layout: editorial
chapter: 8
pageNumber: 53
description: Les fonctions sont des blocs de code qui exécutent une tâche spécifique ou un ensemble de tâches. Ce sont des unités de code réutilisables qui peuvent être appelées et exécutées à tout moment dans un programme.
---

# Chapitre 8

# Les fonctions

Les fonctions sont l'une des notions les plus puissantes et les plus essentielles de la programmation. Les fonctions, comme les fonctions mathématiques, effectuent des transformations, prennent des valeurs d'entrée appelées **arguments** et **renvoient** une valeur de sortie &#x20;

Les fonctions peuvent être créées de deux manières : en utilisant la "déclaration de fonction" ou l'"expression de fonction". Le _nom de la fonction_ peut être omis dans l'expression de la fonction, ce qui en fait une fonction anonyme. Les fonctions, comme les variables, doivent être déclarées. Déclarons une fonction `double` qui accepte un _argument_ appelé `x` et **retourne** le double de x :

```javascript
// un exemple de déclaration de fonction
function double(x) {
  return 2 * x;
}
```

> La fonction ci-dessus **peut** être référencée avant d'avoir été définie.

Les fonctions sont également des valeurs en JavaScript; elles peuvent être stockées dans des variables (tout comme les nombres, les chaînes de caractères, etc ...) et données à d'autres fonctions en tant qu'arguments :

```javascript
// un exemple d'expression de fonction
let double = function (x) {
  return 2 * x;
};
```

> La fonction ci-dessus **ne peut pas** être référencée avant d'être définie, comme n'importe quelle autre variable.

{% hint style="info" %}
&#x20;Une callback est une fonction passée en argument à une autre fonction.
{% endhint %}

Une fonction fléchée est une alternative compacte aux fonctions traditionnelles qui présente quelques différences sémantiques avec certaines limitations. Ces fonctions n'ont pas leurs propres liens avec `this`, `arguments` et `super`, et ne peuvent pas être utilisées comme constructeurs. Un exemple de fonction flèche.

```javascript
const double = (x) => 2 * x;
```

{% hint style="warning" %}
Le mot-clé `this` dans la fonction fléchée représente l'objet qui a défini la fonction arrow.&#x20;
{% endhint %}
