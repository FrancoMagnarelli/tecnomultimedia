class Principal {

  constructor() {
    this.grilla = new Grilla();
    this.cantManchas = floor(random (6,10));
    this.manchasActuales = 0;
    this.manchas = [];
    this.celdasOcupadas = [];
    this.anguloRotacion = 0.03;
  }

  display() {
    this.grilla.dibujar();
    for (let mancha of this.manchas) {
      mancha.dibujar();
    }
    console.log (this.manchasActuales);
    console.log (this.cantManchas);
  }
  
   funcionTecla(keyCode) {
      if ((key === 'm') && (this.manchasActuales < this.cantManchas)) {
      let nuevaMancha = new Mancha(this.celdasOcupadas);
      if (nuevaMancha.posicionValida) {
        this.manchas.push(nuevaMancha);
        this.celdasOcupadas.push({ x: nuevaMancha.posX, y: nuevaMancha.posY });
        this.manchasActuales = this.manchasActuales + 1;
      }
    }
  }
  
  teclaMantenida(keyCode) {
    if (key === 'r') {
      for (let mancha of this.manchas) {
        mancha.rotarFondo(mancha.anguloFondoAmarillo + this.anguloRotacion);
      }
    }
    if (key === 't') {
      for (let mancha of this.manchas) {
        mancha.rotarFondo(mancha.anguloFondoAmarillo - this.anguloRotacion);
      }
    }
    if (keyCode === LEFT_ARROW) {
      for (let mancha of this.manchas) {
        mancha.rotarMancha (mancha.anguloMancha - this.anguloRotacion);
      }
    }
    if (keyCode === RIGHT_ARROW) {
      for (let mancha of this.manchas) {
        mancha.rotarMancha (mancha.anguloMancha + this.anguloRotacion);
      }
    }
  }
}
