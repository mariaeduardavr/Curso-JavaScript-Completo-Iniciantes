const pessoa = {
    nome: 'Maria',
    idade: 25
};

for (const key in pessoa) {
    console.log(key,pessoa);
}

const cores = ['Vermelho','Azul','Verde']

for (const indice in cores) {
    console.log(indice,cores[indice]);
}