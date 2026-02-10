document.addEventListener('DOMContentLoaded', () => {
    const acceptBtn = document.getElementById('acceptBtn');
    const denyBtn = document.getElementById('denyBtn');
    const mainCard = document.getElementById('mainCard');
    const celebration = document.getElementById('celebration');

    // Button: Accept logic
    acceptBtn.addEventListener('click', () => {
        // Simple confetti effect (using emoji for minimalism without external libs for now)
        launchCelebration();
    });

    // Button: Deny logic (The runaway button)
    denyBtn.addEventListener('mouseover', moveButton);
    denyBtn.addEventListener('touchstart', moveButton); // For mobile

    function moveButton() {
        // Make sure it doesn't go off screen too much, keep it relative to viewport
        // Actually, simpler to just translate it randomly a bit to annoy the user playfully
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;

        denyBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    function launchCelebration() {
        mainCard.style.display = 'none';
        celebration.classList.remove('hidden');

        // Create basic confetti
        for (let i = 0; i < 60; i++) { // Increased count slightly
            createConfetti();
        }
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerText = ['❤️', '🏎️', '🏁', '🌹', '🇮🇹'][Math.floor(Math.random() * 5)]; // Added Italy flag
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-5vh';
        // Increased size: between 30px and 60px as requested
        confetti.style.fontSize = (Math.random() * 30 + 30) + 'px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        // Cleanup
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
});

// Add dynamic style for falling animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    to {
        transform: translateY(105vh) rotate(720deg);
    }
}
`;
document.head.appendChild(styleSheet);
