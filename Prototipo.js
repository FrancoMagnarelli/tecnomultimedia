
let p;

function setup() {
  createCanvas(600,600);
  p = new Principal();
}


function draw() {
  background (177,181,190);
  p.display();
  if (keyIsPressed) {
    p.teclaMantenida(keyCode);
  }
}

function keyPressed() {
  p.funcionTecla(keyCode);
}
