章节：6
页码：57
描述：sort 方法按特定顺序对数组的元素进行排序。默认情况下，它会将元素作为字符串排序，并根据 UTF-16 编码值升序排列。

Sort

sort 方法可以按特定顺序（升序或降序）对数组元素进行排序。默认情况下，sort 方法会将元素作为字符串排序，并根据 UTF-16 编码值升序排列。

sort 的语法如下：

array.sort([compareFunction]);


compareFunction 参数是可选的，用于定义排序顺序的函数。如果省略，元素将按字符串表示的升序排列。

例如：

let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort(); 

console.log(sortedCity);

// 结果: ['Barcelona', 'California', 'Kathmandu', 'Paris']


{% hint style="info" %}
数字排序时可能会出现错误。例如，"35" 会被认为比 "100" 大，因为字符串比较按字符顺序比较，"3" 大于 "1"。
{% endhint %}

为了解决数字排序问题，可以使用比较函数。比较函数根据参数返回 负值、零 或 正值 来定义排序顺序：

返回负值：表示 a 应该排在 b 前面

返回正值：表示 a 应该排在 b 后面

返回 0：表示 a 和 b 相等，顺序无关紧要

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);

// 结果: [1, 5, 10, 25, 40, 100]


{% hint style="working" %}
sort() 方法会覆盖原数组。
{% endhint %}