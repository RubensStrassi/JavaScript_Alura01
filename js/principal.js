let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector('#primeiro-paciente');

let tdpeso = paciente.querySelector('.info-peso');
let peso = tdpeso.textContent;

let tdaltura = paciente.querySelector('.info-altura');
let altura = tdaltura.textContent;

let tdimc = paciente.querySelector('.info-imc');

let pesoEhValido = true;
let alturaEhValido = true;

if ( peso <= 0 || peso >= 1000 ) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdimc.textContent = "Peso invalido"
}

if ( altura <= 0 || altura >= 3.0 ) {
    console.log("Altura inválido");
    alturaEhValido = false;
    tdimc.textContent = "Altura invalido"
}

if(alturaEhValido && pesoEhValido) {
    let imc = peso /(altura*altura);
    tdimc.textContent = imc
}

