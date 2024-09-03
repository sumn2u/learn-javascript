---
chapter: 9
description: Comprender la propiedad `constructor` en JavaScript.
---

# Comprender la propiedad `constructor` en JavaScript

La propiedad `constructor` en JavaScript es una referencia a la función que creó el prototipo de una instancia. Es una propiedad de todos los objetos que apunta a la función que se utilizó para crear el objeto.

## ¿Qué es la propiedad `constructor`?

La propiedad `constructor` devuelve una referencia a la función constructora que creó la instancia. Esto resulta útil para identificar el tipo de un objeto.

## Ejemplo de la propiedad `constructor`

A continuación se muestra un ejemplo básico para ilustrar la propiedad `constructor`:

```javascript
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona1 = new Persona("Juan", "Herrera");
console.log(persona1.constructor); // Output: [Function: Persona]
```

En este ejemplo, la propiedad `constructor` de `persona1` apunta a la función `Persona`.

## Uso de la propiedad `constructor` para crear nuevas instancias

Puede utilizar la propiedad `constructor` para crear nuevas instancias del mismo tipo:

```javascript
const persona2 = new persona1.constructor("Juana", "Herrera");
console.log(persona2.nombre); // Output: Juana
```

## La propiedad `constructor` en objetos integrados

La propiedad `constructor` también está disponible en objetos JavaScript integrados:

```javascript
const array = [];
console.log(array.constructor); // Output: [Function: Array]

const objeto = {};
console.log(objeto.constructor); // Output: [Function: Object]
```

## Modificación de la propiedad `constructor`

Puedes modificar la propiedad `constructor`, pero generalmente no se recomienda ya que puede generar un comportamiento inesperado:

```javascript
function Animal(nombre) {
    this.nombre = nombre;
}

const perro = new Animal("Rex");
perro.constructor = Persona;
console.log(perro.constructor); // Output: [Function: Persona]
```

## Conclusión

La propiedad `constructor` es una característica útil de JavaScript que permite hacer referencia a la función que creó el prototipo de una instancia. Se puede utilizar para identificar el tipo de un objeto y crear nuevas instancias del mismo tipo. Sin embargo, la modificación de la propiedad `constructor` debe realizarse con precaución.
