var canvas, context, ctx, canvas2;

function init(){
    canvas = document.getElementById('canv');
    context = canvas.getContext('2d');
    canvas2 = document.getElementById('canv2');
    ctx = canvas2.getContext('2d');
    drawApple(150,300,Math.PI,'red');
    drawApple(350,300,Math.PI*1.1,'green');    
    drawChart([1,2,3,5,6,4,3,2]);
    drawTitle(ctx,"Histograma");
    drawTitle(context,"Manzanas");
}

function drawApple(x,y,angle,color){
    //GOOD PRACTICE
    context.save();
    var scl = 1.2;
    context.translate(x,y);
    context.rotate(angle);
    context.scale(scl,scl);
    context.strokeStyle=color;
    context.lineWidth=2;
    context.beginPath();
    context.arc(0, 0, 70, 0, 2 * Math.PI);
    context.stroke();
    //context.fill();
    context.closePath();
    
    context.strokeStyle='green';
    context.beginPath();
    context.moveTo(0,55);
    context.lineTo(0,100);
    context.lineTo(7,100);
    context.lineTo(0,55);   
    context.stroke();

    context.restore();

    // // set the global context values
    //  context.lineWidth=5;
    //  context.fillStyle='red';
    //  context.strokeStyle='blue'
    //  // font for all text drawing
    //  context.font = 'italic 20pt Calibri';
     
    //  // Draw the two filled red rectangles
    //  context.fillRect(10, 30, 70, 150);
    //  context.fillRect(110, 30, 70, 150);
     
    //  // Draw the two blue wireframe rectangles
    //  context.strokeRect(10, 30, 70, 150);
    //  context.strokeRect(110, 30, 70, 150);
     
    //  // Draw a message above the rectangles
    //  context.fillText("hello", 70, 22);    
}

function drawChart(elements){
    var scale = 30;
    ctx.save();
    ctx.translate(100,300);
    ctx.scale(scale,-scale);
    ctx.fillStyle='blue';
    for(var i = 0; i<elements.length;i++){
        ctx.fillRect(i,0,1,elements[i]);
        console.log(elements[i]);
    }
    ctx.font = 'italic 1px Calibri';
    ctx.fillStyle='black';
    ctx.scale(1,-1);
    for(var i = 0; i<elements.length;i++){
        ctx.fillText(elements[i],i,1);
    }
    ctx.font = 'normal normal 1px Calibri';
    ctx.restore();
}

function drawTitle(c, title){
    c.save();
    c.translate(0,0);
    c.fillStyle = "gray";
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.textBaseline="top"; //Under the baseline
    c.font="normal bold 50px Calibri";
    var textWidth = c.measureText(title).width;
    c.fillText(title,250-(textWidth/2),10);
    c.textAlign = "center";
    c.strokeText(title,250,10);
    c.restore();
}