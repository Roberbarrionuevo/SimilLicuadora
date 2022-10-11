

let estadoLicuadora = "apagado";
let sonidoLicuadora = document.getElementById( "blender-sound" );
let botonLicuadora = document.getElementById( "blender-button-sound" );
let licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if ( estadoLicuadora == "apagado" ) {
    estadoLicuadora = "encendido";
    hacerBrrBrr();
    licuadora.classList.add("active");
   } else {
    estadoLicuadora = "apagado";
    hacerBrrBrr();
    licuadora.classList.remove("active");
  }
}

function hacerBrrBrr() {
if( sonidoLicuadora.paused ){
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0; 
  }
}

















