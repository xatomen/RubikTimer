class Solve{
    constructor(){
        this.solveTime = 0;
        this.solveRawTime = 0;
        this.algorithm = "";
        this.inspectionTime = 0;
    }

    setTime(solveTime){
        this.solveTime = solveTime;
    }

    setRawTime(rawTime){
        this.solveRawTime = rawTime;
    }

    printSolve(){
        console.log(this.solveTime);
        console.log(this.solveRawTime);
        console.log(this.algorithm);
        console.log(this.inspectionTime);
    }
}

// Variable para almacenar el tiempo transcurrido en segundos
let d_segundos = 0;
let intervalo;
let inicio=0;
let num_solves=0;

let stack = [];

function formatTimeFromMilliseconds(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMilliseconds = milliseconds % 100;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(remainingMilliseconds).padStart(2, '0').substr(0, 2);
    
    if(formattedMinutes>=1){
        return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
    }
    else{
        return `${formattedSeconds}.${formattedMilliseconds}`;
    }

}

// Función para actualizar el contador en la página
function actualizarContador() {
    const contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = formatTimeFromMilliseconds(d_segundos);
}

function Average5() {
    const avg5 = document.getElementById('avg5');
    // Hacemos una copia superficial de la pila usando slice()
    let ao5stack = stack.slice();
    let sum = 0;
    for (let i = 1; i <= num_solves; i++) {
        // Accedemos al último elemento de la copia usando pop()
        const solve = ao5stack.pop();
        sum += solve.solveRawTime;
    }
    let ao5 = sum / 5; // Calculamos el average of 5 dividiendo la suma entre 5
    avg5.textContent = formatTimeFromMilliseconds(ao5.toFixed(2)); // Mostramos el resultado con 2 decimales
}

function Average12(){
    const avg12 = document.getElementById('avg12');
    let ao12stack = stack.slice();
    let sum = 0;
    for (let i = 1; i <= num_solves; i++) {
        // Accedemos al último elemento de la copia usando pop()
        const solve = ao12stack.pop();
        sum += solve.solveRawTime;
    }
    let ao12 = sum / 12; // Calculamos el average of 5 dividiendo la suma entre 5
    avg12.textContent = formatTimeFromMilliseconds(ao12.toFixed(2)); // Mostramos el resultado con 2 decimales
}

// Función para iniciar o detener el contador al presionar la tecla espacio
function manejarTeclaEspacio(event) {
    // Si ya hay un intervalo activo, detener el contador
    if (event.code === 'Space' && inicio==1) {
        if (intervalo) {
            let solve_time = new Solve();
            solve_time.setRawTime(d_segundos);
            solve_time.setTime(formatTimeFromMilliseconds(d_segundos));
            stack.push(solve_time);
            num_solves++;
            // Si ya hay un intervalo activo, detener el contador
            clearInterval(intervalo);
            intervalo = null;
            solve_time.printSolve();

            // Agregar el objeto a la tabla
            agregarObjetoATabla(solve_time);
            //Calculamos average of 5
            if(num_solves==5){
                Average5();
            }
            //Calculamos average of 12
            if(num_solves==12){
                Average12();
            }
        }
    }
}

function manejarTeclaEspacioPresionado(event) {
    console.log("Presionado");
    const contadorElemento = document.getElementById('contador');
    contadorElemento.className -= " text-white";
    contadorElemento.className += " text-danger";
    if(inicio==1){
        if (event.code === 'Space') {
            d_segundos = 0;
        }
    }
    else{
        if (event.code === 'Space') {
            inicio=0;
        }
    }
}

function manejarTeclaEspacioSoltado(event) {
    console.log("Soltado");
    const contadorElemento = document.getElementById('contador');
        contadorElemento.className -= " text-danger";
        contadorElemento.className += " text-white";
    if(inicio==1){
        if (event.code === 'Space') {
            inicio = 0;
        }
    }
    else{
        if (event.code === 'Space') {
            inicio=1;
            // Si no hay un intervalo activo, iniciar el contador y actualizar cada segundo
            intervalo = setInterval(() => {
                d_segundos++;
                actualizarContador();
            }, 10);
        }
    }
    
}

// Función para agregar un objeto Solve a la tabla
function agregarObjetoATabla(solve) {
    const tabla = document.getElementById('tablaSolve');
    const cuerpoTabla = tabla.getElementsByTagName('tbody')[0];
    const fila = document.createElement('tr');

    // Crear celda para el número de solve
    const celdaNum = document.createElement('td');
    celdaNum.textContent = num_solves;
    fila.appendChild(celdaNum);

    // Crear celdas para cada propiedad del objeto Solve
    const celdaSolveTime = document.createElement('td');
    celdaSolveTime.textContent = solve.solveTime;
    fila.appendChild(celdaSolveTime);

    // const celdaAlgorithm = document.createElement('td');
    // celdaAlgorithm.textContent = solve.algorithm;
    // fila.appendChild(celdaAlgorithm);

    // const celdaInspectionTime = document.createElement('td');
    // celdaInspectionTime.textContent = solve.inspectionTime;
    // fila.appendChild(celdaInspectionTime);

    // Agregar la fila a la tabla
    cuerpoTabla.appendChild(fila);
}

// Agregar el evento para detectar la tecla espacio
document.addEventListener('keydown', manejarTeclaEspacio);
document.addEventListener('keyup', manejarTeclaEspacioSoltado);
document.addEventListener('keypress', manejarTeclaEspacioPresionado);