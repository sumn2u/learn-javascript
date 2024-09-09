---
layout: editorial
title: Preguntas de entrevista de JavaScript de nivel intermedio
description: 
chapter: 22
pageNumber: 212
---
<!-- markdownlint-disable-file MD025 -->
# Preguntas de entrevista de JavaScript de nivel intermedio

## 1. Bucles

### 1.1. ¿Cuál es la definición de iteración en un bucle de JavaScript?

**Respuesta:** Una iteración en un bucle de JavaScript se refiere a cada ejecución individual del cuerpo del bucle, que normalmente corresponde a un ciclo del bucle.

### 1.2. ¿Cuáles son todas las estructuras de bucle en JavaScript?

**Respuesta:** En JavaScript se utilizan varias estructuras de bucle. Algunas de ellas son las siguientes:

**Bucle while**: un bucle [while](../loops/while.md) es una declaración de flujo de control que permite que el código se ejecute repetidamente en función de una condición booleana determinada. El bucle while puede considerarse como una declaración if que se repite.

**Bucle for**: un bucle [for](../loops/for.md) proporciona una forma concisa de escribir la estructura del bucle. A diferencia de un bucle while, la declaración for consume la inicialización, la condición y el incremento/decremento en una línea, proporcionando así una estructura de bucle más corta y fácil de depurar.

**Do While**: un bucle [do-while](../loops/dowhile.md) es similar a un bucle while con la única diferencia de que verifica la condición después de ejecutar las declaraciones y, por lo tanto, es un ejemplo de bucle de control de salida.

### 1.3. ¿Cómo funciona la declaración break en un bucle?

**Respuesta:** La instrucción break finaliza el bucle actual o la instrucción switch y transfiere el control del programa a la instrucción que sigue a la instrucción terminada. También se puede usar para saltar más allá de una declaración etiquetada cuando se usa dentro de esa declaración etiquetada.

### 1.4. ¿Cómo funciona la declaración continue en un bucle?

**Respuesta:** La declaración continue es una "versión más ligera" de la declaración break. No detiene todo el ciclo; en cambio, detiene la iteración actual y obliga al bucle a iniciar una nueva (si la condición lo permite).

## 2. Declaración switch

### 2.1. ¿Qué es una declaración switch en JavaScript?

**Respuesta:** Una declaración [switch](../conditional/switch.md) en JavaScript es una declaración de flujo de control que evalúa una expresión y ejecuta un bloque de código específico según el caso coincidente.

### 2.2. ¿Cuáles son las ventajas de emplear una declaración switch?

**Respuesta:** Una declaración switch puede reemplazar varias comprobaciones y es más descriptiva y más fácil de leer. Las declaraciones switch mejoran la legibilidad del código, proporcionan un mejor rendimiento, simplifican los condicionales complejos, mejoran la capacidad de mantenimiento y admiten una sintaxis más limpia.

### 2.3. ¿Es importante el orden de las declaraciones de caso en una declaración switch?

**Respuesta:** El orden de las declaraciones de caso es importante en una declaración switch, especialmente cuando se emplea un comportamiento fallido. Los casos se evalúan secuencialmente, por lo que un caso coincidente encontrado anteriormente evitará que se prueben casos posteriores, lo que afectará la ejecución y el rendimiento.

## 3. Cookies de JavaScript

### 3.1. ¿Qué son las cookies de JavaScript?

**Respuesta:** Las [cookies](../browser-object-model-bom/cookies.md) son pequeños archivos que se almacenan en el ordenador de un usuario. Se utilizan para almacenar una cantidad modesta de datos específicos de un cliente y un sitio web en particular y se puede acceder a ellos mediante el servidor web o desde la computadora del cliente. Cuando se inventaron las cookies, eran básicamente pequeños documentos que contenían información sobre usted y sus preferencias. Por ejemplo, cuando selecciona el idioma en el que desea ver su sitio web, el sitio web guardará la información en un documento llamado cookie en su computadora, y la próxima vez que visite el sitio web, podrá leer un cookie guardada anteriormente.

### 3.2.  ¿Cómo crear una cookie usando JavaScript?

**Respuesta:** Para crear una cookie usando JavaScript solo necesita asignar un valor de cadena al objeto document.cookie.

```javascript
document.cookie = "key1 = value1; key2 = value2; expires = date";
```

### 3.3. ¿Cómo leer una cookie usando JavaScript?

**Respuesta:**  El valor de `document.cookie` se utiliza para crear una cookie. Siempre que quieras acceder a la cookie puedes utilizar la cadena. La cadena `document.cookie` mantiene una lista de pares `nombre = valor` separados por punto y coma, donde nombre es el nombre de una cookie y el valor es su valor de cadena.

### 3.4. ¿Cómo eliminar una cookie usando JavaScript?

**Respuesta:** Eliminar una cookie es mucho más fácil que crear o leer una cookie, solo necesita configurar expires = “tiempo pasado” y asegurarse de que algo defina la ruta correcta de la cookie, a menos que pocas no le permitan eliminar la cookie.

## 4. Diálogos emergentes en JavaScript

### 4.1. ¿Cuáles son los tipos de diálogos emergentes disponibles en JavaScript?

**Respuesta:** Hay tres tipos de diálogos emergentes disponibles en JavaScript:
`Alert`, `Confirm`, `Prompt`.

### 4.2. ¿Cuál es la diferencia entre un diálogo de alerta y un diálogo de confirmación?

**Respuesta:** Un diálogo de alerta mostrará solo un botón, que es el botón Aceptar. Se utiliza para informar al usuario sobre el acuerdo que debe aceptar. Pero un diálogo de confirmación muestra dos botones Aceptar y Cancelar, donde el usuario puede decidir si está de acuerdo o no.

## 5. Funciones flecha

### 5.1. ¿Cuál es la definición de función de flecha?

**Respuesta:** Una función de flecha es una sintaxis concisa para definir funciones anónimas en JavaScript, utilizando la notación de flecha. Ofrece una sintaxis más corta, un alcance léxico de `this` y no se puede utilizar como constructor.

### 5.2. ¿En qué se diferencian las funciones de flecha de las expresiones de funciones?

**Respuesta:** Las funciones de flecha proporcionan una sintaxis más corta, no tienen sus propios argumentos this, super o new.target y no se pueden usar como constructores, a diferencia de las expresiones de función.

### 5.3. ¿Qué significa el enlace léxico `this` en las funciones de flecha?

**Respuesta:** El enlace léxico `this` en las funciones de flecha significa que no crean su propio contexto 'this'; en cambio, heredan 'this' de su entorno circundante, lo que reduce los problemas comunes relacionados con 'this'.

### 5.4. ¿Cuáles son las ventajas de utilizar funciones de flecha?

**Respuesta:** Las ventajas de utilizar funciones de flecha en JavaScript incluyen una sintaxis más corta, retorno implícito y enlace léxico 'this'.

### 5.5. ¿Cuáles son los casos de uso comunes de las funciones de flecha?

**Respuesta:** Las funciones de flecha se usan comúnmente para métodos de objetos, detectores de eventos, devoluciones de llamadas y otras funciones que requieren una sintaxis más corta y concisa.

## 6. Expresión regular

### 6.1. ¿Qué es una expresión regular?

**Respuesta:** Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda. Puede utilizar este patrón de búsqueda para buscar datos en un texto. Se pueden utilizar para realizar todo tipo de operaciones de búsqueda y reemplazo de texto. Veamos ahora el formato de sintaxis.

```js
 /patron/modificadores;
```

Por ejemplo, la expresión regular o el patrón de búsqueda con un nombre de usuario que no distinga entre mayúsculas y minúsculas sería,

```js
/John/i;
```

### 6.2. ¿Cuáles son los métodos de cadena disponibles en expresiones regulares?

**Respuesta:** Las expresiones regulares tienen dos métodos de cadena: search() y replace(). El método search() utiliza una expresión para buscar una coincidencia y devuelve la posición de la coincidencia.

```js
var msg = "Hello John";
var n = msg.search(/John/i); // 6
```

El método replace() se utiliza para devolver una cadena modificada donde se reemplaza el patrón.

```js
var msg = "Hello John";
var n = msg.replace(/John/i, "Buttler"); // Hello Buttler
```

### 6.3. ¿Qué son los modificadores en una expresión regular?

**Respuesta:** Los modificadores se pueden utilizar para realizar búsquedas globales y sin distinción entre mayúsculas y minúsculas. Enumeremos algunos de ellos:

| Modificador | Descripción                                                          |
| ----------- | -------------------------------------------------------------------- |
| `i`         | Realizar coincidencias sin distinción entre mayúsculas y minúsculas. |
| `g`         | Realizar una búsqueda global (buscar todas las búsquedas).           |
| `m`         | Realizar coincidencias multilineales.                                |

Tomemos un ejemplo de modificador global,

```js
var text = "Learn JS one by one";
var pattern = /one/g;
var result = text.match(pattern); // one,one
```

### 6.4.¿Qué son los patrones de expresiones regulares?

**Respuesta:** Las expresiones regulares proporcionan un grupo de patrones para hacer coincidir caracteres. Básicamente, se clasifican en 3 tipos,
  
+ i.Corchetes: se utilizan para buscar un rango de caracteres. A continuación, se muestran algunos ejemplos de uso,
  + a. [abc]: Se utiliza para encontrar cualquiera de los caracteres entre corchetes (a,b,c).
  + b. [0-9]: Se utiliza para encontrar cualquiera de los dígitos entre los paréntesis..
  + c. (a|b): Se utiliza para encontrar cualquiera de las alternativas separadas con |
+ ii.Metacaracteres: Son caracteres con un significado especial. Por ejemplo, a continuación se muestran algunos casos de uso.
  + a. \d: Se utiliza para encontrar un dígito.
  + b. \s: Se utiliza para encontrar un carácter de espacio en blanco.
  + c. \b: Se utiliza para encontrar una coincidencia al principio o al final de una palabra.
+ iii.Cuantificadores: Son útiles para definir cantidades. Por ejemplo, a continuación se muestran algunos casos de uso.
  + a. n+: Se utiliza para encontrar coincidencias para cualquier cadena que contenga al menos un n
  + b. n*: Se utiliza para encontrar coincidencias para cualquier cadena que contenga cero o más ocurrencias de n
  + c. n?: Se utiliza para encontrar coincidencias para cualquier cadena que contenga cero o una ocurrencia de n

### 6.5. ¿Qué es un objeto RegExp?

**Respuesta:** El objeto RegExp es un objeto de expresión regular con propiedades y métodos predefinidos. Veamos el uso simple del objeto RegExp.

```js
var regexp = new RegExp("\\w+");
console.log(regexp);
// resultado esperado: /\w+/
```

### 6.6. ¿Cómo se busca un patrón en una cadena?

**Respuesta:**  Puede utilizar el método `test()` de expresión regular para buscar un patrón en una cadena y devolver verdadero o falso según el resultado.

```js
var pattern = /you/;
console.log(pattern.test("How are you?")); //true
```

### 6.7. ¿Qué es el currying en Javascript?

**Respuesta:** La currificación en JavaScript transforma una función con múltiples argumentos en una serie anidada de funciones, cada una de las cuales toma un único argumento. La currificación ayuda a evitar pasar la misma variable varias veces y a crear una función de orden superior.

Es decir, cuando transformamos una llamada de función `sum(1,2,3)` en `sum(1)(2)(3)`.

La cantidad de argumentos que toma una función también se denomina aridad.

```js
function sum(a, b) {
    // hace algo
}
function _sum(a, b, c) {
    // hace algo
}
```

La función `sum` toma dos argumentos (función de dos aridades) y `_sum` toma tres argumentos (función de tres aridades).

Las funciones currificadas se construyen encadenando cierres y definiendo y devolviendo inmediatamente sus funciones internas de manera simultánea.

## 7. Zona muerta temporal

### 7.1. ¿Qué es la zona muerta temporal en ES6?

**Respuesta:** En ES6, `let` y `const` se encuentran en modo de elevación (como `var`, `class` y `function`), pero hay un período entre la entrada en el ámbito y su declaración en el que no se puede acceder a ellos. Este período es la zona muerta temporal (TDZ).

```javascript
//console.log(aLet)  // arrojaría ReferenceError
let aLet; 
console.log(aLet); // undefined 
aLet = 10; 
console.log(aLet); // 10
```

### 7.2. ¿Qué son los valores `Truthy` y `Falsy` falsos en JavaScript?

**Respuesta:** En JavaScript, `Truthy` y `Falsy` son términos que se utilizan para describir cómo se evalúan los valores en contextos booleanos, como las condiciones en las declaraciones if y los bucles. Comprender los valores verdaderos y falsos es fundamental cuando se trabaja con lógica condicional.

#### Valores Falsy

+ `false`: El valor booleano false.
+ `0`: El valor numérico cero.
+ `""`: Una cadena vacía.
+ `null`: Un valor especial que indica la ausencia de un objeto.
+ `undefined`: Una variable a la que no se le ha asignado un valor.
+ `NaN`: Significa "No es un número" y representa un número no válido.
+ Cuando cualquiera de estos valores se utiliza en un contexto booleano, se tratan como `Falsy`, lo que significa que se consideran equivalentes a falsos.

Ejemplos de valores falsy:

```javascript
if (false) {
    // Este bloque de código no se ejecutará porque false es falsy.
}

if (0) {
    // Este bloque de código no se ejecutará porque 0 es falsy.
}

if ("" === false) {
    // Esta comparación es true porque una cadena vacía es falsy.
}

if (null) {
    // Este bloque de código no se ejecutará porque null es falsy.
}

if (undefined) {
    // Este bloque de código no se ejecutará porque undefined es falsy.
}

if (NaN) {
    // Este bloque de código no se ejecutará porque NaN es falsy.
}
```

#### Valores Truthy

Cualquier valor que no sea explícitamente "falsy" se considera "truthy" en JavaScript. Estos valores se tratan como equivalentes a true en contextos booleanos.

Ejemplos de valores truthy:

```javascript
if (true) {
    // Este código de bloque se ejecutará porque true es truthy.
}

if (42) {
    // Este código de bloque se ejecutará porque  42 es truthy.
}

if ("Hello") {
    // Este código de bloque se ejecutará porque una cadena no vacía es truthy.
}

if ({} === true) {
    // Esta comparación devuelve false porque un objeto vacío es truthy pero no es igual a true.
}

if ([] === true) {
    // Esta comparación devuelve false porque una matriz vacía es truthy pero no es igual a true.
}
```

Comprender los valores truthy y falsy nos permite escribir código más conciso y expresivo, especialmente cuando se trabaja con lógica condicional. Podemos usar este comportamiento para escribir código más breve y legible al evaluar condiciones y elegir entre dos valores o acciones.

## 8. Clases

### 8.1. ¿Qué son las clases de JavaScript?

**Respuesta:** Las clases son plantillas para crear objetos. Encapsulan datos y la lógica que trabaja con ellos.

### 8.2. ¿Qué son los miembros de la clase?

**Respuesta:** Los miembros de la clase se refieren a los métodos y campos dentro de una clase.

+ i. Métodos
  + Funciones que se definen dentro de la clase.
  + Pueden operar sobre campos y realizar acciones con los datos..
  + Definen el comportamiento de la clase..
+ ii. Campos
  + Variables que se definen dentro de la clase.
  + Contienen datos específicos de la instancia de clase..
  + Definen el estado de la clase..

### 8.3. Explicar los tipos de modificadores de acceso y su propósito en JavaScript

**Respuesta:** Hay tres tipos de modificadores de acceso que se utilizan para encapsular información.

+ Public
  + Se puede acceder desde cualquier lugar.
+ Private
  + Se indica anteponiendo a los miembros el símbolo ```#```.
  + No se puede acceder desde instancias o clases secundarias.
  + Sólo disponible dentro de la propia clase.
  + Útil para ocultar información.
+ Protected
  + Se indica anteponiendo a los miembros el símbolo ```_```.
  + Se puede acceder desde dentro de la clase y cualquier clase que herede de ella.
  + Útil para compartir estado entre clases.

### 8.4. ¿Qué son las propiedades de clase?

**Respuesta:** Las propiedades hacen referencia a los métodos getter y setter dentro de una clase, que proporcionan una forma de controlar el acceso a los campos de una clase. Los métodos getter y setter son enlaces de propiedades a una función que se llamará cuando se acceda a la propiedad.

+ i. Getter
  + Un getter es un método que obtiene el valor de un campo.
  + Debe tener exactamente cero parámetros.
  + Debe devolver un valor.
  + Se define utilizando la palabra clave ```get```.
+ ii. Setter
  + Un setter es un método que establece el valor de un campo.
  + Debe tener exactamente un parámetro.
  + Se define utilizando la palabra clave ```set```.

Se utilizan para encapsular los datos, garantizando que solo se pueda acceder a ciertos campos o modificarlos de una manera específica.

Ejemplo de encapsulación utilizando getters y setters:

```javascript
  class Task {
    #id;
    #description;

    constructor(id, description, ) {
      //  Utiliza setters en lugar de modificar directamente los campos privados
      this.id = id;
      this.description = description;
    }

    //  Utiliza getters para leer los valores
    get id() {
      return this.#id;
    }

    //  ...

    //  Utiliza setters para validar datos antes de escribir
    set id(id) {
      //  ...valida el nuevo ID
      this.#id = id;
    }

    //  ...
  }
```

### 8.5. Explicar los constructores de clases

**Respuesta:** El constructor es un método especial de una clase que se invoca al inicializarse dicha clase. Se utiliza para inicializar las propiedades del objeto y realizar cualquier configuración necesaria cuando se crea el objeto.

+ i. Declaración
  + El método constructor se declara utilizando la palabra clave ```constructor``` dentro del cuerpo de la clase.
  + Cada clase sólo puede tener un método constructor.
  + El constructor no puede ser un método asíncrono.
  + El constructor no puede ser un método privado.
+ ii. Inicialización
  + El constructor puede aceptar parámetros que se utilizan para inicializar las propiedades de la instancia.
  + Establece el estado inicial asignando valores a las propiedades.
+ iii. Herencia
  + En las clases derivadas (clases que extienden otra clase), la palabra clave ```super``` se utiliza dentro del constructor de la clase hija para llamar al constructor de la clase padre.
  + La llamada a ```super``` debe realizarse antes de acceder a cualquier propiedad en el constructor de una clase derivada. Ejemplo de herencia de constructor:

    ```javascript
    class Animal {
        constructor(species) {
            this.species = species;
        }
    }

    class Person extends Animal {
        constructor(name) {
            super("Human"); //  Llama al constructor de la clase padre
            this.name = name;
        } 
    }
    ```

+ iv. Constructor predeterminado: si no se declara explícitamente ningún constructor, se le asignará uno predeterminado a la clase.
  + Clase base: si la clase no extiende ninguna otra clase, se le asignará un constructor predeterminado:

    ```javascript
      constructor() {}
    ```

  + Clase hija: si la clase extiende otra clase, heredará su constructor.

    ```javascript
      class Vehicle {
        constructor(type) {
          this.type = type;
        }

        move() {
          return `The ${this.type} is moving`;
        }
      }

      class Car extends Vehicle {
        #model;

        set model(model) {
          this.#model = model;
        }
        
        drive() {
          `Driving ${this.#model}`;
        }
      }
    ```

    Aunque el constructor no se declara explícitamente, la clase Car lo hereda de la clase Vehicle:

    ```javascript
      constructor(type) {
        super(type);
      }
    ```

### 8.6. Miembros estáticos vs. miembros de instancia

**Respuesta:** De forma predeterminada, las propiedades y los métodos que definimos dentro de una clase pertenecen a cada instancia de la clase que creamos. También podemos asignar miembros a la propia clase. Dichos miembros se denominan estáticos y se declaran utilizando la palabra clave ```static```. No se puede acceder a ellos directamente en las instancias de la clase.
