# Rock Paper Scissors Game

A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript that demonstrates randomization, event handling, DOM manipulation, and game logic concepts.

## 🎮 Features

**Core Gameplay:**
- ✅ Choose between Rock, Paper, or Scissors
- ✅ Computer randomly selects its move
- ✅ Real-time winner determination for each round
- ✅ Live score tracking (You vs Computer)
- ✅ Visual feedback with choice animations

**Bonus Features:**
- ✅ **Smooth animations** - Button selections and choice displays
- ✅ **Reset functionality** - Restart the game at any time
- ✅ **Round history** - View past 10 rounds with results
- ✅ **Responsive design** - Works perfectly on all devices
- ✅ **Keyboard support** - Press R, P, or S keys to play
- ✅ **Modern UI** - Beautiful gradient design with glass morphism

## 🛠 Technologies Demonstrated

**JavaScript Concepts:**
- **Randomization** - `Math.random()` for computer choice generation
- **Conditional Logic** - Winner determination using if/else statements
- **Event Listeners** - Click handlers for game buttons
- **DOM Manipulation** - Dynamic updates to scores, choices, and history
- **Array Methods** - Managing game history and choices
- **ES6 Classes** - Object-oriented game structure

**CSS Concepts:**
- **Responsive Design** - Mobile-first approach with media queries
- **Flexbox** - Layout management
- **Animations** - `@keyframes` for smooth transitions
- **Modern Styling** - Gradients, backdrop-filter, and shadows

## 📁 Project Structure

```
Rock-Paper-Scissors/
├── index.html          # Game interface and structure
├── styles.css          # Styling and animations
└── script.js           # Game logic and functionality
```

## 🎯 How to Play

1. **Make your move** by clicking one of the three buttons:
   - 🪨 **Rock** - Press R key
   - 📄 **Paper** - Press P key
   - ✂️ **Scissors** - Press S key

2. **Computer makes its move** automatically using random selection

3. **Winner is determined** based on classic rules:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
   - Same choices = Tie

4. **Score updates** and round is added to history

5. **Play again** or click "Reset Game" to start over

## 🔧 Game Rules Implementation

```javascript
determineWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    }

    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    return winConditions[player] === computer ? 'win' : 'lose';
}
```

## 🎨 Key Features Explained

### Random Computer Choice
```javascript
getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
}
```

### Score Tracking
- Player and computer scores update in real-time
- Visual feedback with scaling animations
- Persistent throughout the game session

### Round History
- Stores last 10 rounds with full details
- Color-coded results (green=win, red=lose, gray=tie)
- Scrollable interface for reviewing past games

### Animations
- Button selection animations with `pulse` effect
- Shake animation for choice reveals
- Smooth score updates with scale transforms

## 🎯 Learning Outcomes

After studying this example, you'll understand:

**JavaScript Fundamentals:**
- Random number generation and array manipulation
- Event-driven programming with click handlers
- Conditional logic for game state management
- DOM manipulation for dynamic content updates
- ES6 class structure and methods

**CSS Techniques:**
- Responsive design with media queries
- CSS animations and transitions
- Modern styling with gradients and effects
- Layout management with Grid and Flexbox

**Game Development Concepts:**
- Game state management
- User interaction handling
- Score tracking and persistence
- Game loop implementation

## 🚀 Game Strategy Tips

💡 **Pattern Recognition**: The computer chooses randomly each time, so there's no pattern to exploit!

💡 **Quick Play**: Use keyboard shortcuts (R, P, S) for faster gameplay

💡 **Track History**: Use the round history to analyze your win/loss patterns

💡 **Reset Often**: Start fresh games to practice different strategies

## 📱 Responsive Design

- **Desktop**: Full-width layout with side-by-side score display
- **Tablet**: Optimized spacing and touch-friendly buttons
- **Mobile**: Stacked layout with larger touch targets

## 🔊 Sound Effects (Optional)

To add sound effects:
1. Add audio files (`win.mp3`, `lose.mp3`, `tie.mp3`) to the game directory
2. Uncomment the `playSound()` function in `script.js`
3. Customize sound playback as needed

## 🎮 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🏆 Challenge Yourself

Try these extensions:
- Add sound effects for each action
- Implement different difficulty levels
- Add a tournament mode
- Create player name input
- Add game statistics (win percentage, streaks)

---

**Happy gaming!** 🎉
