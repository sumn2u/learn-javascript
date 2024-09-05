---
chapter: 25
pageNumber: 247
description:  ¡Ciertamente! Analicemos las declaraciones `let` y `const` en el contexto de ES6 (ECMAScript 2015) y compárelas con sus contrapartes de ES5.
---

# Map

El objeto Map es una colección de elementos de datos con clave, al igual que un `Object`. Pero la principal diferencia es que `Map` permite claves de cualquier tipo.

| Método/Propiedad         | Descripción                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| `new Map()`              | Crea un un nuevo objeto Map.                                                                       |
| `map.set(clave, valor)`  | Almacena el `valor` en el objeto `map` bajo la `clave`.                                            |
| `map.get(clave)`         | Devuelve el `valor` asociado con la `clave`, o `undefined` si la `clave` no existe.                |
| `map.has(clave)`         | Devuelve `true` si el `map` contiene la `clave`, de lo contrario devuelve `false`.                 |
| `map.delete(clave)`      | Elimina el elemento (par clave/valor) del `map` especificado por la `clave`.                       |
| `map.clear()`            | Elimina todos los elementos del `map`.                                                             |
| `map.size`               | Devuelve el número de elementos (pares clave/valor) en el `map`.                                   |

A continuación se muestra un ejemplo de `Map()` con sus diversos métodos y propiedades.

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

Las diferencias un mapa con un `Object` normal:

- Cualquier clave, los objetos pueden ser claves.

- Métodos convenientes adicionales, la propiedad `size` que devuelve el número de elementos.

## Conclusión

Los mapas son una estructura de datos versátil y potente que proporciona pares clave-valor para una gestión de datos eficiente.
Los mapas suelen ser una opción preferida a los objetos simples para tareas que involucran asociaciones clave-valor, ya que brindan mejor control y rendimiento.
