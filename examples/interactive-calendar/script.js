const monthYearElement = document.getElementById('month-year');
const datesElement = document.getElementById('calendar-dates');
const prevBtn = document.getElementById('month-prev');
const nextBtn = document.getElementById('month-next');

// Modal Elements
const modal = document.getElementById('event-modal');
const closeModalBtn = document.querySelector('.close-btn');
const selectedDateTitle = document.getElementById('selected-date');
const eventInput = document.getElementById('event-input');
const saveEventBtn = document.getElementById('save-event-btn');
const deleteEventBtn = document.getElementById('delete-event-btn');

let currentDate = new Date();
let clickedDate = null;
let events = JSON.parse(localStorage.getItem('events')) || {};

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// --- Core Functions ---

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearElement.innerText = `${months[month]} ${year}`;
    datesElement.innerHTML = '';

    // First day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDay = new Date(year, month, 1).getDay();
    // Total days in the current month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Add empty divs for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        datesElement.appendChild(emptyDiv);
    }

    // Render days
    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerText = day;

        // Check if this day is "Today"
        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('current-date');
        }

        // Check for Events
        const dateString = `${year}-${month + 1}-${day}`;
        if (events[dateString]) {
            dayDiv.classList.add('has-event');
            dayDiv.title = events[dateString]; // Tooltip
        }

        // Add Click Event for Modal
        dayDiv.addEventListener('click', () => openModal(dateString));
        
        datesElement.appendChild(dayDiv);
    }
}

function openModal(dateStr) {
    clickedDate = dateStr;
    selectedDateTitle.innerText = `Event for: ${dateStr}`;
    eventInput.value = events[dateStr] || '';
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    clickedDate = null;
}

// --- Event Listeners ---

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

closeModalBtn.addEventListener('click', closeModal);

saveEventBtn.addEventListener('click', () => {
    if (eventInput.value.trim()) {
        events[clickedDate] = eventInput.value;
        localStorage.setItem('events', JSON.stringify(events));
    }
    closeModal();
    renderCalendar();
});

deleteEventBtn.addEventListener('click', () => {
    if (events[clickedDate]) {
        delete events[clickedDate];
        localStorage.setItem('events', JSON.stringify(events));
    }
    closeModal();
    renderCalendar();
});

// Close modal if clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Initial Render
renderCalendar();