---
chapter: 20
pageNumber: 104
---

# Node.js

**Node.js** es un entorno de ejecución de JavaScript que permite a los desarrolladores ejecutar código JavaScript fuera de un navegador web. Está construido sobre el motor JavaScript V8, que es el mismo motor utilizado por Google Chrome. Node.js es de código abierto y multiplataforma, lo que significa que puede ejecutarse en Windows, macOS y Linux.

## Node.js no es un lenguaje de programación

Mucha gente cree erróneamente que Node.js es un lenguaje de programación. Esto no es verdad. Node.js es un entorno de ejecución de JavaScript, lo que significa que proporciona un entorno para que se ejecute el código JavaScript. No es un lenguaje de programación en sí.

Node.js **no** es el único entorno de ejecución de JavaScript. Hay muchos otros, incluidos Deno, Nashorn y, más recientemente, Bun. Pero Node.js es, con diferencia, el entorno de ejecución de JavaScript más popular y utilizado.

## Empezando con Node.js

Para comenzar con Node.js, deberá instalarlo en su computadora. Puede descargar la última versión de Node.js desde el sitio web oficial en [nodejs.org](https://nodejs.org/en/). Una vez que haya descargado e instalado Node.js, puede verificar la instalación ejecutando el siguiente comando en su terminal:

```bash
node --version
```

Esto debería imprimir el número de versión de Node.js de esta manera:

```bash
v20.7.0
```

## Escribiendo su primer programa Node.js

Ahora que ha instalado Node.js, escribamos nuestro primer programa Node.js. Cree un nuevo archivo llamado `hola.js` y agregue el siguiente código:

```js
console.log('¡Hola mundo!');
```

Para ejecutar este programa, abra su terminal y navegue hasta el directorio donde guardó el archivo `hola.js`. Luego ejecute el siguiente comando:

```bash
node hola.js
```

Esto debería imprimir el siguiente resultado:

```bash
'¡Hola mundo!'
```

## Escribir un servidor web simple usando Express y Node.js

Express es un marco web popular para Node.js. Proporciona una API simple y elegante para crear aplicaciones web. Usemos Express para crear un servidor web simple que responda a las solicitudes HTTP con un "¡Hola mundo!" mensaje.

Primero, necesitamos instalar Express. Para hacer esto, ejecute el siguiente comando en su terminal:

```bash
npm install express
```

Esto instalará Express y todas sus dependencias. Una vez que se complete la instalación, cree un nuevo archivo llamado `servidor.js` y agregue el siguiente código:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

app.listen(3000, () => {
  console.log('El servidor está escuchando el puerto 3000');
});
```

Este código crea una nueva aplicación Express y define una ruta para la ruta raíz (`/`). Cuando se realiza una solicitud a esta ruta, el servidor responderá con un mensaje "¡Hola mundo!".

Para ejecutar este programa, abra su terminal y navegue hasta el directorio donde guardó el archivo `servidor.js`. Luego ejecute el siguiente comando:

```bash
node servidor.js
```

Esto debería imprimir el siguiente resultado:

```bash
El servidor está escuchando el puerto 3000
```

Ahora abra su navegador web y vaya a [http://localhost:3000](http://localhost:3000). Deberías ver un mensaje "¡Hola mundo!" .
