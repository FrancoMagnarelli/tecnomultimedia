// Franco Magnarelli
// Comision 1 TP4
// Link al video: https://www.youtube.com/watch?v=_Ikp6gdQnS0

let barrilX = [];
let barrilY = [];
let barrilVel = [];
let anchoBarr;
let altoBarr;
let fotoCorrer = [];
let fotoCorrerA = [];
let fotoQuieto, fotoEstrella
  let muerte;
let logo;
let xPersonaje;
let yPersonaje;
let num;
let ex1, ex2, ex3, ex4, ex5, ex6;
let cantB;
let segundos;
let estado;

function preload () {
  for (let i = 1; i < 9; i ++) {
    fotoCorrer [i] = loadImage ('data/Run'+i+'.png');
  }
  for (let i = 1; i < 9; i++) {
    fotoCorrerA [i] = loadImage ('data/Run'+i+'r.png');
  }
  fotoQuieto = loadImage ('data/quieto.png');
  fotoEstrella = loadImage ('data/star2.png');
  muerte = loadImage ('data/Dead.png') ;
  logo = loadImage ('data/donkey-kong-logo.png');
}


function setup() {
  createCanvas(800, 400);
  textAlign(CENTER);
  xPersonaje = 100;
  yPersonaje = 325;
  num = 1;
  ex1 = 600;
  ex2 = 200;
  ex3 = 650;
  ex4 = 230;
  ex5 = 550;
  ex6 = 120;
  cantB = 30;
  segundos = 0;
  estado = 1;
  anchoBarr = 20;
  altoBarr = 20;
  for (let i = 0; i < cantB; i++) {
    barrilX [i] = i*(anchoBarr + 50);
    barrilY [i] = random (-300, -100);
    barrilVel [i] = random (0.5, 2);
  }
}


function draw() {
  background(0);
  if (estado === 1) {
    menu();
  } else if (estado === 3 ) {
    instrucciones();
  } else if (estado === 4) {
    creditos();
  } else if (estado === 5) {
    perder();
  } else if (estado === 6) {
    ganar();
  } else if (estado === 2) {
    escenario();
    image (fotoQuieto, xPersonaje, yPersonaje, 20, 20);
    correrAdelante(xPersonaje, yPersonaje);
    correrAtras (xPersonaje, yPersonaje);
    if ((yPersonaje === 25) && (xPersonaje >= 670)) {
      estado = 6;
    }
    if (frameCount % 60 === 0) {
      segundos ++;
    }
    temporizador ();
    if (segundos > 0) {
      for (let i = 0; i < cantB; i++) {
        barril (barrilX[i], barrilY[i], anchoBarr, altoBarr);
        barrilY [i] += barrilVel [i];
        if ( barrilY [i] > height) {
          barrilY [i] = random (-500, -200);
        }
        if (colision (xPersonaje, barrilX [i], yPersonaje, barrilY [i] )) {
          estado = 5;
        }
      }
    }
  }
}


function menu() {
  image (logo, 325, 50, 200, 100);
  fill (19, 214, 209);
  rect (345, 200, 110, 30);
  rect (345, 260, 110, 30);
  rect (345, 320, 110, 30);
  textSize(22);
  fill(193, 0, 3);
  textStyle (BOLD);
  text ('JUGAR', width/2, 223);
  textSize(18);
  text ('CREDITOS', width/2, 341);
  textSize(13);
  text ('INSTRUCCIONES', width/2, 282);
}

function instrucciones () {
  textSize (25);
  fill(255);
  text ('Instrucciones', width/2, 50);
  textStyle (NORMAL);
  textSize (18);
  text ('Mueve al personaje con las flechas de direccion del teclado', width /2, 150);
  text ('Objetivo : ¡Alcanza la cima sin que te den los barriles!', width/2, 200);
  text ('LLega lo antes posible para lograr las 3 estrellas', width /2, 235);
  text ('Apreta la tecla M para terminar el juego automaticamente',width / 2, 300);
  rect (20, 350, 80, 30);
  fill(0);
  text ('Atras', 60, 371);
}

function creditos () {
  textSize (25);
  textStyle (BOLD);
  fill (255);
  text ('Creditos', width/2, 50);
  textSize (18);
  textStyle(NORMAL);
  text ('Desarrollador: Franco Magnarelli', width/2, 150);
  rect (20, 350, 80, 30);
  fill(0);
  text ('Atras', 60, 371);
}


function temporizador () {
  textSize(22);
  fill(255);
  text ('Tiempo:'+segundos, 740, 390);
}

function barril (bx, by, ancho, alto) {
  noStroke ();
  fill (121, 102, 34);
  rect (bx, by, ancho, alto);
}

function escenario () {
  strokeWeight(5);
  stroke(214, 22, 22);
  for (let i = 50; i <= 350; i+= 50) {
    line (100, i, 700, i);
  }
  escalera (ex1, 350);
  escalera(ex2, 300);
  escalera (ex3, 250);
  escalera (ex4, 200);
  escalera (ex5, 150);
  escalera (ex6, 100);
  meta();
}

function escalera (ex, ey) {
  strokeWeight(4);
  stroke(3, 160, 255);
  line (ex, ey, ex, ey - 50);
  line (ex + 30, ey, ex + 30, ey - 50);
  line (ex, ey - 5, ex + 30, ey - 5);
  line (ex, ey - 20, ex + 30, ey - 20);
  line (ex, ey - 35, ex + 30, ey - 35);
}


function correrAdelante (xc, yc) {
  if (frameCount%6===0) {
    if (num < 8) {
      num ++;
    } else {
      num = 1;
    }
  }
  if (keyIsPressed === true) {
    if (keyCode === RIGHT_ARROW && xPersonaje < 680) {
      image (fotoCorrer[num], xc, yc, 20, 20);
      xPersonaje += 1.5;
    }
  }
}

function correrAtras (xca, yca) {
  if (frameCount%6===0) {
    if (num < 8) {
      num ++;
    } else {
      num = 1;
    }
  }
  if (keyIsPressed === true ) {
    if (keyCode === LEFT_ARROW && xPersonaje > 100) {
      image (fotoCorrerA[num], xca, yca, 20, 20);
      xPersonaje -= 1.5;
    }
  }
}

function meta () {
  noStroke();
  fill (54, 40, 1);
  rect (670, 15, 8, 35);
  fill (240, 212, 0);
  triangle (678, 15, 678, 30, 705, 22);
}

function ganar() {
  strokeWeight (4);
  stroke (240, 212, 0);
  fill (10);
  rect (270, 90, 260, 130);
  noStroke();
  fill (255);
  textSize(32);
  text ('¡HAS GANADO!', width/2, height/3);
  textSize (20);
  text ('Pulsa R para reiniciar', width /2, height /2);
  if (segundos > 60) {
    image (fotoEstrella, 290, 230, 60, 60);
  } else if (segundos > 45 && segundos <= 60) {
    image (fotoEstrella, 290, 230, 60, 60);
    image (fotoEstrella, 370, 230, 60, 60);
  } else if (segundos <= 45) {
    image (fotoEstrella, 290, 230, 60, 60);
    image (fotoEstrella, 370, 230, 60, 60);
    image(fotoEstrella, 450, 230, 60, 60);
  }
  fill(255);
  rect (20, 350, 80, 30);
  fill(0);
  textSize(18);
  text ('Menu', 60, 371);
}

function perder() {
  image (muerte, xPersonaje, yPersonaje, 30, 20);
  strokeWeight (4);
  stroke (230, 0, 0);
  fill (10);
  rect (270, 90, 260, 130);
  noStroke();
  fill (255);
  textSize(32);
  text ('GAME OVER', width/2, height/3);
  textSize (20);
  text ('Pulsa R para reiniciar', width /2, height /2);
  rect (20, 350, 80, 30);
  fill(0);
  textSize(18);
  text ('Menu', 60, 371);
}


function colision (xp, xb, yp, yb) {
  if ((xp  >= xb - 20 && xp <= xb + 20) && (yp + 20 >= yb && yp - 20 < yb)) {
    return true;
  } else {
    return false;
  }
}


function zonas (xp, yp, esc, altura) {
  if ((xp >= esc - 20) && (xp <= esc + 30) && (yp === altura)) {
    return true;
  } else {
    return false;
  }
}

function zonaMouse (xbot, xbot2, ybot, ybot2) {
  if (mouseX > xbot && mouseX < xbot2 && mouseY > ybot && mouseY < ybot2) {
    return true;
  } else {
    return false;
  }
}


function keyPressed () {
  if ((keyCode === UP_ARROW) && zonas(xPersonaje, yPersonaje, ex1, 325) || zonas(xPersonaje, yPersonaje, ex2, 275) || zonas (xPersonaje, yPersonaje, ex3, 225) || zonas (xPersonaje, yPersonaje, ex4, 175) || zonas(xPersonaje, yPersonaje, ex5, 125) || zonas (xPersonaje, yPersonaje, ex6, 75)) {
    yPersonaje -= 50;
  }
  if (key === 'r' && estado === 5) {
    xPersonaje = 100;
    yPersonaje = 325;
    num = 1;
    segundos = 0;
    estado = 2;
    for (let i = 0; i < cantB; i++) {
      barrilX [i] = i*(anchoBarr + 50);
      barrilY [i] = random (-300, -100);
      barrilVel [i] = random (0.5, 2);
    }
  }
  if (key === 'r' && estado === 6) {
    xPersonaje = 100;
    yPersonaje = 325;
    num = 1;
    segundos = 0;
    estado = 2;
    for (let i = 0; i < cantB; i++) {
      barrilX [i] = i*(anchoBarr + 50);
      barrilY [i] = random (-300, -100);
      barrilVel [i] = random (0.5, 2);
    }
  }
  if (key === 'm' && estado === 2) {
    estado = 1;
  }
}

function mousePressed () {
  if (zonaMouse (345, 455, 200, 230) && estado === 1) {
    xPersonaje = 100;
    yPersonaje = 325;
    num = 1;
    segundos = 0;
    estado = 2;
    for (let i = 0; i < cantB; i++) {
      barrilX [i] = i*(anchoBarr + 50);
      barrilY [i] = random (-300, -100);
      barrilVel [i] = random (0.5, 2);
    }
    estado = 2;
  } else if (zonaMouse (345, 455, 260, 290) && estado === 1) {
    estado = 3;
  } else if (zonaMouse (20, 100, 350, 380) && estado === 3) {
    estado = 1;
  } else if (zonaMouse (345, 455, 320, 350) && estado === 1) {
    estado = 4;
  } else if (zonaMouse (20, 100, 350, 380) && estado === 4) {
    estado = 1;
  } else if (zonaMouse (20, 100, 350, 380) && estado === 5) {
    estado = 1;
  } else if (zonaMouse (20, 100, 350, 380) && estado === 6) {
    estado = 1;
  }
}
