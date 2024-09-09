---
layout: editorial
title: Preguntas de entrevista sobre JavaScript de nivel básico
chapter: 22
pageNumber: 195
description:
---
<!-- markdownlint-disable-file MD025 -->
# Preguntas de entrevista sobre JavaScript de nivel básico

## 1. Historia y definición de variables

### 1.1. ¿Qué es JavaScript?

**Respuesta:**
JavaScript es un lenguaje de programación interpretado de alto nivel que se utiliza comúnmente en el desarrollo web para agregar interactividad y comportamiento dinámico a los sitios web.

### 1.2. ¿Quién creo/desarrolló JavaScript?

**Respuesta:**
JavaScript fue creado por _Brendan Eich_ mientras trabajaba en **Netscape Communications Corporation**. Desarrolló el lenguaje en sólo diez días en mayo de 1995. JavaScript se llamaba originalmente "_Mocha_", pero luego pasó a llamarse "_LiveScript_" y finalmente "_JavaScript_" como parte de una colaboración de marketing con **Sun Microsystems** (ahora **Oracle Corporation**), que tenía un lenguaje de programación llamado **Java** que estaba ganando popularidad en ese momento. A pesar de la similitud de nombres, _JavaScript_ y _Java_ son lenguajes de programación completamente diferentes con propósitos y características distintos.

### 1.3. ¿Cómo declara una variable en JavaScript?

**Respuesta:**
Puede declarar una variable usando `var`, `let`, o `const`:

- `var` (ámbito de función)
- `let` (alcance de bloque)
- `const` (con alcance de bloque, para constantes)

### 1.4. ¿Cuál es la diferencia entre `let`, `var`, y `const`?

**Respuesta:**

- `var` tiene ámbito de función, mientra que `let` y `const` tienen alcance de bloque.
- `let` permite la reasignación de la variable, mientras que `const` se usa para constantes.
- Las variables declaradas con `var` se elevan (hoisted, en inglés), mientras que `let` y `const` no se elevan.

### 1.5. ¿Es JavaScript un lenguaje de tipado dinámico o de tipado estático?

**Respuesta:**
JavaScript es un lenguaje de tipado dinámico. En un lenguaje de tipado dinámico, el tipo de una variable se verifica durante el tiempo de ejecución, a diferencia de un lenguaje de tipado estático, donde el tipo de una variable se verifica durante el tiempo de compilación.

| Característica | Tipado estático | Tipado dinámico |
|---|---|---|
| Las variables tienen tipos | Sí | No |
| Los valores tienen tipos | Sí | Sí |
| Las variables pueden cambiar de tipo | No | Sí |
| Las variables pueden cambiar de tipo drásticamente | No | Sí |

Dado que JavaScript es un lenguaje de _tipo debilmente acoplado (dinámico)_, las variables en JS no están asociadas con ningún tipo. Una variable puede contener el valor de cualquier tipo de datos.

Por ejemplo, una variable a la que se le asigna un tipo de número se puede convertir a un tipo de cadena:

```javascript
var a = 23;
var a = "¡Hola mundo!";
```

### 1.6. ¿Cuáles son los tipos de errores en JavaScript?

**Respuesta:**
Hay siete tipos de error en JavaScript.

1 . **Error de sintaxis** - El error ocurre cuando usa una sintaxis predefinida incorrectamente

```js
const func = () =>
console.log(hello)
}
```

2 . **Error de referencia** - En un caso donde no se puede encontrar una referencia de variable o no se ha declarado, se produce un error de referencia.

```js
console.log(x);
```

3 . **Error de tipo** - Se produce un error cuando se utiliza un valor fuera del ámbito de su tipo de datos.

```js
let num = 15;
console.log(num.split(""));
```

4 . **Error de evaluación** - Los motores JavaScript actuales y las especificaciones de EcmaScript no generan este error. Sin embargo, sigue estando disponible por compatibilidad con versiones anteriores. El error se invoca cuando se utiliza la función de versiones anteriores `eval()`, como se muestra en el siguiente bloque de código

```js
try{
  throw new EvalError("'Throws an error'")
}catch(error){
  console.log(error.name, error.message)
}
```

5 . **Error de rango** - Hay un error cuando se requiere un rango de valores esperados.

```js
const checkRange = (num)=>{
  if (num < 30) throw new RangeError("Wrong number");
  return true
}

checkRange(20);
```

6 . **Error URI** - Cuando se utilizan caracteres incorrectos en una función URI, el error se denomina error de URI.

```js
console.log(decodeURI("https://www.educative.io/shoteditor"))
console.log(decodeURI("%sdfk"));
```

7 . **Error interno** - En el motor de JavaScript, este error se produce con mayor frecuencia cuando hay demasiados datos y la pila supera su tamaño crítico. Cuando hay demasiados patrones de recursión, casos de conmutación, etc., el motor de JavaScript se ve sobrecargado.

```js
switch(condition) {
 case 1:
 ...
 break
 case 2:
 ...
 break
 case 3:
 ...
 break
 case 4:
 ...
 break
 case 5:
 ...
 break
 case 6:
 ...
 break
 case 7:
 ...
 break
 ... hasta 500 casos
 }
```

### 1.7. Mencione algunas ventajas de JavaScript

**Respuesta:**
Hay muchas ventajas de JavaScript. Algunos de ellos son:

- Javascript se ejecuta tanto en el lado del cliente como en el del servidor. Existe una variedad de marcos frontend que puede estudiar y utilizar. Sin embargo, si desea utilizar JavaScript en el backend, deberá aprender NodeJS. Actualmente es el único marco de JavaScript que se puede utilizar en el backend.
- Javascript es un lenguaje sencillo de aprender.
- Las páginas web ahora tienen más funciones gracias a Javascript.
- Para el usuario final, Javascript es bastante rápido.

### 1.8. ¿Qué es la palabra clave `this` en JavaScript?

**Respuesta:** La palabra clave `this` en JavaScript se utiliza para llamar al objeto actual como constructor para asignar valores a las propiedades del objeto.

## 2. Funciones

### 2.1. ¿Cómo crea una función en JavaScript?

**Respuesta:**

Puede crear una función usando la palabra clave `function` o funciones de flecha (`=>`):

**Ejemplo**:

```javascript
function miFuncion() {
  // Cuerpo de la función
}

const miFuncionDeFlecha = () => {
  // Cuerpo de la función
};
```

### 2.2. ¿Qué son las retrollamadas?

**Respuesta:**
Una retrollamada es una función que se ejecutará después de que se ejecute otra función. En JavaScript, las funciones se tratan como ciudadanos de primera clase, pueden usarse como argumento de otra función, pueden ser devueltas por otra función y pueden usarse como propiedad de un objeto.

Las funciones que se utilizan como argumento para otra función se denominan funciones de retrollamada. **Ejemplo**:

```javascript
function dividirPorLaMitad(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplicarPor2(sum) {
  console.log(sum * 2);
}

function operacionEnSuma(num1, num2, operacion) {
  var sum = num1 + num2;
  operacion(sum);
}

operacionEnSuma(3, 3, dividirPorLaMitad); // Muestra 3

operacionEnSuma(5, 5, multiplicarPor2); // Muestra 20
```

- En el código anterior, estamos realizando operaciones matemáticas con la suma de dos números. La función `operacionEnSuma` toma 3 argumentos, el primer número, el segundo número y la operación que se realizará en su suma (retrollamada).
- Ambas funciones `dividirPorLaMitad` y `multiplicarPor2` se utilizan como funciones de retrollamada en el código anterior.
- Estas funciones de retrollamada se ejecutarán solo después de que se ejecute la función `operacionEnSuma`.
- Por lo tanto, una retrollamada es una función que se ejecutará después de que se ejecute otra función.

### 2.3. Explique el alcance y la cadena de alcance en JavaScript

**Respuesta:**
El alcance en JS determina la accesibilidad de variables y funciones en varias partes del código.

En términos generales, el alcance nos permitirá saber en una parte determinada del código cuáles son las variables y funciones a las que podemos o no acceder.

Hay tres tipos de ámbitos en JS:

- Alcance global
- Alcance Local o de Función
- Alcance del bloque

**Alcance global**: Las variables o funciones declaradas en el espacio de nombres global tienen alcance global, lo que significa que se puede acceder a todas las variables y funciones que tienen alcance global desde cualquier lugar dentro del código.

```javascript
var variableGlobal = "Hola mundo";

function enviaMensaje() {
  return variableGlobal; // puede acceder a variableGlobal ya que está escrita en el espacio global
}
function enviaMensaje2() {
  return enviaMensaje(); // Puede acceder a la función enviaMensaje ya que está escrita en el espacio global
}
enviaMensaje2(); // Devuelve “Hola mundo
```

**Alcance de función**: Cualquier variable o función declarada dentro de una función tiene un `alcance local/de función`, lo que significa que se puede acceder a todas las variables y funciones declaradas dentro de una función desde dentro de la función y no desde fuera de ella.

```javascript
function funcionImpresionante() {
  var a = 2;

  var multiplicaPor2 = function () {
    console.log(a * 2); // Puede acceder a la variable "a" ya que a y multiplicaPor2 están escritos dentro de la misma función
  };
}
console.log(a); // Genera un error de referencia ya que a está escrito en el ámbito local y no se puede acceder a él desde fuera

multiplicaPor2(); // Lanza un error de referencia ya que multiplicarBy2 está escrito en el ámbito local
```

**Alcance de bloque**: El `alcance de bloque` está relacionado con las variables declaradas usando let y const. Las variables declaradas con var no tienen alcance de bloque. El alcance del bloque nos dice que cualquier variable declarada dentro de un bloque `{ }`, solo se puede acceder a ella dentro de ese bloque y no se puede acceder fuera de él.

```javascript
{
  let x = 45;
}

console.log(x); // Da un error de referencia ya que no se puede acceder a x fuera del bloque

for (let i = 0; i < 2; i++) {
  // hace algo
}

console.log(i); // Da un error de referencia ya que no se puede acceder a i fuera del bloque de bucle for
```

**Cadena de alcance**: el motor JavaScript también usa el alcance para buscar variables. Entendamos eso usando un ejemplo:

```javascript
var y = 24;

function favFunction() {
  var x = 667;
  var anotherFavFunction = function () {
    console.log(x); // No encuentra x dentro de anotherFavFunction(), por lo que busca la variable dentro de favFunction() y genera 667
  };

  var yetAnotherFavFunction = function () {
    console.log(y); // Todavía no encuentra y dentro de AnotherFavFunction(), por lo que busca la variable dentro de favFunction() y no la encuentra, por lo que busca la variable en el alcance global, la encuentra y genera 24
  };

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();
```

Como puede ver en el código anterior, si el motor JavaScript no encuentra la variable en el ámbito local, intenta buscar la variable en el ámbito externo. Si la variable no existe en el ámbito externo, intenta encontrar la variable en el ámbito global.

Si la variable tampoco se encuentra en el espacio global, se genera un error de referencia.

### 2.4. Explique las funciones de orden superior en JavaScript

**Respuesta:**

Las funciones que operan sobre otras funciones, ya sea tomándolas como argumentos o devolviéndolas, se denominan _funciones de orden superior_.

Las funciones de orden superior son el resultado de que las funciones sean **ciudadanos de primera clase** en JavaScript.

Ejemplos de funciones de orden superior:

```javascript
function ordenSuperior(fn) {
  fn();
}

ordenSuperior(function () {
  console.log("Hola mundo");
});
function ordenSuperior2() {
  return function () {
    return "Haz algo";
  };
}
var x = ordenSuperior2();
x(); // Devuelve "Haz algo"
```

### 2.5. ¿Qué quiere decir con funciones de autoinvocación en JavaScript?

**Respuesta:**

Sin ser solicitada, se invoca (inicia) automáticamente una expresión de autoinvocación. Si una expresión de función va seguida de (), se ejecutará automáticamente. Una declaración de función no puede invocarse por sí sola.

Normalmente, declaramos una función y la llamamos; sin embargo, se pueden usar funciones anónimas para ejecutar una función automáticamente cuando se describe y no se volverá a llamar. Y no existe un nombre para este tipo de funciones.

### 2.6. ¿Cuál es la diferencia entre los métodos `exec()` y `test()` en JavaScript?

**Respuesta:**

- `test()` y `exec()` son métodos de expresión RegExp utilizados en JavaScript.
- Usaremos `exec()` para buscar una cadena para un patrón específico, y si lo encuentra, devolverá el patrón directamente; de lo contrario, devolverá un resultado 'empty'.
- Usaremos un `test()` para encontrar una cadena para un patrón específico. Devolverá el valor booleano `true` al encontrar el texto dado; de lo contrario, devolverá `false`.

### 2.7.  ¿Cuál es la diferencia entre declaración de función y expresión de función?

**Respuesta:** La diferencia entre declaración de función y expresión de función es la siguiente:

**Declaración de función**:

1. Declarado como una declaración separada dentro del código principal de JavaScript.
2. Se puede llamar antes de que se defina la función.
3. Ofrece una mejor legibilidad del código y una mejor organización del código.

Ejemplo:

```js
function abc() {
    return 5;
}
```

**Expresión de función**:

1. Creado dentro de una expresión o alguna otra construcción.
2. Se crea cuando el punto de ejecución lo alcanza; se puede utilizar sólo después de eso.
3. Se utiliza cuando es necesario realizar una declaración condicional de una función.

Ejemplo:

```js
var a = function abc() {
    return 5;
}
```

### 2.8. ¿Qué son las funciones de flecha en JavaScript?

**Respuesta**: Las funciones de flecha son una forma breve y concisa de escribir funciones en JavaScript. La sintaxis general de una función de flecha es la siguiente:

```js
const helloWorld = () => {
  console.log("hello world!");
};
```

### 2.9. Pasado por valor y pasado por referencia

**Respuesta**:

- Los valores pasados por valor ​​son tipos de datos primitivos.

    Consideremos el siguiente ejemplo:

    Aquí, `a=432` es un tipo de datos primitivo, es decir, un tipo de número al que el operador le asigna un valor. Cuando se ejecuta el código `var b=a`, el valor de `var a` devuelve una nueva dirección para `var b` asignando un nuevo espacio en la memoria, de modo que `var b` se opere en una nueva ubicación.

    Ejemplo:

```js
var a = 432;
var b = a;
```

- Los valores pasado por referencia son tipos de datos no primitivos.

    Consideremos el siguiente ejemplo:

    La referencia del primer objeto variable, es decir, `var obj`, se pasa a través de la ubicación de otra variable, es decir, `var obj2` con la ayuda de un operador asignado.

    Ejemplo:

```js
var obj = { name: "Raj", surname: "Sharma" };
var obj2 = obj;
```

## 3. Tipos de datos y operadores

### 3.1. ¿Cuáles son los diferentes tipos de datos presentes en JavaScript?

**Respuesta:**

1. **Tipos primitivos**

   - `String` - Representa una serie de caracteres y está escrito entre comillas. Una cadena se puede representar mediante comillas simples o dobles.

     **Ejemplo** :

     ```javascript
     var str = "Vivek Singh Bisht"; //usando comillas dobles
     var str2 = "John Doe"; //usando comillas simples
     ```

   - `Number` - Representa un número y se puede escribir con o sin decimales.

     **Ejemplo** :

     ```javascript
     var x = 3; //sin decimal
     var y = 3.6; //con decimal (Nota del traductor: Al contrario que en español, en inglés el separador de decimal es el carácter punto (.))
     ```

   - `BigInt` - Este tipo de datos se utiliza para almacenar números que están por encima de la limitación del tipo de datos Number. Puede almacenar números enteros grandes y se representa agregando "n" a un literal entero.

     **Ejemplo** :

     ```javascript
     var bigInteger = 234567890123456789012345678901234567890n;
     ```

   - `Boolean` - Representa una entidad lógica y sólo puede tener dos valores: true (verdadero) o false (falso). Los booleanos se utilizan generalmente para pruebas condicionales.

     **Ejemplo** :

     ```javascript
     var a = 2;
     var b = 3;
     var c = 2;
     (a == b)(
       // devuelve false (falso)
       a == c
     ); //devuelve true (verdadero)
     ```

   - `Undefined` - Cuando una variable se declara pero no se asigna, tiene el valor indefinido y su tipo también es indefinido.

     **Ejemplo** :

     ```javascript
     var x; // El valor de x es undefined (no está definido)
     var y = undefined; // También podemos establecer el valor de una variable como undefined.
     ```

   - `Null` - Representa un valor inexistente o no válido.

     **Ejemplo** :

     ```javascript
     var z = null;
     ```

   - `Symbol` - Es un nuevo tipo de datos introducido en la versión ES6 de JavaScript. Se utiliza para almacenar un valor anónimo y único.

     **Ejemplo:**

     ```javascript
     var symbol1 = Symbol('symbol');
     // typeof de los tipos primitivos :
     typeof "John Doe" // Devuelve "string"
     typeof 3.14 // Devuelve "number"
     typeof true // Devuelve "boolean"
     typeof 234567890123456789012345678901234567890n // Devuelve bigint
     typeof undefined // Devuelve "undefined"
     typeof null // Devuelve "object" (una especie de error en JavaScript)
     typeof Symbol('symbol') // Devuelve Symbol
     ```

    Los tipos de datos primitivos solo pueden almacenar un único valor. Para almacenar valores múltiples y complejos, se utilizan tipos de datos no primitivos.

2. **Tipos no primitivos**

   - `Object` - Se utiliza para almacenar colecciones de datos.

     **Ejemplo**:

     ```javascript
     // Colección de datos en pares clave-valor
     var obj1 = {
       x: 43,
       y: "¡Hola mundo!",
       z: function () {
         return this.x;
       },
     };
     ```

   - `Array`

     **Ejemplo:**

     ```javascript
     // Colección de datos como una lista ordenada.

     var array1 = [5, "Hola", true, 4.1];
     ```

> **Nota: Es importante recordar que cualquier tipo de datos que no sea un tipo de datos primitivo es de tipo `Object` en JavaScript.**

### 3.2 Diferencia entre los operadores  `==` y `===`

**Respuesta:**
Ambos son operadores de comparación. La diferencia entre ambos operadores es que `==` se usa para comparar valores, mientras que `===` se usa para comparar valores y tipos.

**Ejemplo**:

```javascript
var x = 2;
var y = "2";
let r = (x == y); 
console.log(r); // Devuelve verdadero ya que el valor de x e y es el mismo

let s = (x === y); 
console.log(s); // Devuelve falso ya que el tipo de x es "número" y el tipo de y es "cadena"
```

### 3.3. ¿Qué es la propiedad NaN en JavaScript?

**Respuesta:**
La propiedad `NaN` representa el valor “**No es un número**”. Indica un valor que no es un número legal.

`typeof` de `NaN` devolverá un Number.

Para verificar si un valor es `NaN`, usamos la función `isNaN()`,

> Nota: la función `isNaN()` convierte el valor dado a un tipo de Number y luego equivale a NaN.
**Ejemplo:**

```javascript
isNaN("Hola"); // Devuelve true
isNaN(345); // Devuelve false
isNaN("1"); // Devuelve false, ya que  '1' se convierte al tipo Number que resulta en 0 (un número)
isNaN(true); // Devuelve false, ya que true convertido al tipo Number resulta en 1 (un número)
isNaN(false); // Devuelve false
isNaN(undefined); // Devuelve true
```

### 3.4. ¿Qué método se utiliza para recuperar un carácter de un índice determinado?

**Respuesta:**
La función `charAt()` del objeto String de JavaScript encuentra un elemento de carácter en el índice proporcionado. El número de índice comienza en `0` y continúa hasta `n-1`. Aquí `n` es la longitud de la cadena. El valor del índice debe ser positivo, mayor o igual que la longitud de la cadena.

## 4. Algunos conceptos importantes

### 4.1. ¿Qué es la elevación (hoisting, en inglés) en JavaScript?

**Respuesta:**
Hoisting es un mecanismo de JavaScript donde las variables y declaraciones de funciones se mueven a la parte superior de su alcance antes de la ejecución del código. Inevitablemente, esto significa que no importa dónde se declaren funciones y variables, se mueven a la parte superior de su alcance independientemente de si su alcance es global o local.

**Ejemplo 1:** Elevación de variable
  
```javascript
hoistedVariable = 3;
console.log(hoistedVariable); // genera 3 incluso cuando la variable se declara después de inicializarse 
var hoistedVariable;
```

**Ejemplo 2:** Elevación de función

```javascript
hoistedFunction();  // Muestra "¡Hola mundo!" incluso cuando la función se declara después de llamarla

function hoistedFunction(){ 
  console.log("¡Hola mundo!");
} 
```

**Ejemplo 3:** Elevación de una expresión de función

```javascript
// La elevación también se realiza a nivel local.
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething(); // Muestra 33 ya que la variable local "x" se eleva dentro del alcance local
```

>Nota: las inicializaciones de variables no se elevan, solo se elevan las declaraciones de variables:

```javascript
var x;
console.log(x); // Muestra "undefined" ya que la inicialización de "x" no se eleva
x = 23;
```

>Nota: para evitar el izado, puede ejecutar JavaScript en modo estricto usando `use strict`; encima del código:

```javascript
"use strict";
x = 23; // Da error ya que 'x' no está declarada
var x;
```

### 4.2. ¿Por qué usamos la palabra "debugger" en JavaScript?

**Respuesta:**

La palabra clave `debugger` se utiliza para crear puntos de interrupción en el código. Cuando el navegador encuentra la palabra clave depurador en el código, deja de ejecutar el código y abre la herramienta de depuración del navegador.

### 4.3. ¿Qué es el currying en JavaScript?

**Respuesta:**

Currying es una técnica avanzada para transformar una función de argumentos n en n funciones de uno o menos argumentos.

**Ejemplo de una función curried:**

```javascript
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 
```

Por ejemplo, si tenemos una función `f(a, b)`, entonces la función después del currying se transformará en `f(a)(b)`.

Al utilizar la técnica del currying, no cambiamos la funcionalidad de una función, solo cambiamos la forma en que se invoca.

Veamos el currying en acción:

```javascript
function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Devuelve 12

curriedMultiply(4)(3); // También devuelve 12
```

Como se puede ver en el código anterior, hemos transformado `function multiply(a,b)` en una función `curriedMultiply`, que toma un parámetro a la vez.

### 4.4. ¿Cuáles son algunas de las ventajas de utilizar JavaScript externo?

**Respuesta:**

JavaScript externo es el código JavaScript (script) escrito en un archivo separado con la extensión.js, y luego vinculamos ese archivo dentro del elemento &lt;head&gt; o &lt;body&gt; del archivo HTML donde se colocará el código.

Algunas ventajas del JavaScript externo son:

- Permite a los diseñadores y desarrolladores web colaborar en archivos HTML y JavaScript.
- Podemos reutilizar el código.
- La legibilidad del código es simple en JavaScript externo.

### 4.5. ¿Qué es un cierre en JavaScript?

**Respuesta:** Un cierre es una función que tiene acceso a su ámbito de función externo incluso después de que la función externa haya regresado. Esto significa que un cierre puede recordar y acceder a las variables y argumentos de su función externa incluso después de que la función haya terminado.

En resumen: un cierre es una función que tiene acceso a las variables de su ámbito de función externo (que lo encierra), incluso después de que la función externa haya terminado de ejecutarse.

### 4.6. ¿Qué es el DOM en JavaScript?

**Respuesta:** El Modelo de Objetos del Documento (DOM) es una interfaz de programación para documentos HTML y XML. Representa la página para que los programas puedan cambiar la estructura, el estilo y el contenido del documento. El DOM representa el documento como nodos y objetos. De esa manera, los lenguajes de programación pueden conectarse a la página.

### 4.7. ¿Qué es la delegación de eventos?

**Respuesta:** La delegación de eventos es una técnica para escuchar eventos en la que se delega un elemento principal como receptor de todos los eventos que ocurren dentro de él. Los eventos son manejados por la función de devolución de llamada del elemento principal.

### 4.8. ¿Cómo puedes realizar una solicitud AJAX en JavaScript?

**Respuesta:** [AJAX](../miscellaneous/api-ajax.md) significa Asynchronous JavaScript and XML (JavaScript y XML asincrónicos). Es un conjunto de técnicas de desarrollo web que utilizan muchas tecnologías web del lado del cliente para crear aplicaciones web asincrónicas. Con AJAX, las aplicaciones web pueden enviar y recuperar datos de un servidor de forma asincrónica (en segundo plano) sin interferir con la visualización y el comportamiento de la página existente.

Puede realizar solicitudes AJAX mediante el objeto XMLHttpRequest o mediante la API fetch. A continuación, se muestra un ejemplo de uso de fetch:
  
```js
  fetch('https://example.com/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### 4.9. ¿Qué es una promesa en JavaScript?

**Respuesta:** Una promesa es un objeto que puede producir un único valor en algún momento en el futuro: ya sea un valor resuelto o un motivo por el cual no se ha resuelto (por ejemplo, se produjo un error de red). Una promesa puede estar en uno de los tres estados posibles: `fulfilled` (cumplida), `rejected` (rechazada) o `pending` (pendiente). Los usuarios de Promise pueden adjuntar devoluciones de llamadas para gestionar el valor cumplido o el motivo del rechazo.

### 4.10. ¿Por qué necesitas una promesa en JavaScript?

**Respuesta:** Las promesas se utilizan para gestionar operaciones asincrónicas. Ofrecen un enfoque alternativo para las retrollamadas, ya que reducen el problema de las retrollamadas y escriben un código más limpio.

### 4.11. ¿Explica la igualdad en JavaScript?

**Respuesta:** JavaScript proporciona dos tipos de operadores de igualdad: igualdad estricta `(===)` e igualdad flexible `(==)`

- Igualdad estricta `(===)`: este operador compara dos valores sin realizar ninguna conversión de tipo. Si los valores tienen tipos diferentes, se consideran desiguales. Si los valores tienen el mismo tipo, no son números y tienen el mismo valor, se consideran iguales. En el caso de los números, se consideran iguales si ambos no son NaN y tienen el mismo valor, o si uno es `+0` y el otro es `-0`.

- Igualdad flexible `(==)`: este operador realiza una conversión de tipo al comparar los operandos. Si los operandos tienen el mismo tipo, se comparan de la misma manera que el operador de igualdad estricta. Si los operandos tienen tipos diferentes, JavaScript intenta convertirlos a un tipo común y luego compararlos. Las reglas para la conversión de tipo a veces pueden generar resultados inesperados, por lo que generalmente se recomienda utilizar el operador de igualdad estricta para evitar posibles problemas.

## 5. Objetos

### 5.1. ¿Cuáles son las posibles formas de crear objetos en JavaScript?

**Respuesta:** Hay muchas formas de crear objetos en javascript como se muestra a continuación

Constructor Object:

i. La forma más sencilla de crear un objeto vacío es mediante el constructor Object. Actualmente, este enfoque no se recomienda.

``` js
var object = new Object();
```

Object() es una función constructora incorporada, por lo que no se requiere la palabra clave "new". Lo anterior se puede escribir como:

``` js
var object = Object();
```

ii. Método create de Object:

El método create de Object crea un nuevo objeto pasando el objeto prototipo como parámetro

```js
var object = Object.create(null);
```

iii. Sintaxis de objeto literal:

La sintaxis de objeto literal (o inicializador de objeto) es un conjunto de pares de nombre-valor separados por comas y envueltos entre llaves.

```js
var object = {
     name: "Sudheer",
     age: 34
};
```

Los valores de propiedad de un objeto literal pueden ser de cualquier tipo de datos, incluidas matrices, funciones y objetos anidados.

Nota: Esta es la forma más sencilla de crear un objeto.

iv. Constructor de funciones:

Cree cualquier función y aplique el nuevo operador para crear instancias de objeto,

```js
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Sudheer");
```

v. Constructor de funciones con prototipo:

Esto es similar al constructor de funciones pero utiliza prototipos para sus propiedades y métodos.

```js
function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
```

Esto es equivalente a una instancia creada con un método de creación de objeto con un prototipo de función y luego llamar a esa función con una instancia y parámetros como argumentos.

```js
function func() {}

new func(x, y, z);
```

(O)

```js

// Cree una nueva instancia utilizando el prototipo de función.
var newInstance = Object.create(func.prototype)

// Llama a la función
var result = func.call(newInstance, x, y, z),

// Si el resultado es un objeto no nulo, úselo; de lo contrario, simplemente utilice la nueva instancia.
console.log(result && typeof result === 'object' ? result : newInstance);
```

vi. Sintaxis de la clase ES6:

ES6 introduce la función de clase para crear los objetos

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");
```

## 6.Misceláneas

### 6.1. ¿Qué es un modo estricto en JavaScript?

**Respuesta:** El modo estricto es una nueva característica de ECMAScript 5 que permite colocar un programa o una función en un contexto operativo "estricto". De esta manera, evita que se realicen determinadas acciones y genera más excepciones. La expresión literal "use strict" indica al navegador que utilice el código javascript en modo estricto.

### 6.2. ¿Qué es un valor nulo en JavaScript?

**Respuesta:** El valor null representa la ausencia intencional de cualquier valor de objeto. Es uno de los valores primitivos de JavaScript. El tipo de valor null es object. Puedes vaciar la variable estableciendo el valor en null.

```js
var user = null;
console.log(typeof user); //object
```

### 6.3. ¿Qué es `eval` en JavaScript?

**Respuesta:** La función `eval()` evalúa el código JavaScript representado como una cadena. La cadena puede ser una expresión, una variable, una declaración o una secuencia de declaraciones de JavaScript.

```js
console.log(eval("1 + 2")); //  3
```

### 6.4. ¿JavaScript es un lenguaje compilado o interpretado?

**Respuesta:** JavaScript es un lenguaje interpretado, no compilado. Un intérprete en el navegador lee el código JavaScript, interpreta cada línea y la ejecuta. En la actualidad, los navegadores modernos utilizan una tecnología conocida como compilación Just-In-Time (JIT), que compila JavaScript en código de bytes ejecutable justo cuando está a punto de ejecutarse.

### 6.5. Diferencia entre los métodos `exec()` y `test()`

**Respuesta** Las diferencias entre los métodos `exec()` y `test()` son las siguientes:

`exec()`:

1. Es un método de expresión en JavaScript que se utiliza para buscar una cadena con un patrón específico.
2. Una vez encontrado, el patrón se devolverá directamente, de lo contrario, devuelve un resultado “vacío”.

`test()`:

1. Es un método de expresión en JavaScript que también se utiliza para buscar una cadena con un patrón o texto específico.
2. Una vez encontrado, el patrón devolverá el valor booleano `true`, de lo contrario devolverá `false`.

### 6.6. ¿JavaScript es un lenguaje que distingue entre mayúsculas y minúsculas?

**Respuesta:** Sí, JavaScript es un lenguaje que distingue entre mayúsculas y minúsculas. Las palabras clave del lenguaje, las variables, los nombres de funciones y objetos y cualquier otro identificador deben escribirse siempre con mayúsculas y minúsculas uniformes.

## 7.JSON

### 7.1. ¿Qué es JSON?

**Respuesta:** JSON (JavaScript Object Notation) es un formato liviano que se utiliza para intercambiar datos. Se basa en un subconjunto del lenguaje JavaScript en la forma en que se crean los objetos en JavaScript.

### 7.2. ¿Cuáles son las reglas de sintaxis de JSON?

**Respuesta:**  A continuación se muestra la lista de reglas de sintaxis de JSON

- Los datos están en pares nombre/valor
- Los datos están separados por comas.
- Las llaves contienen objetos
- Los corchetes contienen matrices

### 7.3.¿Cuál es el propósito de JSON stringify?

**Respuesta:** Al enviar datos a un servidor web, estos deben estar en formato de cadena. Para lograrlo, puedes convertir un objeto JSON en una cadena mediante el método `stringify()`.

```js
var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"
```

### 7.4. ¿Cómo se analiza una cadena JSON?

**Respuesta:** Al recibir datos de un servidor web, estos siempre están en formato de cadena. Sin embargo, puedes convertir este valor de cadena en un objeto de JavaScript mediante el método `parse()`.

```js
var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}
```

### 7.5. ¿Por qué necesitas JSON?

**Respuesta:** Al intercambiar datos entre un navegador y un servidor, los datos solo pueden ser texto. Como JSON es solo texto, se puede enviar fácilmente hacia y desde un servidor y cualquier lenguaje de programación puede usarlo como formato de datos.

### 7.6. ¿Cómo se definen las matrices JSON?

**Respuesta:**  Las matrices JSON se escriben entre corchetes y contienen objetos de JavaScript. Por ejemplo, la matriz JSON de usuarios sería la siguiente:

```js
"users":[
  {"firstName":"John", "lastName":"Abrahm"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Shane", "lastName":"Warn"}
]
```

### 7.6. En JSON, ¿cuál es el propósito de los corchetes y cómo se utilizan?

**Respuesta:** En JSON, los corchetes `[ ]` se utilizan para encapsular y definir matrices dentro de las estructuras de datos JSON. Las matrices JSON pueden contener una colección de valores, que pueden ser de varios tipos de datos, incluidos objetos, cadenas, números y otras matrices JSON.
