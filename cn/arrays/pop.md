---
章节: 6
页码: 52
描述: pop 方法会移除数组的最后一个元素，并返回该元素。该方法会改变数组的长度。
---

# Pop

`pop()` 方法会移除数组的最后一个元素，并返回该元素。  
此方法会**直接修改原数组**，并改变数组的长度。

`语法`:
```javascript
array.pop();
```

`示例`:
```javascript
let arr = ["一", "二", "三", "四", "五"];

arr.pop();

console.log(arr);
// 结果：['一', '二', '三', '四']
```

你也可以结合循环使用 `pop()` 方法来移除数组中的所有元素：

```javascript
let array = ["a", "b", "c"];

while (array.length > 0) {
  array.pop();
}

console.log(array);
// 结果：[]
```

{% hint style="working" %}
`pop()` 方法只适用于数组，而不适用于类数组对象（如 arguments 或 NodeList）。
如果需要操作这些对象，可以先使用 `Array.prototype.slice()` 将它们转换为真正的数组。
{% endhint %}