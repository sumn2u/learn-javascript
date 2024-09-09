---
chapter: 18
pageNumber: 139
description: Promise es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Las promesas proporcionan una forma más estructurada y organizada de manejar operaciones asincrónicas, como realizar solicitudes de red, leer archivos o interactuar con bases de datos.
---

# Promise, async/await

Imagine que es un escritor de libros popular y planea publicar un nuevo libro en un día determinado. Los lectores que estén interesados en este libro lo agregarán a su lista de deseos y recibirán una notificación cuando se publique o incluso si el día de lanzamiento también se pospuso. El día del lanzamiento, todos reciben una notificación y pueden comprar el libro, haciendo felices a todas las partes. Esta es una analogía de la vida real que ocurre en la programación.

1. Un "_código productor_" es algo que lleva tiempo y logra algo. Aquí es un escritor de libros.
2. Un "_código consumidor_" es alguien que consume el "código productor" una vez que está listo. En este caso, es un "lector".
3. El vínculo entre el "_código productor_" y el "_código consumidor_" puede denominarse _promesa_ ya que garantiza la obtención de los resultados del "_código productor_" al "_código consumidor_".

## Promise

La analogía que hicimos también es válida para el objeto `promise` de JavaScript. La sintaxis del constructor para el objeto `promise` es:

```javascript
let promesa = new Promise(function(resuelve, rechaza) {
  // Ejecutor (el código productor, "escritor")
});
```

Aquí, se pasa una función a `new Promise`, también conocida como _ejecutor_, y se ejecuta automáticamente al momento de su creación. Contiene el código productor que da el resultado. `resuelve` y `rechaza` son los argumentos proporcionados por el propio JavaScript y se llama a uno de ellos cuando el código productos da los resultados.

* `resuelve(valor)` : una retrollamada que devuelve "valor" como resultado
* `rechaza(error)`: una retrollamada que devuelve `error` en caso de error y devuelve un objeto de error como resultado

![Promesa con retrollamadas en caso de resolución o rechazo](../../.gitbook/assets/async_await.png)

Las propiedades internas del objeto `promise` devuelta por el constructor `new Promise` son las siguientes:

* `state` - inicialmente `pending`, luego cambia a `fulfill` al resolverse o `rejected` cuando se llama a `reject`
* `result` - inicialmente `undefined`, luego cambia a `value` al resolverse `resolve` o `error` cuando se llama a `reject`

{% hint style="warning" %}
No se puede acceder a las propiedades de la promesa: `state` y `result`. Se necesitan métodos de promesa para manejar las promesas.
{% endhint %}

## Ejemplo de una promesa

```javascript
let promesaUno = new Promise(function(resuelve, rechaza) {
  // la función se ejecuta automáticamente cuando se construye la promesa

  // después de 1 segundo da señal de que el trabajo ha terminado con el resultado "hecho"
  setTimeout(() => resuelve("hecho"), 1000);
});

let promesaDos = new Promise(function(resuelve, rechaza) {
  // la función se ejecuta automáticamente cuando se construye la promesa

  // después de 1 segundo da señal de que el trabajo ha terminado con el resultado "error"
  setTimeout(() => rechaza(new Error("¡Vaya!")), 1000);
});
```

Aquí, `promesaUno` es un ejemplo de una "_promesa cumplida_" ya que resuelve exitosamente los valores, mientras que `promesaDos` es una "_promesa rechazada_" ya que es rechazada. Una promesa que se rechaza o se resuelve se denomina promesa _resuelta_, a diferencia de una promesa inicialmente _pendiente_. La función de consumo de la promesa se puede registrar utilizando los métodos `.then` y `.catch`. También podemos agregar el método `.finally` para realizar la limpieza o finalizar después de que se hayan completado los métodos anteriores.

```javascript
let promesaUno = new Promise(function(resuelve, rechaza) {
  setTimeout(() => resuelve("¡hecho!"), 1000);
});

// resuelve ejecuta la primera función en .then
promesaUno.then(
  resuelve => alert(resuelve), // muestra "¡hecho! después de un segundo
  error => alert(error) // no se ejecuta
);

let promesaDos = new Promise(function(resuelve, rechaza) {
  setTimeout(() => rechaza(new Error("¡Vaya!")), 1000);
});

// rechaza ejecuta la segunda función en .then
promesaDos.then(
  resuelve => alert(resuelve), // no se ejecuta
  error => alert(error) // muestra "Error: ¡Vaya!" después de un segundo
);

let promesaTres = new Promise((resuelve, rechaza) => {
  setTimeout(() => rechaza(new Error("¡Vaya!")), 1000);
});

// .catch(f) es lo mismo que promise.then(null, f)
promesaTres.catch(alert); // muestra "Error: ¡vaya!" después de un segundo
```

{% hint style="warning" %}
En el método `Promise.then()`, ambas retrollamadas son opcionales.
{% endhint %}
