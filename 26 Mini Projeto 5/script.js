exibirTipo(5);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log('Par',i);
        } 
        else {
            console.log('Ímpar',i);
        }
        
    }
}