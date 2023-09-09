// Franco Magnarelli
// Comision 1 TP4
// Link al video: https://www.youtube.com/watch?v=_Ikp6gdQnS0


let barrY = [];
let barrX = [];
let barrVel = [];
let barrY2 = [];
let barrX2 = [];
let barrVel2 = [];
let barrY3 = [];
let barrX3 = [];
let barrVel3 = [];
let barrY4 = [];
let barrX4 = [];
let barrVel4 = [];
let barrY5 = [];
let barrX5 = [];
let barrVel5 = [];
let barrY6 = [];
let barrX6 = [];
let barrVel6 = [];
let barrY7 = [];
let barrX7 = [];
let barrVel7 = [];
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
  cantB = 20;
  segundos = 0;
  estado = 1;
  for (let i = 0; i < cantB; i ++) {
    barrX [i] = random (100, 700);
    barrY [i] = random (-90, -5);
    barrVel [i] = random (0.4, 2.3);
    barrX2 [i] = random (100, 700);
    barrY2 [i] = random ( -90, -5);
    barrVel2 [i] = random (0.4, 2.3);
    barrX3 [i] = random (100, 700);
    barrY3 [i] = random (-90, -5);
    barrVel3 [i] = random (0.4, 2.3);
    barrX4 [i] = random (100, 700);
    barrY4 [i] = random (-90, -5);
    barrVel4 [i] = random (0.4, 2.3);
    barrX5 [i] = random (100, 700);
    barrY5 [i] = random (-90, -5);
    barrVel5 [i] = random (0.4, 1.6);
    barrX6 [i] = random (100, 700);
    barrY6 [i] = random (-90, -5);
    barrVel6 [i] = random (0.4, 1);
    barrX7 [i] = random (100, 700);
    barrY7 [i] = random (-90, -80);
    barrVel7 [i] = random (0.2, 0.7);
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
      for ( let i = 0; i < cantB; i++) {
        barriles (barrX [i], barrY [i]);
        barrY[i] += barrVel [i];
        if (colision(xPersonaje, barrX[i], yPersonaje, barrY[i])) {
          estado = 5;
        }
      }
    }
    if (segundos >= 10) {
      for ( let i = 0; i < cantB; i++) {
        barriles (barrX2 [i], barrY2 [i]);
        barrY2[i] += barrVel2 [i];
        if (colision(xPersonaje, barrX2[i], yPersonaje, barrY2[i])) {
          estado = 5;
        }
      }
    }
    if (segundos >= 18) {
      for ( let i = 0; i < cantB; i++) {
        barriles (barrX3 [i], barrY3 [i]);
        barrY3[i] += barrVel3 [i];
        if (colision(xPersonaje, barrX3[i], yPersonaje, barrY3[i])) {
          estado = 5;
        }
      }
    }
    if (segundos >= 28) {
      for ( let i = 0; i < cantB; i++) {
        barriles (barrX4 [i], barrY4 [i]);
        barrY4[i] += barrVel4 [i];
        if (colision(xPersonaje, barrX4[i], yPersonaje, barrY4[i])) {
          estado = 5;
        }
      }
      if (segundos >= 35) {
        for ( let i = 0; i < cantB; i++) {
          barriles (barrX5 [i], barrY5 [i]);
          barrY5[i] += barrVel5 [i];
          if (colision(xPersonaje, barrX5[i], yPersonaje, barrY5[i])) {
            estado = 5;
          }
        }
      }
      if (segundos >= 45) {
        for ( let i = 0; i < 15; i++) {
          barriles (barrX6 [i], barrY6 [i]);
          barrY6[i] += barrVel6 [i];
          if (colision(xPersonaje, barrX6[i], yPersonaje, barrY6[i])) {
            estado = 5;
          }
        }
      }
      if (segundos >= 55) {
        for ( let i = 0; i < 15; i++) {
          barriles (barrX7 [i], barrY7 [i]);
          barrY7[i] += barrVel7 [i];
          if (colision(xPersonaje, barrX7[i], yPersonaje, barrY7[i])) {
            estado = 5;
          }
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

function barriles (bx, by) {
  noStroke ();
  fill (121, 102, 34);
  rect (bx, by, 20, 20);
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
    for (let i = 0; i < cantB; i ++) {
      barrX [i] = random (100, 700);
      barrY [i] = random (-90, -5);
      barrVel [i] = random (0.4, 2.3);
      barrX2 [i] = random (100, 700);
      barrY2 [i] = random ( -90, -5);
      barrVel2 [i] = random (0.4, 2.3);
      barrX3 [i] = random (100, 700);
      barrY3 [i] = random (-90, -5);
      barrVel3 [i] = random (0.4, 2.3);
      barrX4 [i] = random (100, 700);
      barrY4 [i] = random (-90, -5);
      barrVel4 [i] = random (0.4, 2.3);
      barrX5 [i] = random (100, 700);
      barrY5 [i] = random (-90, -5);
      barrVel5 [i] = random (0.4, 1.6);
      barrX6 [i] = random (100, 700);
      barrY6 [i] = random (-90, -5);
      barrVel6 [i] = random (0.4, 1);
      barrX7 [i] = random (100, 700);
      barrY7 [i] = random (-90, -80);
      barrVel7 [i] = random (0.2, 0.7);
    }
  }
  if (key === 'r' && estado === 6) {
    xPersonaje = 100;
    yPersonaje = 325;
    num = 1;
    segundos = 0;
    estado = 2;
    for (let i = 0; i < cantB; i ++) {
      barrX [i] = random (100, 700);
      barrY [i] = random (-90, -5);
      barrVel [i] = random (0.4, 2.3);
      barrX2 [i] = random (100, 700);
      barrY2 [i] = random ( -90, -5);
      barrVel2 [i] = random (0.4, 2.3);
      barrX3 [i] = random (100, 700);
      barrY3 [i] = random (-90, -5);
      barrVel3 [i] = random (0.4, 2.3);
      barrX4 [i] = random (100, 700);
      barrY4 [i] = random (-90, -5);
      barrVel4 [i] = random (0.4, 2.3);
      barrX5 [i] = random (100, 700);
      barrY5 [i] = random (-90, -5);
      barrVel5 [i] = random (0.4, 1.6);
      barrX6 [i] = random (100, 700);
      barrY6 [i] = random (-90, -5);
      barrVel6 [i] = random (0.4, 1);
      barrX7 [i] = random (100, 700);
      barrY7 [i] = random (-90, -80);
      barrVel7 [i] = random (0.2, 0.7);
    }
  }
}

function mousePressed () {
  if (zonaMouse (345, 455, 200, 230) && estado === 1) {
    xPersonaje = 100;
    yPersonaje = 325;
    num = 1;
    segundos = 0;
    estado = 2;
    for (let i = 0; i < cantB; i ++) {
      barrX [i] = random (100, 700);
      barrY [i] = random (-90, -5);
      barrVel [i] = random (0.4, 2.3);
      barrX2 [i] = random (100, 700);
      barrY2 [i] = random ( -90, -5);
      barrVel2 [i] = random (0.4, 2.3);
      barrX3 [i] = random (100, 700);
      barrY3 [i] = random (-90, -5);
      barrVel3 [i] = random (0.4, 2.3);
      barrX4 [i] = random (100, 700);
      barrY4 [i] = random (-90, -5);
      barrVel4 [i] = random (0.4, 2.3);
      barrX5 [i] = random (100, 700);
      barrY5 [i] = random (-90, -5);
      barrVel5 [i] = random (0.4, 1.6);
      barrX6 [i] = random (100, 700);
      barrY6 [i] = random (-90, -5);
      barrVel6 [i] = random (0.4, 1);
      barrX7 [i] = random (100, 700);
      barrY7 [i] = random (-90, -80);
      barrVel7 [i] = random (0.2, 0.7);
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
