---
chapter: 9
pageNumber: 59
description: Una referencia a un objeto es un valor que apunta a la ubicación de la memoria donde está almacenado el objeto. Cuando se crea un objeto, se asigna un espacio de memoria para almacenar sus propiedades y valores. Cuando asignamos este objeto a una variable, esa variable contiene una referencia a la ubicación de la memoria donde está almacenado el objeto.
---
# Referencia

Los objetos **nunca se copian**. Se transmiten por referencia. Una referencia de objeto es un valor que hace referencia a un objeto. Cuando crea un objeto utilizando el operador `new` o la sintaxis literal del objeto, JavaScript crea un objeto y le asigna una referencia.
A continuación se muestra un ejemplo de creación de un objeto utilizando la sintaxis literal del objeto:

```javascript
var object = {
  foo: 'bar'
};
```

Aquí hay un ejemplo de cómo crear un objeto usando el operador `new`:

```javascript
var object = new Object();
object.foo = 'bar';
```

Cuando asigna una referencia de objeto a una variable, la variable simplemente contiene una referencia al objeto, no al objeto en sí. Esto significa que si asigna la referencia del objeto a otra variable, ambas variables apuntarán al mismo objeto.

Por ejemplo:

```javascript
var object1 = {
  foo: 'bar'
};

var object2 = object1;

console.log(object1 === object2); // Salida: true
```

En el ejemplo anterior, tanto `object1` como `object2` son variables que contienen referencias al mismo objeto. El operador `===` se usa para comparar las referencias, no los objetos en sí, y devuelve `true` porque ambas variables contienen referencias al mismo objeto.

{% hint style="info" %}
Puede utilizar el método `Object.assign()` para crear un nuevo objeto que sea una copia de un objeto existente.
{% endhint %}

A continuación se muestra un ejemplo de un objeto por referencia.

```javascript
// Imagínate que comí una pizza
let myPizza = { slices: 5 };
// Y lo compartí contigo
let yourPizza = myPizza;
// me como otra rebanada
myPizza.slices = myPizza.slices - 1;
let numberOfSlicesLeft = yourPizza.slices;
// Ahora tenemos 4 porciones porque myPizza y yourPizza
// referencia al mismo objeto pizza.
let a = {},
  b = {},
  c = {};
// a, byc se refieren cada uno a a
// objeto vacío diferente
a = b = c = {};
// a, byc se refieren todos a
// el mismo objeto vacío
```
