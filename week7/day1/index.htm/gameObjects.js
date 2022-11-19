var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main);

//random number function
function randomRange(high, low){
    return Math.random() * (high - low) + low;
}

function gameObject(){
    //example of properities of a class
    this.width = randomRange(50, 10);
    this.height = this.width;
    this.raidus = randomRange(50, 2);
    this.x = randomRange(canvas.width, 0); 
    this.y = randomRange(canvas.height, 0);
    this.color = `rgb(${randomRange(255,0)}, ${randomRange(255,0)}, ${randomRange(255,0)})`; 
    this.vy = randomRange(30,-30);
    this.vx = randomRange(30,-30);


    // this is an example of a method or function
    this.drawSquare = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height,);
    }
    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.raidus, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.fill();


    }
    
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //bottom of the canvas
        if(this.y > canvas.height - this.raidus){
            // make sure ot dosent leave the screen
            this.y = canvas.height - this.raidus;
            this.vy = -this.vy;
        }
        //top of canvas
        if(this.y < 0 - this.raidus){
            this.y = this.raidus;
            this.vy =  this.vy * -1;
        }
        // right side of the canvas
        if(this .x > canvas.width - this.raidus){
            this.x = canvas.width - this.raidus;
            this.vx = -this.vx * -1;
        }
        // left side of the canvas
        if(this.x < this.raidus){
            this.x = this.raidus;
            this.vx = this.vx * -1;
        }

    }   
}
// make a new instance of a square
// var square =  new gameObject();
// // use dot syntax to draw the square
// square.drawSquare();

// var square2 =  new gameObject();
// square2.drawSquare();


var squares = [];
// squares[0] = new gameObject();
// squares[1] = new gameObject();
// squares[2] = new gameObject();
// squares[3] = new gameObject();
// squares[4] = new gameObject();
// squares[5] = new gameObject();
// squares[6] = new gameObject();
// squares[7] = new gameObject();
// squares[8] = new gameObject();
// squares[9] = new gameObject()


// squares[0].drawSquare()
// squares[1].drawSquare()
// squares[2].drawSquare()
// squares[3].drawSquare()
// squares[4].drawSquare()
// squares[5].drawSquare()
// squares[6].drawSquare()
// squares[7].drawSquare()
// squares[8].drawSquare()
// squares[9].drawSquare()

// var numSquares = 1;

// for(var i = 0; i<numSquares; i++){
//     squares[i] = new gameObject();
//     squares[i].drawSquare();


// }

var circles = [];
var numCircles = 10;

for(var i = 0; i<numCircles;i++){
    circles[i] = new gameObject();
    circles[i].drawCircle();
}
function main(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    //loop through all objects in the array
    for(var i = 0; i<circles.length; i++){
        circles[i].move();
        //draw the circles to the screen
        circles[i].drawCircle();
    }
    timer = requestAnimationFrame(main);

}
main();