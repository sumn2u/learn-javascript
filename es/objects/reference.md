---
chapter: 9
pageNumber: 96
description: Una referencia a un objeto es un valor que apunta a la ubicación de la memoria donde está almacenado el objeto. Cuando se crea un objeto, se asigna un espacio de memoria para almacenar sus propiedades y valores. Cuando asignamos este objeto a una variable, esa variable contiene una referencia a la ubicación de la memoria donde está almacenado el objeto.
---
# Referencia

Los objetos **nunca se copian**. Se transmiten por referencia. Una referencia de objeto es un valor que hace referencia a un objeto. Cuando crea un objeto utilizando el operador `new` o la sintaxis literal del objeto, JavaScript crea un objeto y le asigna una referencia.
A continuación se muestra un ejemplo de creación de un objeto utilizando la sintaxis literal del objeto:

```javascript
var objeto = {
  foo: 'bar'
};
```

Aquí hay un ejemplo de cómo crear un objeto usando el operador `new`:

```javascript
var objeto = new Object();
objeto.foo = 'bar';
```

Cuando asigna una referencia de objeto a una variable, la variable simplemente contiene una referencia al objeto, no al objeto en sí. Esto significa que si asigna la referencia del objeto a otra variable, ambas variables apuntarán al mismo objeto.

Por ejemplo:

```javascript
var objeto1 = {
  foo: 'bar'
};

var objeto2 = objeto1;

console.log(objeto1 === objeto2); // Salida: true
```

En el ejemplo anterior, tanto `objeto1` como `objeto2` son variables que contienen referencias al mismo objeto. El operador `===` se usa para comparar las referencias, no los objetos en sí, y devuelve `true` porque ambas variables contienen referencias al mismo objeto.

{% hint style="info" %}
Puede utilizar el método `Object.assign()` para crear un nuevo objeto que sea una copia de un objeto existente.
{% endhint %}

A continuación se muestra un ejemplo de un objeto por referencia.

```javascript
// Imagínate que comí una pizza
let miPizza = { trozos: 5 };
// Y lo compartí contigo
let tuPizza = miPizza;
// me como otra rebanada
miPizza.trozos = miPizza.trozos - 1;
let numeroDeTrozosRestantes = tuPizza.trozos;
// Ahora tenemos 4 porciones porque miPizza y tuPizza
// referencian al mismo objeto pizza.
let a = {},
  b = {},
  c = {};
// a, b y c se refieren cada uno a un
// objeto vacío diferente
a = b = c = {};
// a, b y c se refieren todos a
// el mismo objeto vacío
```
