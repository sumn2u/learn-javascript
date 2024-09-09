---
chapter: 9
pageNumber: 98
description: Cada objeto tiene una propiedad especial llamada prototipo, que es una referencia a otro objeto. La propiedad prototype es una parte esencial del sistema de herencia basado en prototipos en JavaScript y permite que los objetos hereden propiedades y métodos de otros objetos.
---
# Prototype

Cada objeto está vinculado a un objeto prototype (en español, prototipo) del cual hereda propiedades. Los objetos creados a partir de literales de objetos (`{}`) se vinculan automáticamente a `Object.prototype`, que es un objeto que viene estándar con JavaScript.

Cuando un intérprete de JavaScript (un módulo en su navegador) intenta encontrar una propiedad que desea recuperar, como en el siguiente código:

```javascript
let adulto = { edad: 26 },
  propiedadRecuperada = adulto.edad;
// La línea de arriba
```

Primero, el intérprete examina todas las propiedades que tiene el objeto. Por ejemplo, `adulto`solo tiene una propiedad propia: `edad`. Pero además de esa, en realidad tiene algunas propiedades más, que fueron heredadas de `Object.prototype`.

```javascript
let cadenaPresentacion = adulto.toString();
// la variable tiene valor de '[object Object]'
```

`toString` es una propiedad de Object.prototype, que fue heredada. Tiene un valor de una función, que devuelve una representación de cadena del objeto. Si desea que devuelva una representación más significativa, puede sobreescribirla. Simplemente agregue una nueva propiedad al objeto adulto.

```javascript
adulto.toString = function () {
  return "Tengo " + this.edad;
};
```

Si llama a la función `toString` ahora, el intérprete encontrará la nueva propiedad en el objeto y se detendrá.

De este modo, el intérprete recupera la primera propiedad que encontrará en el camino desde el objeto mismo y a través de su prototipo.

Para configurar su propio objeto como prototipo en lugar del Object.prototype predeterminado, puede invocar `Object.create` de la siguiente manera:

```javascript
let niño = Object.create(adulto);

/* Esta forma de crear objetos nos permite reemplazar fácilmente el Object.prototype predeterminado por el que queramos. En este caso, el prototipo de niño es el objeto adulto. */

niño.edad = 8;

/* Anteriormente, niño no tenía su propia propiedad edad y el intérprete tenía que buscar más allá del prototipo del objeto niño  para encontrarla.
  Ahora, cuando establezcamos la edad del niño, el intérprete no irá más lejos.
  Nota: la edad del adulto sigue siendo 26 años. */

let cadenaPresentacion = niño.toString();

// El valor es "Tengo 8".
/* Nota: no hemos anulado la propiedad toString del niño, por lo que se invocará el método del adulto. Si el adulto no tuviera la propiedad toString, entonces se invocaría el método toString de Object.prototype y obtendríamos "[object Object]" en lugar de "Tengo 8 años" */
```

El prototipo del objeto `niño` es `adulto`, cuyo prototipo es `Object.prototype`. Esta secuencia de prototipos se denomina **cadena de prototipos**.
