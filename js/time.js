function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function initializeTimer(timerId, localStorageKey, initialHours, initialMinutes) {
    // Отримуємо значення з localStorage або встановлюємо початкове значення
    let seconds = parseInt(localStorage.getItem(localStorageKey));

    if (isNaN(seconds)) {
        seconds = (initialHours * 3600) + (initialMinutes * 60);
    }

    function updateTimer() {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 0;
            clearInterval(timerInterval);
        }
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        document.getElementById(timerId).textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(secs);

        // Зберігаємо значення таймера в localStorage
        localStorage.setItem(localStorageKey, seconds);
    }

    let timerInterval = setInterval(updateTimer, 1000);

    // Оновлення таймера при завантаженні сторінки
    updateTimer();
}

// Ініціалізація двох таймерів
initializeTimer("timer", "timerSeconds1", 6, 55);
initializeTimer("timer_two", "timerSeconds2", 6, 55);


