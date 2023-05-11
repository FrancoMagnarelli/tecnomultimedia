//Franco Magnarelli
//Comision 1 TP1
PImage pascua1, pascua2, pascua3, pascua4;
PFont texto;
int segundos;
int py, py2, py3;
int px1, px2;
int pxrect, pyrect, ancho, alto;
int opacidad;
int color1;
float tam;
void setup () {
  size (640, 480);
  pascua1 = loadImage ("isladepascua1.jpg");
  pascua2 = loadImage ("isladepascua2.jpg");
  pascua3 = loadImage ("isladepascua3.jpg");
  pascua4 = loadImage ("isladepascua4.jpg");
  texto = loadFont ("letra.vlw");
  textFont(texto);
  textSize (30);
  textAlign(CENTER);
  py = -100;
  py2 = -100;
  py3 = 500;
  px1 = -200;
  px2 = 840;
  tam = 1;
  pxrect = 550;
  pyrect = 400;
  ancho = 80;
  alto = 30;
  opacidad = 255;
  color1 = 0;
}

void draw () {
  background (0);
  if (frameCount%60==0) {
    segundos ++;
  }
  opacidad = py*255/height;
  if ( segundos <= 9) {
    fill(255, 255, 255, 255-opacidad );
    image (pascua1, 0, 0, width, height);
    text ("Isla de Pascua, un territorio de Chile,\n es una remota isla volcánica en la Polinesia. \nEs famosa por sus sitios arqueológicos, \nincluidas cerca de 900 estatuas\n monumentales llamadas moáis", width/2, py);
    py ++;
  } else if (segundos > 9 && segundos <= 19) {
    image (pascua2, 0, 0, width, height);
    fill(0);
    text ("Los moáis son figuras humanas talladas\n con cabezas demasiado grandes, a menudo,", px1, height/3);
    text ("apoyados sobre enormes\n pedestales de piedra llamados ahus", px2, height/2);
    if (px1 <= width/2) {
      px1 ++;
    }
    if (px2 >= width/2) {
      px2 --;
    }
  } else if (segundos > 19 && segundos <= 24) {
    image (pascua3, 0, 0, width, height);
    fill(255);
    textSize(tam);
    text ("Los nativos utilizaban 3 distintas piedras\n volcánicas para construir los gigantescos\n moais ", width/2, height/4);
    text ("Dada la alta cantidad de volcanes\n en la isla, era muy fácil encontrarlas\n y usarla para tallar estos monumentos", width/2, height/2);
    if (tam <= 30) {
      tam += 0.1;
    }
  } else {
    textSize(30);
    image (pascua4, 0, 0, width, height);
    fill(color1);
    text ("Debido a su clima templado subtropical, \n cualquier momento es bueno para viajar.", width/2, py2);
    text ("La mejor época para visitar la Isla de Pascua \n es entre los meses de agosto y marzo, \n ya que cuentan con menos días de lluvia", width/2, py3);
    if (py2 <= height/4) {
      py2 ++;
    }
    if (py3 >= height/2) {
      py3 --;
    }
    if (color1 >= 0 && color1 <=254) {
      color1 ++;
    }
  }
  if (segundos >= 29) {
    fill(255);
    rect (pxrect, pyrect, ancho, alto);
    textSize(13);
    fill(0);
    text ("Reiniciar", 590, 420);
  }
}


void mousePressed () {
  if (mouseX > 550 && mouseX < pxrect + ancho && mouseY > pyrect && mouseY < pyrect  + alto) {
    background (0);
    textSize(30);
    py= -100;
    py2 = -100;
    py3 = 500;
    px1 = -200;
    px2 =840;
    tam = 1;
    opacidad = 255;
    color1 = 0;
    segundos = 0;
  }
}
