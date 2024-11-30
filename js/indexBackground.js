// This file is used to generate a random background color for the index page.
document.addEventListener("DOMContentLoaded", function getRandomColor() {
    const randomColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const randomColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    document.body.style.background = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
    window.onload = getRandomColor;
});