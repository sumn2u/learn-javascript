---
chapter: 2
pageNumber: 13
description: Los tipos son los tipos de datos que se pueden representar y manipular en el lenguaje.
---

# Tipos

Las computadoras son sofisticadas y pueden utilizar variables más complejas que solo números. Aquí es donde entran los tipos de variables. Las variables vienen en varios tipos y diferentes idiomas admiten diferentes tipos.

Los tipos más comunes son:

* **Number**: Los números pueden ser números enteros (por ejemplo, `1`, `-5`, `100`) o valores de punto flotante (por ejemplo, `3.14`, `-2.5`, `0.01`). JavaScript no tiene un tipo separado para números enteros y valores de punto flotante; los trata a ambos como números.
* **String**: Las cadenas son secuencias de caracteres, representadas por comillas simples (por ejemplo, `'hola'`) o comillas dobles (por ejemplo, `"mundo"`).
* **Boolean**: Los booleanos representan un valor verdadero o falso. Se pueden escribir como `true` o `false` (sin comillas).
* **Null**: El tipo nulo representa un valor nulo, lo que significa "sin valor". Se puede escribir como `null` (sin comillas).
* **Undefined**: El tipo indefinido representa un valor que no se ha establecido. Si una variable ha sido declarada, pero no se le ha asignado un valor, es `undefined`.
* **Object**: Un objeto es una colección de propiedades, cada una de las cuales tiene un nombre y un valor. Puede crear un objeto usando llaves (`{}`) y asignándole propiedades usando pares nombre-valor.
* **Array**: Una matriz (array en inglés) es un tipo especial de objeto que puede contener una colección de elementos. Puede crear una matriz usando corchetes (`[]`) y asignándole una lista de valores.
* **Function**: Una función es un bloque de código que se puede definir y luego llamar por su nombre. Las funciones pueden aceptar argumentos (entradas) y devolver un valor (salida). Puede crear una función utilizando la palabra clave `function`.

JavaScript es un lenguaje de "_tipado débil_", lo que significa que no es necesario declarar explícitamente de qué tipo de datos son las variables. Sólo necesita usar la palabra clave `var` para indicar que está declarando una variable, y el intérprete determinará qué tipo de datos está usando a partir del contexto y el uso de comillas.

{% exercise %}
Declare tres variables e inicialícelas con los siguientes valores: `edad` como número, `nombre` como cadena y `estaCasada` como booleano.

{% initial %}
let edad =
let nombre =
let estaCasada =
{% solution %}
let edad = 30
let nombre = "Cecilia"
let estaCasada = true

{% validation %}
assert(typeof edad === "number" && typeof nombre === "string" && typeof estaCasada === "boolean");

{% context %}
{% endexercise %}

El operador `typeof` se usa para comprobar los tipos de datos de una variable.


```javascript
typeof "Juan"                    // Devuelve "string"
typeof 3.14                      // Devuelve "number"
typeof NaN                       // Devuelve "number"
typeof false                     // Devuelve "boolean"
typeof [1,2,3,4]                 // Devuelve "object"
typeof {nombre:'Juan', edad:34}  // Devuelve "object"
typeof new Date()                // Devuelve "object"
typeof function () {}            // Devuelve "function"
typeof miCoche                   // Devuelve "undefined" *
typeof null                      // Devuelve "object
```

Los tipos de datos utilizados en JavaScript se pueden diferenciar en dos categorías según los valores que contienen.

Tipos de datos que pueden contener valores:

* `string`
* `number`
* `boolean`
* `object`
* `function`

{% hint style="info" %}
`Object`, `Date`, `Array`, `String`, `Number`, y `Boolean` son los tipos de objetos disponibles en JavaScript.
{% endhint %}

Tipos de datos que no pueden contener valores:

* `null`
* `undefined`

Un valor de datos primitivo es un valor de datos simple sin propiedades ni métodos adicionales y no es un objeto. Son inmutables, lo que significa que no pueden modificarse. Hay 7 tipos de datos primitivos:

* string
* number
* bigint
* boolean
* undefined
* symbol
* null

{% exercise %}
Declare una variable llamada `persona` e inicialícela con un objeto que contenga las siguientes propiedades: `edad` como un número, `nombre` como una cadena y `estaCasada` como un booleano.

{% initial %}
let persona =

{% solution %}
let persona = {
  nombre: "Maria",
  edad: 25,
  estaCasada: false
};

{% validation %}
assert(typeof persona.edad === "number" && typeof persona.nombre === "string" && typeof persona.estaCasada === "boolean");

{% context %}
{% endexercise %}
