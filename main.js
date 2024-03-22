import './style.css'


// Get the canvas element and its context
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

// Set initial drawing properties
let isDrawing = false;
let lastX = 0;
let lastY = 0;
context.lineWidth = 2;
context.lineCap = 'round';
context.strokeStyle = '#000'; // Default color: black

// Function to draw on canvas
function draw(e) {
    if (!isDrawing) return; // Stop if not drawing

    // Draw a line from lastX,lastY to e.offsetX,e.offsetY
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    // Update lastX and lastY
    lastX = e.offsetX;
    lastY = e.offsetY;
}

// Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);