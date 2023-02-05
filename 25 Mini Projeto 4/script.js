// Velocidade máxima: 70km/h
// A cada 5km acima do limite, ganha 1 ponto
// Se os pontos forem maior que 12, a carteira é suspensa

verificarVelocidade(101);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70) {
        console.log('OK');
    }
    else {
        const pontos = Math.floor((velocidade - 70) / 5);
        if (pontos >= 12) {
            console.log('Carteira Suspensa');
        }
        else {
            console.log('Pontos:',pontos);
        }
    }
}