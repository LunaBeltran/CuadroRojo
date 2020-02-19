function abajo() {
    var cuadrado = document.getElementById("cuadrado");
    var posiciony = cuadrado.offsetTop;
    var nuevaAltura = posiciony + 100;
    cuadrado.style.top = nuevaAltura + "px";
}

function arriba() {
    var cuadrado = document.getElementById("cuadrado");
    var posiciony = cuadrado.offsetTop;
    var nuevaAltura = posiciony + 100;
    cuadrado.style.top = nuevaAltura + "px";
}
function izquierda() {
    var cuadrado = document.getElementById("cuadrado");
    var posiciony = cuadrado.offsetLeft;
    var nuevaAltura = posicionx - 100;
    cuadrado.style.left = nuevaAltura + "px";
}
function derecho() {
    var cuadrado = document.getElementById("cuadrado");
    var posiciony = cuadrado.offsetLeft;
    var nuevaAltura = posicionx + 100;
    cuadrado.style.left = nuevaAltura + "px";
}

