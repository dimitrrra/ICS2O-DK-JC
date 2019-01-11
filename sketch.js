var person;
var redPipe; 
//checks what scene it currently is
var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false; 
var scene5 = false;

//var obstacle;

function setup() {
  createCanvas(640, 360);
  person = new Person();
  redPipe = new Pipe();
}

var x = -100;


function keyPressed() {
  if (key == ' ') {
    var jump = createVector(0, -5);
    person.applyForce(jump);
    
      
  }
}


function draw() {
  background(51);

  translate(-person.pos.x+50, 0);
  
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  
  person.update();
  person.edges(redPipe);
  person.display();
  redPipe.update();
  redPipe.display();
  fill(255, 900, 100);
  
  
  

}
//life counter

//score counter

//coin object

//title screen

function draw() {
  
  if (scene1 == true) {
    //title screen
    background(255,255,255);
    textSize(50);
    fill(0, 38, 255);
    text("Flappy Wrestler", 150, 100);
    noStroke();
    rect(90, 250, 200, 60);
    fill(0,0,0);
    textSize(31);
    text("play game", 117, 290);
    rect(0,0,50,400);
    rect(590,0,50,400);
    rect(0,0,650,40);
    rect(0,325,650,40);
    
  } else if (scene2 == true) { 
//Characher selection
    background(255,255,255); //black
    textSize(48);
    fill(0, 38, 255); //peach
    text("character select", 143, 75);
    fill(255,193,86); //yellow
    textSize(30);
    text("MONKEY", 131, 350);
    text("ALIEN", 385, 350);
    textSize(20);
    noStroke();
    fill(0, 38, 255);
    //red
    rect(124, 96, 142, 217);
    rect(360, 96, 142, 217);
   
    fill(0,0,0); //black
    rect(126, 98, 138, 213);
    rect(362, 98, 138, 213);
  
    fill(255); //white rectangle
    rectMode(CENTER);
    rect(194, 207, 20, 50);
    rect(433, 207, 20, 50);
   
		rectMode(CORNER);
    
  } else if(scene3 == true) {
    //options screen
    background(11, 57, 84);
    fill(255, 90, 79);
    textSize(40);
    text("options", 230, 50);
    fill(255, 90, 79);
    noStroke();
    rect(19, 25, 108, 49);
    fill(11, 57, 84);
    textSize(30);
    text("back", 38, 57);
	  
  } else if(scene4 == true) {

  background(51);

  translate(-person.pos.x+50, 0);
  
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  
  person.update();
  person.edges(redPipe);
  person.display();
  redPipe.update();
  redPipe.display();
  fill(255, 900, 100);

	  
  } else if(scene5 == true) {
    //credits screen
    background(255,255,255);
    fill(0, 38, 255);
    textSize(48);
    textAlign(CENTER);
    text("Credits", 300, 52);
    fill(255, 193, 86);
    textSize(40);
    text("Jaden Coltart", 300, 150);
    text("Dimitra Kyriakoylias", 300, 200);
    text("", 300, 250);
    text("Emma", 300, 300);
    text("Luke", 300, 350);
    textAlign(LEFT);
  }
}

//character movement

//changes scenes based on mouse clicks and where the mouse clicks
function mousePressed() {
 if (scene1 == true && mouseX > 50 && mouseX < 250 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene2 = true;
   		scene1 = false;
  } else if (scene1 == true && mouseX > 350 && mouseX < 550 && mouseY > 250 && mouseY < 310 && mousePressed) {
    	scene3 = true;
    	scene1 = false;
  } else if (scene2 == true && mouseX > 39 && mouseX < 181 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene2 == true && mouseX > 221 && mouseX < 363 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene2 == true && mouseX > 417 && mouseX < 559 && mouseY > 96 && mouseY < 313 && mousePressed) {
    	scene4 = true;
    	scene2 = false;
  } else if (scene3 == true && mouseX > 19 && mouseX < 127 && mouseY > 25 && mouseY < 74 && mousePressed) {
    	scene1 = true;
    	scene3 = false;
  } else if (scene4 == true && mousePressed) {
    	scene5 = true;
    	scene4 = false;
  } else if (scene5 == true && mousePressed) {
    	scene1 = true;
    	scene5 = false;
  }}
