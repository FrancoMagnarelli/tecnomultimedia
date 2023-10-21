class Imagenes {

  constructor () {
    this.load();
    textAlign(CENTER);
  }

  load() {
    this.imagenQuieto = loadImage ("data/Idle.png");
    this.imagenPerder = loadImage ("data/Perder.jpeg");
    this.imagenGanar = loadImage ("data/Ganar.jpeg");
    this.imagenInicio = loadImage ("data/Menu.jpeg");
  }

  Inicio() {
    image(this.imagenInicio, 0, 0, width, height);
    textSize(32);
    fill(255);
    textStyle (BOLD);
    text ("EN LA NOCHE", width/2, 100);
    textStyle(NORMAL);
    textSize(22);
    text ("Todos los vecinos se cansaron de los gritos de \n la señora Navárrez y te ofreciste para callarla", width/2, 200);
    text ("Mueve al personaje con las flechas de direccion \n y esquiva las cosas que tira la sra. Navárrez para detenerte", width/2, 270);
  }

  Personaje (px, py) {
    image(this.imagenQuieto, px, py, 40, 40);
  }

  Perder () {
    image(this.imagenPerder, 0, 0, width, height);
    textSize(32);
    stroke(255, 0, 0);
    fill (255);
    textStyle (BOLD);
    text ("GAME OVER", width/2, height/2);
    textSize (22);
    noStroke();
    textStyle(NORMAL);
    text ("Pulsa la R para reiniciar", width/2, 355);
  }

  Ganar() {
    image(this.imagenGanar, 0, 0, width, height);
    textSize(32);
    fill (0, 138, 191);
    textStyle (BOLD);
    text ("¡Felicidades!", width/2, 200);
    textSize (22);
    fill(255);
    textStyle(NORMAL);
    text ("Ahora todos dormirán tranquilos", width/2, 280);
    textSize (18);
    text ("Pulsa la R para reiniciar", width/2, 355);
  }
}
