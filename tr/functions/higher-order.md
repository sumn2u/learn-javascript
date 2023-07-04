---
chapter: 8
pageNumber: 54
---

# Higher order (Yüksek dereceli Fonksiyonlar)

Daha yüksek dereceli fonksiyonlar, diğer fonksiyonları kullanabilen fonksiyonlardır. Örneğin, bir high order fonksiyon diğer fonksiyonları argüman olarak alabilir ve/veya geri dönüş değeri olarak bir fonksiyon üretebilir. Bu tür _fancy_ (_havalı_) fonksiyonel teknikler JavaScript'te ve Python, Lisp gibi diğer yüksek seviyeli dillerde kullanabileceğiniz güçlü yapılardır.

Şimdi `add_2` ve `double` adında iki basit fonksiyon ve `map` adında daha yüksek dereceli bir fonksiyon oluşturacağız. map`iki argüman kabul edecek,`func`ve`list` ve bir dizi döndürecek. func` (ilk argüman), `list` (ikinci argüman) dizisindeki her bir elemana uygulanacak bir fonksiyon olacaktır.

```javascript
// add_2 ve double fonksiyonlarını tanımlayalım
let add_2 = function (x) {
  return x + 2;
};
let double = function (x) {
  return 2 * x;
};

// map 2 argüman kabul eden harika bir fonksiyondur:
//  func    çağrılacak fonksiyon
//  list    üzerinde func çağrılacak değerler dizisi
let map = function (func, list) {
  let output = []; // output list
  for (idx in list) {
    output.push(func(list[idx]));
  }
  return output;
};

map(add_2, [5, 6, 7]); // => [7, 8, 9]
map(double, [5, 6, 7]); // => [10, 12, 14]
```

Yukarıdaki örnekteki fonksiyonlar basittir. Ancak, diğer fonksiyonlara argüman olarak aktarıldıklarında, daha karmaşık fonksiyonlar oluşturmak için beklenmedik şekillerde bir araya getirilebilirler.

Örneğin, kodumuzda `map(add_2, ...)` ve `map(double, ...)` çağrılarını çok sık kullandığımız için, istediğimiz işlemi içlerinde barındıran iki özel amaçlı liste işleme fonksiyonu oluşturmak istediğimize karar verebiliriz. Fonksiyon oluşturmak için aşağıdaki gibi yapabiliriz:

```javascript
process_add_2 = function (list) {
  return map(add_2, list);
};
process_double = function (list) {
  return map(double, list);
};
process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Şimdi girdi olarak bir fonksiyonu alan ve listedeki her girdiye `func` uygulayan bir fonksiyon döndüren `buildProcessor` adında bir fonksiyon oluşturalım.

```javascript
// a function that generates a list processor that performs
let buildProcessor = function (func) {
  let process_func = function (list) {
    return map(func, list);
  };
  return process_func;
};
// calling buildProcessor returns a function which is called with a list input

// using buildProcessor we could generate the add_2 and double list processors as follows:
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Şimdi başka bir örneğe bakalım. Girdi olarak bir `x` sayısı alan ve argümanını `x` ile çarpan bir fonksiyon döndüren `buildMultiplier` adında bir fonksiyon oluşturalım:

```javascript
let buildMultiplier = function (x) {
  return function (y) {
    return x * y;
  };
};

let double = buildMultiplier(2);
let triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```
