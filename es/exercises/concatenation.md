---
chapter: 21
pageNumber: 185
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

### 📝 Tarea

- [ ] Escriba un programa para establecer los valores de `str1` y `str2` para que el código imprima '_Hola Mundo_' en la consola.

- [ ] Escriba un programa que solicite al usuario que ingrese su nombre (`nombre`) y apellido (`apellido`). Luego, utilice la concatenación de cadenas para crear y mostrar su nombre completo (`nombreCompleto`).

- [ ] Escriba un programa que solicite al usuario que ingrese su nombre. Luego, utilice la concatenación de cadenas para crear un mensaje de saludo que incluya su nombre. Por ejemplo: "Buenos días, Aman".

## 💡 Consejos

- Visite el capítulo de cadenas [concatenación](../strings/concat.md) para tener más información sobre la concatenación de cadenas.

{% aceeditor compilerTitle="¡Inténtelo!" %}
{% endaceeditor %}
