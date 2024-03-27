---
chapter: 20
pageNumber: 143
---

# Node.js

**Node.js** is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on top of the V8 JavaScript engine, which is the same engine used by Google Chrome. Node.js is open-source and cross-platform, which means it can run on Windows, macOS, and Linux.

## Node.js is not a programming language

Many people mistakenly believe that Node.js is a programming language. This is not true. Node.js is a JavaScript runtime environment, which means it provides an environment for JavaScript code to run. It is not a programming language itself.

Node.js is **not** the only JavaScript runtime environment. There are many others, including Deno, Nashorn, and most recently, Bun. But Node.js is by far the most popular and widely used JavaScript runtime environment.

## Getting started with Node.js

To get started with Node.js, you will need to install it on your computer. You can download the latest version of Node.js from the official website at [nodejs.org](https://nodejs.org/en/). Once you have downloaded and installed Node.js, you can verify the installation by running the following command in your terminal:

```bash
node --version
```

This should print the version number of Node.js like this:

```bash
v20.7.0
```
## Running the Node.js REPL

REPL stands for Read Evaluate Print Loop, and allows you to run code from the terminal.
Type into your terminal this command:

```bash
node
```
In this prompt, you can run code, like this:

```js
> console.log("Hello World")
```
You can leave the REPL by typing CTRL + d

## Writing your first Node.js program

Now that you have installed Node.js, let's write our first Node.js program. Create a new file called `hello.js` and add the following code:

```js
console.log('Hello World!');
```

To run this program, open your terminal and navigate to the directory where you saved the `hello.js` file. Then run the following command:

```bash
node hello.js
```

This should print the following output:

```bash
Hello World!
```

## Writing a simple web server using Express and Node.js

Express is a popular web framework for Node.js. It provides a simple and elegant API for building web applications. Let's use Express to create a simple web server that will respond to HTTP requests with a "Hello World!" message.

But before we install Express, we must first run this in order to set up npm, javascript's package manager:

```bash
npm init
```

Then, you install express

```bash
npm install express
```

This will install Express and all its dependencies. Once the installation is complete, create a new file called `server.js` and add the following code:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

This code creates a new Express application and defines a route for the root path (`/`). When a request is made to this route, the server will respond with a "Hello World!" message.

To run this program, open your terminal and navigate to the directory where you saved the `server.js` file. Then run the following command:

```bash
node server.js
```

This should print the following output:

```bash
Server is listening on port 3000
```

Now open your web browser and go to [http://localhost:3000](http://localhost:3000). You should see a "Hello World!" message.

