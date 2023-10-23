---
layout: editorial
chapter: 11
pageNumber: 67
description: JSON (JavaScript Object Notation, Notación de objetos JavaScript en español ) es un formato de intercambio de datos ligero que se utiliza para representar e intercambiar datos entre diferentes sistemas y plataformas. Es ampliamente utilizado para la transmisión y almacenamiento de datos, especialmente en el desarrollo web.
---

# Capítulo 11

## JSON

**J**ava**S**cript **O**bject **N**otation (JSON) es un formato basado en texto para almacenar y transportar datos. Los objetos Javascript se pueden convertir fácilmente a JSON y viceversa. Por ejemplo.

```javascript
//  un objeto JavaScript
let miObj = { nombre:"Ryan", edad:30, ciudad:"Austin" };

// convertido en un JSON:
let miJSON = JSON.stringify(miObj);
console.log(miJSON);
// Resultado: '{"nombre":"Ryan","edad":30,"ciudad":"Austin"}'

//convertido de nuevo a objeto JavaScript
let JSONoriginal = JSON.parse(miJSON);
console.log(JSONoriginal);

// Resultado: {nombre: 'Ryan', edad: 30, ciudad: 'Austin'}
```

`stringify` y `parse` son los dos métodos admitidos por JSON.

| Método        | Descripción                                            |
| ------------- | ------------------------------------------------------ |
| `parse()`     | Devuelve un objeto JavaScript de la cadena JSON analizada |
| `stringify()` | Devuelve una cadena JSON del objeto JavaScript |

Los siguientes tipos de datos son compatibles con JSON.

* string
* number
* array
* boolean
* objeto con valores JSON válidos
* `null`

No puede ser `function`, `date` o `undefined`.
