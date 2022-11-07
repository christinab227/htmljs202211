//single line javascript comment look like this
/*
multi 
line javasricpt looks like this
*/
// define varible tp access properties of canvas id
var canvas = document.getElementById("canvas");
// "" and '' quotes mean the same thing
// defines the drawing context of the canvas element
var ctx = canvas.getContext('2d');

// draw stuff
// set up your color and outline styles
ctx.fillStyle = "rgb(0,0,255)";
ctx.strokeStyle = " lightblue";
ctx.lineWidth = "5";
// draws a rectangel fillrect (x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(30,30,200,100);

//draw lines
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(800,0)
ctx.stroke();

ctx.strokeStyle = "pink";
ctx.beginPath();
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

// draw a cricle
ctx.beginPath();
ctx.arc(400,300,50, 0,  (3 * Math.PI)/2, false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();


//some random shape
ctx.fillStyle = "#55ddef";
ctx.strokeStyle = 'yellow';
ctx.lineWidth = "2";

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.fill();
ctx.stroke();

// draw an image to the canvas
var mario = new Image();
mario.src = "images/mario.png";

mario.onload = function(){
    ctx.drawImage(mario, 600, 300, 40,80) 
}
