// 1. ODLICZANIE DO JUWENALIÓW (Logic Master)
const countDownDate = new Date("May 20, 2026 18:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("countdown");
    if(timerElement) {
        timerElement.innerHTML = `
            <h2>Zaczynamy za:</h2>
            <div style="font-size: 2rem; color: var(--secondary); text-shadow: 0 0 10px var(--secondary);">
                ${days}d ${hours}h ${minutes}m ${seconds}s
            </div>
        `;
    }

    if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "JUWENALIA TRWAJĄ! WBIJAJ!";
    }
}, 1000);

// 2. SCROLL REVEAL ANIMATION (UI Ninja)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));