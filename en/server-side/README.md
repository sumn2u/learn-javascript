---
layout: editorial
chapter: 20
pageNumber: 141
---

# Chapter 20

# Server Side Code

**Server-side code** refers to the code that runs on a *web server* rather than in a user's web browser. It is responsible for processing requests from clients (typically web browsers) and generating dynamic web pages or providing data to the client.

**Client-side code** refers to the code that runs in a user's *web browser* rather than on a web server. It is responsible for generating the user interface and handling user interactions. Client-side code is typically written in JavaScript and is executed by the browser.

## Why do we need server-side code?

Server-side code is essential in web development for several reasons:

- **Security**: Server-side code is not visible to the user, so it is more secure than client-side code. 
- **Performance**: Server-side code can be used to perform computationally expensive tasks, such as data processing, without affecting the user's experience.
- **Data Storage**: Server-side code can be used to store data in a database, which can then be accessed by the client-side code.
- **User Authentication**: Server-side code can be used to authenticate users and restrict access to certain parts of the website.
- **Dynamic Content**: Server-side code can be used to generate dynamic web pages, which can be customized for each user.

## Server-side vs. Client-side

The differences are summarized in the table below:

| Server-side Code | Client-side Code |
| ----------- | ----------- |
| Runs on a web server | Runs in a web browser |
| Has access to server resources (file system, databases, etc.). | Has access to client resources (cookies, local storage, etc.). |
| Can be written in a variety of languages (PHP, Python, Ruby, Java, C#, etc.). | Can only be written in JavaScript. |
| May use server-side rendering (SSR) to generate HTML on the server. | Uses client-side rendering (CSR) to generate HTML in the browser. |
| Better for SEO as content is readily available for search engines. | Worse for SEO as content is not readily available for search engines. |
| Can leverage caching and Content Delivery Networks (CDNs) for performance. | Limited control over caching, relies on browser cache. |

## Why use JavaScript for server-side code?

Unlike client-side code, which can only be written in JavaScript, server-side code can be written in a variety of languages, including PHP, Python, Ruby, Java, C#, and many more. So why use JavaScript for server-side code? There are several reasons:

- **Unified Language**: Developers can use the same language and programming paradigms throughout the entire application stack, which can lead to code reusability and easier collaboration among front-end and back-end developers.

- **Large Ecosystem**: JavaScript has a vast ecosystem of libraries and packages available through npm (Node Package Manager). This rich ecosystem simplifies the development process by providing pre-built modules for various functionalities, from server routing to database connectivity.

- **JSON**: JavaScript Object Notation (JSON) is a popular data format that is used to transmit data between a server and a web application. JSON is based on JavaScript, so it is easy to work with JSON data in JavaScript.

Up next, we will learn how to use JavaScript for server-side code with Node.js and how to use Server Side Rendering (SSR) to generate HTML on the server.

In this chapter, we will explore following topics:
* [Node.js](./nodejs.md)
* [Server Side Rendering (SSR)](./server-side-rendering.md)