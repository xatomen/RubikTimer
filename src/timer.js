// var countDownDate = new Date("Jul 16, 2023 16:37:52").getTime();
// var now = new Date().getTime();
// var timeleft = countDownDate - now;
    
// var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
// var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

// var d_seconds;
// var total;
// var contador=0;
// var space=0;

// // Función que se ejecutará cuando se detecte una tecla presionada
// function detectarTecla(event) {
//     if (event.keyCode === 32) {
//         space++;
//         Timer();
//     }
// }
  
// // Asociamos el evento "keydown" al documento para detectar cuando se presiona una tecla
// document.addEventListener('keydown', detectarTecla);

// // Ejemplo usando función tradicional
// function Contador() {
//     // d_seconds++;
//     // console.log(d_seconds/100);
//     console.log("hola");
// }

// function Timer(){
//     while(true){
//         if(space>3){break;}
//         console.log(space);
//         setTimeout(Contador,100);
//     }
    
// }


// Variable para almacenar el tiempo transcurrido en segundos
let segundos = 0;
let intervalo;

// Función para actualizar el contador en la página
function actualizarContador() {
  const contadorElemento = document.getElementById('contador');
  contadorElemento.textContent = segundos;
}

// Función para iniciar o detener el contador al presionar la tecla espacio
function manejarTeclaEspacio(event) {
  if (event.code === 'Space') {
    if (intervalo) {
      // Si ya hay un intervalo activo, detener el contador
      clearInterval(intervalo);
      intervalo = null;
    } else {
      // Si no hay un intervalo activo, iniciar el contador y actualizar cada segundo
      intervalo = setInterval(() => {
        segundos++;
        actualizarContador();
      }, 1000);
    }
  }
}

// Agregar el evento para detectar la tecla espacio
document.addEventListener('keydown', manejarTeclaEspacio);

  