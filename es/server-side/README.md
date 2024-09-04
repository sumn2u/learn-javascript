---
layout: editorial
chapter: 20
pageNumber: 141
---

# Capítulo 20

## Código del lado del servidor

**Código del lado del servidor** se refiere al código que se ejecuta en un *servidor web* en lugar de en el navegador web de un usuario. Es responsable de procesar las solicitudes de los clientes (normalmente navegadores web) y generar páginas web dinámicas o proporcionar datos al cliente.

**Código del lado del cliente** se refiere al código que se ejecuta en el *navegador web* de un usuario en lugar de en un servidor web. Es responsable de generar la interfaz de usuario y manejar las interacciones del usuario. El código del lado del cliente normalmente está escrito en JavaScript y lo ejecuta el navegador.

## ¿Por qué necesitamos código del lado del servidor?

El código del lado del servidor es esencial en el desarrollo web por varias razones:

- **Seguridad**: el código del lado del servidor no es visible para el usuario, por lo que es más seguro que el código del lado del cliente.
- **Rendimiento**: el código del lado del servidor se puede utilizar para realizar tareas computacionalmente costosas, como el procesamiento de datos, sin afectar la experiencia del usuario.
- **Almacenamiento de datos**: el código del lado del servidor se puede utilizar para almacenar datos en una base de datos, a la que luego se puede acceder mediante el código del lado del cliente.
- **Autenticación de usuario**: el código del lado del servidor se puede utilizar para autenticar a los usuarios y restringir el acceso a ciertas partes del sitio web.
- **Contenido dinámico**: el código del lado del servidor se puede utilizar para generar páginas web dinámicas, que se pueden personalizar para cada usuario.

## Del lado del servidor frente al lado del cliente

Las diferencias se resumen en la siguiente tabla:

| Código del lado del servidor | Código del lado del cliente |
| ----------- | ----------- |
| Se ejecuta en un servidor web | Se ejecuta en un navegador web |
| Tiene acceso a los recursos del servidor (sistema de archivos, bases de datos, etc.). | Tiene acceso a los recursos del cliente (cookies, almacenamiento local, etc.). |
| Puede escribirse en una variedad de lenguajes (PHP, Python, Ruby, Java, C#, etc.). | Sólo se puede escribir en JavaScript. |
| Puede utilizar renderizado del lado del servidor (SSR) para generar HTML en el servidor. | Utiliza renderizado del lado del cliente (CSR) para generar HTML en el navegador. |
| Mejor para SEO ya que el contenido está fácilmente disponible para los motores de búsqueda. | Peor para el SEO, ya que el contenido no está disponible para los motores de búsqueda. |
| Puede aprovechar el almacenamiento en caché y las redes de entrega de contenido (CDN) para mejorar el rendimiento. | Control limitado sobre el almacenamiento en caché, depende del caché del navegador. |

## ¿Por qué utilizar JavaScript para el código del lado del servidor?

A diferencia del código del lado del cliente, que sólo se puede escribir en JavaScript, el código del lado del servidor se puede escribir en una variedad de lenguajes, incluidos PHP, Python, Ruby, Java, C# y muchos más. Entonces, ¿por qué utilizar JavaScript para el código del lado del servidor? Hay varias razones:

- **Lenguaje unificado**: los desarrolladores pueden utilizar el mismo lenguaje y paradigmas de programación en toda la pila de aplicaciones, lo que puede conducir a la reutilización del código y una colaboración más sencilla entre los desarrolladores de front-end y back-end.

- **Gran ecosistema**: JavaScript tiene un vasto ecosistema de bibliotecas y paquetes disponibles a través de npm (Node Package Manager). Este rico ecosistema simplifica el proceso de desarrollo al proporcionar módulos prediseñados para diversas funcionalidades, desde enrutamiento de servidores hasta conectividad de bases de datos.

- **JSON**: La Notación de Objetos JavaScript (JSON) es un formato de datos popular que se utiliza para transmitir datos entre un servidor y una aplicación web. JSON se basa en JavaScript, por lo que es fácil trabajar con datos JSON en JavaScript.

A continuación, aprenderemos cómo usar JavaScript para el código del lado del servidor con Node.js y cómo usar Server Side Rendering (SSR) para generar HTML en el servidor.

En este capítulo, exploraremos los siguientes temas:

- [Node.js](./nodejs.md)
- [Renderizado del lado del servidor (SSR)](./server-side-rendering.md)
