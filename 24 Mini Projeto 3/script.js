// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 => FizzBuzz

const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        return 'Não é um número';
    }
    if (entrada % 3 === 000 && entrada % 5 === 0) {
        return 'FizzBuzz';
    }
    if (entrada % 3 === 0) {
        return 'Fizz';
    }
    if (entrada % 5 ===0) {
        return 'Buzz';
    }
}