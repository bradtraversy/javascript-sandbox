const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));
