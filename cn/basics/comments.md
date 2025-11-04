---
chapter: 2
pageNumber: 12
description: Comments are used to mark annotations for other programmers or small descriptions about the code that helps others to understand it. These statement are not executed by the interpreter.
---

# 注释

注释是不会被解释器执行的语句。它们用于为其他程序员做标注或对代码的作用进行简短说明，从而让他人更容易理解你的代码。注释也可用于在不影响程序控制流的情况下临时禁用代码。

## 注释的类型

### 单行注释

单行注释以两个正斜杠（`//`）开始，并持续到该行末尾。斜杠之后的任何内容都会被 JavaScript 解释器忽略。

```javascript
// 这是一条注释，解释器会忽略它
let a = "This is a variable";
```

你也可以在行尾使用它们：

```javascript
let b = 5; // 这也是一个有效的单行注释
```

### 多行注释

多行注释以 `/*` 开始并以 `*/` 结束。两者之间的内容都会被忽略。

```javascript
/*
  这是一个多行注释。
  你可以用它来解释更复杂的逻辑
  或者暂时屏蔽一段代码。
*/
let x = 10;
```

### 现实中的注释示例

```javascript
// 修改标题：
document.getElementById("myH").innerHTML = "My First Page";

// 修改段落：
document.getElementById("myP").innerHTML = "My first paragraph.";
```

```javascript
/*
  在测试新的 UI 流程时，暂时禁用欢迎消息。
*/
 
/*
document.getElementById("myH").innerHTML = "Welcome back!";
document.getElementById("myP").innerHTML = "We're glad to see you again.";
*/
```

它们对调试也很有用：

```javascript
let total = 0;
// total = calculateTotal(items); // 测试期间暂时禁用
```

```javascript
/*
  登录问题的调试日志
  问题解决后已注释掉
*/

/*
console.log("User data:", user);
console.log("Auth token:", token);
console.log("Response from API:", response);
*/
```

在代码中包含注释对于维护代码质量、促进协作以及简化调试过程至关重要。通过为程序的各个部分提供上下文与解释，注释能让将来更容易理解代码。因此，在代码中编写注释被视为一种良好的实践。