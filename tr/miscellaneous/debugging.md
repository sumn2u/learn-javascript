---
chapter: 19
pageNumber: 101
---

# Debugging (Hata Ayıklama)

Programlamada, kod yazarken hatalar oluşabilir. Bu, sözdizimsel veya mantıksal hatalardan kaynaklanabilir. Hata bulma süreci zaman alıcı ve zor olabilir ve kod hata ayıklama olarak adlandırılır.

Neyse ki, modern tarayıcıların çoğunda yerleşik hata ayıklayıcılar bulunmaktadır. Bu hata ayıklayıcılar açılıp kapatılabilir ve hataların bildirilmesi sağlanabilir. Kodun yürütülmesi sırasında yürütmeyi durdurmak ve değişkenleri incelemek için kesme noktaları ayarlamak da mümkündür. Bunun için bir hata ayıklama penceresi açmak ve JavaScript koduna `debugger` anahtar sözcüğünü yerleştirmek gerekir. Kodun yürütülmesi her breakpoint'te durdurulur ve geliştiricilerin JavaScript değerlerini incelemesine ve kodun yürütülmesine devam etmesine olanak tanır.

JavaScript değerlerini hata ayıklayıcı penceresine yazdırmak için `console.log()` yöntemi de kullanılabilir.

```javascript
const a = 5,
  b = 6;
const c = a + b;
console.log(c);
// Result : c = 11;
```
