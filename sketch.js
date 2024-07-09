let imagenes;

let p;

//---- CONFIGURACION --- 
let AMP_MIN = 0.05;
let AMP_MAX = 0.6;
let FREC_MIN = 200;
let FREC_MAX = 400;

//----MICROFONO---
let mic;
let amp;
let ampCruda;
let frec;

let haySonido = false;
let antesHabiaSonido = false;

//--- MONITOREAR----
let IMPRIMIR = true;

//---GESTOR---
let gestorAMP;
let audioContext;
let gestorFrec;
const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

// -----TEACHABLEMACHINE ----

let classifier;
let label;
const options = { probabilityThreshold: 0.9 };
let soundModel = "https://teachablemachine.withgoogle.com/models/JhB30WISw/";


function preload() {
  imagenes = new Imagenes();
  classifier = ml5.soundClassifier(soundModel + 'model.json', options);
}

function setup() {
  createCanvas(600, 600);
  p = new Principal();
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio();
  classifier.classify(gotResult);

  //---GESTOR----
  gestorAMP = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorFrec = new GestorSenial(FREC_MIN, FREC_MAX);




}

function draw() {
  background(177, 181, 190);
  console.log(p.cantManchas);
  console.log(p.desplazarManchas);
  gestorAMP.actualizar(mic.getLevel());
  amp = gestorAMP.filtrada;

  ampCruda = mic.getLevel();// solo para monitorear la diferencia 


  haySonido = amp > AMP_MIN;
  let empezoSonido = haySonido && !antesHabiaSonido;
  let finSonido = !haySonido && antesHabiaSonido;

  p.display();
  if (empezoSonido && label == "aplauso") {
    p.crearMancha();
    label == "";
  } else if (label == "borrar") {
    p.borrarMancha();
    label == "";
  }
  if (haySonido && frec >= 0.8) {
    p.rotarManchasDerecha();
    p.rotarFondoIzquierda();
  }
  if (haySonido && frec <= 0.2) {
    p.rotarManchasIzquierda();
    p.rotarFondoDerecha();
  }


  if (IMPRIMIR) {
    ImprimirInfo();
  }

  antesHabiaSonido = haySonido;
}


//----- DETECCION DE FRECUENCIA-----
function startPitch() {
  pitch = ml5.pitchDetection(pichModel, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function (err, frequency) {
    if (frequency) {
      gestorFrec.actualizar(frequency);
      frec = gestorFrec.filtrada;
    } else {
    }
    getPitch();
  })
}


//-----CLASIFICADOR-----

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  label = results[0].label;
  console.log(label);

}

//------------------------*/


function ImprimirInfo() {
  push();
  textSize(16);
  fill(0);
  let texto;

  texto = 'amplitud: ' + amp;
  text(texto, 650, 20);

  texto = "frec: " + frec;
  text(texto, 650, 60)

  text(label, 650, 100);

  fill(0);
  ellipse(1100, height - amp * 300, 30, 30);
  gestorAMP.dibujar(650, 300);
  gestorFrec.dibujar(650, 500);

  pop()
}


