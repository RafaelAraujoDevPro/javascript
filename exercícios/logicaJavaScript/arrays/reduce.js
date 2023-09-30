module.exports = {
    developer : [
        {nome:"Matheus", idade: 31, salario:2000, habilitacao: true, sexo: 'M'},
        {nome:"João", idade: 18, salario:1500, habilitacao: false, sexo: 'M'},
        {nome:"Mariana", idade: 22, salario:4000, habilitacao: true, sexo: 'F'},
        {nome:"Pedro", idade: 50, salario:7200, habilitacao: true, sexo: 'M'},
        {nome:"Érica", idade: 16, salario:0, habilitacao: false, sexo: 'F'},
        {nome:"Matia", idade: 35, salario:13_500, habilitacao: true, sexo: 'F'},
        {nome:"Santos", idade: 40, salario:15_500, habilitacao: true, sexo: 'M'},
        {nome:"Joelma", idade: 32, salario:7_500, habilitacao: true, sexo: 'F'},
    ]
}

const developer = [
    {nome:"Matheus", idade: 31, salario:2000, habilitacao: true},
    {nome:"João", idade: 18, salario:1500, habilitacao: false},
    {nome:"Mariana", idade: 22, salario:4000, habilitacao: true},
    {nome:"Pedro", idade: 50, salario:7200, habilitacao: true},
    {nome:"Érica", idade: 16, salario:0, habilitacao: false},
]
const nomeDevPro = developer
// const nomesDev = [];

// for(let l=0; l<developer.length; l++){
//     nomesDev.push(developer[l]['salario'])
// }

// console.log(nomesDev)

// function dadosDev(listaDeDados,indice){
//     const dadoEspecifico = []
//     for(let l=0; l<listaDeDados.length; l++){
//         dadoEspecifico.push(developer[l][indice])
//     }
//     return dadoEspecifico;
// }


//somar os salários dos devs que estão representados como objetos em lista dentro do array.

function dadosDev(listaDeDados,indice,...met){
    return listaDeDados.map(function(dadoEspecifico){
        return dadoEspecifico[indice]
    })
}
function somaVetor(arr){
    return arr.reduce(function(total,elem){
        return total+elem;
    }, 0)
}

const nomeDevs = dadosDev(developer,'nome');
console.log(nomeDevs);
//Run: [ 'Matheus', 'João', 'Mariana', 'Pedro', 'Érica' ]

const idadeDevs = dadosDev(developer,'idade');
console.log(idadeDevs);
//Run: [ 31, 18, 22, 50, 16 ]

const salarioDevs = dadosDev(developer,'salario');
console.log(salarioDevs);
//Run: [ 2000, 1500, 4000, 7200, 0 ]
console.log(somaVetor(salarioDevs));
// Run: 14700
const hbltDevs = dadosDev(developer,'habilitacao');
console.log(hbltDevs);
// Run: [ true, false, true, true, false ]
const carteiraHabilitacao = contadorDeAtributos(developer, 'habilitacao', 'nome');
console.log(carteiraHabilitacao);
// Run: { true: [ 'Matheus', 'Mariana', 'Pedro' ], false: [ 'João', 'Érica' ] }



//Calcular o valor total dos produtos somados dentro do carrinho de compras.
const carrinhoCompras = [
    {nome: 'Caneta', quantidade: 4, precoUnidade: 1.5},
    {nome: 'Caderno', quantidade: 2, precoUnidade: 20},
    {nome: 'Borracha', quantidade: 1, precoUnidade: 0.5},
    {nome: 'Lapis', quantidade: 2, precoUnidade: 1},
    {nome: 'Mochila', quantidade: 1, precoUnidade: 80},  
]
const carrinhoCompras1 = [
    {nome: 'ColaBranca', quantidade: 1, precoUnidade: 5},
    {nome: 'Caderno', quantidade: 3, precoUnidade: 20},
    {nome: 'MarcaTexto', quantidade: 3, precoUnidade: 7},
    {nome: 'Lapis', quantidade: 5, precoUnidade: 1},
    {nome: 'Mochila', quantidade: 1, precoUnidade: 160},  
    {nome: 'LapisDeCor', quantidade: 1, precoUnidade: 8} 
]

function somarCompras(listaCompras,qtdeItens,precoItens){
    const compras = listaCompras.map(function(itens){
            return itens[qtdeItens]*itens[precoItens];
        });
    return compras.reduce(function(acc,currValue){        
            return acc + currValue;
        }, 0)  
}
const totalCompras = somarCompras(carrinhoCompras,'quantidade','precoUnidade');
console.log(totalCompras);

const totalCompras1 = somarCompras(carrinhoCompras1,'quantidade','precoUnidade');
console.log(totalCompras1);





// Exercícios com array e métodos

let nomes = ['Rafael','Racklane','Raylane','Antônia','Luciano','Ananias','Calebe','MariaClara','Alemão'];
//Criar um objeto contendo propriedades que são a primeira letra de cada nome. O valor das propriedades será um número que indica a quantidade de nomes que estão no array acima que iniciam com ela mesmo. 

function criarObjetoLetras(arrNomes){
    return arrNomes.reduce(function(objeto,nomeAtual){
        const primeiraLetra = nomeAtual[0].toLocaleLowerCase();
        if(objeto[primeiraLetra]){
            objeto[primeiraLetra]++
        } else {
            objeto[primeiraLetra] = 1
        }
        return objeto
    },{})
}

let objletras = criarObjetoLetras(nomes);
console.log (objletras);

// Run: { r: 3, a: 3, l: 1, c: 1, m: 1 }


//Exercício com reduce

//Exibir a maior palvra do array palavras.
let palavras = ['inconstitucionalissimamente','oi','paralelepipedo','macarrão','representatividade'];

let maiorPalavra = palavras.reduce(function(palavra,palavraAtual){
    if(palavra.length < palavraAtual.length){
        palavra = palavraAtual
    } 
    return palavra;
},'')
console.log(maiorPalavra);

//Transformar o array de objetos em um objeto literal com propriedades contendo valor sendo um array. 
// O objeto deverá conter as propriedades sendo o valor de 'familia' do atual array.
// As propriedades devem conter um array de especies que representam o tipo da familia.


let animaisSelv = [
    {
        especie: 'Leão',
        familia: 'mamiferos'
    },
    {
        especie: 'Gorila',
        familia: 'mamiferos'
    },
    {
        especie: 'Tubarão',
        familia: 'peixes'
    },
    {
        especie: 'Gaivota',
        familia: 'aves'
    },
    {
        especie: 'Abutre',
        familia: 'aves'
    },
    {
        especie: 'Piton',
        familia: 'repteis'
    },
    {
        especie: 'Garoupa',
        familia: 'peixes'
    },
];

// esperado {mamiferos:[], peixes:[], aves:[], repteis:[]}
/* Quando o reduce iterar se o objeto do array armazenado no 'tipoAtual' tiver o valor da chave familia igual a propriedade do objeto criado, deve adicionar o valor da chave 'especie' para a nova propriedade*/
/*Esperado {
        mamiferos:['Leão','Gorila'],
        peixes:['Tubarão', 'Garoupa'],
        aves:['Gaivota','Abutre'],
        repteis:['Piton']
    } */


let familiaAnimais = animaisSelv.reduce(function(objeto, tipoAtual){
   //Na primeira iteração de reduce(), o primeiro valor retornado para a variável 'objeto' é '{}': um objeto vazio.
   
    if(!objeto[tipoAtual.familia]){// Se {'familia'}, objeto contendo propriedade 'mamifero' retornada de 'familia', não existe:

        objeto[tipoAtual.familia] = []; // Se não existe, então criar {'familia': []}
    }
    objeto[tipoAtual.familia].push(tipoAtual.especie); //Se existe {'familia': []}, então adicionar como valor a string retornada de 'especie' no array 

    return objeto
},{})
console.log(familiaAnimais);

function contadorDeAtributos(listaDeArray,atributo,valor){// Método high order function
    return listaDeArray
        .reduce((objeto,objetoAtual)=>{
            if(!objeto[objetoAtual[atributo]]){
                objeto[objetoAtual[atributo]] = [];
            }
            objeto[objetoAtual[atributo]].push(objetoAtual[valor]);
            return objeto;
        },{})  
}
const NovoObjeto = contadorDeAtributos(animaisSelv, 'familia', 'especie');
console.log(NovoObjeto);