const monthYearElement = document.getElementById('month-year');
const datesElement = document.getElementById('calendar-dates');
const prevBtn = document.getElementById('month-prev');
const nextBtn = document.getElementById('month-next');

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

// Helper: Zero-pad numbers (Fixed: Date formatting consistency)
const pad = (n) => (n < 10 ? '0' + n : n);

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearElement.innerText = `${months[month]} ${year}`;
    datesElement.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        datesElement.appendChild(emptyDiv);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerText = day;

        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('current-date');
        }

        // Fixed: Use padded date format YYYY-MM-DD
        const dateString = `${year}-${pad(month + 1)}-${pad(day)}`;
        
        // Store date in data attribute for Event Delegation
        dayDiv.dataset.date = dateString;

        if (events[dateString]) {
            dayDiv.classList.add('has-event');
            dayDiv.title = events[dateString];
        }

        // Removed individual event listeners here (Performance fix)
        datesElement.appendChild(dayDiv);
    }
}

// Fixed: Event Delegation (One listener for all days)
datesElement.addEventListener('click', (e) => {
    const target = e.target.closest('.day');
    if (target && target.dataset.date) {
        openModal(target.dataset.date);
    }
});

function openModal(dateStr) {
    clickedDate = dateStr;
    selectedDateTitle.innerText = `Event for: ${dateStr}`;
    eventInput.value = events[dateStr] || '';
    modal.classList.remove('hidden');
    eventInput.focus();
}

function closeModal() {
    modal.classList.add('hidden');
    clickedDate = null;
}

// Fixed: Save logic handles whitespace and deletion
saveEventBtn.addEventListener('click', () => {
    const eventText = eventInput.value.trim();
    
    if (eventText) {
        events[clickedDate] = eventText;
    } else {
        delete events[clickedDate]; // Remove event if input is cleared
    }
    
    localStorage.setItem('events', JSON.stringify(events));
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

// Navigation & Close
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Fixed: Keyboard Accessibility for Nav Buttons
[prevBtn, nextBtn, closeModalBtn].forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

renderCalendar();