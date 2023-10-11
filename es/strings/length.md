---
chapter: 4
pageNumber: 27
---
# Length

Es fácil en Javascript saber cuántos caracteres hay en una cadena usando la propiedad `length`. La propiedad `length` (en español, su significado es 'longitud') devuelve el número de caracteres de la cadena, incluidos espacios y caracteres especiales.

```javascript

let size = "Nuestra hermosa cadena".length;
console.log(size);
// size: 17

let emptyStringSize = "".length
console.log(emptyStringSize);
// emptyStringSize: 0

```

La propiedad length de una cadena vacía es `0`.

{% hint style="warning" %}
La propiedad `length` es una propiedad de solo lectura, así que no puede asignarle un nuevo valor.
{% endhint %}
