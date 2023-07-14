---
layout: editorial
chapter: 17
pageNumber: 87
---

# Bölüm 17

# Events (Olaylar)

Programlamada, events (_olaylar_), bir sistem tarafından size bildirilen ve bunlara yanıt verebilmeniz için sistemdeki eylemler veya olaylardır. Örneğin, reset düğmesine tıkladığınızda girişi temizler.

Klavyeden gelen etkileşimler, anahtarın durumunu serbest bırakılmadan önce yakalamak için sürekli olarak okunmalıdır. Diğer zaman alıcı hesaplamalar yapmak, bir klavye basımını kaçırmanıza neden olabilir. Bu, bazı ilkel makinelerin giriş işleme mekanizması used to. Bir adım daha ileri gitmek, bir kuyruk kullanmaktır, yani yeni olaylar için kuyruğu periyodik olarak kontrol eden ve buna tepki veren bir programdır. Bu yaklaşıma _polling_ denir.

Bu yaklaşımın ana dezavantajı, her an kuyruğa bakması gerektiğinden, bir olay tetiklendiğinde kesintilere neden olmasıdır. Bunun için daha iyi bir mekanizma, kod bir olay gerçekleştiğinde bilgilendirmektir. Modern tarayıcılar bunu, belirli olaylar için işlevleri _handlers_ olarak kaydetmemize izin vererek yaparlar.

```javascript
<p>Click me to activate the handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("clicked");
  });
</script>
```

Burada, `addEventListener` `window` nesnesi (tarayıcı tarafından sağlanan yerleşik nesne) üzerinde çağrılır ve tüm `window` için bir handler kaydeder. `addEventListener` yöntemini çağırmak, ilk argümanında tanımlanan olay meydana geldiğinde ikinci argümanının çağrılmasını kaydeder.

{% hint style="info" %}
Olay dinleyicileri, yalnızca olay, kaydolundukları nesnenin bağlamında gerçekleştiğinde çağrılır.
{% endhint %}

Bazı yaygın HTML olayları burada belirtilmiştir:

| Event         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `onchange`    | Form girişinin değeri değiştirildiğinde veya değiştirildiğinde |
| `onclick`     | Kullanıcı, öğeye tıkladığında                                  |
| `onmouseover` | Fare imleci öğenin üzerine geldiğinde                          |
| `onmouseout`  | Fare imleci öğeden ayrıldığında                                |
| `onkeydown`   | Kullanıcı anahtarı basıp sonra bırakır                         |
| `onload`      | Tarayıcı yüklemeyi tamamladığında                              |

Çocukları olan düğümlere kaydedilen handlers, çocuklardan da olaylar alabilir. Örneğin, bir paragraf içindeki bir düğme tıklandığında, paragrafta kaydedilen handlers de tıklama olayını alır.

Olay handler, event nesnesi üzerindeki `stopPropagation` yöntemini çağırarak, daha ilerideki handlers'ın olayı almasını engelleyebilir. Bu, örneğin, tıklanabilir bir elemanın içinde bir düğmeniz varsa ve bir düğme tıklamasından dış elemanın tıklanabilir davranışını tetiklemek istemiyorsanız kullanışlıdır.

```javascript
<p>A paragraph with a <button>button</button>.</p>
<script>
  let para = document.querySelector("p"),
      button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Paragraph handler.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Button handler.");
    event.stopPropagation();
  });
</script>
```

Burada, `mousedown` handlers hem paragraf hem de düğme tarafından kaydedilir. Düğmeye tıklandığında, düğme için handler `stopPropagation` çağırır, bu da paragraftaki handler'ın çalışmasını engelleyecektir.

Olayların varsayılan bir davranışı olabilir. Örneğin, bağlantılar, bağlantının hedefine tıklandığında gezinir, aşağı ok düğmesine tıklandığında sayfanın altına yönlendirilir vb. Bu varsayılan davranışlar, event nesnesi üzerindeki `preventDefault` yöntemini çağırarak önlenebilir.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
  });
</script>
```

Burada, tıklandığında bağlantının varsayılan davranışı önlenir, yani bağlantının hedefine yönlendirilmez.
