---
chapter: 9
pageNumber: 58
description: Mutable significa que un objeto o tipo de datos se puede cambiar después de su creación, mientras que "inmutable" significa que no se puede cambiar. Los objetos mutables permiten modificar su estado interno, mientras que los objetos inmutables devuelven nuevas instancias con cambios, dejando el original sin cambios.
---
# Mutable

La diferencia entre objetos y valores primitivos es que podemos **cambiar objetos**, mientras que los valores primitivos son **inmutables**.

Por ejemplo:

```javascript
let miPrimitivo = "primer valor";
miPrimitivo = "otro valor";
// miPrimitivo ahora apunta a otra cadena.
let miObjeto = { clave: "primer valor" };
miObjeto.clave = "otro valor";
// miObjeto apunta al mismo objeto.
```

Puede agregar, modificar o eliminar propiedades de un objeto utilizando la notación de puntos o la notación de corchetes.

```javascript
let objeto = {};
objeto.foo = 'bar'; // Agrega la propiedad 'foo'
objeto['baz'] = 'qux'; // Agrega la propiedad 'baz'
objeto.foo = 'quux'; // Modifica la propiedad 'foo'
delete objeto.baz; // Borra la propiedad 'baz'
```

{% hint style="warning" %}
Los valores primitivos (como números y cadenas) son inmutables, mientras que los objetos (como matrices y objetos) son mutables.
{% endhint %}
