// Franco Magnarelli TP2

// Comision 1

// Link del video : https://www.youtube.com/watch?v=K0rva1wnpBs


PImage ilusion;
int lim, n, n2, n3, b, b2, b3, segundos;


void setup() {
  size (800, 400);
  ilusion = loadImage ("ilusionoptica.jpg");
  lim = 170;
  n = 0;
  b = 255;
  n2 = 0;
  b2 = 255;
  b3 = 255;
  n3 = 0;
  segundos = 0;
  textAlign(CENTER);
}


void draw() {
  float rotar = map (mouseX, 0, width, 0, 360);
  background(255);
  image (ilusion, 0, 0, width/2, height);
  if (frameCount % 60 == 0) {
    segundos ++;
  }
  if (segundos >= 0 && segundos < 8) {
    instrucciones();
  } else {
    cuadrantesBlancos(400, 0, 200, 600, 200, 200);
    cuadrantesNegros(600, 0, 200, 400, 200, 200);
    cuadradosMedio(-40, -40, 0, 0, 40, rotar);
  }
}


void instrucciones() {
  fill(255);
  rect ( 410, 10, 370, 370);
  fill(0);
  textSize(25);
  text ("Instrucciones de la obra OP ART", 600, 50);
  textSize(20);
  text ("-Apretar el click izquierdo y derecho para \n cambiar los colores de los cuadrados", 600, 140);
  text ("-Mover el mouse de izquierda a derecha o \n vicerversa para rotar la figura del medio", 600, 250);
  text ("-Pulsar la tecla R para reiniciar la obra", 600, 350);
}


void cuadrantesBlancos(int PosX, int PosY, int tam, int Posx2, int Posy2, int tam2) {
  for (int i=0; i<lim; i+=10) {
    for (int x = 0; x<lim; x+= 10) {
      noStroke();
      if (resultado(i, x)) {
        fill(b);
      } else {
        fill(n);
      }
      square (PosX + i, PosY + i, tam - i);
      square (Posx2, Posy2, tam2 -x);
    }
  }
}


void cuadrantesNegros(int PosX, int PosY, int tam, int Posx2, int Posy2, int tam2) {
  for (int c=0; c<lim; c+=10) {
    for (int v= 0; v<lim; v+=10) {
      noStroke();
      if (resultado(c, v)) {
        fill(n2);
      } else {
        fill(b2);
      }
      square (PosX, PosY + c, tam - c);
      square (Posx2 + v, Posy2, tam2 - v);
    }
  }
}


void cuadradosMedio (int posX, int posY, int posX2, int posY2, int ancho, float rotacion) {
  push();
  translate(600, 200);
  rotate(radians(rotacion));
  fill(b3);
  square(posX, posY, ancho);
  square (posX2, posY2, ancho);
  fill(n3);
  square(posX2, posY, ancho);
  square (posX, posY2, ancho);
  pop();
}


boolean resultado (int var1, int var2) {
  if ((var1 % 20 == 0) && (var2 % 20 == 0)) {
    return true;
  } else {
    return false;
  }
}


void mousePressed() {
  if ((mousePressed) && (mouseButton == LEFT)) {
    n = color(random(255), random(255), random(255));
    b = color(random(255), random(255), random(255));
    b3 = color(random(255), random(255), random(255));
  }
  if ((mousePressed) && (mouseButton == RIGHT)) {
    n2 = color(random(255), random(255), random(255));
    b2 = color(random(255), random(255), random(255));
    n3 = color(random(255), random(255), random(255));
  }
}


void keyPressed() {
  if ( key == 'r') {
    n = 0;
    b = 255;
    n2 = 0;
    b2 = 255;
    b3= 255;
    n3= 0;
  }
}
