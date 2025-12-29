---
chapter: 6
pageNumber: 44
description: 数组有一个名为 length 的属性，用于测量数组的长度（元素数量）。
---

# 长度（Length）

数组有一个名为 `length` 的属性，它的含义正如其名——表示数组的长度。

```javascript
let array = [1, 2, 3];

let l = array.length;

// 结果：l = 3
```

length 属性也可以用来设置数组中元素的数量。例如：

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2;

console.log(fruits);
// 结果：['Banana', 'Orange']
```

你还可以将 length 作为索引来获取数组中的最后一个元素。例如：

```javascript
console.log(fruits[fruits.length - 1]); // 结果：Orange
```

你也可以使用 length 属性向数组末尾添加元素。例如：

```javascript
fruits[fruits.length] = "Pineapple";
console.log(fruits); // 结果：['Banana', 'Orange', 'Pineapple']
```

{% hint style="info" %}
当数组中的元素被添加或删除时，`length` 属性会自动更新。
{% endhint %}

还需要注意的是，`length` 是一个属性，而不是方法，因此在访问它时不需要使用括号。它只是数组对象的一个属性，你可以像访问其他对象属性一样访问它。