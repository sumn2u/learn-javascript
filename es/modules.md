---
layout: editorial
chapter: 13
pageNumber: 117
description: Los módulos son una forma de organizar el código en componentes separados, reutilizables y encapsulados. Los módulos permiten a los desarrolladores dividir bases de código grandes y complejas en partes más pequeñas y manejables, lo que facilita la comprensión, el mantenimiento y la colaboración en los proyectos.
---

# Capítulo 13

## Módulos

En el mundo real, un programa crece orgánicamente para hacer frente a las necesidades de nuevas funciones. Con una base de código en crecimiento, estructurar y mantener el código requiere trabajo adicional. Aunque dará sus frutos en el futuro, es tentador descuidarlo y permitir que los programas queden profundamente enredados. En realidad, aumenta la complejidad de la aplicación, ya que uno se ve obligado a construir una comprensión holística del sistema y tiene dificultades para mirar cualquier pieza de forma aislada. En segundo lugar, hay que invertir más tiempo en desenredarlo para utilizar su funcionalidad.

Los _Módulos_ vienen a evitar estos problemas. Un `módulo` especifica de qué piezas de código depende, junto con qué funcionalidad proporciona para que la utilicen otros módulos. Los módulos que dependen de otro módulo se denominan _dependencias_. Existen varias bibliotecas de módulos para organizar el código en módulos y cargarlo según demanda.

* **AMD** - uno de los sistemas modulares más antiguos, utilizado inicialmente por [require.js](https://requirejs.org/).
* **CommonJS** - Sistema de módulos creado para el servidor Node.js.
* **UMD** - Sistema de módulos compatible con AMD y CommonJS.

Los módulos pueden cargarse entre sí y utilizar directivas especiales `import` y `export` para intercambiar funcionalidades y llamar funciones entre sí.

* `export` - etiqueta funciones y variables que deberían ser accesibles desde fuera del módulo actual
* `import` - importa funcionalidad desde el módulo externo

Veamos el mecanismo de `import` y `export` en módulos. Tenemos la función `sayHi` exportada desde el archivo `sayHi.js`.

```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Hello, ${user}!`);
}
```

La función `sayHi` se consume en el archivo `main.js` con la ayuda de la directiva `import`.

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // función...
sayHi('Kelvin'); // ¡Hola, Kelvin!
```

Aquí, la directiva de importación carga el módulo importando la ruta relativa y asigna la variable `sayHi`.

Los módulos se pueden exportar de dos maneras: **Nombrado** y **Predeterminado**. Además, las exportaciones nombradas se pueden asignar en línea o individualmente.

```javascript
// 📁 person.js 

// exportaciones con nombre en línea
export const name = "Kelvin";
export const age = 30;

// de una vez
const name = "Kelvin";
const age = 30;
export {name, age};
```

{% hint style="warning" %}
Solo se puede tener una `export` predeterminada en un archivo.
{% endhint %}

```javascript
// 📁 message.js 
const message = (name, age) => {
    return `${name} is ${age} years old.`;
};
export default message;
```

Según el tipo de exportación, podemos importarla de dos formas. Las exportaciones nombradas se construyen utilizando llaves, mientras que las exportaciones predeterminadas no.

```javascript
import { name, age } from "./person.js"; // importación de exportación con nombre
import message from "./message.js"; // importación de exportación predeterminada
```

Al asignar módulos, debemos evitar la _dependencia circular_. La dependencia circular es una situación en la que el módulo A depende de B y B también depende de A directa o indirectamente.
