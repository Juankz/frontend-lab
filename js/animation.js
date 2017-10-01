var canvas, context;
var x,y,w,h;
var r = 6;
var color = "red";
var time=0;
var maxCircles=10;
var circles = [];

function Circle (x,y){
    this.x=x;
    this.y=y;
    this.a = 1;
    this.dirx = getRandomDirection();
    this.diry = getRandomDirection();
    this.t = 0;
}
function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var cars = new Array(10);
cars.push(new Auto("Nissan", "300ZX", 1992));
cars.push(new Auto("Mazda", "Miata", 1990));

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
        var c = new Circle(0,0);
        c.x = ev.clientX - rect.left + 50*Math.random() -25;
        c.y = ev.clientY - rect.top + 50*Math.random() -25;
        c.color = randomColor();
        c.r = 7 + 8*Math.random();
        circles.push(c);
        console.log("Nuevo circulo");
        
    }
    cars.forEach(function (item){
        console.log(item.marca)
    });
});
requestAnimationFrame(animationLoop);

function getRandomDirection(){
    if(Math.random()>0.5){
        return 1;
    }else{
        return -1;
    }
}

function randomColor(){
    return{
        r: 100+155*Math.random(),
        g: 100+155*Math.random(),
        b: 100+155*Math.random(),
    }
}
function animationLoop(delta){
    var circles4rm = [];
    time = delta/1000;
    context.lineWidth = 3;
    context.clearRect(0,0,w,h);
    context.beginPath();
    circles.forEach (function(item){
        context.beginPath();
        var c = item;
        c.a = c.a-0.015;
        c.t += 1/60;
        c.x += 2*c.dirx;
        c.y += 2*c.diry;
        
        if(c.a <= 0){
            circles4rm.push(c);
        }
        context.strokeStyle = "rgba("+c.color.r+","+c.color.g+","+c.color.b+","+c.a+")";
        context.arc(c.x,c.y,c.r+20*c.t,0,2*Math.PI);
        context.stroke();
    });
    context.beginPath();
    context.fillStyle = color;
    context.arc(x,y,r+0.25*Math.sin(2*Math.PI*time),0,2*Math.PI);
    context.fill();
    
    //remove invisible rings
    circles4rm.forEach(function(item){
        delete circles[item];
    });
    
    requestAnimationFrame(animationLoop);
}

function resize(){
    w = canvas.width;
    h = canvas.height;
}