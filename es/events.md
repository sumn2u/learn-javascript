---
layout: editorial
chapter: 17
pageNumber: 106
description: En programación, los eventos son acciones o sucesos en un sistema sobre los que el sistema le informa para que pueda responder a ellos. Por ejemplo, cuando hace clic en el botón Restablecer, se borra la entrada.
---

# Capítulo 17

## Eventos

En programación, los _eventos_ son acciones o sucesos en un sistema sobre los que el sistema le informa para que pueda responder a ellos. Por ejemplo, cuando hace clic en el botón Restablecer, se borra la entrada.

Las interacciones del teclado, como las pulsaciones de teclas, deben leerse constantemente para captar el estado de la tecla antes de volver a soltarla. Realizar otros cálculos que requieren mucho tiempo puede hacer que no presione una tecla. Este solía ser el mecanismo de manejo de entradas de algunas máquinas primitivas. Un paso más adelante es utilizar una cola, es decir, un programa que comprueba periódicamente la cola en busca de nuevos eventos y reacciona ante ellos. Este enfoque se llama _pooling_.

El principal inconveniente de este enfoque es que tiene que mirar la cola de vez en cuando, lo que provoca interrupciones cuando se activa un evento. El mejor mecanismo para esto es notificar al código cuando ocurre un evento. Esto es lo que hacen los navegadores modernos al permitirnos registrar funciones como _controladores_ para eventos específicos.

```javascript
<p>Haz clic en mí para activar el controlador.</p>
<script>
  window.addEventListener("click", () => {
    console.log("hizo clic");
  });
</script>
```

Aquí, se llama a `addEventListener` en el objeto `window` (objeto integrado proporcionado por el navegador) para registrar un controlador para toda la `window`. Llamar a su método `addEventListener` registra el segundo argumento que se llamará cada vez que ocurra el evento descrito por su primer argumento.

{% hint style="info" %}
Los detectores de eventos se llaman solo cuando el evento ocurre en el contexto del objeto en el que están registrados.
{% endhint %}

Algunos de los eventos HTML comunes se mencionan aquí.

| Evento        | Descripción |
| ------------- | ------------|
| `onchange`    | Cuando el usuario cambia o modifica el valor de la entrada del formulario |
| `onclick`     | Cuando el usuario hace clic en el elemento. |
| `onmouseover` | Cuando el cursor del mouse pasa sobre el elemento |
| `onmouseout`  | Cuando el cursor del mouse sale del elemento. |
| `onkeydown`   | Cuando el usuario presiona y luego suelta la tecla |
| `onload`      | Cuando el navegador haya terminado de cargar|

Es común que los controladores registrados en nodos con hijos también reciban eventos de los hijos. Por ejemplo, si se hace clic en un botón dentro de un párrafo, los controladores registrados en el párrafo también recibirán el evento de clic. En caso de presencia de manejadores en ambos, el de abajo irá primero. Se dice que el evento se propaga hacia afuera, desde el nodo iniciador hasta su nodo padre y en la raíz del documento.

El controlador de eventos puede llamar al método `stopPropagation` en el objeto del evento para evitar que los controladores más arriba reciban el evento. Esto es útil en casos como, tienes un botón dentro de un elemento en el que se puede hacer clic y no deseas activar el comportamiento de clic del elemento externo al hacer clic en un botón.

```javascript
<p>Un párrafo con un <button>botón</button>.</p>
<script>
  let parrafo = document.querySelector("p"),
  boton = document.querySelector("button");
  parrafo.addEventListener("mousedown", () => {
    console.log("Manejador de párrafos.");
  });
  boton.addEventListener("mousedown", event => {
    console.log("Manejador de boton.");
    event.stopPropagation();
  });
</script> 
```

Aquí, los controladores _`mousedown`_ se registran tanto por párrafo como por botón. Al hacer clic en el botón, el controlador del botón llama a "stopPropagation", lo que evitará que se ejecute el controlador del párrafo.

Los eventos pueden tener un comportamiento predeterminado. Por ejemplo, los enlaces navegan hasta el destino del enlace al hacer clic, se navega al final de una página al hacer clic en la flecha hacia abajo, y así sucesivamente. Estos comportamientos predeterminados se pueden evitar llamando a un método `preventDefault` en el objeto del evento.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("No.");
    event.preventDefault();
  });
</script>
```

Aquí, se evita el comportamiento predeterminado del enlace al hacer clic, es decir, navegar hacia el destino del enlace.target.
