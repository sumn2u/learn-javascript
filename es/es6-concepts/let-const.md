---
chapter: 25
pageNumber: 283
description: ¡Ciertamente! Analicemos las declaraciones `let` y `const` en el contexto de ES6 (ECMAScript 2015) y compárelas con sus contrapartes de ES5.
---

# let y const en ES6

1. **Declaración `let`:**
   - En ES6, la declaración `let` se introdujo para crear variables de ámbito de bloque. Esto significa que una variable declarada con `let` solo es accesible dentro del bloque (por ejemplo, dentro de una función o un par de llaves) donde se definió.

   - Las variables definidas con `let` no se elevan (hoisting, en inglés) a la parte superior de su función o bloque que las contiene. Esto evita problemas cuando se accede a las variables antes de declararlas.

   - `let` le permite reasignar un valor a la variable después de su declaración inicial, haciéndola mutable.
   - `let` allows you to reassign a value to the variable after its initial declaration, making it a mutable variable.

   - Ejemplo:

     ```javascript
     function funcionEjemplo() {
       if (true) {
         let x = 10;
         console.log(x); // 10
       }
       console.log(x); // Error: x no está definida
     }
     ```

2. **Declaración `const`:**
   - La declaración `const` también introduce las variables de ámbito de bloque, pero viene con una restricción adicional: las variables declaradas con `const` no pueden ser reasignadas después de su asingación inicial. Son constantes.

   - `const` se usa a menudo para valores que no deberían cambiar, tales como constantes o referencias a objetos inmutables.

   - Ejemplo:

     ```javascript
     const pi = 3.14159;
     pi = 3.14; // Error: Asignación a variable constante.
     ```

**Comparación con ES5:**

En ES5, JavaScript usaba primariamente la palabra clave `var` para la declaración de variables. Aquí están las diferencias clave cuando se compara `let` y `const` en ES6 con `var` en ES5:

1. **Ámbito de bloque versus Ámbito de función:**
   - ES6 (`let` y `const`): Las variables declaradas con `let` y `const` son de ámbito de bloque, lo que significa que están limitadas al bloque donde se definen, sea este un bloque dentro de una función o un bloque en solitario.

   - ES5 (`var`): Las variables declaradas con `var` son de ámbito de función, lo que significa que son accesibles a través de toda la función que contiene la declaración `var`.

2. **Elevación:**
   - ES6 (`let` y `const`): Las variables declaradas con `let` y `const` no son elevadas al inicio de su bloque contenedor, lo que previene el uso de variables antes de que sean declaradas.

   - ES5 (`var`): Las variables declaradas con `var` son elevadas al inicio de su función contenedora, lo cual puede llevar a comportamientos inesperados si no se maneja cuidadosamente.

3. **Reasignación:**
   - ES6 (`let` y `const`): Las variables declaradas con `let` pueden ser reasignados después de su declaración inicial. Las variables declaradas con `const` no se pueden reasignar, lo que las convierte en constantes.

   - ES5 (`var`): Las variables declaradas con `var` se pueden reasignar en cualquier punto de la función donde se declaran.

4. **Constantes:**
   - ES6 (`const`): ES6 introduce la palabra clave `const`, que permite la creación de constantes, que no se pueden cambiar después de su asignación inicial.

En resumen, `let` y `const` en ES6 proporciona un alcance de variable controlado y más predecible en comparación con `var` en ES5. Ayudan a evitar problemas comunes asociados con la elevación de variables y brindan la flexibilidad de elegir entre variables mutables e inmutables según sus necesidades.
