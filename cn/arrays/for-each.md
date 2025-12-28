章节：6
页码：46
描述：forEach 方法会对数组中的每一个数组元素执行一次所提供的函数。


# 对每一个元素

`forEach` 方法会对数组中的每一个元素执行一次所提供的函数。以下是使用 `forEach` 的语法：

```javascript
array.forEach(function(element, index, array) {
  // element：当前正在处理的数组元素
  // index：当前正在处理的数组元素的索引
  // array：调用 forEach 方法的原数组
});
```

例如，假设你有一个数字数组，并希望在控制台中输出每个数字的两倍，可以使用 `forEach` 如下所示：

```typescript
let 数字 = [1, 2, 3, 4, 5];
数字.forEach(function(数值) {
  console.log(数值 * 2);
});
```

你也可以使用箭头函数语法来定义传递给 `forEach` 的函数：

```typescript
数字.forEach((数值) => {
  console.log(数值 * 2);
});
```

或者：

```typescript
数字.forEach(数值 => console.log(数值 * 2));
```

`forEach` 方法不会改变原始数组。它只是遍历数组中的元素，并对每一个元素执行所提供的函数。

{% hint style="working" %}
`forEach()` 方法不会对空数组执行回调函数。
{% endhint %}
