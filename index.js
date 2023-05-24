const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;


const colors = ["#FFD966", "#2B78E4", "#CC0000", "#6AA84F"];

const circleRadius = 27;
const circleSpacing = 67;

const arrowSize = 20
const arrowSpeed = 2.5;
const arrowDistance = 450;

const arrowPositions = [];
const arrowTargets = [];

const touchedCircle = [false, false, false, false];


for (let i = 0; i < colors.length; i++) {
    const x = 50;
    const y = 50 + i * circleSpacing;

    // ctx.beginPath();
    // ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
    // ctx.fillStyle = colors[i];
    // ctx.fill();
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = 2;
    // ctx.stroke();

    const arrowX = x + arrowDistance;
    const arrowY = y;
    arrowPositions.push({ x: arrowX, y: arrowY });
    arrowTargets.push({ x: arrowX, y: arrowY });
}


canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Check if any arrow was clicked
    for (let i = 0; i < colors.length; i++) {
        const arrow = arrowPositions[i];

        if (
            mouseX >= arrow.x - arrowSize &&
            mouseX <= arrow.x + arrowSize &&
            mouseY >= arrow.y - arrowSize &&
            mouseY <= arrow.y + arrowSize
        ) {
            arrowTargets[i] = {
                x: 50,
                y: 50 + i * circleSpacing
            };
            break;
        }
    }
});
const updateArrows = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < colors.length; i++) {
        const arrow = arrowPositions[i];
        const target = arrowTargets[i];

        const dx = target.x - arrow.x;
        const dy = target.y - arrow.y;

        if (Math.abs(dx) > arrowSpeed) {
            arrow.x += Math.sign(dx) * arrowSpeed;
        } else {
            arrow.x = target.x;
        }

        if (Math.abs(dy) > arrowSpeed) {
            arrow.y += Math.sign(dy) * arrowSpeed;
        } else {
            arrow.y = target.y;
        }

        // Arrow
        ctx.beginPath();
        ctx.moveTo(arrow.x, arrow.y);
        ctx.lineTo(arrow.x + arrowSize, arrow.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.stroke();

        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(arrow.x + arrowSize / 2, arrow.y + arrowSize / 2);
        ctx.lineTo(arrow.x + arrowSize / 2, arrow.y - arrowSize / 2);
        ctx.lineTo(arrow.x, arrow.y);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    // Redraw the circles
    for (let i = 0; i < colors.length; i++) {
        const x = 50;
        const y = 50 + i * circleSpacing;

        ctx.beginPath();
        ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.stroke();

        if (touchedCircle[i]) {
            ctx.fillStyle = "gray";
        } else {
            ctx.fillStyle = colors[i];
        }

        ctx.fill();
    }

    // Check if any arrow has touched a circle
    for (let i = 0; i < colors.length; i++) {
        const arrow = arrowPositions[i];
        const circle = { x: 50, y: 50 + i * circleSpacing };

        const dx = arrow.x - circle.x;
        const dy = arrow.y - circle.y;

        const distance = dx + dy;

        if (distance <= arrowSize) {
            touchedCircle[i] = true;
        }
    }
    requestAnimationFrame(updateArrows);
}
// circles with updated colors
const drawCircles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleColors.length; i++) {
        const x = 50;
        const y = 50 + i * circleSpacing;

        ctx.beginPath();
        ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);

        if (circleTouched[i]) {
            ctx.fillStyle = "gray";
        } else {
            ctx.fillStyle = circleColors[i];
        }

        ctx.fill();
    }
}

// Start the animation loop
updateArrows();
// console.log(circleColors);

const reset = document.getElementById("resetBtn")

reset.addEventListener("click", (e) => {
    window.location.reload()
})
























// // TO CREATE THE CIRCLES

// ctx.beginPath();
// ctx.arc(50, 45, 25, 0, 2 * Math.PI);
// ctx.fillStyle = '#FFD966';
// ctx.fill();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'black';
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(50, 115, 25, 0, 2 * Math.PI);
// ctx.fillStyle = '#2B78E4';
// ctx.fill();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'black';
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(50, 185, 25, 0, 2 * Math.PI);
// ctx.fillStyle = '#CC0000';
// ctx.fill();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'black';
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(50, 255, 25, 0, 2 * Math.PI);
// ctx.fillStyle = '#6AA84F';
// ctx.fill();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'black';
// ctx.stroke();


// // TO CREATE THE ARROWS


// ctx.moveTo(515, 42.5);  //START POINT
// ctx.lineTo(550, 42.5);
// ctx.lineTo(550, 45);
// ctx.lineTo(515, 45);
// ctx.lineTo(515, 50);
// ctx.lineTo(507, 42.5);
// ctx.lineTo(515, 36);
// ctx.lineTo(515, 42.5);
// ctx.stroke();
// ctx.fill()
// ctx.fillStyle = 'black'


// ctx.moveTo(515, 112.5);  //START POINT
// ctx.lineTo(550, 112.5);
// ctx.lineTo(550, 115);
// ctx.lineTo(515, 115);
// ctx.lineTo(515, 120);
// ctx.lineTo(507, 112.5);
// ctx.lineTo(515, 106);
// ctx.lineTo(515, 112.5);
// ctx.fillStyle = 'black'
// ctx.fill()
// ctx.stroke();


// ctx.moveTo(515, 182.5);  //START POINT
// ctx.lineTo(550, 182.5);
// ctx.lineTo(550, 185);
// ctx.lineTo(515, 185);
// ctx.lineTo(515, 190);
// ctx.lineTo(507, 182.5);
// ctx.lineTo(515, 176);
// ctx.lineTo(515, 182.5);
// ctx.fillStyle = 'black'
// ctx.fill()
// ctx.stroke();


// ctx.moveTo(515, 252.5);  //START POINT
// ctx.lineTo(550, 252.5);
// ctx.lineTo(550, 255);
// ctx.lineTo(515, 255);
// ctx.lineTo(515, 260);
// ctx.lineTo(507, 252.5);
// ctx.lineTo(515, 246);
// ctx.lineTo(515, 252.5);
// ctx.fillStyle = 'black'
// ctx.fill()
// ctx.stroke();

