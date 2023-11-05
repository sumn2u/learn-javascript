---
chapter: 20
pageNumber: 145
---

# Server Side Rendering (SSR)

Normally, when a user visits a website, the browser sends a request to the server, which responds with HTML, CSS, and JavaScript. But with libraries like *React* and *Vue*, the server only sends a blank HTML page along with a JavaScript file. The JavaScript file then renders the page in the browser. This is called **Client Side Rendering (CSR)**.

**Server Side Rendering (SSR)** is a technique where the server processes the request and generates the HTML on the server from the React or Vue components. The server then sends the generated HTML to the browser, which can then render the page without having to wait for the JavaScript to load.

## Why use SSR?

There are several advantages to using SSR over CSR:

- **Better for SEO**: Search engines can crawl and index the content of your website more easily if it is rendered on the server. This can lead to better search engine rankings and more traffic from search engines.

- **Faster initial page load**: Since the HTML is generated on the server, the browser does not have to wait for JavaScript to load before rendering the page. This can lead to a faster initial page load time.

- **Better performance on low-end devices**: Since the HTML is generated on the server, the browser does not have to do as much work to render the page. This can lead to better performance on low-end devices, such as mobile phones and tablets.

## Disadvantages of SSR

There are also some disadvantages to using SSR:

- **More complex development process**: SSR requires more work on the server side, which can make the development process more complex.

- **More server resources**: SSR requires more server resources, which can lead to higher hosting costs.

- **Limited client-side functionality**: SSR does not allow you to use client-side libraries, such as jQuery or Bootstrap, since they are not available on the server.

## How to implement SSR?

Each library has its own way of implementing SSR. For example, for React, you can use [Next.js](https://nextjs.org/) or [Gatsby](https://www.gatsbyjs.com/). For Vue, you can use [Nuxt.js](https://nuxtjs.org/). For Svelte you can use [SvelteKit](https://kit.svelte.dev/).

## Conclusion

In this chapter, we learned about Server Side Rendering (SSR) and how it can improve the performance of your website. We also learned about the advantages of using SSR over CSR and how to implement SSR with React, Vue, and Svelte.