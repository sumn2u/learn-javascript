---
chapter: 9
description: Comprensión de las funciones constructoras en JavaScript.
---

# Comprensión de las funciones constructoras en JavaScript

Las funciones constructoras en JavaScript son funciones especiales que se utilizan para crear e inicializar objetos. Ofrecen una forma de definir un modelo para crear varios objetos con propiedades y métodos similares.

## Definición de una función constructora

Una función constructora se define como una función regular, pero normalmente se nombra con una letra mayúscula inicial para distinguirla de las funciones regulares.

## Ejemplo de una función constructora

He aquí un ejemplo básico de una función constructora:

```javascript
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona1 = new Persona("Juan", "Pérez");
const persona2 = new Persona("Juana", "Herrera");

console.log(persona1.nombre); // Output: Juan
console.log(persona2.apellido); // Output: Herrera
```

En este ejemplo, la función constructora `Persona` inicializa las propiedades `nombre` y `apellido` para cada nuevo objeto creado.

## Agregar métodos a funciones constructoras

Puede agregar métodos a los objetos creados por una función constructora definiéndolos en el prototipo del constructor.

```javascript
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.dameNombreCompleto = function() {
    return `${this.nombre} ${this.apellido}`;
};

const persona1 = new Persona("Juan", "Pérez");
console.log(persona1.dameNombreCompleto()); // Output: Juan Pérez
```

## Uso de la palabra clave `new`

La palabra clave `new` se utiliza para crear una instancia de un objeto a partir de una función constructora. Realiza los siguientes pasos:

1. Crea un nuevo objeto vacío.
2. Establece la palabra clave `this` en el nuevo objeto.
3. Ejecuta la función constructora.
4. Devuelve el nuevo objeto.

## Ejemplo con la palabra clave `new`

```javascript
function Coche(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

const coche1 = new Coche("Toyota", "Corolla");
console.log(coche1.marca); // Salida: Toyota
```

## Funciones constructoras vs. clases

ES6 introdujo la sintaxis `class`, que proporciona una forma más concisa y legible de definir funciones y métodos constructores.

## Ejemplo con Clases

```javascript
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    dameNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

const persona1 = new Persona("Juan", "Pérez");
console.log(persona1.dameNombreCompleto()); // Salida: Juan Pérez
```

## Conclusión

Las funciones constructoras son una característica fundamental de JavaScript para crear e inicializar objetos. Permiten definir un modelo para los objetos y agregar métodos a su prototipo. Con la introducción de ES6, la sintaxis de `class` proporciona una forma más moderna y legible de lograr la misma funcionalidad.
