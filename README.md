# Learn JavaScript
This book provides a basic understanding of programming and JavaScript. The foundations and core concepts are described in simple terms in an organized manner. In-depth information and notes are provided with examples to understand the topic. Exercises are also present at the end.


# Introduction

Learn JavaScript: Beginners Guide will teach you the basics of programming and JavaScript. Whether you are an experienced programmer or not, this book is intended for everyone who wishes to learn the JavaScript programming language. This book is divided into three main parts. The first 14 chapters cover the JavaScript language. The following three chapters discuss how JavaScript is used to program web browsers. The final two chapters are miscellaneous, and exercises. Various important topics and cases related to JavaScript programming are described in the Miscellaneous chapter, which is followed exercises.

### Code, and what to do with it

_Code_ is the written instructions that make up a program. Many chapters in this book contain a lot of code, and it is important to read and write code as part of learning how to program. You should not just quickly scan the examples - read them carefully and try to understand them. This may be difficult at first, but with practice, you will improve. The same goes for the exercises - make sure you actually try to write a solution before assuming you understand them. It is also helpful to try running your solutions to the exercises in a JavaScript interpreter, as this will allow you to see if your code is working correctly and may encourage you to experiment and go beyond the exercises.

### Typographic conventions

In this book, text written in a monospaced font represents elements of a program. This can be a self-contained fragment or a reference to part of a nearby program. Programs, like the one shown below, are written in this way:

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

Sometimes, the expected output of a program is written after it, preceded by two slashes with a _Result_, like this:

```javascript
console.log(txt);

// Result: txt = '45491625'
```


## Getting started
1. Clone this repository.
2. Move to `learn-javascript` directory.
3. Install dependencies using `yarn` or  `npm i`
4. Run `yarn start` command.
5. Visit http://localhost:3200 for preview

## Structure
The main contents are under the charset of each language directory . For English use `en` directory.

directory | description

    learn-javascript
    ├── _book                   # compiled version of contents 
    ├── _layouts                # layout for rendering book/website
    ├── en                      # content of book in english language
    ├── tr                      # content of book in turkish language
    ├── LANGS.md                # supported languages   
    ├── book.json               # configuration for book
    └── ...


## Edit Documents

### Edit existing documents

1. fork and clone the repository
2. edit locally
3. push and create PR

### Add new documents

Create `*.md` file under `<lang>/chapter-<n>/` directory.


## Contributing

Contributions are always welcome. Feel free to report Issue or send Pull Request.

Feel free to reach out to us at sumn2u@gmail.com, to Suman if you have any questions or feedback! Hope you find this useful 💜

