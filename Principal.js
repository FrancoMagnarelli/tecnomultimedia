class Principal {
    constructor() {
        this.grilla = new Grilla();
        this.cantManchas = floor(random(6, 9));
        this.manchasActuales = 0;
        this.manchas = [];
        this.celdasOcupadas = [];
        this.anguloRotacion = 0.01;
        this.desplazarManchas = Math.random() < 0.25;
    }

    display() {
        this.grilla.dibujar();
        for (let mancha of this.manchas) {
            mancha.dibujar();
        }
    }

    crearMancha() {
        if (this.manchasActuales < this.cantManchas) {
            let nuevaMancha;
            let posicionValida = false;
            let intentos = 0;

            while (!posicionValida && intentos < 100) {
                nuevaMancha = new Mancha(this.celdasOcupadas, width, height);

                if (this.desplazarManchas) {
                    nuevaMancha.posX += 50;
                    nuevaMancha.posY += 40;
                }

                if (nuevaMancha.posicionValida) {
                    let ocupada = this.manchas.some(mancha => mancha.posX === nuevaMancha.posX && mancha.posY === nuevaMancha.posY);
                    if (!ocupada) {
                        posicionValida = true;
                    }
                }
                intentos++;
            }

            if (posicionValida) {
                this.manchas.push(nuevaMancha);
                this.celdasOcupadas.push({ x: nuevaMancha.posX, y: nuevaMancha.posY });
                this.manchasActuales++;
            }
        }
    }

    borrarMancha() {
        if (this.manchas.length > 0) {
            let ultimaMancha = this.manchas.pop();
            this.manchasActuales--;
            let indice = this.celdasOcupadas.findIndex(celda => celda.x === ultimaMancha.posX && celda.y === ultimaMancha.posY);
            if (indice !== -1) {
                this.celdasOcupadas.splice(indice, 1);
            }
            this.cantManchas = floor(random(6, 9));

            if (this.manchas.length === 0) {
                this.desplazarManchas = Math.random() < 0.25;
            }
        }
    }

    rotarManchasDerecha() {
        for (let mancha of this.manchas) {
            mancha.rotarMancha(mancha.anguloMancha + this.anguloRotacion);
        }
    }

    rotarFondoDerecha() {
        for (let mancha of this.manchas) {
            mancha.rotarFondo(mancha.anguloFondoAmarillo + this.anguloRotacion);
        }
    }

    rotarManchasIzquierda() {
        for (let mancha of this.manchas) {
            mancha.rotarMancha(mancha.anguloMancha - this.anguloRotacion);
        }
    }

    rotarFondoIzquierda() {
        for (let mancha of this.manchas) {
            mancha.rotarFondo(mancha.anguloFondoAmarillo - this.anguloRotacion);
        }
    }
}