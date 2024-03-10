# Learn JavaScript

[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)
[![GitHub issues](https://img.shields.io/github/issues/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/issues) [![GitHub forks](https://img.shields.io/github/forks/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/network)
[![GitHub stars](https://img.shields.io/github/stars/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/stargazers)
[![GitHub license](https://img.shields.io/github/license/sumn2u/learn-javascript)](https://github.com/sumn2u/learn-javascript/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/sumn2u/bagchal.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsumn2u%2Flearn-javascript)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/7372/badge)](https://bestpractices.coreinfrastructure.org/projects/7372)
[![Open Source Helpers](https://www.codetriage.com/sumn2u/learn-javascript/badges/users.svg)](https://www.codetriage.com/sumn2u/learn-javascript)

## Overview

**This book offers a comprehensive introduction to programming and JavaScript, designed to impart fundamental knowledge in a clear and organized manner. Its content delves into foundational principles and core concepts, presented in simple language to facilitate easy comprehension. The book is thoughtfully structured, providing in-depth explanations and accompanying notes enriched with illustrative examples, thereby enhancing the reader's understanding of the subject matter.

Furthermore, the inclusion of practical exercises at the end of each section adds significant value to the learning experience, allowing readers to apply the acquired knowledge and reinforce their skills. This thoughtful combination of theoretical explanations, real-world examples, and hands-on exercises ensures a well-rounded educational approach, making the book an invaluable resource for beginners looking to grasp the essentials of programming and JavaScript in a professional and systematic manner.**

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

**What You'll Learn** 😎

This meticulously crafted book caters to a diverse audience, ranging from novice learners taking their first steps into the world of programming to seasoned developers seeking to enhance their skills specifically in the domain of JavaScript. Its strength lies in providing a thorough and inclusive initiation into the JavaScript programming language.

The book's structure is intelligently organized into three distinct sections, each catering to different aspects of JavaScript learning. The first part, comprising the initial 14 chapters, meticulously covers the fundamental concepts of JavaScript. These chapters are designed to build a strong foundation, ensuring that readers, regardless of their prior experience, grasp the core principles of the language comprehensively.

Moving forward, the subsequent four chapters transition seamlessly into the realm of web browser programming using JavaScript. This section not only imparts theoretical knowledge but also provides practical insights into real-world applications, enabling readers to understand how JavaScript functions within the context of web development.

The book doesn't merely stop at the basics; it goes the extra mile by dedicating the final two chapters to miscellaneous topics that are pivotal in mastering JavaScript. 

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
    ├── books                   # books in pdf and epub formats with translation
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
