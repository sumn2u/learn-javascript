---
chapter: 8
description: Comprender los métodos Getters y Setters en JavaScript
---

# Comprender los métodos Getters y Setters en JavaScript

Los métodos getters y setters de JavaScript son métodos especiales que proporcionan una forma de acceder y actualizar las propiedades de un objeto. Permiten controlar cómo se accede a una propiedad y cómo se modifica, agregando una capa de abstracción y encapsulamiento.

## ¿Qué son los Getters y Setters?

- **Getters**: métodos que obtienen el valor de una propiedad específica.
- **Setters**: métodos que establecen el valor de una propiedad específica.

## Definición de métodos get y set

Puede definir getters y setters utilizando las palabras clave `get` y `set` dentro de un objeto literal o una clase.

## Ejemplos con literales de objeto

A continuación se muestra un ejemplo de definición de captadores y definidores en un literal de objeto:

```javascript
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(nombre) {
        [this.nombre, this.apellido] = nombre.split(" ");
    }
};

console.log(persona.nombreCompleto); // Salida: 'Juan Pérez'
persona.nombreCompleto = "Juana Herrera";
console.log(persona.nombre); // Salida: 'Juana'
console.log(persona.apellido); // Salida: 'Herrera'
```

## Ejemplo con clases

A continuación se muestra un ejemplo de definición de getters y setters en una clase:

```javascript
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    set nombreCompleto(nombre) {
        [this.nombre, this.apellido] = nombre.split(" ");
    }
}

let persona = new Persona("Juan", "Pérez");
console.log(persona.nombreCompleto); // Output: 'Juan Pérez'
persona.nombreCompleto = "Juana Herrera";
console.log(persona.nombre); // Output: 'Juana'
console.log(persona.apellido); // Output: 'Herrera'
```

## Beneficios del uso de getters y setters

1. **Encapsulación**: controla cómo se accede a las propiedades y cómo se modifican.
2. **Validación**: agrega lógica de validación al configurar una propiedad.
3. **Propiedades calculadas**: crea propiedades que se calculan en función de otras propiedades.

## Ejemplo de validación

A continuación se muestra un ejemplo de cómo agregar lógica de validación en un setter:

```javascript
class Usuario {
    constructor(nombreUsuario) {
        this._nombreUsuario = nombreUsuario;
    }

    get nombreUsuario() {
        return this._nombreUsuario;
    }

    set nombreUsuario(nombre) {
        if (nombre.length < 3) {
            console.error("El nombre de usuario debe tener al menos 3 caracteres.");
        } else {
            this._nombreUsuario = nombre;
        }
    }
}

let usuario = new Usuario("jperez");
console.log(usuario.nombreUsuario); // Output: 'jperez'
usuario.nombreUsuario = "jp"; // Output: 'El nombre de usuario debe tener al menos 3 caracteres.'
console.log(usuario.nombreUsuario); // Output: jperez'
```

## Conclusión

Los métodos getter y setter proporcionan una forma eficaz de gestionar las propiedades de los objetos en JavaScript. Al usarlos, puede agregar validación, encapsulación y propiedades calculadas, lo que hace que su código sea más sólido y fácil de mantener.
