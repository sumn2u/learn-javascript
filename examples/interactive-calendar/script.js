// Calendar state
let currentDate = new Date();
let selectedDate = null;
let events = {}; // Store events by date string 'YYYY-MM-DD'

// DOM elements
const monthYearElement = document.getElementById('month-year');
const calendarDaysElement = document.getElementById('calendar-days');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const prevYearBtn = document.getElementById('prev-year');
const nextYearBtn = document.getElementById('next-year');
const todayBtn = document.getElementById('today-btn');
const monthSelect = document.getElementById('month-select');
const yearInput = document.getElementById('year-input');
const modal = document.getElementById('event-modal');
const modalDateElement = document.getElementById('modal-date');
const eventListElement = document.getElementById('event-list');
const eventTitleInput = document.getElementById('event-title');
const addEventBtn = document.getElementById('add-event-btn');
const closeModalBtn = document.querySelector('.close');
const tooltip = document.getElementById('tooltip');

// Initialize calendar
function initCalendar() {
    renderCalendar();
    setupEventListeners();
    updateMonthYearDisplay();
    updateControls();

    // Set initial month/year in controls
    monthSelect.value = currentDate.getMonth();
    yearInput.value = currentDate.getFullYear();
}

// Render the calendar grid
function renderCalendar() {
    calendarDaysElement.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get first day of month and last day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay()); // Start from Sunday

    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - lastDay.getDay())); // End on Saturday

    // Generate calendar days
    const current = new Date(startDate);
    while (current <= endDate) {
        const dayElement = createDayElement(current, month);
        calendarDaysElement.appendChild(dayElement);
        current.setDate(current.getDate() + 1);
    }
}

// Create a day element
function createDayElement(date, currentMonth) {
    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    dayElement.textContent = date.getDate();

    // Check if day is in current month
    if (date.getMonth() !== currentMonth) {
        dayElement.classList.add('other-month');
    }

    // Highlight today
    const today = new Date();
    if (date.toDateString() === today.toDateString()) {
        dayElement.classList.add('today');
    }

    // Check for events
    const dateKey = getDateKey(date);
    if (events[dateKey] && events[dateKey].length > 0) {
        dayElement.classList.add('has-event');
    }

    // Add click handler
    dayElement.addEventListener('click', () => handleDayClick(date, dayElement));
    dayElement.addEventListener('mouseenter', (e) => showTooltip(e, date));
    dayElement.addEventListener('mouseleave', () => hideTooltip());

    return dayElement;
}

// Handle day click - show modal with events
function handleDayClick(date, dayElement) {
    selectedDate = date;
    const dateKey = getDateKey(date);

    modalDateElement.textContent = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Display existing events
    displayEvents(dateKey);

    // Show modal
    modal.style.display = 'block';
}

// Display events for a date
function displayEvents(dateKey) {
    eventListElement.innerHTML = '';

    if (events[dateKey] && events[dateKey].length > 0) {
        events[dateKey].forEach((event, index) => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event-item';
            eventElement.innerHTML = `
                <span>${event}</span>
                <button onclick="removeEvent('${dateKey}', ${index})" style="float: right; background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 18px;">&times;</button>
            `;
            eventListElement.appendChild(eventElement);
        });
    } else {
        eventListElement.innerHTML = '<p style="color: #666; font-style: italic;">No events for this date</p>';
    }
}

// Add new event
function addEvent() {
    const title = eventTitleInput.value.trim();
    if (!title) return;

    const dateKey = getDateKey(selectedDate);
    if (!events[dateKey]) {
        events[dateKey] = [];
    }

    events[dateKey].push(title);
    eventTitleInput.value = '';
    displayEvents(dateKey);
    renderCalendar(); // Re-render to show event indicator
}

// Remove event
function removeEvent(dateKey, index) {
    events[dateKey].splice(index, 1);
    if (events[dateKey].length === 0) {
        delete events[dateKey];
    }
    displayEvents(dateKey);
    renderCalendar();
}

// Tooltip functionality
function showTooltip(event, date) {
    const dateKey = getDateKey(date);
    if (events[dateKey] && events[dateKey].length > 0) {
        tooltip.textContent = events[dateKey].join(', ');
        tooltip.classList.add('show');

        // Position tooltip
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    }
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

// Navigation functions
function navigateMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    updateMonthYearDisplay();
    updateControls();
    renderCalendar();
}

function navigateYear(delta) {
    currentDate.setFullYear(currentDate.getFullYear() + delta);
    updateMonthYearDisplay();
    updateControls();
    renderCalendar();
}

function goToToday() {
    currentDate = new Date();
    updateMonthYearDisplay();
    updateControls();
    renderCalendar();
}

function goToSpecificMonthYear() {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearInput.value);

    if (year >= 1900 && year <= 2100) {
        currentDate.setFullYear(year);
        currentDate.setMonth(month);
        updateMonthYearDisplay();
        renderCalendar();
    }
}

// Update display functions
function updateMonthYearDisplay() {
    const options = { year: 'numeric', month: 'long' };
    monthYearElement.textContent = currentDate.toLocaleDateString('en-US', options);
}

function updateControls() {
    monthSelect.value = currentDate.getMonth();
    yearInput.value = currentDate.getFullYear();
}

// Utility functions
function getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// Event listeners setup
function setupEventListeners() {
    // Navigation buttons
    prevMonthBtn.addEventListener('click', () => navigateMonth(-1));
    nextMonthBtn.addEventListener('click', () => navigateMonth(1));
    prevYearBtn.addEventListener('click', () => navigateYear(-1));
    nextYearBtn.addEventListener('click', () => navigateYear(1));

    // Today button
    todayBtn.addEventListener('click', goToToday);

    // Month/Year controls
    monthSelect.addEventListener('change', goToSpecificMonthYear);
    yearInput.addEventListener('change', goToSpecificMonthYear);

    // Modal controls
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add event button
    addEventBtn.addEventListener('click', addEvent);
    eventTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addEvent();
        }
    });

    // Sample events for demonstration
    addSampleEvents();
}

// Add some sample events
function addSampleEvents() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    events[getDateKey(today)] = ['Meeting with team'];
    events[getDateKey(tomorrow)] = ['Doctor appointment', 'Project deadline'];
    events[getDateKey(nextWeek)] = ['Conference call'];
}

// Initialize the calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', initCalendar);
