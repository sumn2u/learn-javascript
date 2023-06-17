---
chapter: 2
pageNumber: 10
---

# Yorumlar

Yorumlar _interpreter_ (*yorumlayıcı*) tarafından çalıştırılmayacak ifadelerdir. Yorumlar diğer programcılar için ek açıklamaları veya kodun ne yaptığına dair küçük açıklamaları işaretlemek için kullanılır. Böylece başkalarının kodunuzun ne yaptığını anlamasını kolaylaştırır.

Javascript'te yorumlar 2 farklı şekilde yazılabilir:

* _Tek satırlı yorumlar_:İki eğik çizgi (`//`) ile başlar ve satır sonuna kadar devam eder. Eğik çizgilerden sonraki her şey JavaScript yorumlayıcısı tarafından yok sayılır. Örneğin:

```javascript
// Bu bir yorum satırı, yorumlayıcı tarafından yok sayılacaktır.
let a = "this is a variable defined in a statement";
```

* _Çoklu satırlı yorumlar_: Eğik çizgi ve yıldız işareti (`/*`) ile başlar ve yıldız işareti ve eğik çizgi (`*/`) ile biter. Açılış ve kapanış işaretleri arasındaki her şey JavaScript yorumlayıcısı tarafından yok sayılır. Örneğin:

```javascript
/*
Bu çok satırlı bir yorumdur,
yorumlayıcı tarafından yok sayılacaktır.
*/
let a = "this is a variable defined in a statement";
```
