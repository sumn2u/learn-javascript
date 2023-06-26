---
chapter: 5
pageNumber: 32
---

# Switch

`switch`, farklı koşullara göre eylemler gerçekleştiren koşullu bir deyimdir. Koşulları karşılaştırmak için strict ( === ) karşılaştırmasını kullanır ve eşleşen koşulun kod bloklarını yürütür. `switch` ifadesinin sözdizimi (_syntax_) aşağıda gösterilmiştir.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

İfade bir kez değerlendirilir ve her bir durumla karşılaştırılır. Eğer eşleşme bulunursa, ilişkili kod bloğu çalıştırılır, aksi halde `default` kod bloğu çalıştırılır. `break` anahtar kelimesi, işlemi durdurur ve istenilen yere yerleştirilebilir. Eğer kullanılmazsa, koşullar eşleşmese bile bir sonraki koşul değerlendirilir.&#x20;

Aşağıda, switch koşuluna dayalı olarak bir hafta günü adı elde etme örneği verilmiştir.&#x20;

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

Birden fazla eşleşme durumunda, **ilk** eşleşen değer seçilir, değilse _default_ değer seçilir.Varsayılan değer ve eşleşen bir durum olmadığında, program switch koşullarından sonraki ifadelerle devam eder.&#x20;

{% exercise %}

Aşağıdaki değerlerden yola çıkarak, dayOfWeek değerini kontrol eden bir `switch` ifadesi yazın. Eğer dayOfWeek "Pazartesi", "Salı", "Çarşamba", "Perşembe" veya "Cuma" ise, result değişkenine "It's a weekday" atanacaktır. Eğer dayOfWeek "Cumartesi" veya "Pazar" ise, result değişkenine "It's the weekend" atanacaktır.

{% initial %}
let dayOfWeek = "Monday";
let result;
// hafta içi mi yoksa hafta sonu mu olduğunu kontrol et
switch(expression) {
case x:
// code block
break;
case y:
// code block
break;
default:
// code block
}
{% solution %}
let dayOfWeek = "Monday";
let result;
// hafta içi mi yoksa hafta sonu mu olduğunu kontrol et
switch (dayOfWeek) {
case "Monday":
case "Tuesday":
case "Wednesday":
case "Thursday":
case "Friday":
result = "It's a weekday";
break;
case "Saturday":
case "Sunday":
result = "It's the weekend";
break;
default:
result = "Invalid day of the week";
break;
}
{% validation %}
assert(result == "It's a weekday" );

{% context %}
{% endexercise %}
