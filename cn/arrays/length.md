章节：6
页码：54
描述：数组有一个叫做 length 的属性，用来测量数组的长度。

长度（Length）

数组有一个属性叫做 length，它的意思非常直白，就是数组的长度。

let array = [1, 2, 3];

let l = array.length;

// 结果: l = 3


length 属性也可以用来设置数组的元素数量。例如：

let fruits = ["香蕉", "橙子", "苹果", "芒果"];
fruits.length = 2;

console.log(fruits);
// 结果: ['香蕉', '橙子']


你还可以使用 length 属性来获取数组的最后一个元素。例如：

console.log(fruits[fruits.length - 1]); // 结果: 橙子


你也可以使用 length 属性向数组末尾添加元素。例如：

fruits[fruits.length] = "菠萝";
console.log(fruits); // 结果: ['香蕉', '橙子', '菠萝']


{% hint style="info" %}
当数组的元素被添加或删除时，length 属性会自动更新。
{% endhint %}

值得注意的是，length 属性不是一个方法，所以在访问它时不需要使用括号。它只是数组对象的一个属性，你可以像访问其他对象属性一样访问它。