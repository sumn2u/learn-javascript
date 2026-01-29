# 📅 Interactive Calendar

A lightweight, responsive calendar widget built with **vanilla JavaScript**.  
This project demonstrates **DOM manipulation**, **Date object handling**, and **local state management** without external libraries.

---

## 🚀 Features

- **Dynamic Rendering:** Automatically generates the correct grid for any month and year.
- **Navigation:** Browse through past and future months.
- **Current Date Highlighting:** Visual indicator for today's date.
- **Event Management (Bonus):** Click any date to add, view, or delete notes.
- **Data Persistence:** Events are saved to the browser's `localStorage`, so they remain after refreshing the page.
- **Responsive Design:** Built with CSS Grid to adapt to different screen sizes.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic structure  
- **CSS3:** Flexbox and Grid layout, CSS Variables for theming  
- **JavaScript (ES6+):** Date calculation and event handling logic  

---

## 📂 Project Structure

```text
interactive-calendar/
├── index.html      # Main HTML structure
├── style.css       # Styling and Grid layout
├── script.js       # Calendar logic and event handling
└── README.md       # Project documentation
```

---

## 💡 How It Works

### 1. Date Calculation

The calendar grid is calculated using the native `Date` object:

- **Start Day:**  
  `new Date(year, month, 1).getDay()`  
  Determines which day of the week the month starts on  
  `(0 = Sunday, 1 = Monday, ...)`

- **Total Days:**  
  `new Date(year, month + 1, 0).getDate()`  
  Retrieves the exact number of days in the current month

---

### 2. Rendering the Grid

- A loop generates `<div>` elements for the calendar.
- Empty placeholder divs are inserted to align the first day of the month correctly.
- Numbered day cells are then rendered dynamically.

---

### 3. State Management

Events are stored in a simple JSON object and persisted using `localStorage`.

```javascript
// Data Structure Example
{
  "2023-10-25": "Meeting with team",
  "2023-10-31": "Halloween Party"
}
```

---

## 🏃‍♂️ How to Run

1. Clone the repository  
2. Navigate to the `interactive-calendar` folder  
3. Open `index.html` in your browser  

---

## 🔮 Future Improvements

- Add drag-and-drop functionality for events
- Support multiple events per day
- Add specific time slots for events
