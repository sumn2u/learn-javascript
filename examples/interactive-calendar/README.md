# 📅 Interactive Calendar

A lightweight, responsive calendar widget built with vanilla JavaScript. This project demonstrates DOM manipulation, Date object handling, and local state management without external libraries.

## 🚀 Features

- **Dynamic Rendering:** Automatically generates the correct grid for any month and year.
- **Navigation:** Browse through past and future months.
- **Current Date Highlighting:** visual indicator for today's date.
- **Event Management (Bonus):** Click any date to add, view, or delete notes.
- **Data Persistence:** Events are saved to the browser's `localStorage`, so they remain after refreshing the page.
- **Responsive Design:** Built with CSS Grid to adapt to different screen sizes.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox and Grid layout; CSS Variables for theming.
- **JavaScript (ES6+):** Logic for date calculation and event handling.

## 📂 Project Structure

```text
interactive-calendar/
├── index.html      # Main HTML structure
├── style.css       # Styling and Grid layout
├── script.js       # Calendar logic and Event handling
└── README.md       # Project documentation

##💡 How It Works
1. Date Calculation
The calendar grid is calculated using the native Date object:

Start Day: new Date(year, month, 1).getDay() determines which day of the week the month starts on (0=Sunday, 1=Monday).

Total Days: new Date(year, month + 1, 0).getDate() retrieves the exact number of days in the current month.

2. Rendering the Grid
We use a loop to generate <div> elements.

First, we insert empty placeholder divs to align the 1st of the month with the correct weekday column.

Then, we generate the actual numbered days.

3. State Management
Events are stored in a simple JSON object and saved to LocalStorage:

JavaScript
// Data Structure Example
{
  "2023-10-25": "Meeting with team",
  "2023-10-31": "Halloween Party"
}

## 🏃‍♂️ How to Run
Clone the repository.

Navigate to the interactive-calendar folder.

Open index.html in your browser.

# 🔮 Future Improvements
Add drag-and-drop functionality for events.

Support for multiple events per day.

Add specific time slots for events.