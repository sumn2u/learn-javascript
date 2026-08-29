---
chapter: 26
pageNumber: 255
description: React பயன்பாடுகளில் அனிமேஷன்களுக்கு Framer Motion ஐப் பயன்படுத்துதல்.
---

## Framer Motion மூலம் அனிமேஷன் செய்தல் (Animating with Framer Motion)

Framer Motion என்பது React க்கான தயாரிப்புக்குத் தயாரான (production-ready) மோஷன் நூலகமாகும் (motion library). இது சிக்கலான அனிமேஷன்களை உருவாக்குவதை எளிதாக்குகிறது.

**நிறுவுதல் (Installation)**

npm ஐப் பயன்படுத்தி உங்கள் திட்டத்தில் Framer Motion ஐ சேர்க்கலாம்:

```bash
npm install framer-motion
```

**அடிப்படை அனிமேஷன் (Basic Animation)**

ஒரு கூறினை (component) அனிமேஷன் செய்ய Framer Motion ஐப் பயன்படுத்துவதற்கான எளிய உதாரணம் இங்கே:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
    return (
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
            நான் வலதுபுறம் நகருவேன் (I will move to the right)
        </motion.div>
    );
};

export default AnimatedComponent;
```

**மேம்பட்ட அனிமேஷன் (Advanced Animation)**

கீஃப்ரேம்கள் (keyframes), சைகைகள் (gestures) மற்றும் தளவமைப்பு (layout) அனிமேஷன்கள் போன்ற மேம்பட்ட அனிமேஷன்களுக்கான பல்வேறு அம்சங்களை Framer Motion வழங்குகிறது.


- **கீஃப்ரேம்கள் (Keyframes):**
ஒரு அனிமேஷனின் பல நிலைகளை வரையறுக்க கீஃப்ரேம்கள் உங்களை அனுமதிக்கின்றன. ஒரு உதாரணம் இங்கே:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const KeyframeComponent = () => {
    return (
        <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            நான் முன்னும் பின்னுமாக நகருவேன் (I will move back and forth)
        </motion.div>
    );
};

export default KeyframeComponent;
```


- **சைகைகள் (Gestures):**
பயனர் சைகைகளின் அடிப்படையில் அனிமேஷன்களை உருவாக்க Framer Motion உங்களை அனுமதிக்கிறது. ஒரு உதாரணம் இங்கே:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const GestureComponent = () => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
            என்னைச் சுற்றி இழுக்கவும் (Drag me around)
        </motion.div>
    );
};

export default GestureComponent;
```


- **தளவமைப்பு அனிமேஷன்கள் (Layout Animations):**
தளவமைப்பு (layout) மாற்றங்களை அனிமேஷன் செய்வதை Framer Motion எளிதாக்குகிறது. ஒரு உதாரணம் இங்கே:

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LayoutAnimationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout onClick={() => setIsOpen(!isOpen)} style={{ background: 'lightblue', padding: '10px' }}>
            {isOpen ? 'சுருக்கக் கிளிக் செய்யவும் (Click to collapse)' : 'விரிவாக்கக் கிளிக் செய்யவும் (Click to expand)'}
        </motion.div>
    );
};

export default LayoutAnimationComponent;
```

{% hint style="info" %}
மேலும் விவரங்கள் மற்றும் எடுத்துக்காட்டுகளுக்கு, Framer Motion ஆவணங்களைப் பார்க்கவும்.
{% endhint %}