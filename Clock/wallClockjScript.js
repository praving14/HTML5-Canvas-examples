var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var radius = canvas.height / 2;
context.translate(radius, radius); // Remap the (0,0) position to the centre of the canvas();
radius = radius * 0.7;
setInterval(drawClock, 1000);

function drawClock() {
    drawFace();
    drawNumbers();
    drawHand();
}

function drawNumbers(){
    var ang;
    var num;
    var value;
    context.font = radius * 0.15 + "px sans-serif";
    context.textBaseline = "middle";
    context.textAlign = "left";
    context.fillStyle = "#e74c3c";
    for (num = 1; num < 13 ; num++) {
        ang = num * (Math.PI / 6);
        context.rotate(ang);
        context.translate(0, -radius * 0.85);
     
        value = getRomanNumerals(num);
     //   value = num.toString();
        context.fillText(value, -1, 0);
     
        context.translate(0, radius * 0.85);
        context.rotate(-ang);
    }
    
}
function getRomanNumerals(num){
    var roman;
    switch (num) {
        case 1:
            roman="I";
            break;
        case 2:
            roman="II";
            break;
        case 3:
            roman="III";
            break;
        case 4:
            roman="IV";
            break;
        case 5:
            roman="V";
            break;
        case 6:
            roman="VI";
            break;
        case 7:
            roman="VII";
            break;
        case 8:
            roman="VIII";
            break;
        case 9:
            roman="IX";
            break;
        case 10:
            roman="X";
            break;
        case 11:
            roman="XI";
            break;
        case 12:
            roman="XII";
            break;
    }
    return roman;
}

function drawFace(){
    var grad;
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    grad = context.createRadialGradient(0, 0, radius * 1, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#bdc3c7');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#bdc3c7');
    context.strokeStyle = grad;
    context.lineWidth = radius * 0.1;
    context.stroke();
    context.beginPath();
    context.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    context.fillStyle = "#333";
    context.fill();
}

function drawHand() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
   
    //Draw second hand 
    var secondcolor = "#f39c12";
    second = (second * Math.PI / 30);
    showTime(context, second, radius * 0.9, radius * 0.02, secondcolor);
    //Draw minute hand
    var minutecolor = "#e67e22";
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    showTime(context, minute, radius * 0.7, radius * 0.05, minutecolor);
    //Draw hour hand
    hour = hour % 12;
    var hourcolor = "#e74c3c";
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    showTime(context, hour, radius * 0.5, radius * 0.07, hourcolor);

}

function showTime(context, angle, length, width, color) {
    //Drawing the minute, hour or secong hand length in the clock
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.rotate(angle);
    context.lineTo(0, -length);
    context.strokeStyle = color;
    context.stroke();
    context.rotate(-angle);
}