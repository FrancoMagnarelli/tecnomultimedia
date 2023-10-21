class Meta {

  constructor () {
    this.mX = 670;
    this.mY = 10;
    this.ancho = 30;
  }


  dibujar() {
    noStroke();
    fill (113, 64, 0);
    rect (this.mX, this.mY, this.ancho, 40);
    fill(232, 225, 0);
    circle (690, 30, 5);
  }
}
