---
chapter: 3
pageNumber: 19
description: Los operadores son símbolos o palabras clave que se utilizan para realizar operaciones con datos, como variables, valores o expresiones. Son una parte esencial del lenguaje y permiten a los desarrolladores realizar operaciones aritméticas, de comparación, lógicas, de asignación y de otro tipo.
---
# Operadores básicos

Las operaciones matemáticas con números se pueden realizar utilizando algunos operadores básicos como:

* **Operador de suma (`+`)**: El operador de suma suma dos números. Por ejemplo:

```javascript
console.log(1 + 2); // 3
console.log(1 + (-2)); // -1
```

* **Operador de resta (`-`)**: El operador de resta resta un número de otro. Por ejemplo:

```javascript
console.log(3 - 2); // 1
console.log(3 - (-2)); // 5
```

* **Operador de multiplicación (`*`)**: El operador de multiplicación multiplica dos números. Por ejemplo:

```javascript
console.log(2 * 3); // 6
console.log(2 * (-3)); // -6
```

* **Operador de división (`/`)**: El operador de división divide un número por otro. Por ejemplo:

```javascript
console.log(6 / 2); // 3
console.log(6 / (-2)); // -3
```

* **Operador módulo (`%`)**: El operador módulo devuelve el resto de una operación de división. Por ejemplo:

```javascript
console.log(10 % 3); // 1
console.log(11 % 3); // 2
console.log(12 % 3); // 0
```

El intérprete de JavaScript funciona de izquierda a derecha. Se pueden usar paréntesis como en matemáticas para separar y agrupar expresiones:

`c = (a / b) + d`

{% hint style="warning" %}
JavaScript utiliza el operador `+` tanto para la suma como para la concatenación. Los números se suman mientras que las cadenas se concatenan.
{% endhint %}

El término `NaN` es una palabra reservada que indica que un número no es un número legal, esto surge cuando realizamos aritmética con una cadena no numérica la cual dará como resultado `NaN` (Not a Number, no es un número, en español).

```javascript
let x = 100 / "10";
```

El método `parseInt` analiza un valor como una cadena y devuelve el primer número entero.

```javascript
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); //40 
parseInt("He was 40"); //NaN
```

En JavaScript, si calculamos un número fuera del mayor número posible, devuelve `Infinity` (infinito en español).

```javascript
let x =  2 / 0; // Infinity
let y = -2 / 0; // -Infinity
```

{% exercise %}
Utilice los operadores matemáticos +, -, *, / y % para realizar las siguientes operaciones en `num1` y `num2`.

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
// Encuentre el resto al dividir num1 por num2.
let reminderResult =

{% solution %}
let num1 = 10;
let num2 = 5;

// Sume num1 y num2.
let addResult = (num1 + num2);
// Reste num2 de num1.
let subtractResult = (num1 - num2);
// Multiplique num1 por num2.
let multiplyResult = (num1 * num2);
// Divida num1 por num2.
let divideResult = (num1 / num2);
// Encuentre el resto al dividir num1 por num2.
let reminderResult = (num1 % num2);

{% validation %}
assert(addResult === 15 && subtractResult === 5 && multiplyResult === 50 && divideResult === 2 && reminderResult === 0  );

{% context %}
{% endexercise %}
