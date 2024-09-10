---
chapter: 21
pageNumber: 183
---
# Constantes

Las constantes fueron presentadas en ES6(2015), y usan la palabra clave `const`. Las variables que se declaran con `const` no pueden ser reasignadas o redeclaradas.

## Ejemplo

```javascript
const VERSION = '1.2';
```

## 📝 Tarea

- [ ] Ejecute el programa mencionado abajo y corrija el error que ve en la consola. Asegúrese de que el resultado del código es `0.9 cuando se arregle en la consola.

```javascript
const VERSION = '0.7';
VERSION = '0.9';
console.log(VERSION);
```

- [ ] Escriba un programa que solicite al usuario ingresar una temperatura en _grados Celsius_, luego use la constante `FACTOR_CONVERSION` que es igual a `9/5` para convertir a _grados Fahrenheit_.

  ```javascript
  const FACTOR_CONVERSION = 9 / 5;

  /* Comienza tu código desde aquí */
  ```

## 💡 Consejos

- Visite el capítulo [Variables](../basics/variables.md) para más información sobre const y tambíen busque "_TypeError assignment to constant variable_" en los buscadores para encontrar una solución.

{% if output.name == "website" %}
{% aceeditor compilerTitle="¡Inténtelo!" %}
{% endaceeditor %}
{% endif %}
