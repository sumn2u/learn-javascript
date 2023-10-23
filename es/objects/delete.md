---
chapter: 9
pageNumber: 62
description: Se puede utilizar una propiedad `delete` para **eliminar una propiedad** de un objeto. Cuando se elimina una propiedad, se elimina del objeto y no se puede acceder a ella ni enumerarla (es decir, no aparece en un bucle for-in).
---
# Delete

Un operador `delete` se puede usar para **eliminar una propiedad** de un objeto. Cuando se elimina una propiedad, es eliminada del objeto y no puede ser accedida o enumerada (por ejemplo, no se muestra en un bucle for-in).

Aquí está la sintaxis para usar `delete`:

```javascript
delete object.property;
```

Por ejemplo:

```javascript
let adulto = { edad: 26 },
  niño = Object.create(adulto);
  
niño.edad = 8;

delete niño.edad;

/* Elimine la propiedad de edad del niño, revelando la edad del prototipo, porque entonces no se anula.. */

let prototipoEdad = niño.edad;
// 26, porque el niño no tiene su propia propiedad de edad.
```

{% hint style="warning" %}

El operador `delete` solo funciona con las propiedades propias de un objeto y no con las propiedades heredadas. Tampoco funciona en propiedades que tienen el atributo `configurable` establecido en `false`.
{% endhint %}

El operador `delete` no modifica la cadena de prototipos del objeto. Simplemente elimina la propiedad especificada del objeto y tampoco destruye el objeto ni sus propiedades. Simplemente hace que las propiedades sean inaccesibles. Si necesita destruir un objeto y liberar su memoria, puede establecer el objeto a `null` o usar un recolector de basura para recuperar la memoria.
