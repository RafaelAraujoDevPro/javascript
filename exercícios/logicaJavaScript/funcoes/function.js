function parImpar(num) {
    if (num%2 == 0){
        return "este número é par!"
    }else {
        return "este número é impar!"
    }
};
let res = parImpar(31);
console.log(res);
        // parãmetros pre-definidos
function num(x=0, y=0) {
   return x + y
}
console.log(num(5));/*Se pedir para somar um número com undefined, o retorno será NaN. Para evitar isso em funções podemos declará parâmetros pre-definidos*/

let v = function(x) {
    return x*4
}
console.log(v(7));

function factorial(num) {
    let fat = 1
    for(con = num; con>1; con--) {
        fat *= con
    }
    return fat
}
console.log(factorial(6));

/*Função recursiva é uma função que chama a si mesma até encontrar uma instrução de parada. Essa técnica é chamada de recursão. */

function contagem(regressiva){
    console.log(regressiva)
    let contador = regressiva - 1;
    if(contador > 0) {
        contagem(contador)
    }
}
contagem(7);


//  EXPRESSÃO DE FUNÇÃO

//No javaScript as funções são objetos, um tipo específico de valor.

function dizerOla(){
console.log('Olá mundo!')
}
//Como as funções são valores, podemos atribuí-las a uma variável;
//Desta forma, a função recebe a designação de "function expression"
var helloWord = function() {
    console.log('hello Word!');
};//quando atribuimos uma função para uma variável devemos declarar ";" no final.
let novaFunction = helloWord;

dizerOla();
helloWord();
novaFunction()

//ARROW FUNCTIONS

/* Existe uma forma ainda mais simples e curta a nível de síntaxe para criar funções, e que é também uma expressão de função. São as "Arrow functions" */

let funcao = (parametros) => expressao;
/*Esta sintáxe cria uma função que aceita argumentos como parâmetros e em seguida avalia uma expressão e depois já retorna um resultado de maneira implícita. Desta maneira a palavra reservada "function", a abertura de blocos "{}" e o "return" estão presentes de maneira implícita. A função ficará designada através dos sinais "=>" que representam um flecha.*/

//Esta é uma expressão normal de "function"
let funcaoNormal = function(a, b, c) {
    return a+b+c;
}
//Esta é uma expressão abreviada como "arrow function"
let arrowFunction = (a,b,c) => a+b+c;

//Os resultados de retorno serão os mesmos.
console.log(funcaoNormal(10,20,30));
console.log(arrowFunction(10,20,30));

let aviso = () => `Esta é uma mensagem de aviso`;
console.log(aviso());

    //Em teoria, um parâmetro funciona como se fosse uma variável;
let alerta = (nome) => `Este é uma alerta para ${nome}`;
console.log(alerta("rafael"));
/*Na chamada da função podemos atribuir uma valor pra o argumento 
de um parâmetro.*/
     
let saudar = (nome1)=> {
    let saudacao = `Bom dia!`;
    return `${saudacao} ${nome1}`;
}
console.log(saudar('rafael'))

/*Uma função que irá exibir uma mensagem na tela `Parabéns ${nome}`
Essa função vai receber como argumento de parâmetro para sua chamada um nome digitado pelo usuário*/

// function mostrarMsg(nome){
//     alert(`Parabéns ${nome}`);
// }
// let noneUsuario = prompt("Digite seu nome aqui");
// mostrarMsg(noneUsuario);

function valorReferencia(strVar, arrVar){
    strVar = "String modificada!";
    arrVar[0] = "Array modificada!";
}
var texto = "Valor original!";
var vetor = ["Array original!"];
console.log(`String antes de chamar função: ${texto}`);
console.log(`Array antes de chamar função: ${vetor[0]}`);
// Chamando a função;
valorReferencia(texto, vetor)
console.log(`String depois de chamar função: ${texto}`);
console.log(`Array depois de chamar função: ${vetor[0]}`);

//  function ola() {
//         console.log('Olá');
//     }
//     ola();
    
//     function ola() {
//         function mensagem() {
//             return 'Olá';
//         };
//         console.log(mensagem())
//     }
//     ola();
    
//     function ola() {
//         function mensagem() {
//             return 'Olá'
//         };
//         console.log(mensagem())
//     }
//     ola();
    
//     console.log(mensagem()); /* a função mensagem() não irá existir
//      nesse trecho de código, ela somente existe dentro da função ola()*/
    
//     function ola(nome) {
//         console.log('Olá', nome);
//     }
//     ola('Rafael');

    let soma = (num1, num2) => num1 + num2;

    console.log(soma(20, 30));

    // Function constructor ******

//convenção de nomeclatura de Pascal Case
    function Carro(marca, modelo, ano){
        this.nomeMarca = marca;
        this.nomeModelo = modelo;
        this.numAno = ano;
    };
    let carro1 = new Carro('Chager','RT', 1970);
    //console.log(carro1);
    let carro2 = new Carro('Ford', 'Mustang', 1970);
    //console.log(carro2);
    let carro3 = new Carro('Chevrollet', 'Camaro', 1969);
    //console.log(carro3);
    let colecao = [carro1,carro2,carro3];
    for(let i=0; i<colecao.length; i++){
        console.log(colecao[i]);
    }


    // Function factory

// convensão de nomeclatura camelCase
    function criarCelular(marca, tela, bateria, preco) {
        return { // Obleto
            marca: marca,
            tela: tela,
            bateria: bateria,
            preco: preco,
            ligar(){
                console.log('Fazer ligação!');
            }
        }
    };
let celular1 = criarCelular('Sansung', 5.5, 5000, 1000);
let celular2 = criarCelular('Motorolla', 6.0, 5000, 2000);
let celular3 = criarCelular('LG', 5.5, 5000, 1500);

let loja = [celular1, celular2, celular3];

// for(let i=0; i<loja.length; i++) {
//     console.log(loja[i]);
// };
for(let i in loja) {
    console.log(`O celular da marca ${loja[i].marca} tem tamanho de tela ${loja[i].tela} e capacidade de bateria ${loja[i].bateria}. Está custando apenas ${loja[i].preco} reais.`);
}
// for(let v of loja) {
//     console.log(v);
// }
function soma1(...pRest) {
    let comp = pRest.length;
    let res = 0;
    for(let ind=0; ind<comp; ind++){
        res += pRest[ind]
    }
    return res;
};
console.log(soma1(10, 20, 30, 40));

// ******* Function Generator ******
debugger
function* fGeradora() {
    yield 'azul'
    yield 'verde'
}
const iterador = fGeradora();
console.log(iterador.next().value);

console.log(iterador.next().value);

function* contador() {
    let indice = 0;
    while(true) {
       yield indice++;
       if(indice>7)
            break
    }
};
let gen = contador();

for(let v of gen){
    console.log(v);
}