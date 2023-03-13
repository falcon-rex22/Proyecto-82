var canvas = document.getElementById("MyCanvas");

var ctx = canvas.getContext("2d")
var Color="red"
ctx.beginPath();
ctx.strokeStyle=Color;
ctx.lineWith=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke()

canvas.addEventListener("mousedown",MyMouseDown)

function MyMouseDown(e){

Color=document.getElementById("Color").value

var MouseX = e.clientX - canvas.offsetLeft
var MouseY = e.clientY - canvas.offsetTop

circle(MouseX,MouseY)
}

function circle(MouseX,MouseY){
    ctx.beginPath();
    ctx.strokeStyle=Color;
    ctx.lineWith=2;
    ctx.arc(MouseX,MouseY,40,0,2*Math.PI);
    ctx.stroke()
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}