---
chapter: 9
pageNumber: 63
description: L'énumération fait référence au fait d'itérer sur les propriétés d'un objet et d'effectuer des actions sur chaque propriété. Une façon d'énumérer les propriétés d'un objet est d'utiliser une boucle `for in`. La boucle `for in` permet d'itérer de façon stochastique sur les propriétés d'un objet qui est `énumérable`, et pour chaque propriété on exécute un certain bloc d'instructions.
---
# L'énumération

On appelle _Enumération_, le fait d'itérer sur les propriétés d'un objet et d'exécuter un bloc d'instructions pour chaque propriété de l'objet. Il y a diverses façons d'énumérer les propriétés d'un objet en JavaScript:

Une façon d'énumérer les propriétés d'un objet est d'utiliser une boucle `for in`. La boucle `for in` permet d'itérer de façon stochastique (arbitraire) sur les propriétés d'un objet qui est `énumérable`, et pour chaque propriété on exécute un certain bloc d'instructions.

>**Note :** La boucle `for in` peut itérer sur tous les nom de propriétés d'un objet. L'énumération inclut autant les fonctions que les propriétés issus du prototype.

```javascript
let fruit = {
    apple: 2,
    orange: 5,
    pear: 1,
  },
  sentence = "I have ",
  quantity;

for (kind in fruit) {
  quantity = fruit[kind];
  sentence += quantity + " " + kind + (quantity === 1 ? "" : "s") + ", ";
}
// La ligne suivante supprime la virgule finale..
sentence = sentence.substr(0, sentence.length - 2) + ".";
// I have 2 apples, 5 oranges, 1 pear.
```

Un autre moyen d'énumérer les propriétés d'un objet est d'utiliser la méthode: `Object.keys()` qui retourne un tableau contenant les noms des propriétés appartenant à l'objet lui-même.

Par exemple:

```typescript
let object = {
  foo: 'bar',
  baz: 'qux'
};

let properties = Object.keys(object);
properties.forEach(function(property) {
  console.log(property + ': ' + object[property]);
});

// foo: bar
// baz: qux
```
