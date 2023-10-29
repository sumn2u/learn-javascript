---
layout: editorial
title: Preguntas de entrevista de JavaScript de nivel intermedio
description: 
---
<!-- markdownlint-disable-file MD025 -->
# Preguntas de entrevista de JavaScript de nivel intermedio

## 1. Bucles

### 1.1. ¿Cuál es la definición de iteración en un bucle de JavaScript?

**Respuesta:**

Una iteración en un bucle de JavaScript se refiere a cada ejecución individual del cuerpo del bucle, que normalmente corresponde a un ciclo del bucle.

### 1.2. ¿Cuáles son todas las estructuras de bucle en JavaScript?

**Respuesta:**

Bucle while: un bucle while es una declaración de flujo de control que permite que el código se ejecute repetidamente en función de una condición booleana determinada. El bucle while puede considerarse como una declaración if que se repite.

Bucle for: un bucle for proporciona una forma concisa de escribir la estructura del bucle. A diferencia de un bucle while, la declaración for consume la inicialización, la condición y el incremento/decremento en una línea, proporcionando así una estructura de bucle más corta y fácil de depurar.

Do While: un bucle do- while es similar a un bucle while con la única diferencia de que verifica la condición después de ejecutar las declaraciones y, por lo tanto, es un ejemplo de bucle de control de salida.

### 1.3. ¿Cómo funciona la declaración break en un bucle?

**Respuesta:**

La instrucción break finaliza el bucle actual o la instrucción switch y transfiere el control del programa a la instrucción que sigue a la instrucción terminada. También se puede usar para saltar más allá de una declaración etiquetada cuando se usa dentro de esa declaración etiquetada.

### 1.4. ¿Cómo funciona la declaración continue en un bucle?

**Respuesta:**

 La declaración continue es una "versión más ligera" de la declaración break. No detiene todo el ciclo; en cambio, detiene la iteración actual y obliga al bucle a iniciar una nueva (si la condición lo permite).

## 2. Declaración switch

### 2.1. ¿Qué es una declaración switch en JavaScript?

**Respuesta:**

Una declaración switch en JavaScript es una declaración de flujo de control que evalúa una expresión y ejecuta un bloque de código específico según el caso coincidente.

### 2.2. ¿Cuáles son las ventajas de emplear una declaración switch?

**Respuesta:**

Una declaración switch puede reemplazar varias comprobaciones y es más descriptiva y más fácil de leer. Las declaraciones switch mejoran la legibilidad del código, proporcionan un mejor rendimiento, simplifican los condicionales complejos, mejoran la capacidad de mantenimiento y admiten una sintaxis más limpia.

### 2.3. ¿Es importante el orden de las declaraciones de caso en una declaración switch?

**Respuesta:**

El orden de las declaraciones de caso es importante en una declaración switch, especialmente cuando se emplea un comportamiento fallido. Los casos se evalúan secuencialmente, por lo que un caso coincidente encontrado anteriormente evitará que se prueben casos posteriores, lo que afectará la ejecución y el rendimiento.

## 3. Cookies de JavaScript

### 3.1. ¿Qué son las cookies de JavaScript?

**Respuesta:**

Las cookies son pequeños archivos que se almacenan en el ordenador de un usuario. Se utilizan para almacenar una cantidad modesta de datos específicos de un cliente y un sitio web en particular y se puede acceder a ellos mediante el servidor web o desde la computadora del cliente. Cuando se inventaron las cookies, eran básicamente pequeños documentos que contenían información sobre usted y sus preferencias. Por ejemplo, cuando selecciona el idioma en el que desea ver su sitio web, el sitio web guardará la información en un documento llamado cookie en su computadora, y la próxima vez que visite el sitio web, podrá leer un cookie guardada anteriormente.

### 3.2.  ¿Cómo crear una cookie usando JavaScript?

**Respuesta:**

Para crear una cookie usando JavaScript solo necesita asignar un valor de cadena al objeto document.cookie.

```javascript
document.cookie = "key1 = value1; key2 = value2; expires = date";
```

### 3.3. ¿Cómo leer una cookie usando JavaScript?

**Respuesta:**

El valor de document.cookie se utiliza para crear una cookie. Siempre que quieras acceder a la cookie puedes utilizar la cadena. La cadena document.cookie mantiene una lista de pares nombre = valor separados por punto y coma, donde nombre es el nombre de una cookie y el valor es su valor de cadena.

### 3.4. ¿Cómo eliminar una cookie usando JavaScript?

**Respuesta:**

Eliminar una cookie es mucho más fácil que crear o leer una cookie, solo necesita configurar expires = “tiempo pasado” y asegurarse de que algo defina la ruta correcta de la cookie, a menos que pocas no le permitan eliminar la cookie.

## 4. Diálogos emergentes en JavaScript

### 4.1. ¿Cuáles son los tipos de diálogos emergentes disponibles en JavaScript?

**Respuesta:**

Hay tres tipos de diálogos emergentes disponibles en JavaScript:
Alert, Confirm, Prompt.

### 4.2. ¿Cuál es la diferencia entre un diálogo de alerta y un diálogo de confirmación?

**Respuesta:**

Un diálogo de alerta mostrará solo un botón, que es el botón Aceptar. Se utiliza para informar al usuario sobre el acuerdo que debe aceptar. Pero un diálogo de confirmación muestra dos botones Aceptar y Cancelar, donde el usuario puede decidir si está de acuerdo o no.

## 5. Funciones flecha

### 5.1. ¿Cuál es la definición de función de flecha?

**Respuesta:**

Una función de flecha es una sintaxis concisa para definir funciones anónimas en JavaScript, utilizando la notación de flecha. Ofrece una sintaxis más corta, un alcance léxico de `this` y no se puede utilizar como constructor.

### 5.2. ¿En qué se diferencian las funciones de flecha de las expresiones de funciones?

**Respuesta:**

Las funciones de flecha proporcionan una sintaxis más corta, no tienen sus propios argumentos this, super o new.target y no se pueden usar como constructores, a diferencia de las expresiones de función.

### 5.3. ¿Qué significa el enlace léxico `this` en las funciones de flecha?

**Respuesta:**

El enlace "Lexical this" en las funciones de flecha significa que no crean su propio contexto 'this'; en cambio, heredan 'this' de su entorno circundante, lo que reduce los problemas comunes relacionados con 'this'.

### 5.4. ¿Cuáles son las ventajas de utilizar funciones de flecha?

**Respuesta:**

Las ventajas de utilizar funciones de flecha en JavaScript incluyen una sintaxis más corta, retorno implícito y enlace léxico 'this'.

### 5.5. ¿Cuáles son los casos de uso comunes de las funciones de flecha?

**Respuesta:**

Las funciones de flecha se usan comúnmente para métodos de objetos, detectores de eventos, devoluciones de llamadas y otras funciones que requieren una sintaxis más corta y concisa.
