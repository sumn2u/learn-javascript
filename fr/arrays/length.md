---
chapter: 6
pageNumber: 44
description: Les tableaux possèdent une propriété length qui permet de connaître la longueur d'un tableau.
---

# Length

Les tableaux possèdent une propriété `length` qui, comme son nom l'indique, permet de connaître la longueur d'un tableau.

```javascript
let array = [1, 2, 3];

let l = array.length;

// Résultat: l = 3
```

La propriété `length` permet également de déterminer le nombre d'éléments d'un tableau. Par exemple.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// Résultat: ['Banana', 'Orange']
```

Vous pouvez aussi utiliser la propriété `length` pour trouver le dernier élément d'un tableau en l'utilisant comme un index. Par exemple:

```javascript
console.log(fruits[fruits.length - 1]); // Résultat: Orange
```

You can also use the `length` property to add elements to the end of an array. For example:

```javascript
fruits[fruits.length] = "Pineapple";
console.log(fruits); // Result: ['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}
La propriété `length` est automatiquement mise à jour lorsque des éléments sont ajoutés ou supprimés au sein du tableau.
{% endhint %}

Il convient également de noter que la propriété `length` n'est pas une méthode, vous n'avez donc pas besoin d'utiliser des parenthèses pour y accéder. Il s'agit simplement d'une propriété de l'objet tableau à laquelle vous pouvez accéder comme n'importe quelle autre propriété d'objet.
