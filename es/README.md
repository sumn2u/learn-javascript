---
chapter: 1
pageNumber: 9
description: JavaScript es un lenguaje de programación de alto nivel, interpretado y de tipo dinámico que se utiliza principalmente para el desarrollo web. Es una de las tecnologías centrales utilizadas para crear sitios web y aplicaciones web interactivos y dinámicos.
---
# Capítulo 1

## Introducción

Las computadoras son comunes en el mundo actual porque pueden realizar una amplia variedad de tareas de manera rápida y precisa. Se utilizan en muchas industrias diferentes, como los negocios, la atención médica, la educación y el entretenimiento, y se han convertido en una parte esencial de la vida diaria de muchas personas. Además de esto, también se utilizan para realizar cálculos científicos y matemáticos complejos, almacenar y procesar grandes cantidades de datos y comunicarse con personas de todo el mundo.

La programación implica crear un conjunto de instrucciones, llamado programa, para que las siga una computadora. Escribir un programa puede resultar tedioso y frustrante en ocasiones porque las computadoras son muy precisas y necesitan instrucciones específicas para completar las tareas.

![Página de introducción](../.gitbook/assets/intro.png)

Los lenguajes de programación son lenguajes artificiales que se utilizan para dar instrucciones a las computadoras. Se utilizan en la mayoría de las tareas de programación y se basan en la forma en que los humanos se comunican entre sí. Al igual que los lenguajes humanos, los lenguajes de programación permiten combinar palabras y frases para expresar nuevos conceptos. Es interesante observar que la forma más eficaz de comunicarse con las computadoras implica utilizar un lenguaje similar al lenguaje humano.

En el pasado, la primera forma de interactuar con las computadoras era a través de interfaces basados en lenguajes tales como BASIC y prompts de DOS. Estas han sido reemplazadas en gran medida por interfaces visuales, que son más fáciles de aprender pero ofrecen menos flexibilidad. Sin embargo, los lenguajes informáticos como _JavaScript_ todavía están en uso y se pueden encontrar en los navegadores web modernos y en la mayoría de los dispositivos.

JavaScript (_JS para abreviar_) es el lenguaje de programación que se usa para crear interacción dinámica mientras desarrollamos  páginas web, juegos, aplicaciones, e incluso servidores. JavaScript empezó en Netscape, un navegador web desarrollado en la decada de 1990, y hoy es uno de los lenguajes de programación más famosos y usados.

Inicialmente, fue creado para dar vida a las páginas web y solo podía ejecutarse en un navegador. Ahora se ejecuta en cualquier dispositivo que admita el motor JavaScript. Los objetos estándar como [Array](./arrays/README.md), [Date](./date-and-time.md) y [Math](./numbers/math.md) están disponibles en JavaScript, así como operadores, estructuras de control y declaraciones. _JavaScript del lado del cliente_ y _JavaScript del lado del servidor_ son las versiones extendidas del JavaScript principal.

* _JavaScript del lado del cliente_ permite la mejora y manipulación de páginas web y navegadores de clientes. Las respuestas a eventos del usuario, como clics del mouse, entrada de formularios y navegación de páginas, son algunos de sus ejemplos.
* [_JavaScript del lado del servidor_](./server-side/README.md) permite el acceso a servidores, bases de datos y sistemas de archivos.

JavaScript es un lenguaje interpretado. Mientras ejecuta Javascript, un intérprete interpreta cada línea y la ejecuta. El navegador moderno utiliza la tecnología [Just In Time (JIT)](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/) para la compilación, que compila JavaScript en un código de bytes ejecutable.

{% hint style="info" %}
"LiveScript" fue el nombre inicial dado a JavaScript.
{% endhint %}

### Código y qué hacer con él y Convenciones tipográficas

_Código_ son las instrucciones escritas que componen un programa. Aquí, muchos capítulos contienen mucho código y es importante leer y escribir código como parte del aprendizaje de programación. No se limite a leer rápidamente los ejemplos: léalos atentamente y trate de comprenderlos. Esto puede resultar difícil al principio, pero con la práctica mejorará. Lo mismo ocurre con los ejercicios: asegúrese de intentar escribir una solución antes de asumir que los comprende. También es útil intentar ejecutar las soluciones de los ejercicios en un intérprete de JavaScript, ya que esto le permitirá ver si su código funciona correctamente y puede animarlo a experimentar e ir más allá de los ejercicios.

Aquí, el texto escrito en una fuente monoespaciada representa elementos de un programa. Puede ser un fragmento autónomo o una referencia a parte de un programa cercano. Los programas, como el que se muestra a continuación, se escriben de esta manera:

```javascript
const numeros = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numeros) {
  txt += numeros[x];
}
```

A veces, el resultado esperado de un programa se escribe después, precedido por dos barras con un _Resultado_, como este:

```javascript
console.log(txt);

// Resultado: txt = '45491625'
```
