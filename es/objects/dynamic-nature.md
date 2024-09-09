---
chapter: 9
pageNumber: 107
description: Comprender la naturaleza dinámica de los objetos en JavaScript.
---

# Comprender la naturaleza dinámica de los objetos en JavaScript

Los objetos de JavaScript son dinámicos, lo que significa que sus propiedades se pueden agregar, modificar o eliminar en tiempo de ejecución. Esta flexibilidad
permite un código potente y adaptable, pero requiere una gestión cuidadosa para evitar comportamientos inesperados.

## Agregar propiedades

Puede agregar propiedades a un objeto en cualquier momento utilizando la notación de puntos o la notación de corchetes.

```javascript
const persona = {
  nombre: "Juan",
  apellido: "Pérez"
};

// Agrega una propiedad nueva
persona.edad = 30;
console.log( persona.edad ); // Salida: 30

// Agrega una propiedad usando la notación de corchetes
persona["genero"] = "masculino";
console.log( persona.genero ); // Salida: masculino
```

## Modificación de propiedades

Las propiedades existentes se pueden modificar reasignando sus valores.

```javascript
const coche = {
  marca: "Toyota",
  modelo: "Corolla"
};

// Se modifica una propiedad
coche.modelo = "Camry";
console.log( coche.modelo ); // Salida: Camry
```

## Eliminar propiedades

Se pueden eliminar propiedades de un objeto utilizando el operador `delete`.

```javascript
const libro = {
  titulo: "1984",
  autor: "George Orwell",
  año: 1949
};

// Eliminando una propiedad
delete libro.año;
console.log( libro.año ); // Output: undefined
```

## Comprobando propiedades

Puede comprobar si un objeto tiene una propiedad específica utilizando el operador `in` o el método `hasOwnProperty`.

```javascript
const usuario = {
  nombreUsuario: "johndoe",
  correo: "john@example.com"
};

// Usando el operador 'in'
console.log( "correo" in usuario ); // Salida: true

// Usando el método `hasOwnProperty`
console.log( usuario.hasOwnProperty( "nombreUsuario" ) ); // Salida: true 
```

## Iteración sobre propiedades

Puedes iterar sobre las propiedades de un objeto usando un bucle `for...in`.

```javascript
const estudiante = {
  nombre: "Alice",
  edad: 22,
  importante: "Ciencias de la Computación"
};

for (let clave in estudiante) {
  if (estudiante.hasOwnProperty( clave )) {
    console.log( `${clave}: ${estudiante[clave]}` );
  }
}
// Salida:
'nombre: Alice' 'edad: 22' 'importante: Ciencias de la Computación'
```

## Nombres de propiedades dinámicas

Puede utilizar nombres de propiedad dinámicos mediante el uso de nombres de propiedad calculados en literales de objeto.

```javascript
const nombrePropiedad = "resultado";
const juego = {
  [nombrePropiedad]: 100
};

console.log( juego.resultado); // Salida: 100
```

## Conclusión

La naturaleza dinámica de los objetos de JavaScript proporciona una gran flexibilidad en la gestión de estructuras de datos. Puede agregar, modificar y eliminar propiedades en tiempo de ejecución, verificar la existencia de propiedades e iterar sobre ellas. Esta flexibilidad, si bien es poderosa, requiere un manejo cuidadoso para mantener la estabilidad y la previsibilidad del código.
