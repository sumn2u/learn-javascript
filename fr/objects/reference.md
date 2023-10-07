---
chapter: 9
pageNumber: 59
description: La référence d'un objet est une valeur qui pointe à l'emplacement mémoire où l'objet est stocké. Lorsque un objet est créé, un espace mémoire est alloué pour stocker ses propriétés et valeurs. Quand on assigne cet objet à une variable, cette variable contient une référence à l'emplacement mémoire où l'objet est stockée.
---
# Les références

Les objets ne sont **jamais copiés**. On les manipule par leur référence. La référence d'un objet est une valeur qui référence l'objet. Lorsqu'on crée un objet en utilisant l'opérateur `new`, ou la syntaxe littérale des objets (`{}`), JavaScript crée un objet et lui assigne une référence.

Voici un exemple de création d'un objet avec avec les accolades:

```javascript
var object = {
  foo: 'bar'
};
```

Voici un exemple de création d'un objet avec l'opérateur `new` :

```javascript
var object = new Object();
object.foo = 'bar';
```

Quand ou lorsqu'on assigne la référence d'un objet à une variable, la variable contient simplement une référence de l'objet, mais pas l'objet lui-même. Cela signifie que lorsqu'on assigne la référence à une autre variable, les deux variables pointent vers le même objet.

Par exemple:

```javascript
var object1 = {
  foo: 'bar'
};

var object2 = object1;

console.log(object1 === object2); // Output: true
```

Dans l'exemple ci-dessus, et `object1`, et `object2` sont des variables qui contiennent une référence vers le même objet. L'opérateur `===` est utilisé pour comparer les références, pas les objets eux-mêmes. Vu que les deux variables contiennent la même référence, voilà pourquoi le résultat sera `true`.


{% hint style="info" %}
Vous pouvez utiliser la méthode `Object.assign()` pour créer un nouveau objet qui représente une copie d'un objet existant.&#x20;
{% endhint %}

Voici un exemple de création d'un objet par référence.

```javascript
// Imagine que j'aie une pizza
let myPizza = { slices: 5 };
// Et que je la partage avec toi
let yourPizza = myPizza;
// Si je mange une part
myPizza.slices = myPizza.slices - 1;
// Il nous resterait 4 parts, car myPizza te yourPizza font référence au même objet.
let numberOfSlicesLeft = yourPizza.slices;
console.log(numberOfSlicesLeft); // 4
console.log(myPizza.slices === yourPizza.slices); // true

let a = {}, b = {}, c = {}; // a, b, et c réfèrent chacun à un objet différent vide.
a = b = c = {}; // a, b, et c réfèrent tous maintenant au même objet vide.
```
