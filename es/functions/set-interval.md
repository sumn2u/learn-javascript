---
chapter: 8
pageNumber: 55
Title: Set Interval
---


# Set Interval

El método `setInterval` se utiliza para llamar a una función y agregarle un tiempo de retraso, en milisegundos, antes de que la función se ejecute nuevamente. Por ejemplo, si estás creando una función que genera un color aleatorio, puedes usar `setInterval()` para indicar cuánto tiempo debe esperar la computadora antes de que la función se ejecute nuevamente y genere otro color. Esto es útil para hacer que las funciones se repitan.

El primer parámetro del método es el nombre de la función para la que estás configurando un intervalo. El segundo parámetro especifica la duración del intervalo. También puedes agregar parámetros adicionales si quieres pasar argumentos a la función.

Como otro ejemplo simple, creemos una función llamada `repetirDicho` donde dice "¡Y otra vez!" cada 2 segundos en la [consola](https://javascript.sumankunwar.com.np/en/exercises/console.html).

```js
function repetirDicho() {
  console.log("¡Y otra vez!");
}
// al llamarla genera en la consola: "¡Y otra vez!"

setInterval(repetirDicho, 2000);
// llama a la función cada 2 segundos
```

También puedes agregar parámetros de una función cuando usas `setInterval`. Continuando con el ejemplo anterior, agreguemos puntos suspensivos a la declaración de la consola para mostrar que se repite. Primero, agregaremos un parámetro llamado `el`, que es la abreviatura de elipse. Luego, agregaremos un `+` seguido de llamar a nuestro parámetro `el` para mostrar que el valor del parámetro viene después. Finalmente, en `setInterval`, agreguemos una coma `,` seguida de una cadena para el valor del parámetro elipse, pondremos `"..."`.

```js
function repetirDicho(el) {
  console.log("¡Y otra vez!" + el);
}

setInterval(repetirDicho, 2000, "...");
// Cuando se ejecuta, repetirá el dicho "¡Y otra vez!..."
```

Como puede ver en este ejemplo, después de poner la función y el intervalo para la función, puede establecer los valores de los parámetros de la función dentro del intervalo establecido.

## Clear Interval

Puede utilizar el método `clearInterval()` para eliminar un intervalo establecido con un nombre de variable específico. Como ejemplo basado en el anterior, almacenemos el intervalo establecido en una variable llamada `intervalo`, sin embargo, justo después de nuestra variable la llamaremos dentro de clear interval escribiendo `clearInterval(intervalo).`

```js
function repetirDicho(el) {
console.log("¡Y otra vez!" + el);
}

var interval = setInterval(repetirDicho, 2000, "...");

clearInterval(interval);
//El método clearInterval detiene setInterval
```

Cuando se ejecuta este código, verá que no hay salida. Esto se debe a que `setInterval` era lo único que llamaba a la función `repetirDicho`, pero como fue eliminada por `clearInterval`, ya no se llama. Incluso si se llamara por separado usando `repetirDicho()`, solo se ejecutaría una vez porque `clearInterval` evita que se repita.
