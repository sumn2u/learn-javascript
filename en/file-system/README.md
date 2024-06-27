---
chapter: 24
pageNumber: 242
description:
---

# Chapter 24
# File system
Filesystem operations in JavaScript are used to interact with the file system of the host environment, which can be a web browser (client-side JavaScript) or a server (Node.js). JavaScript provides various APIs and methods for reading from and writing to the file system. These operations are essential for tasks like saving data, reading configuration files, and processing user-uploaded files. Below is an overview of filesystem operations in JavaScript:
#### Asynchronous and Non-Blocking I/O:

In Node.js, I/O operations can be performed asynchronously, meaning that they don't block the execution of the program. Instead, they are placed in a queue, and the program continues executing other tasks. When the I/O operation is completed, a callback function is called to handle the result. This is particularly useful for I/O operations that may take a significant amount of time.

#### Read:
In this example, you are using the `fs.readFile` function to read data from the **test.txt** file asynchronously. It takes a callback function that gets executed when the read operation is finished. The `console.log("This gets printed at First")` line is executed immediately after initiating the read operation, and it doesn't wait for the reading to complete.

```javascript
const fs= require('fs');
//async
//non  blokcing i/0 thats why runs at last as ti takes moer time
fs.readFile('test.txt','utf8',(err,data) => {
    console.log(err,data)
})
console.log("This gets printed at First")
```

#### Write:
Here, you use fs.writeFile to write data to the 'test.txt' file asynchronously. The callback function is executed when the write operation is finished. It prints `"This runs after writing in a file: written to file"` after the write operation is complete.

```javascript
fs.writeFile("test.txt","mahima is good girl", () => {
    console.log("This runs after writting in a file: written to file")
})
```

### Synchronous I/O:

Synchronous I/O operations block the execution of the program until the operation is finished. In Node.js, synchronous operations should be used sparingly, especially for file I/O, as they can lead to performance issues and block the event loop.

#### Read:
The `fs.readFileSync` function is used for synchronous file reading. It blocks the execution until the entire file is read, and then it continues with the rest of the code. This is generally not recommended because it can cause the program to become unresponsive during the file read.

```javascript
const a=fs.readFileSync("test.txt") //nodejs intetntionally blocks
console.log(a.toString())
console.log("At last")
```

#### Write:
`fs.writeFileSync` is used for synchronous file writing. It blocks the program's execution until the write operation is complete. Again, this should be used cautiously, as it can block the program for an extended period during the write operation.



```javascript
fs.writeFileSync("test.txt","mahima is good girl",() => {    
    console.log("This is sync: intentionally process is blocked ")
}) 

```
Node.js provides both synchronous and asynchronous file I/O options. Asynchronous I/O is typically preferred for better performance and responsiveness, while synchronous I/O is used only when necessary and with caution, as it can block the program's execution.