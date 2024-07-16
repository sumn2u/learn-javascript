---
chapter: 26
pageNumber: 255
description: Using Framer Motion for animations in React applications.
---

## Animating with Framer Motion

Framer Motion is a production-ready motion library for React. It makes it easy to create complex animations.

**Installation**

You can include Framer Motion in your project using npm:

```bash
npm install framer-motion
```

**Basic Animation**

Here's a simple example of using Framer Motion to animate a component:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
    return (
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
            I will move to the right
        </motion.div>
    );
};

export default AnimatedComponent;
```

**Advanced Animation**

Framer Motion provides various features for advanced animations, such as keyframes, gestures, and layout animations.


- **Keyframes:**
Keyframes allow you to define multiple stages of an animation. Here's an example:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const KeyframeComponent = () => {
    return (
        <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            I will move back and forth
        </motion.div>
    );
};

export default KeyframeComponent;
```


- **Gestures**
Framer Motion allows you to create animations based on user gestures. Here's an example:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const GestureComponent = () => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
            Drag me around
        </motion.div>
    );
};

export default GestureComponent;
```


- **Layout Animations**
Framer Motion makes it easy to animate layout changes. Here's an example:

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LayoutAnimationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout onClick={() => setIsOpen(!isOpen)} style={{ background: 'lightblue', padding: '10px' }}>
            {isOpen ? 'Click to collapse' : 'Click to expand'}
        </motion.div>
    );
};

export default LayoutAnimationComponent;
```

{% hint style="info" %}
For more details and examples, check out the Framer Motion documentation.
{% endhint %}