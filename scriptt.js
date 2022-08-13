//Variables

fetch("elementos.json")
    .then (respuesta => respuesta.json()) 
    .then (data => {
let formulario = document.getElementById("contenedorFormulario");
let juego = document.getElementById("contenedorJuego");
let botonJugar = document.getElementById("jugar");
let botonVolverAJugar = document.getElementById("volver");
let inputJugador1 = document.getElementById("nombreJugador1");
let inputJugador2 = document.getElementById("nombreJugador2");
let b1 = document.getElementById('boton1');
let b2 = document.getElementById('boton2');
let b3 = document.getElementById('boton3');
let b4 = document.getElementById('boton4');
let b5 = document.getElementById('boton5');
let b6 = document.getElementById('boton6');
let b7 = document.getElementById('boton7');
let b8 = document.getElementById('boton8');
let b9 = document.getElementById('boton9');
let jugador = data[0].cruz;
let guardar = document.getElementById("guardar");
let borrar = document.getElementById("borrar");
let jugadores = []



function ocultarFormulario () {
    formulario.style.display = 'none';
    juego.style.display = 'block';
}

function mostrarFormulario () {
    formulario.style.display = 'block';
    juego.style.display = 'none';

}

//Formulario
let guardarDatos = () => {
    localStorage.setItem ("Jugador 1", inputJugador1.value);
    localStorage.setItem ("Jugador 2", inputJugador2.value);

}
  
let borrarNombres = () => {
    localStorage.removeItem("Jugador 1");
    localStorage.removeItem("Jugador 2");
    inputJugador1.value = ""
    inputJugador2.value = ""
} 

function borrarTablero(){
    // let input = document.querySelectorAll(input)
    // input.value = " ";
    b1.value = " ";
    b2.value = " ";
    b3.value = " ";
    b4.value = " ";
    b5.value = " ";
    b6.value = " ";
    b7.value = " ";
    b8.value = " ";
    b9.value = " ";
}

for (let x = 1; x <= 9; x++) {
    document.getElementById('boton' + x).addEventListener('click', presion);
}

function presion(evt) {
    evt.target.value = jugador;

    if (jugador == '❌') {
        jugador = data[1].circulo; 
    }
    else {
    jugador = data[0].cruz;
    }

    verificarGanador();
}
       

function verificarGanador() {
    
            let boton1 = b1.value 
            let boton2 = b2.value 
            let boton3 = b3.value 
            let boton4 = b4.value 
            let boton5 = b5.value 
            let boton6 = b6.value 
            let boton7 = b7.value 
            let boton8 = b8.value 
            let boton9 = b9.value 

        if ( (boton1 == '❌' && boton2 == '❌' && boton3 == '❌') ||
        (boton4 == '❌' && boton5 == '❌' && boton6 == '❌') ||
        (boton7 == '❌' && boton8 == '❌' && boton9 == '❌') ||
        (boton1 == '❌' && boton4 == '❌' && boton7 == '❌') ||
        (boton2 == '❌' && boton5 == '❌' && boton8 == '❌') ||
        (boton3 == '❌' && boton6 == '❌' && boton9 == '❌') ||
        (boton1 == '❌' && boton5 == '❌' && boton9 == '❌') ||
        (boton3 == '❌' && boton5 == '❌' && boton7 == '❌') ){
            swal(`Gano ${inputJugador1.value}`, `Mas suerte para la proxima ${inputJugador2.value}`, "success");
            jugadores.push(inputJugador1.value)
            localStorage.setItem("Gano", JSON.stringify(jugadores))
        }


        else if ( (boton1 == '🔵' && boton2 == '🔵' && boton3 == '🔵' ) ||           
        (boton4 == '🔵' && boton5 == '🔵' && boton6 == '🔵') ||
        (boton7 == '🔵' && boton8 == '🔵' && boton9 == '🔵') ||
        (boton1 == '🔵' && boton4 == '🔵' && boton7 == '🔵') ||
        (boton2 == '🔵' && boton5 == '🔵' && boton8 == '🔵') ||
        (boton3 == '🔵' && boton6 == '🔵' && boton9 == '🔵') ||
        (boton1 == '🔵' && boton5 == '🔵' && boton9 == '🔵') ||
        (boton3 == '🔵' && boton5 == '🔵' && boton7 == '🔵') ){
        swal(`Gano ${inputJugador2.value}`, `Mas suerte para la proxima ${inputJugador1.value}`, "success");
        jugadores.push(inputJugador2.value)
        localStorage.setItem("Gano", JSON.stringify(jugadores))
    }

    
}

//Eventos
botonJugar.addEventListener("click",() => {
    if (inputJugador1.value !== "" && inputJugador2.value !== ""){ 
        ocultarFormulario();
        borrarTablero();

    }
    else {
        swal("TE FALTO COMPLETAR ALGUN NOMBRE", "Completalo por favor...Ingrese nuevamente", "error");
    }
})

botonVolverAJugar.addEventListener("click",() => {
    mostrarFormulario();   
});

guardar.addEventListener("click",guardarDatos)
borrar.addEventListener("click",borrarNombres)


}).catch(error => {console.log("ERROR")})