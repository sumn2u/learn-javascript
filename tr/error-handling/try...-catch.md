---
layout: editorial
chapter: 12
pageNumber: 67
---

# Bölüm 12

# Error Handling (Hata Yönetimi)

Programlamada hatalar çeşitli nedenlerle meydana gelir; bazıları kod hatalarından, bazıları yanlış girdiden ve diğer öngörülemeyen şeylerden kaynaklanır. Bir hata oluştuğunda, kod durur ve genellikle konsolda görülen bir hata mesajı oluşturur.&#x20;

# try... catch

Kodun çalışmasını durdurmak yerine, kodu durdurmadan hataları yakalamayı sağlayan `try...catch` yapısını kullanabiliriz. `try...catch` yapısının iki ana bloğu vardır; `try` ve ardından `catch`.&#x20;

```javascript
try {
  // kodun devamı
} catch (err) {
  // hata yönetimi
}
```

İlk olarak `try` bloğundaki kod çalıştırılır. Herhangi bir hatayla karşılaşılmazsa `catch` bloğu atlanır. Bir hata oluşursa, `try` çalışması durdurulur ve kontrol sırası `catch` bloğuna taşınır. Hatanın nedeni `err` değişkeninde yakalanır.

```javascript
try {
  // kodun devamı
  alert("Welcome to Learn JavaScript");
  asdk; // Hata: asdk değişkeni tanımlanmadı
} catch (err) {
  console.log("Error has occurred");
}
```

{% hint style="warning" %}
`try...catch` 'in kullanılabilmesi için kodun çalışabilir ve senkronize olması gerekir.
{% endhint %}

Özel bir hata vermek için `throw` ifadesi kullanılabilir. Oluşan hatalar tarafından üretilen hata objesinin iki ana özelliği vardır.&#x20;

- **name**: Hata ismi
- **message**: Hata ile ilgili açıklama mesajı&#x20;

{% hint style="info" %}
Eğer bir `error` mesajına ihtiyacınız yoksa catch atlanabilir.
{% endhint %}
