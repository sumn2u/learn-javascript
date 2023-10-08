---
chapter: 2
pageNumber: 15
description: El operador de igualdad se utiliza para comparar. Puede determinar si dos variables son iguales, incluso si no son del mismo tipo.
---

# Igualdad

Al escribir un programa, con frecuencia necesitamos determinar la igualdad de variables en relación con otras variables. Esto se hace usando un operador de igualdad. El operador de igualdad más básico es el operador `==`. Este operador hace todo lo posible para determinar si dos variables son iguales, incluso si no son del mismo tipo.

Por ejemplo, supongamos:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

`foo == bar` se evaluará como `true` y `baz == qux` se evaluará como `false`, como era de esperar. Sin embargo, `foo == baz` también se evaluará como `true` a pesar de que `foo` y `baz` sean tipos diferentes. Detrás de escena, el operador de igualdad `==` intenta forzar que sus operandos sean del mismo tipo antes de determinar su igualdad. Esto contrasta con el operador de igualdad `===`.

El operador de igualdad `===` determina que dos variables son iguales si son del mismo tipo _y_ tienen el mismo valor. Con las mismas suposiciones que antes, esto significa que `foo === bar` aún se evaluará como `true`, pero `foo === baz` ahora se evaluará como `false`. `baz === qux` aún se evaluará como `false`.

{% exercise %}
Use el operador `==` y `===`para comparar los valores de `str1` y `str2`.

{% initial %}
let str1 = "hola";
let str2 = "HOLA";
let bool1 = true;
let bool2 = 1;
// comparar usando ==
let stringResult1 =
let boolResult1 =
// comparar usando ===
let stringResult2 =
let boolResult2 =
{% solution %}
let str1 = "hola";
let str2 = "HOLA";
let bool1 = true;
let bool2 = 1;
// comparar usando ==
let stringResult1 = str1 == str2 // falso (false)
let boolResult1 =  bool1 == bool2 // verdadero (true)

// comparar usando ===
let stringResult2 = str1 === str2 // falso (false)
let boolResult2 = bool1 === bool2 // falso (false)

{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true &&  boolResult2 === false );

{% context %}
{% endexercise %}
