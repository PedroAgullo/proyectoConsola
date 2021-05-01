let encendido = false;
const button = document.getElementById("onButton");
button.onclick = function(event) {
    if (encendido === false) {
        document.getElementsByClassName("screenColor")[0].style.background = "#8b9288";
        encendido = true;
    } else {
        document.getElementsByClassName("screenColor")[0].style.background = "black";
        encendido = false;
    }
}





let botonB = document.getElementById("botonB")
let audioEtiquetaA = document.getElementById("audioBotonB")

botonB.addEventListener("click", () => {
    if(encendido === true){
  audioEtiquetaA.setAttribute("src", "sound/saltoMario.mp3")
  audioEtiquetaA.play()
    }

})

let botonA = document.getElementById("botonA")
let audioEtiquetaB = document.getElementById("audioBotonA")

botonA.addEventListener("click", () => {
    if(encendido === true){
  audioEtiquetaB.setAttribute("src", "sound/MonedaMario.mp3")
  audioEtiquetaB.play()
    }

})
