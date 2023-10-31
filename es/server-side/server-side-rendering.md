---
chapter: 20
pageNumber: 105
---

# Renderizado del lado del servidor (SSR)

Normalmente, cuando un usuario visita un sitio web, el navegador envía una solicitud al servidor, que responde con HTML, CSS y JavaScript. Pero con bibliotecas como *React* y *Vue*, el servidor solo envía una página HTML en blanco junto con un archivo JavaScript. Luego, el archivo JavaScript muestra la página en el navegador. Esto se llama **Representación del lado del cliente (CSR)**.

**Server Side Rendering (SSR)** es una técnica en la que el servidor procesa la solicitud y genera el HTML en el servidor a partir de los componentes React o Vue. Luego, el servidor envía el HTML generado al navegador, que luego puede representar la página sin tener que esperar a que se cargue JavaScript.

## ¿Porqué usar SSR?

Existen varias ventajas al utilizar SSR sobre CSR:

- **Mejor para SEO**: los motores de búsqueda pueden rastrear e indexar el contenido de su sitio web más fácilmente si se representa en el servidor. Esto puede conducir a una mejor clasificación en los motores de búsqueda y a más tráfico de los motores de búsqueda.

- **Carga de página inicial más rápida**: dado que el HTML se genera en el servidor, el navegador no tiene que esperar a que se cargue JavaScript antes de representar la página. Esto puede conducir a un tiempo de carga inicial de la página más rápido.

- **Mejor rendimiento en dispositivos de gama baja**: dado que el HTML se genera en el servidor, el navegador no tiene que trabajar tanto para representar la página. Esto puede conducir a un mejor rendimiento en dispositivos de gama baja, como teléfonos móviles y tabletas.

## Desventajas de SSR

También existen algunas desventajas al usar SSR:

- **Proceso de desarrollo más complejo**: SSR requiere más trabajo en el lado del servidor, lo que puede hacer que el proceso de desarrollo sea más complejo.

- **Más recursos del servidor**: SSR requiere más recursos del servidor, lo que puede generar mayores costos de alojamiento.

- **Funcionalidad limitada del lado del cliente**: SSR no permite utilizar bibliotecas del lado del cliente, como jQuery o Bootstrap, ya que no están disponibles en el servidor.

## ¿Cómo implementar SSR?

Cada biblioteca tiene su propia forma de implementar SSR. Por ejemplo, para React, puede usar [Next.js](https://nextjs.org/) o [Gatsby](https://www.gatsbyjs.com/). Para Vue, puede utilizar [Nuxt.js](https://nuxtjs.org/). Para Svelte puedes usar [SvelteKit](https://kit.svelte.dev/).

## Conclusión

En este capítulo, aprendimos sobre la representación del lado del servidor (SSR) y cómo puede mejorar el rendimiento de su sitio web. También aprendimos sobre las ventajas de usar SSR sobre CSR y cómo implementar SSR con React, Vue y Svelte.
