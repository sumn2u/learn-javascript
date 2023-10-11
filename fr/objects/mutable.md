---
chapter: 9
pageNumber: 58
description: La mutabilité signifie que l'objet ou le type de données peut être changé après sa création tandis que l'immutabilité signifie qu'on ne peut le changer. Les objets mutables autorisent la modification de leur état interne alors que les objets immutables renvoient une nouvelle instance avec les modifications effectuées, laissant l'état original inchangé.
---
# La mutabilité

La **mutabilité** signifie que l'objet ou le type de données peut être changé après sa création tandis que l'**immutabilité** signifie qu'on ne peut le changer. Les objets mutables autorisent la modification de leur état interne alors que les objets immutables renvoient une nouvelle instance avec les modifications effectuées, laissant l'état original inchangé.

La différence entre les objets et les valeurs primitives est que l'on peut **changer les objets**, alors que les valeurs primitives sont **immutables**.

Par exemple :

```javascript
let myPrimitive = "première valeur";
myPrimitive = "autre valeur";
// myPrimitive pointe maintenant sur une autre chaîne.

let myObject = { key: "première valeur" };
myObject.key = "autre valeur";
// myObject réfère toujours le même objet !.
```

Vous pouvez ajouter, modifier ou supprimer les propriéts d'un objet en utilisant la notation pointée ou les crochets:

```javascript
let object = {};
object.foo = 'bar'; // Ajouter la propriété 'foo'
object['baz'] = 'qux'; // Ajouter la propriété 'baz'
object.foo = 'quux'; // Changer la propriété 'foo'
delete object.baz; // Supprimer la propriété 'baz'
```

{% hint style="warning" %}
Les valeurs primitives comme les nombres et les chaînes sont immutables tandis que les objets comme les tableaux sont mutables.
{% endhint %}
