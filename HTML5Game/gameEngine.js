
var canvas = document.getElementById("myCanvas");
var width = 500;
var height = 600;
var ball = {
    x: width / 2,
    radius: 55,
    y:height,
    vx: 0,
    vy: 1,
    draw: function () {
        context.beginPath();
        context.arc(this.x, this.y - this.radius, this.radius, 0, 2 * Math.PI);
        context.fillStyle = '#e67e22';
        context.fill();
        context.closePath();
    }
};
var gravity = 0.1;
var bounceFactor = 0.2;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext("2d");
function drawBoard(){
    context.strokeStyle = '#95a5a6';
    context.lineCap = "round";
    context.lineWidth = 6;
    context.rect(125, 50, 250, 150);
    context.rect(185, 100, 130, 80);
    context.stroke();
    context.beginPath();
    context.lineWidth = 11;
    context.strokeStyle = '#e74c3c';
    context.lineCap = "round";
    context.moveTo(180, 180);
    context.lineTo(320, 180);
    context.stroke();
    context.closePath();

}
function clear() {
    context.clearRect(0, 0, width, height);
}

function update() {
    clear()
    drawBoard();
    ball.draw();
    ball.y -= ball.vy;
    ball.vy += gravity;
    if (ball.y < 180 +2* ball.radius) {
        ball.y = height - ball.radius;
        ball.vy *= -bounceFactor;
    }
}

setInterval(update, 10);
/********************************************************************************************************************/
