class Mancha {
    constructor(celdasOcupadas, canvasWidth, canvasHeight) {
        this.imagen = imagenes;
        imageMode(CENTER);
        this.posicionesX = [100, 300, 500];
        this.posicionesY = [100, 300, 500];
        this.indiceMancha = floor(random(this.imagen.manchas.length));
        this.posicionValida = false;
        this.generarPosicion(celdasOcupadas);
        this.anguloFondoAmarillo = random(TWO_PI);
        this.anguloMancha = random(TWO_PI);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

    }

    dibujar() {
        if (this.posicionValida) {
            push();
            translate(this.posX, this.posY);
            rotate(this.anguloFondoAmarillo);
            image(this.imagen.fondoAmarillo, 0, 0, 200, 200);
            rotate(this.anguloMancha - this.anguloFondoAmarillo);
            image(this.imagen.manchas[this.indiceMancha], 0, 0, 200, 200);
            pop();
        }
    }

    generarPosicion(celdasOcupadas) {
        let intentos = 0;
        while (!this.posicionValida && intentos < 10) {
            this.posX = random(this.posicionesX);
            this.posY = random(this.posicionesY);
            if (!this.estaOcupada(celdasOcupadas, this.posX, this.posY)) {
                this.posicionValida = true;
            }
            intentos++;
        }
    }

    estaOcupada(celdasOcupadas, x, y) {
        for (let celda of celdasOcupadas) {
            if (celda.x === x && celda.y === y) {
                return true;
            }
        }
        return false;
    }

    rotarFondo(nuevoAnguloFondo) {
        this.anguloFondoAmarillo = nuevoAnguloFondo;
    }

    rotarMancha(nuevoAnguloMancha) {
        this.anguloMancha = nuevoAnguloMancha;
    }

}

