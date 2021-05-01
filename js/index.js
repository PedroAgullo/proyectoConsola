let encendido = false;
const button = document.getElementById("lightButton");
button.onclick = function(event) {
    if (encendido) {
        document.getElementsByClassName("firstLight")[0].style.background = "#8b9288";
        encendido = false;
    } else {
        document.getElementsByClassName("firstLight")[0].style.background = "black";
        encendido = true;
    }
}