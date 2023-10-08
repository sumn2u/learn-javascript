---
chapter: 3
pageNumber: 21
description: Existen varios operadores avanzados que brindan una potente funcionalidad y nos permiten realizar diversas operaciones más allá de las operaciones aritméticas y lógicas básicas. Estos operadores avanzados pueden resultar muy útiles para manipular datos, realizar operaciones bit a bit, trabajar con objetos y más.
---
# Operadores avanzados

Cuando los operadores se juntan sin paréntesis, el orden en el que se aplican está determinado por la _precedencia_ de los operadores. La multiplicación `(*)` y la división `(/)` tienen mayor prioridad que la suma `(+)` y la resta `(-)`.

```javascript
// Primero se hace la multiplicación y luego sigue la suma.
let x = 100 + 50 * 3; // 250
// con paréntesis las operaciones dentro del paréntesis se calculan primero
let y = (100 + 50) * 3; // 450
// las operaciones con las mismas precedencias se calculan de izquierda a derecha
let z = 100 / 50 * 3; // 6
```

Se pueden utilizar varios operadores matemáticos avanzados mientras se escribe el programa. Aquí hay una lista de algunos de los principales operadores matemáticos avanzados:

* **Operador Módulo (`%`)**: El operador de módulo devuelve el resto de una operación de división. Por ejemplo:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

* **Operador de exponenciación ( \*\* )**: El operador de exponenciación eleva un número a la potencia de otro número. Es un operador más nuevo y no es compatible con todos los navegadores, por lo que es posible que deba utilizar la función `Math.pow` en su lugar. Por ejemplo:

```javascript
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
console.log(4 ** 3); // 64
```

* **Operador de incremento (`++`)**: El operador de incremento incrementa un número en uno. Se puede utilizar como prefijo (antes del operando) o como sufijo (después del operando). Por ejemplo:

```javascript
let x = 1;
x++; // x es ahora 2
++x; // x es ahora 3
```

* **Operador de decremento (`--`)**: El operador de decremento disminuye un número en uno. Se puede utilizar como prefijo (antes del operando) o como sufijo (después del operando). Por ejemplo:

```javascript
let y = 3;
y--; // y es ahora 2
--y; // y es ahora 1
```

* **Objeto Math**: El objeto `Math` es un objeto integrado en JavaScript que proporciona funciones y constantes matemáticas. Puede utilizar los métodos del objeto "Math" para realizar operaciones matemáticas avanzadas, como encontrar la raíz cuadrada de un número, calcular el seno de un número o generar un número aleatorio. Por ejemplo:

```javascript
console.log(Math.sqrt(9)); // 3
console.log(Math.sin(0)); // 0
console.log(Math.random()); // un número aleatorio entre 0 y 1
```

Estos son sólo algunos ejemplos de las funciones y operadores matemáticos avanzados disponibles en JavaScript. Hay muchos más que puede usar para realizar operaciones matemáticas avanzadas mientras escribe un programa.

{% exercise %}
Utilice los siguientes operadores avanzados para realizar operaciones en `num1` y `num2`.

{% initial %}
let num1 = 10;
let num2 = 5;

// Use el operador ++ para incrementar el valor de num1.
const result1 =
// Use el operador -- para decrementar el valor de num2.
const result2 =
// Use el operador += para agregar num2 a num1.
const result3 =
// Use el operador -= para substraer num2 de num1.
const result4 =

{% solution %}
let num1 = 10;
let num2 = 5;

// Use el operador ++ para incrementar el valor de num1.

num1++;
const result1 = num1; // 11
// Use el operador -- para decrementar el valor de num2.
num2--;
const result2 = num2; // 4
// Use el operador += para agregar num2 a num1.
num1 += num2;
const result3 = num1 // 15
// Use el operador -= para substraer num2 de num1.
num1 -= num2;
const result4 = num1 // 11

{% validation %}
assert(result1 === 11 && result2 === 4 && result3 === 15 && result4 === 11 );

{% context %}
{% endexercise %}

## Operador coalescente nulo '??'

El operador coalescente "nulo" devuelve el primer argumento si no es `null/undefined`, en caso contrario, el segundo. Está escrito como dos signos de interrogación `??`. El resultado de `x ?? y` es:

* Si `x` está definido, es `x`,
* Si `x` no está definida, es `y`.

{% hint style="info" %}
Es una adición reciente al lenguaje y es posible que necesite polyfills para admitir navegadores antiguos.
{% endhint %}
