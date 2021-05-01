

let juego = 0;
let gameOn = 0;
let encendido = false;
const onButton = document.getElementById("onButton");
onButton.onclick = function(event) {
    if (encendido === false) {
        document.getElementById("screenImage").src="img/nintendo-logo.jpg";
        encendido = true;
    } else {
        document.getElementById("screenImage").src="img/pantalla_off.png";
        encendido = false;
        gameOn = 0;
        
    }
}



const gameButton = document.getElementById("gameButton");
gameButton.onclick = function(event) {
    if (juego === 0 && encendido === true) {
        document.getElementById("screenImage").src="img/juego0.gif";
        juego = 1;
        gameOn = 1;
    } else if (juego === 1 && encendido === true){
        document.getElementById("screenImage").src="img/juego1.png";
        juego = 2;
        gameOn = 1;
    } else {
        document.getElementById("screenImage").src="img/juego2.png";
        juego = 0;
        gameOn = 1;
    }

}







let botonB = document.getElementById("botonB")
let audioEtiquetaA = document.getElementById("audioBotonB")
botonB.addEventListener("click", () => {
    if(encendido === true && gameOn === 1){
  audioEtiquetaA.setAttribute("src", "sound/saltoMario.mp3")
  audioEtiquetaA.play()
    }

})


let botonA = document.getElementById("botonA")
let audioEtiquetaB = document.getElementById("audioBotonA")
botonA.addEventListener("click", () => {
    if(encendido === true && gameOn === 1){
  audioEtiquetaB.setAttribute("src", "sound/MonedaMario.mp3")
  audioEtiquetaB.play()
    }

})
