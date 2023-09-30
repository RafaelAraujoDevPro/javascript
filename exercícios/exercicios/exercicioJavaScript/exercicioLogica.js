const mamonas = 'mamonas';
console.log(mamonas.length);
console.log(mamonas[6]);

let bigString='0'
const position = 2023;
let divisor= position/mamonas.length;
console.log(divisor)

for(let i=1; i<=divisor; i++){
    bigString+=mamonas;
}
// console.log(bigString);
console.log(bigString.length);
console.log(bigString[2023]);

/*
Criar método que qual é a "letra" na "posição de indice declarada" de uma palavra que será "concatenada indefinidamente".

*/
function getPositionLetter(word, position){
    let addWord = '0';
    const divider = Math.ceil(position/word.length);
    for(let ind=1; ind<=divider; ind++){
        addWord+=word
    }
    return addWord[position];
}
const result = getPositionLetter('mamonas',2023);
const result1 = getPositionLetter('Roraima',187);
console.log(result);
console.log(result1);

console.log('//====================');
//==================================

class Animal{
    constructor(name) {
        this.name = name
    };  
}
class Rabbit extends Animal{
    constructor(name,color){
        super(name)
        this.color = color
        this.created = new Date()
    }
}

const rabbit = new Rabbit('Rabbit','White');
console.log(`${rabbit['color']} ${rabbit['name']} ${rabbit['created']}`);
console.log('//====================');

//=======================================

// let concertaPalavra = (str)=> {
//    let palavra = [...str];
//     palavra.splice(3,1,'c');
//     const palvraConcertada = palavra.reduce((acc,curr)=>{
//         acc+=curr
//         return acc;
//     },'');
//     return palvraConcertada;
// };
// const resposta = concertaPalavra('Ta serto?')
// console.log('Resposta: ', resposta, 'com "c"');
function concertaPalavra(str){
   return str.replace('serto','certo');
};
const resposta = concertaPalavra('Ta serto?')
console.log('Resposta: ', resposta, 'com "c"');
console.log('//====================');
//=======================

// const multiplicar = (a,b,c) => [a,b,c] 
//    .includes(undefined) ? 'Insira todos os argumentos' : a*b*c;


const multiplicar = (arg1,arg2,arg3) => {
    const argumentos = [arg1,arg2,arg3]
    const argUndefined = argumentos
        .every(elem => elem===undefined);
    const qtdeUndefined = argumentos
        .filter(item=>item===undefined);

    if(argUndefined){
        return 'Insira todos os TRÊS argumentos para a função!';
    }
    if(qtdeUndefined.length ===1){
        return 'Insira mais "UM" argumento para a função!';
    };
    if(qtdeUndefined.length ===2){
        return 'Insira mais "DOIS" argumentos para a função!';
    };
    return arg1*arg2*arg3;
};

console.log('não contém argumentos: ',multiplicar());
console.log('contém um argumento: ',multiplicar(1));
console.log('contém dois argumentos: ',multiplicar(1,2));
console.log('contém todos argumentos, resultado: ',multiplicar(2,5,6));
console.log('//====================');
//========================================

const eUderfined = arg => arg === undefined;
const somar = (arg1,arg2,arg3) =>{
    const temSoArg1 = !eUderfined(arg1) && eUderfined(arg2) && eUderfined(arg3);
    const temSoArg1E2 = !eUderfined(arg1) && !eUderfined(arg2) && eUderfined(arg3);
    const temTodosArgs = !eUderfined(arg1) && !eUderfined(arg2) && !eUderfined(arg3);
    const temNenhumArgs = [arg1,arg2,arg3].every(eUderfined);

    if(temSoArg1){
        return arg1;
    };
    if(temSoArg1E2){
        return arg1 + arg2;
    };
    if(temTodosArgs){
        return arg1 + arg2 + arg3;
    };
    if(temNenhumArgs){
        return false;
    };
};

console.log('contém só um argumento: ',somar(3));
console.log('soma dois argumentos: ',somar(5,6));
console.log('soma todos argumentos: ',somar(7,1,6));
console.log('não foi declarado argumento portando: ',somar());

console.log('//====================');
//==================================

const dobrar = numeros => {
    let numerosDobrados = numeros.map(elem => elem*2);
    return numerosDobrados;
};
const arrNumeros = dobrar([3,6,6,7]);
console.log('array de numéros dobrados: ',arrNumeros);

console.log('//====================');
//==================================

const pessoas = [
    {nome:'Rafael',idade:32},
    {nome:'João',idade:18},
    {nome:'José',idade:23},
    {nome:'Maria',idade:18}
];
const todosPessoasAdultas = pessoas.every((elem) =>elem.idade>=18);
console.log('Todas as pessoas são adultas? ',todosPessoasAdultas);

console.log('//====================');
//==================================

const executarIf = ext => {
    const caractereB = 'b'===ext[0];
    const numeroTres = ext[1]===3;
    const boleanoFalse = ext[2]===false;
    const extTrue = [caractereB,numeroTres,boleanoFalse]
        .every(elem => elem === true);
    if(extTrue) {
        return `executou o if`;
    };
};

const caracteres = 'b';
const boleano = false;
const numero = 3;
console.log(executarIf([caracteres,numero,boleano]));

console.log('//====================');
//==================================

const versaoOficial = 7;

const saoMesmaVersao = obj => obj.versoes.every((arr)=>{
    console.log(arr[0]);
    return arr[0]===versaoOficial;
});
    // let mesmaVersao = true;
    // const versao = obj.versoes.every(item=>item[0]===versaoOficial);
    // if(!versao) return mesmaVersao = false;
    // return mesmaVersao;
// const obj = {
//     versoes:[[7],[8],[9]]
// };
// console.log('propriedade: ',obj.versoes);
// console.log('propriedade[0]: ',obj.versoes[1]);
// console.log('propriedade[0]: ',obj.versoes[1][0]);

console.log('Versão oficial: ',saoMesmaVersao({versoes:[[7],[8],[9]]}));
console.log('Versão oficial: ',saoMesmaVersao({versoes:[[7],[7],[7]]}));

console.log('//====================');
//==================================

const perigo = {
    git: {
        arquivosCriados:['prod/nub-noirjsevtxenehtn-i','prod/ved-etjsiv','prod/rajsone-vi'],
        arquivosModificados:['prod/kuic-adodnanrjsef','prod/repojslev-ederawtfos','prod/slootjsved-tcaer'],
        arquivosDeletados:['prod/ipa-nig-ujslp','prod/noitcnuf-tjssur-gnitropmi','prod/adniaeo-dutartselapjsa']
    }
}
const arquivos = [
    ...perigo.git.arquivosCriados,
    ...perigo.git.arquivosModificados,
    ...perigo.git.arquivosDeletados
];

const contemJs = arquivos.every(elem => elem.includes('js'));
console.log('todos os arquivos contém os caracteres "js": ',contemJs);

console.log('//====================');
//==================================

const bandasAno60 = ['Pink Floyd','Deep Purple','Black Sabbath','Led zeplin'];
const bandasAno70 = ['Queen','Eagles','Aerosmith','AC/DC','Journey','Kiss'];


function somarBandas(bandas1,bandas2){
    return [...bandas1,...bandas2];
}
const bandasClassicas = somarBandas(bandasAno60,bandasAno70);
console.log('bandas de rock clássicas: ',bandasClassicas);

console.log('//====================');
//==================================

const produtos = [
    {id:'fd-f9g',nome:'Marvel`s Spider-Man 2'},
    {id:'wd7ye-fs',nome:'Fire TV Stick | Streaming em Full HD'},
    {id:'f4h-d8if-3',nome:'Controle Dualsense - Midnight Black'},
    {id:'p8fi-sf',nome:'Echo Pop Smart speaker'},
    {id:'g79f-8qs',nome:'Clamper Energia  5 Tomadas'}
];

function mudaNomeProduto(produto){
    let copiaProduto = {...produto, nome:produto.nome + ' - Plastation 5'};
    return copiaProduto;
};

const novoProduto = mudaNomeProduto(produtos[0]);

console.log('O novo produto: ',novoProduto);
console.log('É o mesmo Objeto?', produtos[0]===novoProduto);

function isBigEnogh(element){
    return element>=10;
};
/*para referênciar uma função já existente para ser uma função de callbackFn em um método iterativo devemos declarar apenas o nome da função sem parênteses "()" para que ela seja lida como referência à função externa.*/ 
console.log([ 12,5,8,130,44 ].every(isBigEnogh));
console.log([ 12,54,18,130,44 ].every(isBigEnogh));

const isSubSet = (array1,array2)=>{
    return array2.every(elem=>array1.includes(elem));
};
const arrayMaior = [12,42,53,64,76,34,54,];
const arrayMenor = [12,34,53];
console.log(isSubSet(arrayMaior,arrayMenor));

const arraySparso = [3, ,3];
const sparso = arraySparso.every(elem => elem === undefined);
const sparso2 = arraySparso.every(elem => elem === 3);
console.log('um elemento é igual a undefined?',sparso);
console.log(sparso2);

console.log('//====================');
//==================================

let copy = produtos.slice(0,1);
console.log('cópia antes de alterar objeto: ',copy);
copy[0] = {id: 3, nome: 'plastation 5'};
const copyAlt = copy[0].nome + ' - marvel`s';
console.log('objeto original depois de alterar objeto: ',produtos[0])
console.log('objeto da cópia alterado : ',copyAlt);
console.log('cópia depois de alterar objeto: ',copy);

function stringToArray(bandas){
    const bandaPinkFloyd = bandas.slice(0,1);
    const lettes = [...bandaPinkFloyd[0]];
    return lettes;
}
const arrayLetters = stringToArray(bandasAno60);
console.log('array de letras',arrayLetters);

console.log('//====================');
//==================================


const arrayCopia = bandasAno70.map(elem=>elem);
console.log('cópia de array',arrayCopia);
arrayCopia.push('bandas')
console.log('cópia de array modificada',arrayCopia);
console.log('array original',bandasAno70);