---
chapter: 2
pageNumber: 12
description: Las variables se utilizan para almacenar y retener datos. Puede contener varios tipos de valores, como números, cadenas, valores booleanos, objetos, matrices, funciones y más.
---

# Variables

El primer paso para comprender realmente la programación es mirar el álgebra. Si lo recuerdas de la escuela, el álgebra comienza escribiendo términos como los siguientes.

```JavaScript
3 + 5 = 8
```

Comienzas a realizar cálculos cuando introduces una incógnita, por ejemplo, x a continuación:

```JavaScript
3 + x = 8
```

Mover a quienes te rodean puede determinar x:

```JavaScript
x = 8 - 3
-> x = 5
```

Cuando introduces más de uno, haces que tus términos sean más flexibles, estás utilizando variables:

```JavaScript
x + y = 8
```

Puedes cambiar los valores de x e y y la fórmula aún puede ser verdadera:

```JavaScript
x = 4
y = 4
```

o

```JavaScript
x = 3
y = 5
```
Lo mismo ocurre con los lenguajes de programación. En programación, las variables son contenedores de valores que cambian. Las variables pueden contener todo tipo de valores y también los resultados de los cálculos. Las variables tienen un `nombre` y un `valor` separados por un signo igual (=). Sin embargo, es importante tener en cuenta que los diferentes lenguajes de programación tienen sus propias limitaciones y restricciones sobre lo que se puede utilizar como nombres de variables. Esto se debe a que ciertas palabras pueden reservarse para funciones u operaciones específicas dentro del idioma.

Veamos cómo funciona en Javascript. El siguiente código define dos variables, calcula el resultado de sumarlas y define este resultado como un valor de una tercera variable.

```javascript
let x = 5;
let y = 6;
let resultado = x + y;
```

Hay ciertas pautas que se deben seguir al nombrar variables. Estas son

- Los nombres de las variables deben comenzar con una letra, un guión bajo (_) o un signo de dólar ($).
- Después del primer carácter podemos utilizar letras, números, guiones bajos o signos de dólar.
- JavaScript distingue entre letras mayúsculas y minúsculas (distingue entre mayúsculas y minúsculas), por lo que miVariable, MiVariable y MIVARIABLE son variables separadas.
- Para que su código sea fácil de leer y mantener, se recomienda utilizar nombres de variables descriptivos que reflejen con precisión su propósito.

{% exercise %}
Defina una variable `x` que sea igual a 20.

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**Versión ES6**

[ECMAScript 2015 o ES2015](https://262.ecma-international.org/6.0/) también conocido como ES6 es una actualización importante del lenguaje de programación JavaScript desde 2009. En ES6 tenemos tres formas de declarar variables.&#x20;

```javascript
var x = 5;
const y = 'Prueba';
let z = true;
```
Los tipos de declaración dependen del alcance. A diferencia de la palabra clave `var`, que define una variable global o localmente para una función completa independientemente del alcance del bloque, `let` le permite declarar variables cuyo alcance está limitado al bloque, declaración o expresión en el que se utilizan. Por ejemplo.

```javascript
function varTest(){
    var x=1;
    if(true){
        var x=2; // la misma variable
        console.log(x); //2
    }
    console.log(x); //2
}

function letTest(){
    let x=1;
    if(true){
        let x=2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
```

Las variables `const` son inmutables, lo que significa que no se permite reasignarlas.

```javascript
const x = "¡hola!";
x = "adios"; // aquí ocurrirá un error
```
