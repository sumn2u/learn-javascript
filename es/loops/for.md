---
chapter: 7
pageNumber: 63
description:  Un bucle for es una potente estructura de control que se utiliza para ejecutar un bloque de código varias veces, ya sea para un número específico de iteraciones o en un rango definido. Es muy versátil y se usa comúnmente para iterar a través de matrices, cadenas y otros objetos iterables.
---


# Bucles For

## For

La forma más sencilla de bucle es la declaración for. Éste tiene una sintaxis similar a una declaración if, pero con más opciones:

### Sintaxis `for`

```javascript
for (inicializacion; condicion_finalizacion; cambio) {
    // hazlo, hazlo ahora
}
```

### Explicación

- En la parte `inicializacion`, ejecutada antes de la primera iteración, se inicializa su variable de bucle
- En la parte `condicion_finalizacion`, se coloca una condición que puede ser comprobada antes de cada iteración. En el momento en el que la condición se vuelva `false`, el bucle termina.
- En la parte `cambio`, le indicamos al programa cómo actualizar la variable de bucle
- In the `change` part, tell the program how to update the loop variable.

Veamos cómo ejecutar el mismo código diez veces usando un bucle `for`:

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // haz este código diez veces
}
```

> _**Nota**_: `i = i + 1` se puede escribir `i++`.

## Bucle `for...in`

Para recorrer las propiedades enumerables de un objeto también se puede utilizar un bucle `for in`. Por cada propiedad distinta, JavaScript ejecuta las sentencias especificadas.

### Sintaxis  `for...in`

```javascript
for (variable in objeto) {
  // iterar cada propiedad en el objeto
}
```

### Ejemplos

Supongamos que tenemos el siguiente objeto:

```javascript
const persona = {
  nombre:"John", 
  apellido:"Doe", 
  edad:25
  };
```

Luego, con la ayuda del bucle `for in` podemos iterar sobre el objeto `persona` para acceder a sus propiedades como `nombre`, `apellido` y `edad` como se muestra a continuación.

```javascript
let info = "";
for (let x in persona) {
  info += persona[x];
}
```

La salida del fragmento de código anterior será:

```javascript
John
Doe
25
```

> **Nota: Los objetos iterables como `Arrays (matrices)`, `Strings (cadenas)`, `Maps (mapas)`, `NodeLists (Listas de nodos)` se pueden recorrer en bucle utilizando la declaración `for in`**

```javascript
// Ejemplo con matrices
const miMatriz = [1, 2, 3, 4, 5];
for (const elemento of miMatriz) {
  console.log(elemento;
}

// Ejemplo con cadenas
const miCadena = "¡Hola mundo!";
for (const caracter of miCadena) {
  console.log(caracter);
}

// Ejemplo con Mapas
const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);

for (const [clave, valor] of miMapa) {
  console.log(clave, valor);
}

// Ejemplo con Listas de Nodos (Elementos HTML)
const parrafos = document.querySelectorAll("p");
for (const parrafo of parrafos) {
  console.log(parrafo.textContent);
}
```

## Bucle `for...of`

El bucle `for...of` se introdujo en las versiones posteriores de **[JavaScript ES6](../es6-concepts/README.md)**. La instrucción `for...of` ejecuta un bucle que opera sobre una secuencia de valores provenientes de objetos iterables como `Array`, `String`, `TypedArray`, `Map`, `Set`, `NodeList` (y otras colecciones del DOM).

### Sintaxis `for...of`

La sintaxis del bucle `for...of` es:

```javascript
for (elemento of objeto_iterable) {
  //cuerpo de for...of
}
```

Donde:

- **objeto_iterable** - un objeto iterable (cuyas propiedades pueden recorrerse con un bucle)
- **elemento** - los distintos elementos en el objeto iterable

En términos simples, puedes leer el código anterior como: “para cada elemento del iterable, ejecuta el cuerpo del bucle”.

### Ejemplos `for...of`

Supongamos que tenemos el siguiente objeto:

```javascript
const persona = ["Juan Pérez", "Alberto", "Neo"];
```

Luego, con la ayuda del bucle `for of` podemos iterar sobre el objeto `persona` para acceder a su elemento individual como se muestra a continuación.

```javascript
let info = "";
for (let x of persona) {
  console.log(x);
}
```

La salida del fragmento de código anterior será:

```javascript
Juan Pérez
Alberto
Neo
```

A continuación se detalla el uso del bucle `for...of` con cadenas, mapas y listas de nodos:

```js
// Ejemplo con cadenas
const texto = "¡Hola mundo!";
for (const caracter of texto) {
  console.log(caracter);
}

// Ejemplo con mapas
const persona = new Map();
persona.set("nombre", "Juan");
persona.set("edad", 30);
for (const [clave, valor] of persona) {
  console.log(clave, valor);
}

// Ejemplo con NodeLists (Elementos de HTML)
const parrafos = document.querySelectorAll("p");
for (const parrafo of parrafos) {
  console.log(parrafo.textContent);
}
```
