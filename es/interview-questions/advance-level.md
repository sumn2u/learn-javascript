---
layout: editorial
title: Preguntas avanzadas de entrevista sobre JavaScript
description: Profundiza en complejas preguntas de entrevistas de nivel avanzado sobre JavaScript para evaluar la profundidad del conocimiento y la experiencia de los candidatos potenciales.
---
<!-- markdownlint-disable-file MD025 -->
# Preguntas avanzadas de entrevista sobre JavaScript

## 1. Cierres y alcance

### 1.1. ¿Qué es un cierre en JavaScript? Proporcione un ejemplo en el que el uso de cierres pueda resultar beneficioso

**Respuesta:**

Un cierre en JavaScript es una función que tiene acceso a las variables de su alcance circundante, incluso después de que la función externa haya terminado de ejecutarse. Este mecanismo permite que las funciones mantengan el estado entre ejecuciones.

**Ejemplo:**
Un uso común de los cierres es crear funciones de factoría o variables privadas. Por ejemplo, si desea generar valores de ID únicos para elementos:

### 1.2. ¿Cómo se relacionan los cierres con el alcance y la vida útil de las variables?

**Respuesta:**

Los cierres permiten que una función acceda a todas las variables, así como a las funciones, que están en su alcance léxico, incluso después de que se haya completado la función externa. Esto da como resultado que las variables se conserven en la memoria, lo que permite efectivamente que las variables tengan una vida útil prolongada en comparación con las variables locales estándar que normalmente se recolectarían como basura después de que se haya ejecutado su función principal.

## 2. Herencia prototípica

### 2.1. Explicar la diferencia entre herencia clásica y herencia prototípica

**Respuesta:**

La herencia clásica es un concepto que se encuentra con mayor frecuencia en los lenguajes de programación orientados a objetos tradicionales como Java o C++, donde una clase puede heredar propiedades y métodos de una clase principal. La herencia prototípica, por otro lado, es exclusiva de JavaScript. En JavaScript, cada objeto puede tener otro objeto como prototipo y puede heredar propiedades de su prototipo.

La principal diferencia es que la herencia clásica se basa en clases, mientras que la herencia prototípica se basa en objetos. Aunque ES6 introdujo la palabra clave "clase" en JavaScript, es azúcar sintáctica sobre la herencia prototípica existente.

### 2.2. ¿Cómo se pueden ampliar los objetos JavaScript integrados?

**Respuesta:**

Para ampliar los objetos JavaScript integrados, puede agregar métodos o propiedades a su prototipo. Sin embargo, generalmente no se recomienda modificar los prototipos nativos porque puede provocar problemas de compatibilidad y comportamientos inesperados, especialmente si hay cambios futuros en la especificación de JavaScript.

## 3. JavaScript asíncrono

### 3.1. Explique el bucle de eventos en JavaScript. ¿Cómo se relaciona con la pila de llamadas?

**Respuesta:**

El bucle de eventos es un concepto fundamental en JavaScript y es responsable de manejar la ejecución de múltiples fragmentos de su programa a lo largo del tiempo, cada uno de los cuales se ejecuta hasta su finalización. Funciona como un bucle continuo que comprueba si hay tareas esperando en la cola de mensajes. Si hay tareas y el hilo principal (pila de llamadas) está vacío, retira la tarea de la cola y la ejecuta.

La pila de llamadas, por otro lado, es una estructura de datos que rastrea la ejecución de funciones en un programa. Cuando se llama a una función, se agrega a la pila de llamadas y cuando termina de ejecutarse, se elimina de la pila.

En el contexto de JavaScript, el bucle de eventos verifica continuamente la pila de llamadas para determinar si está vacía. Si está vacío y hay funciones de devolución de llamada esperando en la cola de mensajes, esas devoluciones de llamada se ejecutan.

### 3.2. ¿Qué son las promesas y en qué se diferencian de las retrollamadas en la gestión de operaciones asincrónicas?

**Respuesta:**

Las promesas son objetos que representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Una `Promise` se encuentra en uno de estos estados:

- `pending`: estado inicial, ni cumplido ni rechazado.
- `fulfilled`: significa que la operación prometida se ha completado y la promesa tiene un valor resultante.
- `rejected`: significa que la operación fracasó y la promesa nunca se cumplirá.

Las retrollamadas son funciones que se pasan a otra función como argumentos y se ejecutan una vez completada la función externa. Si bien tanto las promesas como las retrollamadas pueden manejar operaciones asincrónicas, las promesas proporcionan una forma más sólida de manejarlas.

Las diferencias clave incluyen:

- Las promesas permiten un mejor encadenamiento de operaciones asincrónicas.
- Las retrollamadas pueden llevar a un infierno de retrollamadas o a una pirámide fatal, donde el código se vuelve difícil de leer y administrar debido a las retrollamadas anidadas.
- Las promesas tienen un mecanismo de manejo de errores estandarizado usando `.then` y `.catch`.

### 3.3. Describa async/await. ¿Cómo simplifica el trabajo con código asíncrono?

**Respuesta:**

`async/await` es una característica sintáctica introducida en ES8 (o ES2017) para trabajar con código asíncrono de una manera más sincrónica. Permite escribir operaciones asíncronas de forma lineal sin devoluciones de llamadas, lo que genera un código más limpio y legible.

La palabra clave `async` se utiliza para declarar una función asincróna, lo que garantiza que la función devuelva una promesa. La palabra clave `await` se usa dentro de una función `async` para pausar la ejecución hasta que la promesa se resuelva o rechace.

El uso de `async/await` simplifica el manejo de errores, ya que puede usar bloques try/catch tradicionales en lugar de `.catch` con promesas.

## 4. Métodos de matriz avanzados

### 4.1. Describa las funciones de `map`, `reduce` y `filter`. Proporcione un ejemplo de un caso de uso práctico para cada

**Respuesta:**

- `map`: Transforma cada elemento de una matriz en función de una función, devolviendo una nueva matriz de la misma longitud.
  **Ejemplo:** Duplicar cada número en una matriz.

```javascript
  const numeros = [1, 2, 3, 4];
  const doblados = numeros.map((num) => num * 2); // [2, 4, 6, 8] 
```

### 4.2. ¿Cuáles son algunas limitaciones o peligros al utilizar funciones de flecha?

**Respuesta:**
Las funciones de flecha presentan una forma concisa de escribir funciones en JavaScript, pero vienen con ciertas limitaciones:

1. **Sin enlace `this`**: las funciones de flecha no vinculan su propio `this`. Heredan el enlace `this` del ámbito circundante. Esto puede resultar problemático, especialmente cuando se usan como métodos en objetos o como controladores de eventos.

2. **Sin objeto `arguments`**: Las funciones de flecha no tienen su propio objeto `arguments`. Si necesita acceder al objeto arguments, deberá utilizar expresiones de funciones tradicionales.

3. **No se pueden usar como constructores**: Las funciones de flecha no se pueden usar como constructores con la palabra clave `new` porque no tienen el método interno `[[Construct]]`.

4. **Sin propiedad `prototype`**: a diferencia de las funciones normales, las funciones de flecha no tienen una propiedad `prototype`.

5. **Menos legible para lógica compleja**: para operaciones simples, la sintaxis concisa es beneficiosa. Sin embargo, para funciones que contienen lógica compleja, la sintaxis concisa puede hacer que el código sea menos legible.

## 5. Palabra clave "this"

### 5.1. Explique el comportamiento de la palabra clave `this` en diferentes contextos, como en un método, una función independiente, una función de flecha y un controlador de eventos

**Respuesta:** La palabra `this` puede variar según el contexto en el que se utilice. Algunos de ellos se exploran a continuación:

- En un método: Se refiere al objeto sobre el que se invoca el método.

```javascript
const persona = {
  nombre: "Alicia",
  diHola: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

persona.diHola(); // Salida: Hola, mi nombre es Alicia
```

- En función independiente: aquí, el comportamiento de `this` depende de cómo se llama a la función. Si la función se llama en el ámbito global, `this` se refiere al objeto global.

```javascript
function saludo() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
}

const nombre = "Alicia";
saludo(); // Salida: Hola, mi nombre es Alicia
```

- En una función flecha: las funciones flecha capturan este valor de su alcance léxico circundante, a diferencia de las funciones normales. Esto significa que carecen de su propio contexto.

```javascript
const persona = {
  nombre: "Roberto",
  diHola: () => {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

persona.diHola(); // Salida: Hola, mi nombre es undefined
```

### 5.2. ¿Cómo puede asegurarse de que una función utilice un objeto específico como su valor `this`?

**Respuesta:**
Podemos asegurarnos de que una función use un objeto específico como su valor `this` en JavaScript usando métodos como bind(), funciones flecha, call(), apply() o definiendo métodos dentro de las clases de ES6. Estas técnicas nos permiten controlar el contexto en el que opera la función y garantizar que acceda a las propiedades y métodos del objeto deseado.

## 6. Gestión de la memoria

### 6.1. ¿Qué son las pérdidas de memoria en JavaScript? Describa las posibles causas y cómo prevenirlas

**Respuesta:**
Las pérdidas de memoria en JavaScript ocurren cuando el programa retiene involuntariamente referencias a objetos que ya no son necesarios, lo que genera un mayor uso de memoria y posibles problemas con la aplicación. Las causas comunes incluyen variables no utilizadas, cierres, detectores de eventos y referencias circulares. Para evitar pérdidas de memoria, los desarrolladores deben eliminar referencias explícitamente, administrar detectores de eventos, evitar dependencias circulares, usar referencias débiles, emplear herramientas de creación de perfiles de memoria, realizar pruebas y revisiones de código, y utilizar linters y herramientas de análisis estático para detectar problemas potenciales en las primeras etapas del proceso de desarrollo.

### 6.2. Describa la diferencia entre copia superficial y copia profunda. ¿Cómo puedes lograr cada una en JavaScript?

**Respuesta:**
La copia superficial y la copia profunda son métodos para duplicar objetos o matrices en JavaScript.

La copia superficial duplica la estructura y los valores de nivel superior de un objeto o matriz, pero conserva las referencias a objetos o matrices anidados. Los cambios en estructuras anidadas afectan tanto al original como a la copia.
La copia profunda crea un nuevo objeto o matriz y duplica recursivamente todos los niveles de estructuras anidadas, asegurando que los cambios en la copia no afecten al original.
Para lograr una copia superficial, podemos usar métodos como el operador de extensión o slice(). Para una copia profunda, se necesitan lógica personalizada o bibliotecas como cloneDeep de lodash debido a la falta de métodos de copia profunda integrados en JavaScript.

## 7. ES6 y más allá

### 7.1. Explique el propósito y el uso de la asignación de desestructuración de JavaScript

**Respuesta:**
La asignación de desestructuración de JavaScript es una característica que simplifica la extracción de valores de objetos y matrices, haciendo que el código sea más conciso y legible. Nos permite asignar valores a variables en función de los nombres de propiedad (desestructuración de objetos) o posición (desestructuración de matrices). La desestructuración también se puede utilizar en los parámetros de funciones y admite la sintaxis restante para capturar los elementos restantes. Es una herramienta poderosa para trabajar con estructuras de datos complejas.

### 7.2. Describa la importancia de los módulos JavaScript y la sintaxis `import/export` de ES6

**Respuesta:**
Los módulos de JavaScript, junto con la sintaxis de import/export de ES6, son cruciales para el desarrollo de JavaScript moderno. Permiten a los desarrolladores organizar, reutilizar y mantener el código de forma eficaz. Los módulos encapsulan código relacionado, promueven la reutilización del código, administran dependencias y mejoran la escalabilidad del código. La sintaxis de import/export de ES6 proporciona una forma estandarizada de declarar y usar módulos, lo que facilita estructurar y compartir código de una manera limpia y fácil de mantener. Estas características se han vuelto esenciales para crear aplicaciones JavaScript modulares y fáciles de mantener, tanto en el lado del cliente como del servidor.

### 7.3. ¿Cómo mejoran los literales de plantilla la manipulación de cadenas en ES6? Proporcione ejemplos

**Respuesta:**
Los literales de plantilla en ES6 mejoran la manipulación de cadenas al permitir a los desarrolladores crear cadenas con expresiones incrustadas y contenido multilínea de una manera más legible y flexible. Admiten interpolación de variables, cadenas multilínea, evaluación de expresiones, llamadas a funciones e incluso casos de uso avanzados como plantillas etiquetadas. Esta característica mejora la legibilidad y el mantenimiento del código cuando se trabaja con cadenas complejas que involucran contenido o expresiones dinámicas.

## 8. Programación funcional

### 8.1. ¿En qué se diferencia la programación funcional de la programación imperativa en JavaScript?

**Respuesta:**

La programación funcional y la programación imperativa son dos paradigmas de programación predominantes.

- **Programación imperativa**: este paradigma consiste en decirle a la computadora "cómo" hacer algo y se basa en declaraciones que cambian el estado de un programa. En esencia, se centra en describir los pasos para lograr una tarea particular. Esto suele implicar bucles, condicionales y declaraciones que modifican variables.

  ````javascript
  let total = 0;
  for(let i = 0; i < array.length; i++) {
      total += array[i];
  }```
  ````

- **Programación funcional (FP)**

La FP se trata más de indicarle a la computadora "qué" lograr, en lugar de detallar "cómo" lograrlo. Trata las tareas computacionales como evaluaciones de funciones matemáticas y evita datos mutables y alteraciones de estado. En el contexto de JavaScript y la mayoría de los lenguajes FP:

1 **Funciones puras**: Estas son funciones donde el valor de salida está determinado únicamente por sus valores de entrada, sin efectos secundarios observables. Esto significa que, para la misma entrada, la función siempre producirá la misma salida.

2 **Datos inmutables**: una vez que se crean los datos, nunca pueden cambiar. En lugar de alterar los datos existentes, las prácticas de programación funcional implican la creación de nuevas estructuras de datos.

3 **Funciones de Primera Clase y de Orden Superior**: En FP, las funciones son ciudadanos de primera clase. Esto significa que pueden asignarse a variables, pasarse a otras funciones como parámetros y devolverse como valores. Una función de orden superior es una función que recibe otra función como argumento, devuelve una función o ambas cosas.

### 8.2. Explique las funciones de primera clase y su importancia en la programación funcional

**Respuesta:**

En JavaScript y muchos otros lenguajes de programación, las funciones se consideran "ciudadanos de primera clase". Esto significa que las funciones pueden ser:

- Asignado a variables.
- Pasado como argumentos a otras funciones.
- Devueltos de otras funciones como valores.
- Almacenado en estructuras de datos como matrices y objetos.

Aquí hay un ejemplo simple que demuestra estas propiedades:

````javascript
// Asignando una función a una variable
const greet = function(name) {
return "Hello, " + name;
}

// Pasando una función como un argumento a otra función
function runFunction(fn, value) {
return fn(value);
}
runFunction(greet, 'John'); // Devuelve: "Hello, John"

// Devolviendo una función desde otra función
function multiplier(factor) {
  return function(number) {
    return number \* factor;
  }
}

const double = multiplier(2);
double(5); // Devuelve: 10

// Almacenando una función en una matriz
const functions = [greet, double];
````

---
