---
chapter: 9
pageNumber: 62
description: L'opérateur `delete` peut être utilisé pour **supprimer une propriété**. Lorsqu'une propriété est supprimée, elle est enlevée de l'objet et ne peut ni être accédée ni énumérée (i.e., n'apparaît pas dans une boucle for-in).
---
# Le mot clé delete

L'opérateur `delete` peut être utilisé pour **supprimer une propriété**. Lorsqu'une propriété est supprimée, elle est enlevée de l'objet et ne peut ni être accédée ni énumérée (i.e., n'apparaît pas dans une boucle for-in).

Voici la syntaxe d'utilisation de l'opérateur `delete`:

```javascript
delete object.property;
```

Par exemple:

```javascript
let adult = { age: 26 }, child = Object.create(adult);
  
child.age = 8;

delete child.age;

/* Supprime la propriété age de child, permet d'accéder à l'age du protype car il n'est plus masqué */

let prototypeAge = child.age;
// 26, car child n'a pas de propriété age.
```

{% hint style="warning" %}
L'opérateur `delete` marche uniquement sur les propriétés de l'objet (définis sur l'objet) mais pas ceux qui sont hérités.  Il ne marche pas non plus sur les propriété qui ont l'attribut `configurable` mis à `false`.
{% endhint %}

L'opérateur `delete` ne modifie pas la chaîne de prototypage. Elle supprime purement et simplement la propriété spécifiée de l'objet et  n'agit pas sur l'objet lui-même. Cela permet de rendre la propriété inaccessible comme si elle n'avait pas été attribuée. Si vous désirez supprimer un objet et libérer la mémoire occupée, vous pouvez tout simplement affecter `null` à la variable.
