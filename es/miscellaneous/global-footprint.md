---
chapter: 19
pageNumber: 121
description: La huella global se refiere al impacto o influencia que tiene un script o una aplicación en el alcance global del entorno de ejecución. Cuando un script o una aplicación crea variables o funciones en el ámbito global, afecta la huella global. 
---
# Huella global

Si está desarrollando un módulo, que podría estar ejecutándose en una página web, que también ejecuta otros módulos, debe tener cuidado con la superposición de nombres de variables.

Supongamos que estamos desarrollando un módulo contador:

```javascript
let myCounter = {
  number: 0,
  plusPlus: function () {
    this.number = this.number + 1;
  },
  isGreaterThanTen: function () {
    return this.number > 10;
  },
};
```

> _**Nota:**_ Esta técnica se usa a menudo con los cierres (closures, en inglés), para hacer que el estado interno sea inmutable desde el exterior.

El módulo ahora toma solo un nombre de variable: `myCounter`. Si cualquier otro módulo de la página utiliza nombres como `number` o `isGreaterThanTen`, entonces es perfectamente seguro porque no sobreescribiremos los valores de los demás.
