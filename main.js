import './style.css';



const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
const colorSelect = document.getElementById('colorSelect');
const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const gridSize = 20; // Set the size of the grid (pixels)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 60; // Subtract 60px for the button heights

drawGrid(); // Draw the grid initially

canvas.addEventListener('click', drawPixel);

generateButton.addEventListener('click', generateRandomDrawing);
clearButton.addEventListener('click', clearCanvas);

function drawPixel(event) {
    const x = Math.floor((event.clientX - canvas.offsetLeft) / gridSize) * gridSize;
    const y = Math.floor((event.clientY - canvas.offsetTop) / gridSize) * gridSize;
    const color = colorSelect.value;

    context.fillStyle = color;
    context.fillRect(x, y, gridSize, gridSize);
}

function drawGrid() {
    context.beginPath();
    context.strokeStyle = 'lightgrey'; // Set grid color
    context.lineWidth = 2; // Set grid line thickness
    for (let x = 0; x < canvas.width; x += gridSize) {
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
    }
    context.stroke();
}

function generateRandomDrawing() {
    for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
            const color = getRandomColor();
            context.fillStyle = color;
            context.fillRect(x, y, gridSize, gridSize);
        }
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(); // Redraw the grid after clearing the canvas
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}