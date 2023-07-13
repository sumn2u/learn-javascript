---
chapter: 9
pageNumber: 61
---

# Prototype (Prototip)

Her obje, bir prototip objeye bağlıdır ve bu objeden özellikler miras alır. `{}` nesnel literallerden oluşturulan nesneler, JavaScript ile birlikte gelen bir obje olan `Object.prototype`'a otomatik olarak bağlanır.

Bir JavaScript yorumlayıcısı (tarayıcınızdaki bir modül), aşağıdaki kodda olduğu gibi, almak istediğiniz bir özelliği bulmaya çalıştığında:

```javascript
let adult = { age: 26 },
  retrievedProperty = adult.age;
// The line above
```

Öncelikle, yorumlayıcı, objenin kendisinin sahip olduğu her özelliği kontrol eder. Örneğin, `adult`'ın yalnızca bir kendi özelliği vardır — `age`. Ancak bunun dışında, aslında `Object.prototype`'dan devralınan birkaç özelliği daha vardır.

```javascript
let stringRepresentation = adult.toString();
// the variable has value of '[object Object]'
```

`toString` , devralınan bir Object.prototype özelliğidir. Bir objenin string temsilini döndüren bir fonksiyonun değerine sahiptir. Daha anlamlı bir temsil döndürmek istiyorsanız, bunu geçersiz kılabilirsiniz. Sadece adult nesnesine yeni bir özellik ekleyin.

```javascript
adult.toString = function () {
  return "I'm " + this.age;
};
```

Şimdi `toString` fonksiyonunu çağırırsanız, yorumlayıcı objenin kendisinde yeni özelliği bulacak ve duracaktır.

Yorumlayıcı, nesnenin kendisinden ve daha sonra prototipi boyunca bulacağı ilk özelliği alır.

Varsayılan Object.prototype yerine kendi nesnenizi prototip olarak ayarlamak için `Object.create`'ı şu şekilde çağırabilirsiniz:

```javascript
let child = Object.create(adult);
/* Bu şekilde nesneler oluşturma, varsayılan Object.prototype'u istediğimiz ile kolayca değiştirmemizi sağlar. Bu durumda, child'ın prototipi adult objesidir. */

child.age = 8;
/* Daha önce, child'ın kendi age özelliği yoktu ve yorumlayıcı bunu bulmak için child'ın prototipine bakmak zorunda kaldı.
Şimdi, child'ın kendi yaşını ayarladığımızda, yorumlayıcı daha ileri gitmeyecek.
Not: adult'ın yaşı hala 26. */
let stringRepresentation = child.toString();
/* Not: child'ın toString özelliğini geçersiz kılmadık, bu nedenle adult'ın yöntemi çağrılacak. adult'ın toString özelliği yoksa, Object.prototype'un toString yöntemi çağrılacak ve "[object Object]" yerine "I'm 8" alacağız. */
```

`child`'ın prototipi `adult`, `adult`'ın prototipi ise `Object.prototype`'dur. Bu prototipler dizisi **prototip zinciri** olarak adlandırılır.
