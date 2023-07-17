class Solve{
    constructor(){
        this.solveTime = 0;
        this.algorithm = "";
        this.inspectionTime = 0;
    }

    setTime(solveTime){
        this.solveTime = solveTime;
    }

    printSolve(){
        console.log(this.solveTime);
        console.log(this.algorithm);
        console.log(this.inspectionTime);
    }
}

// Variable para almacenar el tiempo transcurrido en segundos
let d_segundos = 0;
let intervalo;
let inicio=0;

let stack = [];

// Función para actualizar el contador en la página
function actualizarContador() {
    const contadorElemento = document.getElementById('contador');
    // console.log((d_segundos/100)-Math.floor(d_segundos/6000));
    if(d_segundos<6000){
        contadorElemento.textContent = d_segundos/100;
    }
    else{
        if(((d_segundos/100)-Math.floor(d_segundos/6000)*60)<10){
            contadorElemento.textContent = Math.floor(d_segundos/6000) + ':0' + ((d_segundos-6000)/100);
        }
        else{
            contadorElemento.textContent = Math.floor(d_segundos/6000) + ':' + ((d_segundos-6000)/100);
        }
    }
}

// Función para iniciar o detener el contador al presionar la tecla espacio
function manejarTeclaEspacio(event) {
    // Si ya hay un intervalo activo, detener el contador
    if (event.code === 'Space' && inicio==1) {
        if (intervalo) {
            let solve_time = new Solve();
            solve_time.setTime(d_segundos/100);
            stack.push(solve_time);
            // Si ya hay un intervalo activo, detener el contador
            clearInterval(intervalo);
            intervalo = null;
            solve_time.printSolve();
        }
    }
}

function manejarTeclaEspacioPresionado(event) {
    console.log("Presionado");
    const contadorElemento = document.getElementById('contador');
    contadorElemento.className -= " text-white";
    contadorElemento.className += " text-danger";
    if(inicio==1){return;}
    if (event.code === 'Space') {
        inicio=0;
    }
}

function manejarTeclaEspacioSoltado(event) {
    console.log("Soltado");
    const contadorElemento = document.getElementById('contador');
        contadorElemento.className -= " text-danger";
        contadorElemento.className += " text-white";
    if(inicio==1){return;}
    if (event.code === 'Space') {
        inicio=1;
        // Si no hay un intervalo activo, iniciar el contador y actualizar cada segundo
        intervalo = setInterval(() => {
            d_segundos++;
            actualizarContador();
        }, 10);
    }
}

// Agregar el evento para detectar la tecla espacio
document.addEventListener('keydown', manejarTeclaEspacio);
document.addEventListener('keyup', manejarTeclaEspacioSoltado);
document.addEventListener('keypress', manejarTeclaEspacioPresionado);