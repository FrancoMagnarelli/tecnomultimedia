class Grilla {
    constructor() {
        this.columnas = 3;
        this.filas = 3;
        this.tamCelda = 600 / this.columnas;
        noFill();
        strokeWeight(15);
    }

    dibujar() {
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                rect(i * this.tamCelda, j * this.tamCelda, this.tamCelda, this.tamCelda);
            }
        }
    }
}
