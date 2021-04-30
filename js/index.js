let encendido = false;
const button = document.getElementById("lightButton");
button.onclick = function(event) {
    if (encendido) {
        document.getElementsByClassName("firstLight")[0].style.background = "#92EF29";
        encendido = false;
    } else {
        document.getElementsByClassName("firstLight")[0].style.background = "#546E6B";
        encendido = true;
    }
}