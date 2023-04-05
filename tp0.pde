// Magnarelli Franco
// TP 0 comisión 1
PImage paisaje;
paisaje = loadImage("paisajepuente.jpg");
size(800,400);
image(paisaje,0,0,400,400);

noStroke();

//cielo
fill(15,219,240);
rect(400,0,400,150);

//mar
fill(31,72,173);
rect(400,150,400,400);

//montañas del fondo
fill(30,59,40);
triangle(525,150,550,138,580,150);
quad(400,150,400,77,460,77,545,150);
fill(17,100,46);
quad(800,0,665,90,640,150,800,150);

//rocas de la izquierda
fill(200);
triangle(400,200,400,130,445,180);
fill(30);
triangle(400,200,425,225,400,248);
ellipse(425,205,15,10);
ellipse(440,212,12,10);

//palos del puente
fill(30);
quad(566,350,566,200,575,200,575,350);
quad(655,350,655,200,646,200,646,350);
quad(588,255,588,175,592,175,592,255);
quad(637,255,637,175,633,175,633,255);
quad(596,220,596,165,599,165,599,220);
quad(629,220,629,165,626,165,626,220);

//puente
fill(211,210,169);
quad(556,400,590,250,635,250,665,400);
quad(590,250,600,175,625,175,635,250);
