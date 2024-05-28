class Imagenes {
  
  constructor() {
    this.load();
  }
  
  load() {
    this.manchas = [];
    for (let i = 1; i < 27; i++) {
      this.manchas[i] = loadImage ("data/mancha"+i+".png");
    }
    this.fondoAmarillo = loadImage ("data/fondoAmarillo.png");
  }

  
}
