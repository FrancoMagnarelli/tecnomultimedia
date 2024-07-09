class Imagenes {
    constructor() {
        this.manchas = [];
        for (let i = 1; i < 27; i++) {
            this.manchas.push(loadImage("data/mancha" + i + ".png"));
        }
        this.fondoAmarillo = loadImage("data/fondoAmarillo.png");
    }
}