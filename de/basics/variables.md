---
capítulo: 2
número de página: 11
descripción: Las variables se utilizan para almacenar y retener datos. Pueden contener varios tipos de valores, como números, cadenas, booleanos, objetos, matrices, funciones y más.
---

# Variables

El primer paso para realmente entender la programación es mirar hacia atrás en el álgebra. Si lo recuerdas de la escuela, el álgebra comienza escribiendo términos como los siguientes.

```
3 + 5 = 8
```
Comienzas a realizar cálculos cuando introduces una incógnita, por ejemplo, x a continuación:

```
3 + x = 8
```

Moviendo esas partes, puedes determinar x:

```
x = 8 - 3
-> x = 5
```

Cuando introduces más de uno, haces tus términos más flexibles: estás usando variables:

```
x + y = 8
```

Puedes cambiar los valores de x e y y la fórmula aún puede ser verdadera:

```
x = 4
y = 4
```

or

```
x = 3
y = 5
```

Lo mismo es cierto para los lenguajes de programación. En la programación, las variables son contenedores de valores que cambian. Las variables pueden contener todo tipo de valores y también los resultados de cálculos. Las variables tienen un `nombre` y un `valor` separados por un signo igual (=). Sin embargo, es importante tener en cuenta que diferentes lenguajes de programación tienen sus propias limitaciones y restricciones sobre lo que se puede usar como nombres de variables. Esto se debe a que ciertas palabras pueden estar reservadas para funciones u operaciones específicas dentro del lenguaje.

Veamos cómo funciona en JavaScript. El siguiente código define dos variables, calcula el resultado de sumar las dos y define este resultado como el valor de una tercera variable.

```javascript
let x = 5;
let y = 6;
let resultado = x + y;
```

Existen ciertas pautas que deben seguirse al nombrar variables. Son:

- Los nombres de variables deben comenzar con una letra, un guion bajo (_) o un signo de dólar ($).
- Después del primer carácter, podemos usar letras, números, guiones bajos o signos de dólar.
- JavaScript distingue entre mayúsculas y minúsculas (sensible a mayúsculas y minúsculas), por lo que myVariable, MyVariable y MYVARIABLE son todas variables diferentes.
- Para que su código sea fácil de leer y mantener, se recomienda utilizar nombres de variables descriptivos que reflejen con precisión su propósito.

{% exercise %}
Define una variable x igual a 20.

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}

**Versión ES6**

[ECMAScript 2015 or ES2015](https://262.ecma-international.org/6.0/) , también conocido como ES6, es una actualización importante del lenguaje de programación JavaScript desde 2009. En ES6, tenemos tres formas de declarar variables.

```javascript
var x = 5;
const y = 'Prueba';
let z = true;
```

Los tipos de declaración dependen del ámbito. A diferencia de la palabra clave var, que define una variable global o local para una función completa, independientemente del ámbito del bloque, let le permite declarar variables que están limitadas en alcance al bloque, declaración o expresión en la que se utilizan. Por ejemplo.

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

Las variables `const` son inmutables, lo que significa que no se les permite ser reasignadas.

```javascript
const x = "¡Hola!";
x = "adiós"; // esto generará un error
```
