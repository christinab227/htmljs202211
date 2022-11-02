//single line javascript comment look like this
/*
multi 
line javasricpt looks like this
*/
// define varible tp access properties of canvas id
var canvas = document.getElementById("canvas");
// "" and '' quotes mean the same thing
// defines the drawing context of the canvas element
var ctx = canvas.getcontext('2d');

// draw stuff
// set up your color and outline styles
ctx.fillstyle = "rgb(0,0,255)";
ctx.strokestyle = "green";
ctx.linewidth = "5";
// draws a rectangel fillrect (x,y,width,height)
ctx.fillrect(30,30,200,100)