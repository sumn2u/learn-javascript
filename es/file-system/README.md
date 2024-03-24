---
chapter: 24
pageNumber: 242
description:
---

# Capítulo 24

## Sistema de Ficheros

Las operaciones del sistema de ficheros en JavaScript se usan para interactuar con el sistema de ficheros del entorno del anfitrión, que puede ser un navegador web (JavaScript del lado del cliente) o un servidor (Node.js). JavaScript proporciona varios IPAs y métodos para leer y escribir en un sistema de ficheros. Estas operaciones son esenciales para tareas como salvar datos, leer archivos de configuración, y procesar archivos cargados por el usuario. Abajo hay una introducción de las operaciones del sistema de ficheros
en JavaScript:

### E/S asíncrona y no bloqueante

En Node.js, las operaciones de E/S pueden ser realizadas de forma asíncrona, lo que significa que estas no bloquearán la ejecución del programa. En vez de eso, se colocan en una cola, y el programa continúa ejecutando otras tareas. Cuando la operación de E/S se completa, un función de retrollamada se llama para manejar el resultado. Esto es particularmente útil para operaciones de E/S que pueden tardar un cantidad significativa de tiempo.

#### Lectura

En este ejemplo, está usando la función fs.readFile para leer datos del archivo 'test.txt' de forma asíncrona. Toma una función de retrollamada que será ejecutada cuando finalize la operación de lectura. La línea console.log("Esto se imprime lo primero") se ejecuta inmediatamente después de iniciar la operación de lectura, y no espera a que la lectura se complete.

```javascript
const fs= require('fs');
//asíncrono
//sin bloqueo i/0 es por eso que finalmente se ejecuta, ya que lleva más tiempo
fs.readFile('test.txt','utf8',(err,data) => {
    console.log(err,data)
})
console.log("Esto se imprime lo primero")
```

#### Escritura

Aquí, usa fs.writeFile para escribir datos en el archivo 'test.txt' de forma asíncrona. La función de retrollamada se ejecuta cuando la operación de escritura se termina. Se imprime "Esto se ejecuta después de escribir en un archivo: escrito en un archivo" después de que la operación de escritura se haya completado.

```javascript
fs.writeFile("test.txt","mahima es un buena chica", () => {
    console.log("Esto se ejecuta después de escribir en un archivo: escrito en un archivo")
})
```

### E/S Síncrona

Las operaciones de E/S síncronas bloquean la ejecución del programa hasta que finaliza la operación. En Node.js, las operaciones sincrónicas deben usarse con moderación, especialmente para la E/S de archivos, ya que pueden provocar problemas de rendimiento y bloquear el bucle de eventos.

#### Lectura síncrona

La función fs.readFileSync se utiliza para la lectura de archivos sincrónica. Bloquea la ejecución hasta que se lee el archivo completo y luego continúa con el resto del código. Por lo general, esto no se recomienda porque puede hacer que el programa deje de responder durante la lectura del archivo.

```javascript
const a=fs.readFileSync("test.txt") // Node.js bloquea intencionalmente
console.log(a.toString())
console.log("Por fin")
```

#### Escritura síncrona

fs.writeFileSync se utiliza para la escritura de archivos sincrónica. Bloquea la ejecución del programa hasta que se completa la operación de escritura. Nuevamente, esto debe usarse con precaución, ya que puede bloquear el programa durante un período prolongado durante la operación de escritura.

```javascript
fs.writeFileSync("test.txt","mahima es buena chica",() => {    
    console.log("Esto es sincronización: el proceso está bloqueado intencionalmente")
}) 

```

En resumen, Node.js proporciona opciones de E/S de archivos tanto síncronas como asíncronas. Normalmente se prefiere la E/S asíncrona para un mejor rendimiento y capacidad de respuesta, mientras que la E/S síncrona se utiliza sólo cuando es necesario y con precaución, ya que puede bloquear la ejecución del programa.
