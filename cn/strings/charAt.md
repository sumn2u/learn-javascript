---
chapter: 4
pageNumber: 37
---

# CharAt

`str.charAt()` 方法返回字符串中指定索引位置处的字符，该索引表示类似数组元素的位置。
* 使用 `charAt()` 方法
* 使用模板字符串 `(``)`（在 [ES6](../es6-concepts/template-literals.md) 中引入）

`charAt()` 方法接收以下内容：

* **arguments（参数）**：此函数唯一的参数是字符串中的索引位置，用于指定要提取的单个字符。  

* **index（索引）**：该索引的取值范围是从 `0` 到 `length – 1`。如果未指定索引，则默认使用索引 `0`，返回字符串的第一个字符。  

* **return value（返回值）**：返回位于函数参数所指定索引位置的单个字符。如果索引超出范围，则该函数返回空字符串。

```javascript
//Example 1:
function func() {
	// 原始字符串
	let str = 'JavaScript is object oriented language';

	// 查找给定索引处的字符
	let value = str.charAt(0);
	let value1 = str.charAt(4);
	console.log(value);
	console.log(value1);
}
func();

//Output
j
s

//Example 2: 
function func() {

	// 原始字符串
	let str = 'JavaScript is object oriented language';

	// 查找给定索引处的字符
	let value = str.charAt(9);
	console.log(value);
}
func();


//Output
t
```