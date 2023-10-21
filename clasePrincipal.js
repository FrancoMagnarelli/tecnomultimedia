class Principal {
  constructor() {
    this.imagenes = new Imagenes ();
    this.personaje = new Personaje(100, 310);
    this.escenario = new Escenario();
    this.meta = new Meta();
    this.cantidadEnemigos = 10;
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos [i] = new Enemigo(i*80);
    }
    this.e1 = new Escalera(600, 350);
    this.e2 = new Escalera(200, 300);
    this.e3 = new Escalera(650, 250);
    this.e4 = new Escalera(230, 200);
    this.e5 = new Escalera(550, 150);
    this.e6 = new Escalera(120, 100);
    this.segundos = 0;
    this.estadoJuego = 0;
  }

  display() {
    this.contarSegundos();
    if (this.segundos < 5) {
      this.imagenes.Inicio();
    } else if (this.segundos >= 5 && this.estadoJuego === 0) {
      print (this.personaje.gano);
      this.escenario.dibujar();
      this.meta.dibujar();
      this.e1.dibujar();
      this.e2.dibujar();
      this.e3.dibujar();
      this.e4.dibujar();
      this.e5.dibujar();
      this.e6.dibujar();
      this.personaje.dibujar();
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i].dibujar();
      }
      this.colisionEnemigo();
      this.colisionMeta();
    }
    if (this.personaje.vive === false && this.estadoJuego === 1) {
      this.perder();
    }
    if (this.personaje.gano === true && this.estadoJuego === 2) {
      this.ganar();
    }
  }


  colisionPerder (xe, ye, enemigoAncho, px, py, perancho, peralto) {
    if (xe+ enemigoAncho > px + 10 && xe < px + perancho && ye + enemigoAncho > py && ye < py + peralto) {
      return true;
    }
  }

  colisionGanar (xm, px) {
    if (px > xm - 5 ) {
      return true;
    }
  }

  colisionEnemigo() {
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.colisionPerder(this.enemigos[i].eX, this.enemigos[i].eY, this.enemigos[i].ancho, this.personaje.pX, this.personaje.pY, 40, 40) && this.personaje.vive === true ) {
        this.personaje.vive = false;
        this.estadoJuego = 1;
      }
    }
  }

  colisionMeta() {
    if (this.colisionGanar(this.meta.mX, this.personaje.pX) && this.personaje.vive === true) {
      this.personaje.gano = true;
      this.estadoJuego = 2;
    }
  }

  perder() {
    this.imagenes.Perder();
  }

  ganar() {
    this.imagenes.Ganar();
  }

  contarSegundos() {
    if (frameCount % 60 === 0) {
      this.segundos ++;
    }
  }

  teclaMantenida (keyCode) {
    if (keyCode === RIGHT_ARROW) {
      this.personaje.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.personaje.moverIzquierda();
    }
  }

  funcionTecla(keyCode) {
    if (keyCode === UP_ARROW) {
      if (this.e1.zonaSubir(this.personaje.pX, this.personaje.pY, 310) || this.e2.zonaSubir(this.personaje.pX, this.personaje.pY, 260) || this.e3.zonaSubir(this.personaje.pX, this.personaje.pY, 210) || this.e4.zonaSubir(this.personaje.pX, this.personaje.pY, 160) || this.e5.zonaSubir(this.personaje.pX, this.personaje.pY, 110) || this.e6.zonaSubir(this.personaje.pX, this.personaje.pY, 60)) {
        this.personaje.subir();
      }
    }
    if (key === 'r' && ( this.estadoJuego === 1||this.estadoJuego === 2)) {
      this.estadoJuego = 0;
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i] = new Enemigo (i*80);
      }
      this.personaje = new Personaje (100, 310);
    }
  }
}
