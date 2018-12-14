var person;
var redPipe; 


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
