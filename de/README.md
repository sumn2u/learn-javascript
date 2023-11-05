---
capítulo: 1
número de página: 7
descripción: JavaScript es un lenguaje de programación de alto nivel, interpretado y de tipado dinámico utilizado principalmente para el desarrollo web. Es una de las tecnologías centrales utilizadas para crear sitios web interactivos y aplicaciones web.
---

# Capítulo 1
# Introducción

Las computadoras son comunes en el mundo de hoy, ya que pueden realizar una amplia variedad de tareas de manera rápida y precisa. Se utilizan en muchas industrias diferentes, como negocios, atención médica, educación y entretenimiento, y se han convertido en una parte esencial de la vida diaria para muchas personas. Además, también se utilizan para realizar cálculos científicos y matemáticos complejos, almacenar y procesar grandes cantidades de datos y comunicarse con personas de todo el mundo.

La programación implica crear un conjunto de instrucciones, llamado programa, para que una computadora lo siga. Escribir un programa puede ser tedioso y frustrante a veces porque las computadoras son muy precisas y necesitan instrucciones específicas para completar tareas.

![Página de introducción](../.gitbook/assets/intro.png)

Los lenguajes de programación son lenguajes artificiales utilizados para dar instrucciones a las computadoras. Se utilizan en la mayoría de las tareas de programación y se basan en la forma en que los humanos se comunican entre sí. Al igual que los idiomas humanos, los lenguajes de programación permiten combinar palabras y frases para expresar nuevos conceptos. Es interesante destacar que la forma más efectiva de comunicarse con las computadoras implica el uso de un lenguaje similar al lenguaje humano.

En el pasado, la forma principal de interactuar con las computadoras era a través de interfaces basadas en texto, como los comandos BASIC y DOS. Estos han sido reemplazados en gran medida por interfaces visuales, que son más fáciles de aprender pero ofrecen menos flexibilidad. Sin embargo, los lenguajes de programación como _JavaScript_ todavía se utilizan y se pueden encontrar en navegadores web modernos y en la mayoría de los dispositivos.

JavaScript (_JS abreviado_) es el lenguaje de programación que se utiliza para crear interacciones dinámicas al desarrollar páginas web, juegos, aplicaciones e incluso servidores. JavaScript comenzó en Netscape, un navegador web desarrollado en la década de 1990, y hoy es uno de los lenguajes de programación más famosos y utilizados.

Inicialmente, se creó para dar vida a las páginas web y solo podía ejecutarse en un navegador. Ahora se ejecuta en cualquier dispositivo que admita el motor JavaScript. Objetos estándar como [Array](./arrays/README.md), [Date](./date-and-time.md) y [Math](./numbers/math.md) están disponibles en JavaScript, al igual que operadores, estructuras de control y declaraciones. _JavaScript del lado del cliente_ y _JavaScript del lado del servidor_ son las versiones ampliadas de JavaScript.

* _JavaScript del lado del cliente_ permite la mejora y manipulación de páginas web y navegadores de clientes. Las respuestas a eventos del usuario, como clics de ratón, entrada de formularios y navegación de páginas, son algunos ejemplos.

* _JavaScript del lado del servidor_ permite el acceso a servidores, bases de datos y sistemas de archivos.

JavaScript es un lenguaje interpretado. Mientras se ejecuta JavaScript, un intérprete interpreta cada línea y la ejecuta. El navegador moderno utiliza la tecnología Just In Time (JIT) para la compilación, que compila JavaScript en código ejecutable.

{% hint style="info" %}
"LiveScript" fue el nombre inicial dado a JavaScript.
{% endhint %}

### Código y qué hacer con él

El _código_ son las instrucciones escritas que componen un programa. Aquí, muchos capítulos contienen mucho código, y es importante leer y escribir código como parte del aprendizaje de cómo programar. No debes simplemente examinar rápidamente los ejemplos; léelos con atención y trata de comprenderlos. Esto puede ser difícil al principio, pero con la práctica, mejorarás. Lo mismo ocurre con los ejercicios; asegúrate de intentar realmente escribir una solución antes de asumir que los comprendes. También es útil intentar ejecutar tus soluciones a los ejercicios en un intérprete de JavaScript, ya que esto te permitirá ver si tu código funciona correctamente y puede animarte a experimentar y superar los ejercicios.

### Convenciones tipográficas

Aquí, el texto escrito en una fuente de espacio fijo representa elementos de un programa. Esto puede ser un fragmento independiente o una referencia a una parte de un programa cercano. Los programas, como el que se muestra a continuación, se escriben de esta manera:

```javascript
const números = [45, 4, 9, 16, 25];
let txt = "";
for (let x en números) {
  txt += números[x];
}

```

A veces, la salida esperada de un programa se escribe después de él, precedida por dos barras diagonales con un Resultado, como esto:

```javascript
console.log(txt);

// Resultado: txt = '45491625'
```
