---
layout: editorial
chapter: 8
pageNumber: 72
description: Las funciones son bloques de código que realizan una tarea específica o un conjunto de tareas. Son unidades de código reutilizables que se pueden llamar y ejecutar en cualquier punto de un programa.
---

# Capítulo 8

## Funciones

Las funciones son una de las nociones más poderosas y esenciales en programación. Las funciones como las funciones matemáticas realizan transformaciones, toman valores de entrada llamados **argumentos** y **devuelven** un valor de salida.

Las funciones se pueden crear de dos maneras: usando `declaración de función` o `expresión de función`. El _nombre de la función_ se puede omitir en la `expresión de función`, convirtiéndola en una `función anónima`. Las funciones, al igual que las variables, deben declararse. Declaremos una función `doble` que acepta un _argumento_ llamado `x` y **devuelve** el doble de x:

```javascript
// un ejemplo de una declaración de función
function doble(x) {
  return 2 * x;
}
```

> _Nota:_ **se puede** hacer referencia a la función anterior antes de que se haya definido.

Las funciones también son valores en JavaScript; se pueden almacenar en variables (como números, cadenas, etc.) y darse a otras funciones como argumentos:

```javascript
// un ejemplo de una expresión de función
let double = function (x) {
  return 2 * x;
};
```

> _Nota:_ **no se puede** hacer referencia a la función anterior antes de definirla, como cualquier otra variable.

{% hint style="info" %}
Una retrollamada es una función que se pasa como argumento a otra función.
{% endhint %}

Una función de flecha es una alternativa compacta a las funciones tradicionales que tiene algunas diferencias semánticas con algunas limitaciones. Estas funciones no tienen sus propios enlaces a `this`, `arguments` y `super`, y no pueden usarse como constructores. Un ejemplo de una función de flecha:

```javascript
const double =  (x) =>  2 * x;
```

{% hint style="warning" %}
La palabra clave `this` en la función de flecha representa el objeto que definió la función de flecha.
{% endhint %}

En este capítulo, exploraremos los siguientes temas:

* [Cierres](./closures.md)
* [Funciones de orden superior](./higher-order.md)
* [Funciones recursivas](./recursive-functions.md)
* [Set Interval](./set-interval.md)
* [Set Timeout](./set-timeout.md)
* [Palabra clave this](./this-keyword.md)
* [Operador de resto](./rest-operator.md)
* [Elevación (Hoisting)](./hoisting.md)
* [Captadores y definidores (Getters / Setters)](./getters-setters.md)