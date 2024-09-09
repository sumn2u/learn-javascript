---
chapter: 3
pageNumber: 20
description: Los operadores son símbolos o palabras clave que se utilizan para realizar operaciones con datos, como variables, valores o expresiones. Son una parte esencial del lenguaje y permiten a los desarrolladores realizar operaciones aritméticas, de comparación, lógicas, de asignación y de otro tipo.
---

# Operadores básicos

En JavaScript, un operador es un símbolo o palabra clave con el que el usuario realiza operaciones sobre operandos (valores y variables). Por ejemplo:

```javascript
2 + 3; //5
```

Aquí `+` es un operador que realiza la suma, y `2` y `3` son los operandos.

## Tipos de operadores

Hay varios operadores soportados por JavaScript. Son los siguientes:

- [Operadores aritméticos](#arithmetic-operators)
- [Operadores de asignación](#assignment-operators)
- [Operadores de comparación](#comparison-operators)
- [Operadores lógicos](#logical-operators)
- [Operadores ternarios](#ternary-operators)
- [Operadores bit a bit](#bitwise-operators)
- [Operador `typeof`](#typeof-operators)

### Operadores aritméticos {#arithmetic-operators}

Los operadores aritméticos se usan para realizar operaciones matemáticas con los valores. Estos incluyen

- [Operador Suma (`+`)](#addition-operator)
- [Operador Resta (`-`)](#subtraction-operator)
- [Operador Multiplicación (`*`)](#multiplication-operator)
- [Operador División (`/`)](#division-operator)
- [Operador Resto (`%`)](#remainder-operator)

#### Operador Suma (`+`) {#addition-operator}

El operador de suma suma dos números. Por ejemplo:

```javascript
console.log(1 + 2); // 3
console.log(1 + -2); // -1
```

#### Operador Resta (`-`) {#subtraction-operator}

El operador de resta resta un número de otro. Por ejemplo:

```javascript
console.log(3 - 2); // 1
console.log(3 - -2); // 5
```

#### Operador Multiplicación (`*`) {#multiplication-operator}

El operador de multiplicación multiplica dos números. Por ejemplo:

```javascript
console.log(2 * 3); // 6
console.log(2 * -3); // -6
```

#### Operador División (`/`) {#division-operator}

El operador de división divide un número por otro. Por ejemplo:

```javascript
console.log(6 / 2); // 3
console.log(6 / -2); // -3
```

#### Operador Resto (`%`) {#remainder-operator}

El operador de resto devuelve el resto de una operación de división. Por ejemplo:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

El intérprete de JavaScript funciona de izquierda a derecha. Se pueden utilizar paréntesis, como en matemáticas, para separar y agrupar expresiones.: `c = (a / b) + d`

{% hint style="warning" %}
JavaScript utiliza el operador `+` tanto para la suma como para la concatenación. Los números se suman mientras que las cadenas se concatenan.
{% endhint %}

El término `NaN` es una palabra reservada que indica que un número no es un número legal, esto surge cuando realizamos operaciones aritméticas con una cadena no numérica que dará como resultado `NaN` (No es un número).

```javascript
let x = 100 / "10";
```

El método `parseInt` analiza un valor como una cadena y devuelve el primer entero.

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40
parseInt("He was 40"); //NaN
```

En JavaScript, si calculamos un número más alla del número más grande posible se devuelve `Infinity`.

```javascript
let x = 2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```

{% exercise %}
Use los operadores matemáticos +, -, \*, /, y % para realizar las siguientes operaciones sobre `num1` y `num2`.

{% initial %}
let num1 = 10;
let num2 = 5;

// Sume num1 y num2.
let addResult =
// Reste num2 de num1.
let subtractResult =
// Multiplique num1 por num2.
let multiplyResult =
// Divida num1 por num2.
let divideResult =
// Encuentre el resto cuando num1 se divide por num2.
let reminderResult =

{% solution %}
let num1 = 10;
let num2 = 5;

// Sume num1 y num2.
let addResult = (num1 + num2);
// Reste num2 de num1.
let subtractResult = (num1 - num2);
// Multiplique num1 por num2.
let multiplyResult = (num1 \* num2);
// Divida num1 por num2.
let divideResult = (num1 / num2);
// Encuentre el resto cuando num1 se divide por num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0 );

{% context %}
{% endexercise %}

### Operadores de asignación {#assignment-operators}

Los operadores de asignación se utilizan para asignar valores a variables o evaluar el valor asignado. Es posible encadenar el operador de asignación para asignar un único valor a varios valores. Incluyen el operador de asignación (`=`) y operadores de asignación compuestos como `+=`, `-=`, `*=` y `/=`.

#### `=` (Operador de asignación)

Este operador se usa para asignar el valor del lado derecho a la variable en el lado izquierdo.
Por ejemplo:

```javascript
let x = 10; //Asigna el valor 10 a la variable x.
```

#### Operadores de asignación compuestos

Estos operadores combinan la operación aritmética con la operación de asignación. Son atajos para realizar una operación y luego asignar el resultado nuevamente a la variable.
Por ejemplo:

##### `+=` (Asignación de suma)

Agrega el valor del lado derecho a la variable y asigna el resultado nuevamente a la variable.

##### `-=` (Asignación de resta)

Resta el valor del lado derecho de la variable y asigna el resultado nuevamente a la variable.

##### `*=-` (Asignación de multiplicación)

Multiplica la variable por el valor del lado derecho y asigna el resultado nuevamente a la variable.

##### `/=` (Asignación de división)

Divide la variable por el valor del lado derecho y asigna el resultado nuevamente a la variable.

##### `%=` (Módulo/Asignación de resto)

Calcula el resto cuando la variable se divide por el valor del lado derecho y asigna el resultado nuevamente a la variable.

```javascript
let a = 10;
a += 5; // Equivalente a a = a + 5; (a se convierte en 15)
a -= 3; // Equivalente a a = a - 3; (a se convierte en  12)
a *= 2; // Equivalente a a = a * 2; (a se convierte en 24)
a /= 4; // Equivalente a a = a / 4; (a se convierte en 6)
a %= 5; // Equivalente a a = a % 5; (a se convierte en 1)
```

### Operadores de comparación {#comparison-operators}

Los operadores de comparación se utilizan para comparar dos valores o expresiones y devolver un resultado `boolean`, que puede ser `true` o `false`. Estos operadores se utilizan habitualmente en declaraciones condicionales para tomar decisiones o evaluar condiciones.

#### Igual a (`==`)

Este operador verifica si los valores de los lados izquierdo y derecho son iguales. Si son iguales, devuelve `true`; de lo contrario, devuelve `false`. No tiene en cuenta los tipos de datos.

```javascript
5 == 5; // verdadero (muestra 'true' en la consola)
"5" == 5; // verdadero (conversión implícita del tipo, muestra 'true' en la consola)
```

#### No igual a (`!=`)

Este operador comprueba si los valores de los lados izquierdo y derecho no son iguales. Si no son iguales, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
5 != 3; // verdadero (muestra 'true' en la consola)
"5" != 5; // falso (conversión implícita del tipo, muestra 'false' en la consola)
```

#### Estrictamente igual a (`===`)

Este operador verifica si los valores de los lados izquierdo y derecho son iguales y tienen el mismo tipo de datos. Si tanto el valor como el tipo de datos coinciden, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
5 === 5; // verdadero (muestra 'true' en la consola)
"5" === 5; // falso (muestra 'false' en la consola, tipos de datos diferentes)
```

#### Estrictamente no igual a (`!==`)

Este operador verifica si los valores de los lados izquierdo y derecho no son iguales o tienen tipos de datos diferentes. Si no son iguales o tienen tipos de datos diferentes, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
5 !== "5"; // verdadero (muestra 'true' en la consola, tipos de datos diferentes)
5 !== 5; // falso (muestra 'false' en la consola)
```

#### Mayor que (`>`)

Este operador comprueba si el valor de la izquierda es mayor que el valor de la derecha. Si el valor de la izquierda es mayor, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
8 > 5; // verdadero (muestra 'true' en la consola)
3 > 10; // falso (muestra 'false' en la consola)
```

#### Menor que (`<`)

Este operador comprueba si el valor de la izquierda es menor que el valor de la derecha. Si el valor de la izquierda es menor, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
3 < 5; // verdadero (muestra 'true' en la consola)
8 < 2; // falso (muestra 'false' en la consola)
```

#### Mayor o igual que (`>=`)

Este operador comprueba si el valor de la izquierda es mayor o igual que el valor de la derecha. Si el valor de la izquierda es mayor o igual, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
8 >= 5; // verdadero (muestra 'true' en la consola)
3 >= 8; // falso (muestra 'false' en la consola)
```

#### Menor o igual que (`>=`)

Este operador comprueba si el valor de la izquierda es menor o igual que el valor de la derecha. Si el valor de la izquierda es menor o igual, devuelve `true`; de lo contrario, devuelve `false`.

```javascript
3 <= 5; // verdadero (muestra 'true' en la consola)
8 <= 2; // falso (muestra 'false' en la consola)
```

### Operadores lógicos {#logical-operators}

Los operadores lógicos se utilizan para realizar operaciones lógicas con valores o expresiones booleanos. Estos operadores permiten combinar o manipular valores booleanos para tomar decisiones o evaluar condiciones complejas.

#### AND lógico (`&&`)

El operador lógico AND devuelve `true` si ambos operandos son `true`. Si al menos uno de los operandos es `falso`, devuelve `falso`.

```javascript
true && true; // devuelve 'true'
true && false; // devuelve 'false'
false && true; // devuelve 'false'
false && false; // devuelve 'false'
```

#### OR lógico (`||`)

El operador lógico OR devuelve `true` si al menos uno de los operandos es `true`. Devuelve `falso` solo si ambos operandos son `false`.

```javascript
true || true; // devuelve 'true'
true || false; // devuelve 'true'
false || true; // devuelve 'true'
false || false; // devuelve 'false'
```

#### NOT lógico (`!`)

El operador lógico NOT niega el valor de un operando. Devuelve `true` si el operando es `false` y devuelve `false` si el operando es `true`.

```javascript
!true; // devuelve 'false'
!false; // devuelve 'true'
```

### Operador ternario {#ternary-operators}

El operador ternario tiene tres operandos. Es el operador simplificado del if/else.

Es la forma abreviada de la condición `if-else`.

**Sintaxis:**

```js
Y =  ? A : B
// Si la condifición es true entonces Y = A; de lo contrario Y = B
```

```javascript
let esPar = 8 % 2 === 0 ? "Par" : "Impar";
console.log(esPar); // "Par"
```

### Operadores bit a bit {#bitwise-operators}

Los operadores bit a bit se utilizan para manipular bits individuales de números binarios. Realizan operaciones a nivel de bit, lo que resulta especialmente útil en situaciones en las que es necesario controlar o analizar datos de bajo nivel.

#### AND bit a bit (`&`)

Este operador compara cada bit de dos números y devuelve 1 por cada bit que sea 1 en ambos números. Todos los demás bits se establecen en 0.

```javascript
1010 & 1100; // 1000
```

#### OR bit a bit (`|`)

Este operador compara cada bit de dos números y devuelve 1 por cada bit que sea 1 en al menos uno de los números.

```javascript
1010 | 1100; // 1110
```

#### XOR bit a bit (`^`)

Este operador compara cada bit de dos números y devuelve 1 por cada bit que sea 1 en un número pero no en ambos.

```javascript
1010 ^ 1100; // 0110
```

#### NOT bit a bit (`-`)

Este operador invierte (cambia) todos los bits de un número. Cambia cada 0 por 1 y cada 1 por 0.

```javascript
~1010; // 0101
```

#### Desplazamiento a la izquierda (`<<`)

Este operador desplaza los bits de un número hacia la izquierda una cantidad específica de posiciones, rellenando las posiciones desplazadas con 0.

```javascript
1010 << 2; // 101000 (desplazado 2 posiciones hacia la izquierda)
```

#### Desplazamiento a la derecha (`>>`)

Este operador desplaza los bits de un número hacia la derecha una cantidad específica de posiciones. Las posiciones desplazadas hacia adentro se completan según el bit más a la izquierda (bit de signo).

```javascript
1010 >> 2; // 0010 (desplazado 2 posiciones hacia la derecha)
```

### Operador `typeof` {#typeof-operators}

Devuelve el tipo de operando. Los tipos posibles que existen en javascript son undefined, Object, boolean, number, string, symbol, and function.

```javascript
let value1 = 42;
let value2 = "¡Hola mundo!";
let value3 = true;
let value4 = null;

console.log(typeof value1); // devuelve "number"
console.log(typeof value2); // devuelve "string"
console.log(typeof value3); // devuelve "boolean"
console.log(typeof value4); // devuelve "object" (Nota: `typeof null` devuelve "object" debido a razones históricas)
```
