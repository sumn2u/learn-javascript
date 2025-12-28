章节：6
页码：60
描述：JavaScript 的 arr.slice() 方法返回一个包含原数组部分元素的新数组，原数组保持不变。

Slice

slice 方法接受两个参数：begin 和 end。

begin：定义要提取的起始索引。如果省略该参数，默认从索引 0 开始。

end：定义要提取的结束索引（不包括该索引）。如果省略该参数，默认提取到数组末尾。如果 end 大于数组长度，则 end 自动取数组长度。

function func() {
  // 原数组
  let arr = [23, 56, 87, 32, 75, 13];
  // 提取的新数组
  let new_arr = arr.slice();
  console.log(arr);
  console.log(new_arr);
}
func();

// 结果: 
[23, 56, 87, 32, 75, 13]
[23, 56, 87, 32, 75, 13]


slice() 方法会将对象的引用复制到新数组（例如嵌套数组或对象）。因此，如果引用对象被修改，这些修改会在返回的新数组中可见。

let human = {
  name: "David",
  age: 23,
};

let arr = [human, "Nepal", "Manager"];
let new_arr = arr.slice();

// 原始对象
console.log(arr[0]); // { name: 'David', age: 23 }

// 修改新数组中的对象
new_arr[0].name = "Levy";

// 修改在原数组中也可见
console.log(arr[0]); // { name: 'Levy', age: 23 }