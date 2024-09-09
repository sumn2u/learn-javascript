---
chapter: 19
pageNumber: 146
description: Polyfills y transpilers son dos herramientas importantes que se utilizan en el desarrollo web para ayudar a garantizar que el código JavaScript moderno pueda ejecutarse en navegadores más antiguos y aprovechar las últimas funciones de JavaScript manteniendo la compatibilidad con entornos más antiguos.
---
# Polyfills y transpiladores

JavaScript evoluciona de vez en cuando. Regularmente, se envían, analizan y agregan nuevas propuestas de lenguaje a [https://tc39.github.io/ecma262/](https://tc39.github.io/ecma262/) y luego se incorporan a la especificación. Puede haber diferencias en cómo se implementa en los motores JavaScript según el navegador. Algunos pueden implementar las propuestas preliminares, mientras que otros esperan hasta que se publique la especificación completa. Surgen problemas de compatibilidad con versiones anteriores a medida que se introducen cosas nuevas.

Para admitir el código moderno en navegadores antiguos utilizamos dos herramientas: `transpiladores` y `polyfills`.

## **Transpiladores**

Es un programa que traduce código moderno y lo reescribe utilizando estructuras de sintaxis más antiguas para que el motor más antiguo pueda entenderlo. Por ejemplo, el operador coalescente  "nulo" `??` se introdujo en 2020 y los navegadores obsoletos no pueden entenderlo.

Ahora, el trabajo del transpilador es hacer que el operador coalescente "nulo" `??` sea comprensible para los navegadores antiguos.

```javascript
// antes de ejecutar el transpilador
height = height ?? 200;

// después de ejecutar el transpilador
height = (height !== undefined && height !== null) ? height: 200;

```

{% hint style="info" %}
[Babel](https://babeljs.io/) es uno de los transpiladores más destacados. En el proceso de desarrollo, podemos utilizar herramientas de compilación como [webpack](https://webpack.js.org/) o [parcel](https://parceljs.org/) para transpilar código.
{% endhint %}

## **Polyfills**

Hay ocasiones en las que las nuevas funciones no están disponibles en motores de navegador obsoletos. En este caso, el código que utiliza la nueva funcionalidad no funcionará. Para llenar los vacíos, agregamos la funcionalidad que falta que se llama `polyfill`. Por ejemplo, el método `filter()` se introdujo en ES5 y no es compatible con algunos de los navegadores antiguos. Este método acepta una función y devuelve una matriz que contiene solo los valores de la matriz original para los cuales la función devuelve `true`.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // filtra el número par
console.log(filtered);

// [2, 4, 6]
```

El polyfill para el filtro es.

```javascript
Array.prototype.filter = function (retrollamada) {
  // Almacena la nueva matriz
  const resultado = [];
  for (let i = 0; i < this.length; i++) {
    // llama a la retrollamada con el elemento, índice y contexto actuales.
     //si pasa el texto, agregue el elemento en la nueva matriz.
    if (retrollamada(this[i], i, this)) {
      resultado.push(this[i]);
    }
  }
  //return the array
  return resultado
}
```

{% hint style="info" %}
[caniuse](https://caniuse.com/) muestra la funcionalidad y la sintaxis actualizadas admitidas por diferentes motores de navegador.
{% endhint %}
