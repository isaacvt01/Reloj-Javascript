function reloj(){

    mostrarSegundos();
    mostrarMinutos();
    mostrarHoras();
    setTimeout(reloj, 1000);
}

function mostrarSegundos() {
    actual = new Date();
    segundos = actual.getSeconds()
    let segundosString = segundos.toString();
    if (segundos<10){
        document.getElementById("segundos1").src= "0.png";
        document.getElementById("segundos2").src = segundos + ".png";
    }else {
        document.getElementById("segundos1").src =segundosString[0] + ".png";
        document.getElementById("segundos2").src=segundosString[1] + ".png";
    }
    
}
function mostrarHoras() {
    actual = new Date();
    minutos = actual.getMinutes();
    let minutosString = minutos.toString();
    if (minutos<10){
        document.getElementById("minutos1").src= "0.png";
        document.getElementById("minutos2").src = minutos + ".png";
    }else {
        document.getElementById("minutos1").src =minutosString[0] + ".png";
        document.getElementById("minutos2").src= minutosString[1] + ".png";
    }

}

function mostrarMinutos() {
    actual = new Date();
    horas = actual.getHours()
    let horasString = horas.toString();
    if (horas<10){
        document.getElementById("hora1").src= "0.png";
        document.getElementById("hora2").src = horas + ".png";
    }else {
        document.getElementById("hora1").src =horasString[0] + ".png";
        document.getElementById("hora2").src= horasString[1] + ".png";
    }

}