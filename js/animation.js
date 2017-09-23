var canvas, context;
var x,y,w,h;
var r = 50;
var color = "red";
var time=0;
var maxCircles=5;
var circles = new Array();

canvas = document.getElementsByTagName('canvas')[0];
context = canvas.getContext('2d');

resize();
x= w*0.5;
y= h*0.5;
var rect = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove',function(ev){
    x = ev.clientX - rect.left;
    y = ev.clientY - rect.top;
});
canvas.addEventListener('mousedown',function(ev){
    for(var i = 0; i < maxCircles; i++){
        var color = randomColor();
        context.strokeStyle = rgb(color.a,color.b,color.c);
        context.arc(x+20*Math.random() - 10,y + 20*Math.random() - 10,5,0,2*Math.PI);
    }
    context.stroke();
});
requestAnimationFrame(animationLoop);

function randomColor(){
    return{
        a: 255*Math.random()|0,
        b: 255*Math.random()|0,
        c: 255*Math.random()|0,
    }
}
function animationLoop(delta){
    time = delta/1000;
    context.strokeStyle = color;
    context.lineWidth = 3;
    context.clearRect(0,0,w,h);
    context.beginPath();
    context.arc(x,y,r+10*Math.sin(2*Math.PI*time),0,2*Math.PI);
    context.stroke();
    console.log(delta);
    requestAnimationFrame(animationLoop);
}

function resize(){
    w = canvas.width;
    h = canvas.height;
}