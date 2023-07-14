---
chapter: 20
pageNumber: 107
---

# Concatenation (Birleştirme)

Herhangi bir programlama dilinde, dize(_string_) birleştirme basitçe bir veya daha fazla dizenin başka bir dizeye eklenmesi anlamına gelir. Örneğin, "_World_" ve "_Good Afternoon_" dizeleri "_Hello_" dizesiyle birleştirildiğinde, "_Hello World, Good Afternoon_" dizesini oluştururlar. JavaScript'te bir dizeyi çeşitli şekillerde birleştirebiliriz.

### Örnek:

```javascript
const icon = "👋";

// template literals  kullarak
`hi ${icon}`;

// join() fonksiyonunu kullanarak
["hi", icon].join(" ");

// concat() fonksiyonunu kullanarak
"".concat("hi ", icon);

//  + operatörünü kulllanarak
"hi " + icon;

// Sonuç
// hi 👋
```

### 📝 Alıştırma:

- [ ] Konsola '_Hello World_' yazdırması için `str1` ve `str2` değerlerini kullanan bir program yazın.

### 💡 İpucu:

- Dize birleştirme hakkında daha fazla bilgi için dizelerin [birleştirme](../strings/concat.md) bölümünü ziyaret edin.
