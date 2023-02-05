// Funcões de fábrica

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...');
        }
    }
}

const celular1 = criarCelular('ASUS',5.5,5000);
console.log(celular1);