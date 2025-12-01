---
layout: editorial
chapter: 4
pageNumber: 30
---

# 第4章
# 字符串

JavaScript 字符串在很多方面与其他高级语言中的字符串实现类似。它们用于表示基于文本的消息和数据。在本课程中，我们将讲解基础内容，包括如何创建新的字符串以及在其上执行常见操作。

下面是一个字符串示例：

```
"Hello World"
```

字符串的索引从 0 开始，这意味着第一个字符的位置是 `0`，后续字符依次递增。字符串支持多种方法，这些方法会返回一个新值。下面对这些方法进行说明。

| Name                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `charAt()`           | 返回指定索引位置的字符                                 |
| `charCodeAt()`       | 返回指定索引位置字符的 Unicode 值                      |
| `concat()`           | 返回两个或多个连接后的字符串                           |
| `constructor`        | 返回字符串的构造函数                                   |
| `endsWith()`         | 检查字符串是否以指定值结尾                             |
| `fromCharCode()`     | 根据给定的 Unicode 值返回对应字符                      |
| `includes()`         | 检查字符串是否包含指定值                               |
| `indexOf()`          | 返回指定值第一次出现的索引                             |
| `lastIndexOf()`      | 返回指定值最后一次出现的索引                           |
| `length`             | 返回字符串的长度                                       |
| `localeCompare()`    | 根据本地化规则比较两个字符串                           |
| `match()`            | 根据给定的值或正则表达式匹配字符串                     |
| `prototype`          | 用于给对象添加属性和方法                               |
| `repeat()`           | 返回由指定次数重复组成的新字符串                       |
| `replace()`          | 返回一个新字符串，其中的值根据正则表达式或指定值被替换 |
| `search()`           | 根据字符串与给定值或正则表达式的匹配结果返回索引       |
| `slice()`            | 返回包含部分原始内容的子字符串                         |
| `split()`            | 将字符串拆分为子字符串数组                             |
| `startsWith()`       | 检查字符串是否以指定字符或子串开头                     |
| `substr()`           | 从起始索引处提取部分字符串                             |
| `substring()`        | 在两个索引之间提取部分字符串                           |
| `toLocalLowerCase()` | 根据主机的本地化设置，将字符串转换为小写并返回         |
| `toLocalUpperCase()` | 根据主机的本地化设置，将字符串转换为大写并返回         |
| `toLowerCase()`      | 返回转换为小写形式的字符串                             |
| `toString()`         | 以字符串形式返回该值或字符串对象                       |
| `toUpperCase()`      | 返回转换为大写形式的字符串                             |
| `trim()`             | 返回删除首尾空白符后的字符串                           |
| `trimEnd()`          | 返回删除末尾空白符后的字符串                           |
| `trimStart()`        | 返回删除开头空白符后的字符串                           |
| `valueOf()`          | 返回字符串或字符串对象的原始值                         |


在本章中，我们将探讨以下主题：
* [CharAt](./charAt.md)
* [Concat](./concat.md)
* [Create](./create.md)
* [Length](./length.md)
* [Replace](./replace.md)
* [Split](./split.md)
* [Substring](./substring.md)
