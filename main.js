import './style.css';

// Get the canvas element and its context
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

// Set initial drawing properties
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Array met regenboogkleuren
const rainbowColors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082'];

// Functie om muispositie om te zetten naar canvas eenheden
function getCanvasCoordinates(event) {
    const rect = canvas.getBoundingClientRect(); // Bounding rectangle van het canvas
    const scaleX = canvas.width / rect.width; // Schaal van de canvas in verhouding tot het bounding rectangle
    const scaleY = canvas.height / rect.height;
    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };
}

// Functie om op het canvas te tekenen
function draw(position) {
    if (!isDrawing) return; // Stop als er niet getekend wordt

    context.strokeStyle = rainbowColors[Math.floor(Math.random() * rainbowColors.length)]; // Kies willekeurige regenboogkleur
    context.lineWidth = 2;

    // Teken een zeshoek met transparante binnenkant op position.x, position.y met zijden van 20 pixels
    context.beginPath();
    context.moveTo(position.x + 20 * Math.cos(0), position.y + 20 * Math.sin(0));
    for (let i = 1; i <= 6; i++) {
        context.lineTo(position.x + 20 * Math.cos(i * 2 * Math.PI / 6), position.y + 20 * Math.sin(i * 2 * Math.PI / 6));
    }
    context.closePath();
    context.stroke();
}

// Event listeners voor muisacties
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    const pos = getCanvasCoordinates(event); // Haal de canvas coördinaten van de muispositie
    lastX = pos.x;
    lastY = pos.y;
    draw(pos); // Begin onmiddellijk met tekenen op de muispositie
});

canvas.addEventListener('mousemove', (event) => {
    const pos = getCanvasCoordinates(event); // Haal de canvas coördinaten van de muispositie
    draw(pos);
});

canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));