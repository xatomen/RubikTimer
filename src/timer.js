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

let times = [];
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

function totalAverage(){
    const avg = document.getElementById('avg');
    // Hacemos una copia superficial de la pila usando slice()
    let avgstack = stack.slice();
    let sum = 0;
    for (let i = 1; i <= num_solves; i++) {
        // Accedemos al último elemento de la copia usando pop()
        const solve = avgstack.pop();
        sum += solve.solveRawTime;
    }
    let avg_total = sum / num_solves; // Calculamos el average of 5 dividiendo la suma entre 5
    avg.textContent = formatTimeFromMilliseconds(Math.floor(avg_total)); // Mostramos el resultado con 2 decimales
}

function getMin(){
    let tempStack = stack.slice();
    let solve = tempStack.pop();
    let min = solve.solveRawTime;
    console.log("min: ",min);
    for (let i = 1; i < 5; i++) {
        // Accedemos al último elemento de la copia usando pop()
        let solve = tempStack.pop();
        // let min = solve.solveRawTime;
        if(solve.solveRawTime<min){
            min = solve.solveRawTime;
        }
    }
    console.log(min);
    return min;
}

function getMax(){
    let tempStack = stack.slice();
    let solve = tempStack.pop();
    let max = solve.solveRawTime;
    for (let i = 1; i < 5; i++) {
        // Accedemos al último elemento de la copia usando pop()
        let solve = tempStack.pop();
        // let max = solve.solveRawTime;

        if(solve.solveRawTime>max){
            max = solve.solveRawTime;
        }
    }
    console.log(max);
    return max;
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
    sum -= getMin();
    sum -= getMax();
    console.log(sum/3);
    let ao5 = sum / 3; // Calculamos el average of 5 dividiendo la suma entre 5
    avg5.textContent = formatTimeFromMilliseconds(Math.floor(ao5)); // Mostramos el resultado con 2 decimales
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
    sum -= getMin();
    sum -= getMax();
    let ao12 = sum / 10; // Calculamos el average of 5 dividiendo la suma entre 5
    avg12.textContent = formatTimeFromMilliseconds(Math.floor(ao12)); // Mostramos el resultado con 2 decimales
}

// Función para iniciar o detener el contador al presionar la tecla espacio
function manejarTeclaEspacio(event) {
    // Si ya hay un intervalo activo, detener el contador
    if (event.code === 'Space' && inicio==1) {
        if (intervalo) {

            // const classBody = document.getElementById('body');
            // classBody.className -= "backgroundBlack";
            // classBody.className += "header finisher-header"

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

            //Calculamos average total
            totalAverage();

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
    // const classBody = document.getElementById('body');
    // classBody.className -= " header finisher-header";
    document.body.classList.remove('header');
    document.body.classList.replace('finisher-header','backgroundBlack');
    window.dispatchEvent(new Event('resize'));
    // document.body.classList.add('backgroundBlack');

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