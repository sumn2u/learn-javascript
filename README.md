# Learn JavaScript

[![GitHub issues](https://img.shields.io/github/issues/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/issues) [![GitHub forks](https://img.shields.io/github/forks/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/network)
[![GitHub stars](https://img.shields.io/github/stars/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/stargazers)
[![GitHub license](https://img.shields.io/github/license/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/sumn2u/bagchal.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsumn2u%2Flearn-javascript)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/7372/badge)](https://bestpractices.coreinfrastructure.org/projects/7372)
[![Open Source Helpers](https://www.codetriage.com/sumn2u/learn-javascript/badges/users.svg)](https://www.codetriage.com/sumn2u/learn-javascript)

**This book provides a basic understanding of programming and JavaScript. The foundations and core concepts are described in simple terms in an organized manner. In-depth information and notes are provided with examples to understand the topic. Exercises are also present at the end.**

## Table of Contents
1. [Introduction](#introduction)
2. [Typographic Conventions](#typographic-conventions)
3. [Support the Project](#support-the-project)
4. [Installation and Usage Instructions](#installation-and-usage-instructions)
5. [Structure](#structure)
6. [Contributing Guidelines](#contributing-guidelines)
7. [Contributors](#contributors)
8. [Contact Us](#contact-us)
9. [License Information](#license-information)


## 📚 Introduction <a name="introduction"></a>

**Learn JavaScript: Beginners Guide** provides a foundational understanding of programming and JavaScript. It covers the core concepts in a simple and organized manner, offering in-depth information and notes along with examples to facilitate comprehension. Each chapter includes exercises to reinforce your learning.

**What You'll Learn**

This book is designed for both novice and experienced programmers, offering a comprehensive introduction to the JavaScript programming language. It's divided into three main parts. The initial 14 chapters focus on JavaScript fundamentals, while the subsequent four chapters delve into web browser programming using JavaScript. The last two chapters are dedicated to miscellaneous topics and exercises.

**🚀 Code, and What to Do With It**

Code is the heart of any program, and this book contains numerous code examples. To master programming, it's essential to read and write code diligently. Don't rush through the examples; take your time to understand them thoroughly. The same applies to the exercises – attempt to solve them before checking the solutions. Consider running your code in a JavaScript interpreter to ensure it works correctly. Experimenting and going beyond the exercises will enhance your skills.

By adding emojis and organizing the content, you can make the text more engaging and visually appealing.

## Typographic conventions

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

## Support the Project <a name="support-the-project"></a>⭐

If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us get visibility and allow the community to grow. 🙏

<img alt="star_us" width="250" src="./star_us.gif">

## Installation and Usage Instructions
To get started with this project, follow these steps:
1. Clone this repository.
2. Move to the 'learn-javascript' directory.
3. Install dependencies using `yarn` or `npm install`.
4. Run `yarn start` command.
5. Visit http://localhost:4000 for a preview.
   
## Structure
The main contents are under the charset of each language directory . For English, use `en` directory.

directory | description

    learn-javascript
    ├── _book                   # compiled version of contents
    ├── _layouts                # layout for rendering book/website
    ├── en                      # content of book in english language
    ├── fr                      # content of book in french language
    ├── np                      # content of book in nepali language
    ├── tr                      # content of book in turkish language
    ├── LANGS.md                # supported languages
    ├── book.json               # configuration for book
    └── ...


 
## Contributing Guidelines
Contributions to this project are welcome. If you want to contribute, follow these steps:
1. Create an issue to discuss your proposed changes or improvements.
2. Fork and clone the repository.
3. Make your changes locally.
4. Push your changes and create a pull request.

**Tips**

*For Adding new documents* : Create `*.md` file under `<lang>/chapter-<n>/` directory.

## Contributors
We would like to thank the open-source community for their valuable contributions to this project

[![](https://contributors-img.web.app/image?repo=sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/graphs/contributors)



## Contact Us
If you have any questions or feedback, please don't hesitate to contact us at sumn2u@gmail.com, or reach out to Suman directly. We hope you find this resource helpful 💜.


## License Information
This project is licensed under the  [Apache License 2.0](./LICENSE) , which means that you are free to use, modify, and distribute the code as long as you comply with the terms of the license.
