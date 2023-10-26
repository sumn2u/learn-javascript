---
chapter: 20
pageNumber: 111
---
# Concatenación

En cualquier lenguaje de programación, la concatenación de cadenas simplemente significa agregar una o más cadenas a otra cadena. Por ejemplo, cuando las cadenas "_Mundo_" y "_Buenas tardes_" se concatenan con la cadena "_Hola_", se forma la cadena "_HolaMundoBuenastardes_". Podemos concatenar una cadena de varias formas en JavaScript.

## Ejemplo

```javascript
const icono = '👋';

// usando cadenas de plantilla
`hola ${icono}`;

// usando el método join()
['hola', icono].join(' ');

// usando el método concat()
''.concat('hola ', icono);

//  usando el operador +
'hola ' + icono;

// RESULT
// hola 👋
```

## 📝 Tarea

- [ ] Escriba un programa que establezca los valores para `str1`y `str2` para que el código imprima '_Hola mundo_' a la consola.

## 💡 Consejos

- Visite el capítulo de cadenas [concatenación](../strings/concat.md) para tener más información sobre la concatenación de cadenas.
