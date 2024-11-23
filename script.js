let noClickCount = 0;

const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const heartContainer = document.getElementById('heartContainer');
const thanksNote = document.getElementById('thanksNote');
const container = document.querySelector('.container');

// Array of hate emojis
const hateEmojis = ['😡', '🤬', '💔', '👎', '😤', '😠', '😭', '😒'];

// Handle "NO" Button
noButton.addEventListener('click', () => {
    // Increment click count
    noClickCount++;

    // Change "NO" button position randomly
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Create a hate emoji and animate it
    const emoji = document.createElement('span');
    emoji.className = 'hate-emoji';
    emoji.textContent = hateEmojis[Math.floor(Math.random() * hateEmojis.length)];
    emoji.style.left = `${randomX}px`;
    emoji.style.top = `${randomY}px`;
    container.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
        container.removeChild(emoji);
    }, 2000);
});

// Handle "YES" Button
yesButton.addEventListener('click', showHeartAnimation);

function showHeartAnimation() {
    heartContainer.style.display = 'flex';
    setTimeout(() => {
        thanksNote.style.display = 'block';
    }, 1000);
}
