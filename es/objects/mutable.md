---
chapter: 9
pageNumber: 58
description: Mutable significa que un objeto o tipo de datos se puede cambiar después de su creación, mientras que "inmutable" significa que no se puede cambiar. Los objetos mutables permiten modificar su estado interno, mientras que los objetos inmutables devuelven nuevas instancias con cambios, dejando el original sin cambios.
---
# Mutable

La diferencia entre objetos y valores primitivos es que podemos **cambiar objetos**, mientras que los valores primitivos son **inmutables**.

Por ejemplo:

```javascript
let myPrimitive = "primer valor";
myPrimitive = "otro valor";
// myPrimitive ahora apunta a otra cadena.
let myObject = { key: "primer valor" };
myObject.key = "otro valor";
// myObject apunta al mismo objeto.
```

Puede agregar, modificar o eliminar propiedades de un objeto utilizando la notación de puntos o la notación de corchetes.

```javascript
let object = {};
object.foo = 'bar'; // Agrega la propiedad 'foo'
object['baz'] = 'qux'; // Agrega la propiedad 'baz'
object.foo = 'quux'; // Modifica la propiedad 'foo'
delete object.baz; // Borra la propiedad 'baz'
```

{% hint style="warning" %}
Los valores primitivos (como números y cadenas) son inmutables, mientras que los objetos (como matrices y objetos) son mutables.
{% endhint %}
