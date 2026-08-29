---
chapter: 4
pageNumber: 33
---
# மாற்று

`replace` முறை ஒரு எழுத்தை, வார்த்தையை அல்லது வாக்கியத்தை ஒரு சரத்துடன் மாற்ற அனுமதிக்கிறது. எடுத்துக்காட்டாக:

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// Result: Hi World!
```

{% hint style="working" %}
`g` modifier அமைக்கப்பட்ட [வழக்கமான வெளிப்பாட்டின்](../regular-expression.md) அனைத்து நிகழ்வுகளிலும் ஒரு மதிப்பை மாற்ற.
{% endhint %}

இது ஒரு மதிப்பு அல்லது வழக்கமான வெளிப்பாட்டிற்காக ஒரு சரத்தை தேடுகிறது மற்றும் மதிப்பு(கள்) மாற்றப்பட்ட புதிய சரத்தை திரும்பப் பெறுகிறது. இது அசல் சரத்தை மாற்றாது. உலகளாவிய case-insensitive மாற்று எடுத்துக்காட்டை பார்ப்போம்.

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red"); 

console.log(result); 
//Result: Mr red has a red house and a red car 
```
