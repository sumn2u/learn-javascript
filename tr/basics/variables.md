---
chapter: 2
pageNumber: 11
---

# Değişkenler

Programlamayı gerçekten anlamaya yönelik ilk adım cebire geri dönmektir. Eğer okuldan hatırlıyorsanız, cebir aşağıdaki gibi terimlerin yazılmasıyla başlar.

```
3 + 5 = 8
```

Aşağıdaki x gibi bir bilinmeyen girildiğinde hesaplama yapmaya başlarsınız:

```
3 + x = 8
```

x'i yalnız bırakarak bulabilirsiniz.

```
x = 8 - 3
-> x = 5
```

Birden fazla değişken kullandığınızda terimlerinizi daha esnek hale getirmiş olursunuz:

```
x + y = 8
```

x ve y değerlerini değiştirebilirsiniz ve denklem yine de doğru olabilir:

```
x = 4
y = 4
```

veya

```
x = 3
y = 5
```
Aynı durum programlama dilleri için de geçerlidir. Programlamada değişkenler, değerleri tutan kutulardır. Değişkenler çeşitli değerleri ve hesaplamaların sonuçlarını tutabilir. Değişkenler bir `name` (*isim*) ve `value` (*değer*)'e sahiptir. Bu `name` ve `value` `=` ile ayrılır. Farklı programlama dillerinin değişken adı olarak hangi kelimelerin kullanılabileceği konusunda kendi sınırlamaları ve kısıtlamaları olduğunu belirtmekte fayda vardır. Bunun nedeni, belirli kelimelerin dil içindeki bir fonksiyon ya da belirli işlemler için ayrılmış olabilmesidir.
  


Şimdi JavaScript'te nasıl çalıştığına bakalım. Aşağıdaki kod, iki değişken tanımlar, bu iki değişkenin toplamını hesaplar ve bu sonucu üçüncü bir değişkenin değeri olarak tanımlar.
```javascript
let x = 5;
let y = 6;
let result = x + y;
```

{% exercise %}
20'ye eşit bir `x` değişkeni tanımlayın.
{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**ES6 Version**

E6 olarak da bilinen [ECMAScript 2015 veya ES2015](https://262.ecma-international.org/6.0/), 2009'dan bu yana JavaScript programlama dilinde yapılan önemli bir güncellemedir. ES6'da değişkenleri tanımlamanın üç yolu vardır.

```javascript
var x = 5;
const y = 'Test';
let z = true;
```
Tanımlama türleri kapsama bağlıdır. `var` anahtar kelimesinin aksine, blok kapsamından bağımsız olarak bir değişkeni global veya yerel olarak tüm bir fonksiyona tanımlar, `let` kapsamları kullandıkları blok ile sınırlı değişkenler tanımlamanızı sağlar. Örneğin:  

```javascript
function varTest(){
    var x=1;
    if(true){
        var x=2; // aynı değişken
        console.log(x); //2
    }
    console.log(x); //2
}

function letTest(){
    let x=1;
    if(true){
        let x=2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
```

`const` değişkenleri değişmezdir, yani yeniden atanmalarına izin verilmez.

```javascript
const x = "hi!";
x = "bye"; // buradaki yeniden atama hata verecektir
```
