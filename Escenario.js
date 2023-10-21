class Escenario {
  constructor() {
    this.grosorLinea = 5;
    this.colorLinea = 30;
  }


  dibujar() {
    strokeWeight(this.grosorLinea);
    stroke(this.colorLinea);
    for (let i = 50; i <= 350; i+= 50) {
      line (100, i, 700, i);
    }
  }
}
