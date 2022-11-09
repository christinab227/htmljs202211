var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(Main);
var x = 100

var mario = new Image();
mario.src = "images/mario.png";
mario.onload = function(){
    Main();
}

function Main(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    // ctx.fillStyle= "purple"
    // ctx.beginPath();
    // ctx.arc(x, 300, 20, 0, 2 * Math.PI, true)
    // ctx.fill();
    ctx.drawImage(mario,x,300,60,60);
    x += 199;
    if(x > 800 + 20){
        x=0 -20;

    }
    timer = requestAnimationFrame(Main)

}