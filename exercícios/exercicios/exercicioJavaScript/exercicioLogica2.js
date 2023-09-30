const person = {
    name: 'João Almeida',
    age: 29,
    address: {
        street: 'Rua Minas Gerais',
        city: 'São Paulo',
        state: 'São Paulo'
    }
};

// const person2 = JSON.parse(JSON.stringify(person));


const person2 = {
    ...person,
    name: 'Joana Cruz',
    address:{
        ...person.address,
        street: 'Rua Rio de Janeiro'
    }
};

console.log('person: ',person);
console.log('person2: ',person2);
console.log(person.address.street !== person2.address.street);
console.log(person.address !== person2.address);

console.log('======================================');
//======================================

const getHeroes = [
    {name: 'Batman', realName:'Bruce Wayne',gender: 'male'},
    {name: 'Wonder Woman', realName:'Diana Prince',gender: 'Female'},
    {name: 'Spider-Man', realName:'Peter Parker',gender: 'male'},
];

function getMensage(heroes){
    let mensage = ''
     heroes.forEach(({name, realName, gender},index) => {
        const preposition = gender==='male'? 'do herói' : 'da heroina';
        return mensage += `o nome ${preposition} no ${index + 1}° item é ${name} e seu verdadeiro nome é ${realName}. \n`  
    });
    return mensage;
};
const mensageString = getMensage(getHeroes);
console.log(mensageString);

console.log('======================================');
//======================================

const objs = [{id: 3, code: 31},{id: 7, code: 21}];

const multiply = ([{id},{code}]) =>id*code;
const result = multiply(objs);
console.log('resultado para multiply: ',result);

console.log('======================================');
//======================================

const getFruitsBenefits = fruit =>{
    const fruits ={
        abacaxi: 'Ajuda a fortalecer o sistema imunológico e eliminar inflamações.',
        banana: 'Auxilia a regular o sistema nervoso e o aparelho digestivo.',
        uva: 'Rica em carboidratos, altamente energética.'
    };
    return fruits[fruit] || 'Não há informações da fruta =/';
    /*Para acessar a propriedade de um abjeto referenciando de forma dinâmica através de variável, parâmetro ou alguma expessão, deve-se utilizar a sintaxe de notação de colchetes "[]" ao invés de notação de ponto ".".
    */
};

const benefits = getFruitsBenefits('uva');
console.log('uva: ',benefits);

console.log('======================================');
//======================================

const updateInfo = product => {
    const {name, value} = product.target;
    const action = name.includes('size-') ? 'UPDATE_SIZE' : 'UPDATE_FIELD';
    const fieldName = name.includes('size-') ? name.replace('size-','') : name;
    return {type: action, playload: {[fieldName]: value}}
};
 const product = updateInfo({
    target: {
        name: 'size-g',
        value: 'Jaqueta Trucker Jeans com recortes e forro de sherpa azul clássico'
    }
 });
 console.log(product);

 console.log('======================================');
//======================================

const getUsersAnswers = ()=> ['A','B','A','D','C'];
// const getScore = userAnswer => {
//     const lastAnswer = userAnswer[3];
//     if(lastAnswer === 'A'){
//         return 50;
//     }else if (lastAnswer==='C'){
//             return 25;
//     } else {
//         return 100;
//     };
// };

const getScore = userAnswer => {
    const lastAnswer = userAnswer[userAnswer.length-1];
    return {A: 50,B: 40,C: 25}[lastAnswer] || 100;
};

const userAnswers = getUsersAnswers();
const score = getScore(userAnswers);
console.log(score);

 console.log('======================================');
//======================================


const pessoas = [['Srta.', 'Sr','Sr'], ['Letícia','Pedro','Rafael'],['Chijo','Barros','Araujo']]
function cumprimentar([pronome,nome,sobrenome]) { 
    let cumprimento = []
    for(let ind=0; ind<nome.length; ind++){
        cumprimento.push(`Olá ${pronome[ind]} ${nome[ind]} ${sobrenome[ind]}, tenha um bom dia`);
    };
    return  cumprimento;
};
const cumprimento = cumprimentar(pessoas);
console.log(cumprimento);

console.log('======================================');
//======================================

let countNumb = 1;
function multiplyCount(){
    countNumb *= 100;
};
console.log(countNumb);
multiplyCount()
console.log(countNumb);

console.log('======================================');
//======================================
const triangulo = {
    base: 25,
    altura: 50
}
 function calcAreaTriangulo({base,altura}){
    const calc = (base*altura)/2;
    return calc;
 };
const areaTriangulo = calcAreaTriangulo(triangulo);
console.log('resultado: ',areaTriangulo);

console.log('======================================');
//======================================

function somarNumeros(indice, soma){
    let sequenciaArray = [];
    let contador = 0;
    for(let ind=indice+1; ind<=soma; ind++){
        contador+=ind;
        if(contador <= soma){
            sequenciaArray.push(ind);
        };
    };
    return sequenciaArray;
};

const sequenciaNumeros = somarNumeros(12, 58);
const sequenciaNumeros1 = somarNumeros(2, 12);
const sequenciaNumeros2 = somarNumeros(2, 122);
console.log('sequência de números: ',sequenciaNumeros);
console.log('sequência de números: ',sequenciaNumeros1);
console.log('sequência de números: ',sequenciaNumeros2);

console.log('======================================');
//======================================

function pegarSequencia(array,subArray){
    let contador = 0;
    let arrayBolean1 = [];
    let arrayBolean2 = [];
    for(let ind=0; ind<subArray.length; ind++){
        contador++;
       
        const arrayIncluso = array.includes(subArray[ind]);
    
        if(arrayIncluso === true){
            arrayBolean1.push(true);
        } else{
            arrayBolean1.push(false);
        };
        const arraySequencia = (a, b)=>{
            let testeSequencia = a-b;
            if(testeSequencia < 0 ){
              arrayBolean2.push(true) ;
            } else{
              arrayBolean2.push(false);
            };
            return arrayBolean2;
        };
        if(contador===subArray.length) { break };
        arraySequencia(subArray[ind],subArray[contador]);  
    };
    const teste1 = arrayBolean1.every(elem=>elem === true);
    const teste2 = arrayBolean2.every(elem=>elem === true);
    console.log('teste esta contido:', teste1);
    console.log('teste esta em sequência:',teste2);
    const subsequencia = [teste1, teste2];
    return subsequencia.every(elem=>elem===true); 
}
const array1 = [1,3,4,6,8,9];
const array2 = [1,3,4];
const subArray = pegarSequencia(array1,array2);
console.log('resultado: ',subArray);
