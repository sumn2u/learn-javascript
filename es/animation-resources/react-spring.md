---
chapter: 26
pageNumber: 255
description: Using React Spring for animations in React applications.
---

## Using React Spring for Animations

React Spring is a spring-physics-based animation library for React that makes it easy to create animations.

**Installation**

You can include React Spring in your project using npm:

```bash
npm install react-spring
```

**Basic Animation**

Here's a simple example of using React Spring to animate a component:

```javascript
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return <animated.div style={props}>I will fade in</animated.div>;
};

export default AnimatedComponent;
```

**Advanced Animation**

React Spring provides various features for advanced animations, such as transitions, trails, and keyframes.


- **Transitions**
Transitions allow you to animate components as they mount and unmount. Here's an example:

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
                Add Item
            </button>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>{item.key}</animated.div>
            ))}
        </div>
    );
};

export default TransitionComponent;
```


- **Trails**
Trails allow you to animate a list of components in sequence. Here's an example:

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
For more details and examples, check out the React Spring documentation.
{% endhint %}