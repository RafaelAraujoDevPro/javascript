
// ======  Atribuição dividida  ======

let a, b, rest;
[a, b, ...rest] = [12, 45, 67, 85, 5, 4];
[a, b, rest].forEach(item => console.log('item: ', item))

console.log('\n=================================\n');

// ======   atribuição básica ======

const colors = ['red', 'green', 'blue', 'black', 'white'];
const [red, green, blue] = colors;

[red, green,blue].forEach(color=>console.log('color: ', color));

console.log('\n=================================\n');

// =====  Valores padrão  ======

let var1, var2;
[var1=10, var2=20,] = [10];
[var1=10, ar2=20,].forEach(item => console.log('variável: ', item));

console.log('\n=================================\n');

// ====== Permutação de variáveis ======

let valorA = 'valor de A';
let valorB = 'valor de B';
[valorB, valorA] = [valorA, valorB];
[valorA,valorB].forEach(valor=>console.log('valor: ',valor));

console.log('\n=================================\n');

// ======= Abreviação de propriedades =======
// shortyhand property name 

let prop1 = 'valor 1',
    prop2 = 'valor 2',
    prop3 = 'valor 3';

let obj = {prop1, prop2,prop3};
for(let valor in obj) console.log(obj[valor]);


console.log('\n=================================\n');

// destructuring desmontando dois valores do retorno de uma função

function getPositionMouse(){
    return {positionX: true, positionY: false}
};

const {positionX,positionY} = getPositionMouse();
[positionX,positionY].forEach(elem => console.log(elem));

/*  No javascript não é possivél que uma função retorn mais de um valor por por vêz. Porém Podemos agrupar vários valores em uma coleção, como em um objeto e fazer a função retornar ele. No exemplo acima temos a função "getPositionMouse()" que retorna um objeto com duas propriedades. Com o destructuring podemos desmontar o retorno da função, (que é o objeto), e reatribuir cada valor para uma variável separada "positionX" e "positionY". 
*/
console.log('\n=================================\n');

// Exibir classificação dos competidores na lista retornada pela função "getWins()". Melhor classificação será para quem tiver o número de score maior
// Resultado esperado:
/*
    Classificação do torneio: 
        1º lugar: Rafael com 98 Pontos
        2º lugar: Jhon com 74 Pontos
        3º lugar: Maria com 60 Pontos
        ... sucessivamente
*/
//criar uma função que receba a lista retornada por "getWins()"
// declarar uma variável temporária que recebe um número 1 incial para contar a posição de cada competidor 
// obter uma lista somente dos scores de cada competidor
// comparar os scores entre os competidores
// ordenar os competidores em lista, onde o score maior será o primeiro da lista e assim sucessivamente.
// retornar uma string `(contador)º lugar: (nome) com (score) Pontos \n ` que exibe a posição de cada competidor da lista.
// na chamada da função no console.log() exibir string `Classificação do torneio: \n`


const getWins = ()=>{
   return [
       { id: 1, nome: 'Tiago', score: 20 },
       { id: 2, nome: 'Pedro', score: 10 },
       { id: 3, nome: 'Maria', score: 60 },
       { id: 4, nome: 'Ana Clara', score: 45},
       { id: 5, nome: 'Jhon', score: 74},
       { id: 6, nome: 'Rafael', score: 98},
    ]
};

const notificationWins = (competitors)=> {
    let counter = 1;
    competitors.sort(({score:a},{score:b})=>b-a);

   return competitors.reduce((str,{nome, score}) => {
      str += `  ${counter++}º lugar: ${nome} com ${score} Pontos\n `
        return str
    },'');
};
console.log('Classificação do torneio: \n',notificationWins(getWins()));

console.log('\n=================================\n');


const user = {
    id: 45,
    displayName: 'jDoe',
    fullName: {
        fistName: 'Jhon',
        lastName: 'Doe'
    }
};

const userId = ({id})=>{
    return id
};

const whoIs = ({displayName: displayName, fullName:{fistName: name}})=> {
    return displayName + ' is ' + name
};

console.log(userId(user));
console.log(whoIs(user));


console.log('\n=================================\n');

// ======= destructuring em objetos aninhados ======

const cidades = {
    'Boa Vista': {
        estado: 'Roraima',
        populacao: '500000'
    },
    Manaus: {
        estado: 'Amazonas',
        populacao: '3000000'
    }
}

function getPopulation({'Boa Vista':{populacao: numBoaVista}, Manaus:{populacao: numManaus}}){
    return `A população de Boa Vista RR é ${numBoaVista} e a de Manaus Am é ${numManaus}`;
};
const populationsCities = getPopulation(cidades);
console.log(populationsCities);