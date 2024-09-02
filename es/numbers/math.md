---
chapter: 3
pageNumber: 19
description: El objeto Math permite realizar operaciones matemáticas en JavaScript. Es estático y no tiene constructor. Se pueden utilizar el método y las propiedades del objeto Math sin crear primero un objeto Math.
---
# Math

El objeto `Math` permite realizar operaciones matemáticas en JavaScript. Es estático y no tiene constructor. Se pueden utilizar el método y las propiedades del objeto Math sin crear primero un objeto Math. Para acceder a su propiedad se puede utilizar _Math.property._ Algunas de las propiedades matemáticas se describen a continuación:

```javascript
Math.E        // devuelve el número de Euler
Math.PI       // devuelve PI
Math.SQRT2    // devuelve la raíz cuadrada de 2
Math.SQRT1_2  // devuelve la raíz cuadrada de 1/2
Math.LN2      // devuelve el logaritmo natural de 2
Math.LN10     // devuelve el logaritmo natural de 10
Math.LOG2E    // devuelve el logaritmo en base 2 de E
Math.LOG10E   // devuelve el logaritmo en base 10 de E
```

Ejemplos de algunos de los métodos de Math son:

```javascript
Math.pow(8, 2); // 64 (8 elevado al cuadrado)
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin(90 * Math.PI / 180);  // 1 (el seno de 90 grados)
Math.cos(0 * Math.PI / 180); // 1 (el coseno de 0 grados)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

Para acceder a los metodos de Math, se pueden llamar a sus métodos directamente con argumentos cuando sea necesario.

| Método             | Descripción                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| `abs(x)`           | Devuelve el valor absoluto de `x`                                                      |
| `acos(x)`          | Devuelve el arcocoseno de `x`, en radianes                                             |
| `acosh(x)`         | Devuelve el arcocoseno hiperbólico de `x`                                              |
| `asin(x)`          | Devuelve el arcoseno de `x`, en radianes                                               |
| `asinh(x)`         | Devuelve el arcoseno hiperbólico de `x`                                                |
| `atan(x)`          | Devuelve el arcotangente de `x` como un valor numérico entre `-PI/2` y `PI/2` radianes |
| `atan2(y,x)`       | Devuelve el arcotangente del cociente de sus argumentos.                               |
| `atanh(x)`         | Devuelve el arcotangente hiperbólico de `x`                                            |
| `crbt(x)`          | Devuelve la raíz cubica de `x`                                                         |
| `ceil(x)`          | Devuelve redondeado hacia arriba al número entero más cercano de `x`                   |
| `cos(x)`           | Devuelve el coseno de `x`, en radianes                                                 |
| `cosh(x)`          | Devuelve el coseno hiperbólico de `x`                                                  |
| `exp(x)`           | Devuelve el valor exponencial de `x`                                                   |
| `floor(x)`         | Devuelve redondeando hacia abajo al entero más cercano de `x`                          |
| `log(x)`           | Devuelve el logaritmético natural de `x`                                               |
| `max(x,y,z,... n)` | Devuelve el número con el valor más alto.                                              |
| `min(x,y,z,... n)` | Devuelve el número con el valor más bajo.                                              |
| `pow(x,y)`         | Devuelve el valor de `x` elevado a `y`                                                 |
| `random()`         | Devuelve un número aleatorio entre 0 y 1                                               |
| `round(x)`         | Redondea el número a la `x` más cercana                                                |
| `sign(x)`          | Devuelve -1 si `x` es negativo, 0 si es "null" o 1 si es positivo                      |
| `sin(x)`           | Devuelve el seno de `x`, en radianes                                                   |
| `sinh(x)`          | Devuelve el seno hiperbólico de `x`                                                    |
| `sqrt(x)`          | Devuelve la raíz cuadrada de `x`                                                       |
| `tan(x)`           | Devuelve la tangente del ángulo `x`                                                    |
| `tanh(x)`          | Devuelve la tangente hiperbólica de `x`                                                |
| `trunc(x)`         | Devuelve la parte entera de un número (`x`)                                            |
