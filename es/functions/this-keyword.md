---
chapter: 8
pageNumber: 85
description: Entendiendo la palabra clave `this` en JavaScript.
---

# Entendiendo la palabra clave `this` en JavaScript

La palabra clave `this` en JavaScript hace referencia al objeto al que pertenece. Tiene distintos valores según dónde se utilice: en un método, sola, en una función, en un evento, etc.

## `this` en el Contexto global

En el contexto de ejecución global (fuera de cualquier función), `this` se refiere al objeto global, que es `window` en los navegadores.

```javascript
console.log(this); // Salida: Window {...}
```

## `this` en los métodos de un objeto

Cuando se utiliza en un método de objeto, `this` se refiere al objeto al que pertenece el método.

```javascript
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    }
};

console.log(persona.nombreCompleto()); // Salida: Juan Pérez
```

## `this` en funciones de construcción

En una función constructora, `this` se refiere a la instancia recién creada.

```javascript
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona1 = new Persona("Juana", "Herrera");
console.log(persona1.nombre); // Salida: Juana
```

## `this` en funciones flecha

Las funciones de flecha no tienen su propio `this`. En cambio, `this` se hereda léxicamente de la función externa donde se define la función de flecha.

```javascript
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    nombreCompleto: function() {
        const dameNombreCompleto = () => `${this.nombre} ${this.apellido}`;
        return dameNombreCompleto();
    }
};

console.log(persona.nombreCompleto()); // Saslida: Juan Pérez
```

## `this` en manejadores de eventos

En los controladores de eventos, `this` se refiere al elemento que recibió el evento.

```html
<button id="miBoton">Púlsame</button>
<script>
    document.getElementById("miBoton").addEventListener("click", function() {
        console.log(this); // Salida: <button id="miBoton">Púlsame</button>
    });
</script>
```

## Cambiar `this` con `call`, `apply`, y `bind`

Puede establecer explícitamente el valor de `this` usando `call`, `apply` y `bind`.

### Método `call`

El método `call` llama a una función con un valor `this` dado y argumentos proporcionados individualmente.

```javascript
function saluda() {
    console.log(`Hola, ${this.nombre}`);
}

const persona = { nombre: "Alicia" };
saluda.call(persona); // Salida: Hola, Alicia
```

### Método  `apply`

El método `apply` llama a una función con un valor `this` dado y argumentos proporcionados como una matriz.

```javascript
function saluda(saludo) {
    console.log(`${saludo}, ${this.nombre}`);
}

const persona = { nombre: "Roberto" };
saluda.apply(persona, ["Hola"]); // Salida: Hola, Roberto
```

### Método `bind`

El método `bind` crea una nueva función que, cuando se llama, tiene su palabra clave `this` establecida en el valor proporcionado.

```javascript
function saluda() {
    console.log(`Hola, ${this.nombre}`);
}

const persona = { nombre: "Carlos" };
const saludaPersona = saluda.bind(persona);
saludaPersona(); // Salida: Hola, Carlos
```

## Conclusión

Comprender la palabra clave `this` es fundamental para escribir código JavaScript eficaz. Su valor depende del contexto en el que se utiliza y se puede configurar explícitamente mediante `call`, `apply` y `bind`.
