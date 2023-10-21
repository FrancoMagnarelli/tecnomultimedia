// Franco Magnarelli
// Comision 1
// Link al video: https://www.youtube.com/watch?v=LUae5tVFwKM

let p;

function setup() {
  createCanvas(800, 400);
  p = new Principal();
}

function draw() {
  background(100);
  p.display();
  if (keyIsPressed) {
    p.teclaMantenida(keyCode);
  } 
}

function keyPressed () {
  p.funcionTecla (keyCode);
}
