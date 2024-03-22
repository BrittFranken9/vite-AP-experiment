import './style.css';



const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
const colorSelect = document.getElementById('colorSelect');
const gridSize = 20; // Set the size of the grid (pixels)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawGrid(); // Draw the grid initially

canvas.addEventListener('click', drawPixel);

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
    context.lineWidth = 1; // Set grid line thickness
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