let posX;
let posY;

let velX;
let velY;

let radius;
let circleClr; 

//UI
let sliderHue;
let clickCounter;

function setup(){
   let myCanvas = createCanvas(800, 600);
   myCanvas.parent('canvasParent');

   colorMode(HSB, 360, 100, 100);
   sliderHue = createSlider(0, 360, 0, 25);
   sliderHue.parent('canvasUI');
   sliderHue.style('width', '700px')

   posX = width/2;
   posY = height/2

    velX = 4;
    velY = 3;

    radius = 100
    circleClr = color(349, 98, 60);

    clickCounter = 0;
}

function draw(){
    background(192, 84, 36);   

    fill (29, 86, 98);

    stroke(23, 91, 89);
    strokeWeight(7);    
    rect(690, 12, 100);

    textSize(30);
    strokeWeight(2);
    fill(323, 84, 37);
    text(clickCounter, 727, 70);
    
    circleClr = color(sliderHue.value(), 80, 100);
    noStroke();
    fill(circleClr);

    circle(posX, posY, radius * 2);
    if(posX + radius >= width || posX - radius <= 0){
        velX = velX * -1;
    }
    if(posY + radius >= height || posY - radius <= 0){
        velY = velY * -1;
    }
    posX += velX;
    posY += velY;

} // end of draw

function mouseClicked(){

    if(dist(mouseX, mouseY, posX, posY) < radius){

       radius += -5;

       clickCounter++;

       if(velX > 0){
           velX++;
       }
       else{
           velX--;
       }
       if(velY > 0){
           velY++;
       }
       else{
           velY--;
       }
    }
}