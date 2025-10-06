# Interactive Calendar App

A dynamic, interactive calendar application that demonstrates date manipulation, DOM updates, and event-driven programming in JavaScript. The calendar allows users to navigate through months and years, highlights the current date, and includes event management functionality.

## Features

- **Dynamic Calendar Display**: Shows all days of the selected month and year
- **Current Date Highlighting**: Today's date is visually distinguished
- **Month/Year Navigation**: Intuitive buttons for browsing through time
- **Quick Navigation**: Dropdown for months and input for years
- **Responsive Design**: Adapts to different screen sizes
- **Event Management**: Add, view, and remove events for specific dates
- **Interactive Tooltips**: Hover to see event previews
- **Modal Interface**: Detailed event management for selected dates

## How It Works

### HTML Structure (`index.html`)
- **Header Section**: Navigation buttons and month/year display
- **Calendar Grid**: Weekday headers and dynamic day cells
- **Controls**: Today button and quick month/year selectors
- **Modal**: Event management interface with form and event list
- **Tooltip**: Hover preview for dates with events

### CSS Styling (`style.css`)
- Modern, responsive design with gradient backgrounds
- Smooth animations and transitions
- Mobile-first approach with media queries
- Visual feedback for interactions (hover, active states)
- Modal and tooltip styling with fade-in animations

### JavaScript Implementation (`script.js`)

#### Core Calendar Logic

**Date State Management**
```javascript
let currentDate = new Date();  // Currently displayed month/year
let selectedDate = null;       // Date selected for event management
let events = {};              // Event storage: {'YYYY-MM-DD': ['event1', 'event2']}
```

**Calendar Rendering**
The `renderCalendar()` function dynamically generates the calendar grid:
1. Calculate first and last days of the month
2. Determine start/end dates for full week display
3. Create day elements with appropriate styling
4. Add event indicators and click handlers

**Date Manipulation**
```javascript
// Navigate months
function navigateMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar();
}

// Get date key for event storage
function getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
```

#### Event Handling

**Navigation Events**
- Month/Year buttons: `navigateMonth()`, `navigateYear()`
- Today button: `goToToday()` - resets to current date
- Quick selectors: `goToSpecificMonthYear()` - direct month/year input

**Day Interactions**
- Click: Opens event modal for selected date
- Hover: Shows tooltip with event preview (if events exist)

**Modal Management**
- Add events: `addEvent()` - validates input and updates storage
- Remove events: `removeEvent()` - deletes specific events
- Display events: `displayEvents()` - renders event list in modal

#### Key Concepts Demonstrated

**Date Object Manipulation**
- Creating and modifying Date objects
- Extracting date components (year, month, day)
- Calculating date ranges and day-of-week
- Formatting dates for display and storage

**DOM Manipulation**
- Dynamic element creation and removal
- Class manipulation for styling
- Event listener attachment and management
- Real-time UI updates

**Event-Driven Programming**
- User interaction handling (clicks, hovers, form submission)
- State management and updates
- Callback functions and closures

**Data Structures**
- Object-based event storage
- Array manipulation for event lists
- Date string keys for efficient lookups

## Usage

1. **Navigation**: Use arrow buttons or dropdown/input to change months/years
2. **Today Button**: Quickly return to the current date
3. **Add Events**: Click any date to open the event modal and add events
4. **View Events**: Hover over dates with events to see tooltips, or click to edit
5. **Remove Events**: Use the × button in the modal to delete events

## Sample Events

The calendar includes sample events for demonstration:
- Today's date: "Meeting with team"
- Tomorrow: "Doctor appointment", "Project deadline"
- Next week: "Conference call"

## Browser Compatibility

Works in all modern browsers supporting ES6 features including:
- Date object methods
- Template literals
- Arrow functions
- Array methods (forEach, splice)

## Responsive Features

- **Desktop**: Full navigation and layout
- **Tablet**: Adjusted button sizes and spacing
- **Mobile**: Stacked controls, smaller text, touch-friendly interface

This implementation provides a solid foundation for calendar-based applications and demonstrates essential JavaScript concepts in an interactive, practical way.
