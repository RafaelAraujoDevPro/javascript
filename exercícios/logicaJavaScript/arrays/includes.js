let arrayNumbers = [4,23,5, ,65,6,7,];
const contemNum = arrayNumbers.includes(23,1);
console.log(contemNum);

console.log(3 in arrayNumbers);// indice três está vazio, portanto 'false'
if(3 in arrayNumbers === false){
    arrayNumbers.splice(3,1,'teste');
};
console.log(arrayNumbers);

const arrEsparso = arrayNumbers.includes(undefined);
console.log(arrEsparso);

let dataDevs = [
    {'dev-nome': "Matheus", idade: 31, salario:2000, habilitação: true},
    {'dev-nome': "João", idade: 18, salario:1500, habilitação: false},
    {'dev-nome': "Mariana", idade: 22, salario:4000, habilitação: true},
    {'dev-nome': "Pedro", idade: 50, salario:7200, habilitação: true},
    {'dev-nome': "Érica", idade: 16, salario:0, habilitação: false},
];



const contemDev = dataDevs.filter((elem)=>elem['dev-nome'].includes('Mat'));
console.log(contemDev);

const nomes = ['Rafael', 'João', 'José', 'Maria', 'Rebeca'];
const nomesComR = nomes
                .filter((nome)=>nome
                .includes('R'));
console.log(nomesComR);
const devErica = dataDevs
                .filter((elem)=>elem['dev-nome']
                .includes('Érica'));

const devMatheus = {};
contemDev.forEach((item)=>{
    for( let atbt in item){
        devMatheus[atbt] = item[atbt];
    }
 } )
console.log(devMatheus);



const user1 = {
    id: 1,
    name: 'Rafael',
    hashSenha: 'hashSenha'
};
const keys = ['id','name'];

