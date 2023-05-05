# Concatenate

Furthermore. you can concatenate different conditions with "`or`" or “`and`” statements, to test whether either statement is true, or both are true, respectively.

यसबाहेक। तपाईं "` वा "" वा "` र "कथनहरूको साथ बिभिन्न सर्तहरू समाहित गर्न सक्नुहुन्छ, वा दुबै सत्य हो भने, क्रमशः सत्य हो।

In JavaScript “or” is written as `||` and “and” is written as `&&`.

जाभास्क्रिप्टमा "वा" "`| `| `|` `` `` `` र "` & & `को रूपमा लेखिएको छ।

Say you want to test if the value of x is between 10 and 20—you could do that with a condition stating:

भन्नुहोस् तपाइँ परीक्षण गर्न चाहानुहुन्छ यदि x को मान 10 र 20 बीचको हो भने एक सर्तको साथ चल्दै:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

If you want to make sure that country is either “England” or “Germany” you use:

यदि तपाईं निश्चित गर्न चाहनुहुन्छ कि देश "इ England ्ल्यान्ड" वा "जर्मन" तपाईं प्रयोग गर्नुहुन्छ:

```javascript
if (country === "England" || country === "Germany") {
    ...
}
```

**Note**: Just like operations on numbers, Conditions can be grouped using parenthesis, ex: `if ( (name === "John" || name === "Jennifer") && country === "France")`.

** नोट **: संख्यामा अपरेशनहरू जस्तै, प्रवृत्तिहरू कोष्ठक प्रयोग गरेर समेत समृद्धि गर्न सकिन्छ, `((नाम") - & & & & " ) `।
