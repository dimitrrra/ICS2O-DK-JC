function Person() {
  this.x=height/2;
  this.colour = color(100, 25, 67);

  this.pos = createVector(25, height);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(this.colour);
    stroke(255);
     ellipse(this.x, this.pos.y-15, 30, 30);

    //ellipse(this.pos.x, this.pos.y-15, 30, 30);
  }

  this.edges = function(pipe) {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
      if (this.pos.y = 0) {
      this.vel.y *= 0;
      this.pos.y = edges;
 
    
  }
    }
    if((pipe.y-50<person.y || pipe.y+50>person.y)&&(pipe.x-50<person.x || pipe.x+50>person.x)){
}
  }

this.checkPipe = function(p){
//var rect1 = {x: 5, y: 5, width: 50, height: 50} "this" person
//var rect2 = {x: 20, y: 10, width: 10, height: 10} pipe 
   //fill(255,255,0);
     //rect(30,30,10,10);
     console.log(p.y);
     console.log(this.y);
if (this.x > p.x && this.x < p.size + p.x &&(this.pos.y > p.y ||
   this.pos.y < p.y - p.sep)) {
     this.colour = color(255,0,0);
   //background(255,0,0);
     rect(30,30,10,10 ); //shows up whenever the man hits the bar
}else{rect(10,10,10,10);



}
if(this.y>p.y){
       rect(50,50,10,10);

}
// filling in the values =>

//if (5 < 30 &&
//    55 > 20 &&
//    5 < 20 &&
//    55 > 10) {
//    // collision detected!
//}
}
}
