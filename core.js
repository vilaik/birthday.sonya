function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function showSurprise() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
}

function closeSurprise() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
}

// Функция для создания падающих конфетти
function createConfetti() {
    const container = document.querySelector('.falling-confetti');

    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Размер и позиция
        const leftPosition = Math.random() * 100;
        const color = Math.random() < 0.5 ? '#ff69b4' : '#ff1493'; // случайный цвет
        confetti.style.left = `${leftPosition}%`;
        confetti.style.backgroundColor = color;
        
        // Добавляем конфетти в контейнер
        container.appendChild(confetti);

        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            confetti.remove();
        }, 4000); // продолжительность анимации
    }, 100); // создаём новые конфетти каждые 100ms
}

createConfetti(); // Запускаем функцию для создания конфетти
