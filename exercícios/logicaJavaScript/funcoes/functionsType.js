
// ======= currying functions =====

/*
O que é currying functions em javascript?

É um conceito da programação funcional no qual uma função recebe múltiplos parâmetros um de cada vez de maneira "não simultãnea". Na verdade o que a função  faz é receber um argumento para seu parâmetro quando é invocada em seguida retorna uma outra função "anônima"(que é chamada de curryng) que esta aninhada em seu corpo de função. Já esta função que foi retornada pedirá outro argumento para seu parâmetro e no corpo de função dela está a expressão que processará os parâmetros recebidos das funções e então retornará um valor.

Uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o resultado da função original. Ou seja, são funções aninhadas e que são invocadas parcialmente uma de cada vez.

Para criar uma função currying vale a pena pensar na ordem dos seus argumentos. O ideal é deixar concentrar os argumentos que tendem a ser fixados no início, e deixar os argumentos que variam mais no final da lista de argumentos.
*/

function add (num1){
  return function(num2){
    return num1+num2
    }
};

console.log(add(45)(56));

// const increment = add(1);
//  console.log(increment(5));

function getDiscout(discount){
    return function (price) {
        return price * discount;
    }
};
const discountSiver = getDiscout(.10);
const discountGold = getDiscout (.20)
const discountDimond = getDiscout(.30);
const discountPlatinum = getDiscout(.50);
const arrayDiscounts = [discountSiver, discountGold, discountDimond, discountPlatinum];

arrayDiscounts.forEach(elem => console.log('Desconto de: ',elem(500)));
// console.log(getDiscout(456, .23));
function primeiroGrau(a){
    return function(b){
        return function(x){
            return a * b + x;
        };
    };
};
const valorA = primeiroGrau(4);
const valorB = valorA(3);
const result = valorB(55);
// const result = primeiroGrau(2)(3)(42);
console.log('Resultado: ', result);

console.log('====================================\n');

