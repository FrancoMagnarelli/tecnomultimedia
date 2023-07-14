// Franco Magnarelli

//Comision 1

//Link del video: https://www.youtube.com/watch?v=M40Bfo6Qm8A

PFont texto;
int mitad;
int cant = 18;
int pantalla = 1;
PImage [] imagenes = new PImage [cant];
String [] textoBotones = {"Iniciar","Creditos","Atras","Siguiente","Pasar la\n noche afuera","Llamar a la\n policia","Reiniciar","Intentar callarla","Ser paciente","Hacerla callar\n para siempre","Arrojarla por\n la ventana", "Estrangularla"};
String [] textoInterfaz = { "En la noche","Creditos","Autor: Ray Bradbury","Alumno: Franco Magnarelli"};
String [] textoCuento = {"La señora Navárrez grita durante \n toda la noche, perturbando \ntodo el inquilinato","Los habitantes intentan dormir,\n pero sus gritos no cesan","La policia llega, se llevan\n a la señora Navárrez y\n volvió todo a la tranquilidad",
"Por la mañana, la señora \nNavárrez sigue llorando y\n gritando","Durante el día, el coro de niños\n y las lavadoras en el edificio\n suavizan un poco el ruido","Los hombres regresan al atardecer\n  y se frustran por los\n  continuos lamentos","Intentan hacerla callar, \npero solo logran que grite\n más fuerte",
"Deciden cenar fuera \npara escapar del ruido","La situación se vuelve \ninsoportable,y los vecinos\n discuten posibles soluciones","La señora Navarréz baja a cenar\n tranquilamente y dijo que\n nada mas habia pasado por un","El señor Villanazul se ofrece\n como voluntario para\n hacer el trabajo",
"El señor Villanazul sube las\n escaleras y abre lentamente\n la puerta de la señora Navarréz","Villanazul sin ningun tipo de\n remordimiento apreta el cuello\n de la señora hasta matarla","Por fin hubo silencio y \nlos vecinos pudieron pasar \nla noche en paz",
"Villanazul con mucha violencia\n agarra y tira a la señora\n por la ventana"};


void setup() {
  size (600,600);
  for (int i= 1; i < cant; i++) {
    imagenes[i] = loadImage ("pantalla"+i+".jpeg");
  }
  texto = loadFont ("letratp3.vlw");
  textFont (texto);
  textAlign(CENTER);
  stroke(80);
  mitad = width/2;
}


void draw(){
  background (255);
  if (pantalla == 1) {
  menu();
} else if (pantalla == 3) {
  pantalla(1,0,mitad,450);
  boton (445,50,150,50,3,520,85);
} else if (pantalla == 2 ) {
  creditos();
} else if (pantalla == 4) {
  pantalla(2,1,mitad,450);
  boton (100,255,205,100,4,200,290);
  boton (350,255,175,100,5,440,290);  
}else if (pantalla == 5) {
  pantalla(16,2,mitad,450);
  boton (10,45,140,50,6,80,80);
}else if (pantalla == 6) {
  pantalla(3,3,mitad,450);
  boton (445,50,150,50,3,520,85);
}else if (pantalla == 7) {
  pantalla(4,4,mitad,450);
  boton (445,50,150,50,3,520,85);
} else if (pantalla == 8) {
  pantalla(5,5,mitad,450);
  boton (350,255,175,100,5,440,290);
  boton (60,275,245,50,7,185,310); 
} else if (pantalla == 9) {
  pantalla(6,6,mitad,450);
  boton (445,50,150,50,3,520,85);
} else if (pantalla == 10) {
  pantalla(7,7,mitad,500);
  boton (445,50,150,50,3,520,85);
} else if (pantalla == 11) {
  pantalla(8,8,mitad,450);
  boton (50,305,200,50,8,150,340);
  boton (295,280,210,100,9,400,315);  
} else if ( pantalla == 12) {
  pantalla(15,9,mitad,450);
  boton (10,45,140,50,6,80,80);
  fill(random(255),random(255),random(255));
  text ("brote psicótico",mitad,580);
} else if (pantalla == 13) {
  pantalla(9,10,mitad,450);
  boton (445,50,150,50,3,520,85);
} else if (pantalla == 14) {
  pantalla(10,11,mitad,450);
  boton (50, 305,200,50,11,150,340);
  boton (295,280,205,90,10,400,315); 
} else if (pantalla == 15) {
  pantalla(12,12,mitad,450);
  boton (445,50,150,50,3,520,85);
} else if (pantalla == 16) {
  pantalla(14,13,mitad,450);
  boton (10,45,140,50,6,80,80);
} else if (pantalla == 17) {
  pantalla(11,14,mitad,450);
  boton (445,50,150,50,3,520,85);
}
}


void menu (){
  image (imagenes[13],0,0,width,height);
  fill(255);
  textSize(80);
  text(textoInterfaz [0],width/2,150);
  fill(0);
  textSize(30);
  boton (240,210,150,50,0,315,245);
  boton (240,290,150,50,1,315,325); 
}


void creditos(){
  image (imagenes[17],0,0,width,height);
  textSize(80);
  fill(255);
  text(textoInterfaz [1], width/2,150);
  textSize(40);
  text (textoInterfaz[2],230,250);
  text (textoInterfaz[3],282,320);
  boton (260,400,120,50,2,322,435);
}


void pantalla(int i, int t, int xt, int yt) {
  image (imagenes[i],0,0,width,height);
  textSize(35);
  fill(255,0,0);
  text (textoCuento[t],xt,yt);
  }


void boton (int xr, int yr, int lr, int ar,int i,int xt,int yt){
  fill (0);
  rect (xr,yr,lr,ar);
  fill(255);
  textSize(30);
  text (textoBotones[i], xt,yt);
  
}


boolean rango (int x1,int x2,int y1,int y2) {
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
    return true;
  } else {
    return false;
  }
}


void mousePressed (){
  if (pantalla == 1 && rango (240,390,210,260)) {
    pantalla = 3;
  } else if (pantalla == 1 && rango (240,390,290,340)) {
    pantalla = 2;
  } else if (pantalla == 2 && rango (260,380,400,450)) {
    pantalla = 1;
  } else if (pantalla == 3 && rango (445,595,50,100)) {
    pantalla = 4;
  } else if (pantalla == 4 && rango (350,525,255,355)) {  
    pantalla = 5;
  }else if (pantalla == 5 && rango (10,150,45,95)) {
    pantalla = 1;
  } else if (pantalla == 4 && rango (100,305,255,355)){
    pantalla = 6;
  } else if (pantalla == 6 && rango (445,595,50,100)) {
    pantalla = 7;
  } else if (pantalla == 7 && rango (445,595,50,100)) {
    pantalla = 8;
  } else if (pantalla == 8 && rango (350,525,255,355)) {
    pantalla = 5;
  } else if (pantalla == 8 && rango (60,305,275,325)) {
    pantalla = 9;
  } else if (pantalla == 9 && rango (445,595,50,100)) {
    pantalla = 10;
  } else if (pantalla == 10 && rango (445,595,50,100)) {
    pantalla = 11;
  } else if (pantalla == 11 && rango (50,250,280,380)) {
    pantalla = 12;
  } else if (pantalla == 12 && rango (10,150,45,95)) {
    pantalla = 1;
  } else if (pantalla == 11 && rango (295,505,280,380)) {
    pantalla = 13; 
  } else if (pantalla == 13 && rango (445,595,50,100)) {
    pantalla = 14;
  } else if (pantalla == 14 && rango (50,250,305,355)) {
    pantalla = 15;
  } else if ( pantalla == 15 && rango (445,595,50,100)) {
    pantalla = 16;
  } else if (pantalla == 14 && rango (295,500,280,370)) {
    pantalla = 17;
  } else if (pantalla == 17 && rango (445,595,50,100)) {
    pantalla = 16;
  } else if (pantalla == 16 && rango (10,150,45,95)) {
    pantalla = 1;
  }
}
    
