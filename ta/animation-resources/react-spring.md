---
chapter: 26
pageNumber: 255
description: React பயன்பாடுகளில் அனிமேஷன்களுக்கு React Spring ஐப் பயன்படுத்துதல்.
---

## அனிமேஷன்களுக்கு React Spring ஐப் பயன்படுத்துதல் (Using React Spring for Animations)

React Spring என்பது React க்கான ஸ்பிரிங்-பிசிக்ஸ் (spring-physics) அடிப்படையிலான அனிமேஷன் நூலகமாகும், இது அனிமேஷன்களை உருவாக்குவதை எளிதாக்குகிறது.

**நிறுவுதல் (Installation)**

npm ஐப் பயன்படுத்தி உங்கள் திட்டத்தில் React Spring ஐ சேர்க்கலாம்:

```bash
npm install react-spring
```

**அடிப்படை அனிமேஷன் (Basic Animation)**

ஒரு கூறினை (component) அனிமேஷன் செய்ய React Spring ஐப் பயன்படுத்துவதற்கான எளிய உதாரணம் இங்கே:

```javascript
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return <animated.div style={props}>நான் மங்கலாகத் தோன்றுவேன் (I will fade in)</animated.div>;
};

export default AnimatedComponent;
```

**மேம்பட்ட அனிமேஷன் (Advanced Animation)**

மாற்றங்கள் (transitions), பாதைகள் (trails) மற்றும் கீஃப்ரேம்கள் (keyframes) போன்ற மேம்பட்ட அனிமேஷன்களுக்கான பல்வேறு அம்சங்களை React Spring வழங்குகிறது.


- **மாற்றங்கள் (Transitions):**
கூறுகள் ஏற்றப்படும்போதும் (mount) இறக்கப்படும்போதும் (unmount) அனிமேஷன் செய்ய மாற்றங்கள் உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

```javascript
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const TransitionComponent = () => {
    const [items, setItems] = useState([]);
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <div>
            <button onClick={() => setItems([...items, { key: items.length }])}>
                உருப்படியைச் சேர் (Add Item)
            </button>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>{item.key}</animated.div>
            ))}
        </div>
    );
};

export default TransitionComponent;
```


- **பாதைகள் (Trails):**
கூறுகளின் பட்டியலை வரிசையாக அனிமேஷன் செய்ய பாதைகள் உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

```javascript
import React from 'react';
import { useTrail, animated } from 'react-spring';

const items = [1, 2, 3];

const TrailComponent = () => {
    const trail = useTrail(items.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
        <div>
            {trail.map((props, index) => (
                <animated.div key={index} style={props}>
                    {items[index]}
                </animated.div>
            ))}
        </div>
    );
};

export default TrailComponent;
```

{% hint style="info" %}
மேலும் விவரங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு, React Spring ஆவணங்களைப் பார்க்கவும்.
{% endhint %}