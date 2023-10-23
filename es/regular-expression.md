---
layout: editorial
chapter: 14
pageNumber: 73
description: Una expresión regular, a menudo abreviada como "regex", es una poderosa herramienta para la coincidencia de patrones y la búsqueda dentro de cadenas. Proporciona una forma concisa y flexible de buscar, unir y manipular texto según patrones específicos.
---

# Capítulo 14

## Expresión regular

Una expresión regular es un objeto que puede construirse con el constructor `RegEx` o escribirse como un valor literal encerrando un patrón entre una barra diagonal `(/)`. Las sintaxis para crear una expresión regular se muestran a continuación.

```javascript
// usando el cosntructor de expresión regular
new RegExp(patron[, banderas]);

// usando literales
/patron/modificadores
```

Las banderas son opcionales al crear una expresión regular usando literales. Un ejemplo de creación de un regular idéntico utilizando el método mencionado anteriormente es el siguiente.

```javascript
let re1 = new RegExp("xyz"); 
let re2 = /xyz/;
```

Ambas formas crearán un objeto regex y tendrán los mismos métodos y propiedades. Hay casos en los que podríamos necesitar valores dinámicos para crear una expresión regular; en ese caso, los literales no funcionarán y tendrán que ir con el constructor.

{% hint style="info" %}
En los casos en los que queremos que una barra diagonal sea parte de una expresión regular, tenemos que escapar de la barra diagonal `(/)` con una barra invertida `(\)`.
{% endhint %}

Los diferentes modificadores que se utilizan para realizar búsquedas que no distinguen entre mayúsculas y minúsculas son:

* `g` - búsqueda global (encuentra todas las coincidencias en lugar de detenerse después de la primera)
* `i` - búsqueda que no distingue entre mayúsculas y minúsculas
* `m` - coincidencia multilínea

Los _corchetes_ se utilizan en una expresión regular para encontrar un rango de caracteres. Algunos de ellos se mencionan a continuación.

* `[abc]` - Encuentra cualquier carácter entre corchetes.
* `[^abc]` - encontrar cualquier carácter, menos los que están entre corchetes
* `[0-9]` - encuentra cualquier dígito de los que están entre corchetes
* `[^0-9]` - encuantra cualquier dígito, menos los que estaán entre corchetes
* `(x|y)`- encuentre cualquiera de las alternativas separadas por |

Los _metacaracteres_ son caracteres especiales que tienen un significado especial en la expresión regular. Estos caracteres se describen con más detalle a continuación:

| Metacaracter | Descripción                                                                     |
| ------------- | ------------------------------------------------------------------------------ |
| `.`           | Coincide con un solo carácter excepto nueva línea o un terminador              |
| `\w`          | Coincide con un carácter de palabra (carácter alfanumérico `[a-zA-Z0–9_]`)     |
| `\W`          | Coincide con un carácter que no es una palabra (igual que `[^a-zA-Z0–9_]`)     |
| `\d`          | Coincide con cualquier carácter de dígito (igual que `[0-9]`)                  |
| `\D`          | Coincide con cualquier carácter que no sea un dígito                           |
| `\s`          | Coincide con un carácter de espacio en blanco (espacios, tabulaciones, etc.)   |
| `\S`          | Coincide con un carácter que no sea un espacio en blanco                       |
| `\b`          | Coincidencia al principio/final de una palabra                                 |
| `\B`          | Coincide pero no al principio/final de una palabra                             |
| `\0`          | Coincide con un carácter `NULL`                                                |
| `\n`          | Coincide con un carácter de nueva línea                                        |
| `\f`          | Coincide con un carácter de avance de formulario                               |
| `\r`          | Coincide con un carácter de retorno de carro                                   |
| `\t`          | Coincide con un carácter de tabulación                                         |
| `\v`          | Coincide un carácter de tabulación vertical                                    |
| `\xxx`        | Coincide con un carácter especificado por un número octal `xxx`                |
| `\xdd`        | Coincide con un carácter especificado por un número hexadecimal `dd`           |
| `\udddd`      | Coincide con un carácter especificado por un número hexadecimal `dddd`         |

Las propiedades y métodos admitidos por RegEx se enumeran a continuación.

| Nombre        | Descripción                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `constructor` | Devuelve la función que creó el prototipo del objeto RegEx                                         |
| `global`      | Comprueba si el modificador `g` está configurado                                                   |
| `ignoreCase`  | Comprueba si el modificador `i` está configurado                                                   |
| `lastIndex`   | Especifica el índice en el que comenzar la próxima coincidencia.                                   |
| `multiline`   | Comprueba si el modificador m está configurado                                                     |
| `source`      | Devuelve el texto de la cadena.                                                                    |
| `exec()`      | Prueba la coincidencia y devuelve la primera coincidencia; si no hay coincidencia, devuelve `null` |
| `test()`      | Prueba la coincidencia y devuelve `true` o `false`                                                 |
| `toString()`  | Devuelve el valor de cadena de la expresión regular.                                               |

{% hint style="warning" %}
Un método `compile()` compila la expresión regular y está en desuso.
{% endhint %}

Aquí se muestran algunos ejemplos de expresiones regulares.

```javascript
let texto = "Las mejores cosas de la vida son gratis";
let resultado = /e/.exec(texto); // busca una coincidencia de e en una cadena
// resultado: e


let textoHolaMundo = "¡Hola mundo!";
// Busca "Hola"
let pattern1 = /Hola/g;
let result1 = pattern1.test(textoHolaMundo);
// result1: true

let pattern1String = pattern1.toString();
// pattern1String : '/Hola/g'
```
