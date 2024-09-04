---
chapter: 18
pageNumber: 111
description: Async/Await es una característica introducida en ECMAScript 2017 (ES8) que proporciona una sintaxis más concisa y legible para trabajar con código JavaScript asincrónico. Está construido sobre JavaScript Promises y se utiliza para manejar operaciones asincrónicas de manera síncrona.
---

# Async/Await

Con las promesas, se puede usar una palabra clave `async` para declarar una función asincrónica que devuelve una promesa, mientras que la sintaxis `await` hace que JavaScript espere hasta que esa promesa se establezca y devuelva su valor. Estas palabras clave facilitan la redacción de promesas. A continuación se muestra un ejemplo de `async`.

```javascript
//función asíncrona f
async function f() {
  return 1;
}
// promesa que está siendo resuelta
f().then(alert); // 1
```

El ejemplo anterior se puede escribir de la siguiente manera:

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async` garantiza que la función devuelva una promesa y envuelve las no promesas en ella. Con `await`, podemos hacer que JavaScript espere hasta que la promesa se resuelva con su valor devuelto.

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Bienvenido a Aprender JavaScript!"), 1000)
  });
  
  let result = await promise; // espere hasta que la promesa se resuelva (*)
  alert(result); // "¡Bienvenido a Aprender JavaScript!"
}

f();
```

{% hint style="warning" %}
La palabra clave `await` solo se puede usar dentro de una función `async`.
{% endhint %}
