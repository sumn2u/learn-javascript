---
chapter: 2
pageNumber: 10
description: Los comentarios se utilizan para marcar anotaciones para otros programadores o pequeñas descripciones sobre el código que ayudan a otros a comprenderlo. Estas declaraciones no son ejecutadas por el intérprete.
---

# Comentarios

Los comentarios son declaraciones que no serán ejecutandos por el intérprete, los comentarios son utilizados para marcar anotaciones para otros programadores o pequeñas descripciones de lo que el código hace, facilitando así que otros comprendan lo que hace su código. También se utilizan para desactivar temporalmente el código sin afectar al control de flujo del programa.

En JavaScript, los comentarios se pueden escribir de dos formas diferentes:

* _Comentarios de línea única_: Empiezan con dos barras diagonales (`//`) y continúa hasta el final de la línea. El intérprete de JavaScript ignora todo lo que sigue a las barras diagonales. Por ejemplo:

```javascript
// Esto es un comentario, será ignorado por el intérprete
let a = "esto es una variable definida en una declaración";
```

* _Comentarios multilínea_: Comienzan con una barra diagonal y un asterisco (`/*`) y terminan con un asterisco y una barra diagonal (`*/`). El intérprete de JavaScript ignora todo lo que se encuentre entre los marcadores de apertura y cierre. Por ejemplo:



```javascript
/*
Esto es un comentario multilínea,
será ignorado por el intérprete
*/
let a = "esto es una variable definida en una declaración";
```

Incluir comentarios en el código es esencial para mantener la calidad del código, habilitando la colaboración, y simplificando el proceso de depuración. Al proporcionar contexto y explicaciones para varias partes del programa, los comentarios facilitan la comprensión del código en el futuro. Por lo tanto, se considera una práctica beneficiosa incluir comentarios en el código.
