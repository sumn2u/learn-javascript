---
layout: editorial
chapter: 4
pageNumber: 23
---

# Capítulo 4

## Strings (Cadenas, en español)

Las cadenas (strings, en inglés) de JavaScript comparten muchas similitudes con implementaciones de cadenas de otros lenguajes de alto nivel. Representan mensajes y datos basados en texto. En este curso, cubriremos los conceptos básicos. Cómo crear nuevas cadenas y realizar operaciones comunes sobre ellas.

A continuación se muestra un ejemplo de una cadena:

```Javascript
"Hello World"
```

Los índices de cadenas tienen base cero, lo que significa que la posición inicial del primer carácter es "0" seguida de otros en orden incremental. Varios métodos son compatibles con cadenas y devuelven un nuevo valor. Estos métodos se describen a continuación.

| Nombre               | Descripción                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------|
| `charAt()`           | Devuelve el carácter en el índice especificado                                                   |
| `charCodeAt()`       | Devuelve un carácter Unicode en el índice especificado                                           |
| `concat()`           | Devuelve dos o más cadenas combinadas                                                            |
| `constructor`        | Devuelve la función constructora de la cadena.                                                   |
| `endsWith()`         | Comprueba si una cadena termina con un valor específico                                          |
| `fromCharCode()`     | Devuelve valores Unicode como caracteres                                                         |
| `includes()`         | Comprueba si una cadena contiene un valor especificado                                           |
| `indexOf()`          | Devuelve el índice de su primera aparición.                                                      |
| `lastIndexOf()`      | Devuelve el índice de su última aparición.                                                       |
| `length`             | Devuelve la longitud de la cadena.                                                               |
| `localeCompare()`    | Compara dos cadenas con la configuración regional                                                |
| `match()`            | Compara una cadena con un valor o expresión regular                                              |
| `prototype`          | Se utiliza para agregar propiedades y métodos de un objeto.                                      |
| `repeat()`           | Devuelve una nueva cadena con el número de copias especificado                                   |
| `replace()`          | Devuelve una cadena con valores reemplazados por una expresión regular o una cadena con un valor |
| `search()`           | Devuelve un índice basado en la coincidencia de una cadena con un valor o expresión regular      |
| `slice()`            | Devuelve una cadena que contiene parte de una cadena.                                            |
| `split()`            | Divide la cadena en una serie de subcadenas                                                      |
| `startsWith()`       | Comprueba cadenas que comienzan con el carácter especificado                                     |
| `substr()`           | Extrae parte de la cadena, desde el índice inicial.                                              |
| `substring()`        | Extrae parte de la cadena, entre dos índices.                                                    |
| `toLocalLowerCase()` | Devuelve una cadena con caracteres en minúscula usando la configuración regional del host        |
| `toLocalUpperCase()` | Devuelve una cadena con caracteres en mayúscula utilizando la configuración regional del host    |
| `toLowerCase()`      | Devuelve una cadena con caracteres en minúscula                                                  |
| `toString()`         | Devuelve una cadena o un objeto de cadena como cadena                                            |
| `toUpperCase()`      | Devuelve una cadena con caracteres en mayúsculas                                                 |
| `trim()`             | Devuelve una cadena con espacios en blanco eliminados                                            |
| `trimEnd()`          | Devuelve una cadena con espacios en blanco eliminados del final                                  |
| `trimStart()`        | Devuelve una cadena con espacios en blanco eliminados desde el inicio.                           |
| `valueOf()`          | Devuelve el valor primitivo de una cadena o un objeto string.                                    |
