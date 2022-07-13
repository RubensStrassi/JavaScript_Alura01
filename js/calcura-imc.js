let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdpeso = paciente.querySelector('.info-peso');
    let peso = tdpeso.textContent;

    let tdaltura = paciente.querySelector('.info-altura');
    let altura = tdaltura.textContent;

    let tdimc = paciente.querySelector('.info-imc');

    let pesoEhValido = true;
    let alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdimc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.0) {
        console.log("Altura inválido");
        alturaEhValido = false;
        tdimc.textContent = "Altura invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}