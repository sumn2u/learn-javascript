---
chapter: 25
pageNumber: 247
description:  ¡Ciertamente! Analicemos las declaraciones `let` y `const` en el contexto de ES6 (ECMAScript 2015) y compárelas con sus contrapartes de ES5.
---

# Map

El objeto Map es una colección de elementos de datos con clave, al igual que un `Object`. Pero la principal diferencia es que `Map` permite claves de cualquier tipo.

Los métodos y propiedades son:

- `new Map()` – crea el mapa.  
- `map.set(key, value)` – almacena el valor por la clave.
- `map.get(key)` – devuelve el valor por la clave, devuelve undefined si la clave no existe en el mapa.
- `map.has(key)` – devuelve verdadero (true) si la clave existe, falso (false) en caso contrario.
- `map.delete(key)` – elimina el elemento (el par clave/valor) por la clave.
- `map.clear()` – elimina todos los elementos del mapa.
- `map.size` – devuelve el número actual de elementos.

Por ejemplo:

```javascript

let map = new Map();

map.set('1', 'str1');   // una clave de cadena (string)
map.set(1, 'num1');     // una clave numérica
map.set(true, 'bool1'); // una clave booleana (boolean)

// ¿Recuerdas el Object normal? convertiría las claves en cadenas
// Map mantiene el tipo, por lo que estos dos son diferentes:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

Las diferencias de un `Object` normal:

- Cualquier clave, los objetos pueden ser claves.

- Métodos convenientes adicionales, la propiedad `size` que devuelve el número de elementos.

## Conclusión

Los mapas son una estructura de datos versátil y potente que proporciona pares clave-valor para una gestión de datos eficiente.
Los mapas suelen ser una opción preferida a los objetos simples para tareas que involucran asociaciones clave-valor, ya que brindan mejor control y rendimiento.
