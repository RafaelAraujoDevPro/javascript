const data = [
    {nome:"Matheus", idade: 31, salario:2000, habilitação: true},
    {nome:"João", idade: 18, salario:1500, habilitação: false},
    {nome:"Mariana", idade: 22, salario:4000, habilitação: true},
    {nome:"Pedro", idade: 50, salario:7200, habilitação: true},
    {nome:"Érica", idade: 16, salario:0, habilitação: false},
];

console.log(typeof data[0]['salario']);
// Reverse
// const reverseData = data.reverse();
//console.log(reverseData);

/// método map()

let valoresNum = [3,6,4,7,8,9,34,]

function valoresQuad(elemento){
    return elemento ** 2
}
const numMultiplo1 = valoresNum.map(valoresQuad);
console.log(numMultiplo1);


const numMultiplo2 = valoresNum.map((elem)=>{
    return elem ** 2;
});
console.log(numMultiplo2);


const numMultiplo3 = valoresNum.map(num => num ** 2);
console.log(numMultiplo3);


//(0 °C × 9/5) + 32 = 32 °F formula para converter temperatura Cº em Fº

let tempCelsius = [0,22,34,50,40,15,100];
let fahrenheit = tempCelsius.map((cº)=>{
    return (cº * 9/5) + 32
})
console.log(fahrenheit);

let arr = tempCelsius.map(function(elem, indice,array){
    return console.log(`Este é o elemento ${elem}, este é o ${indice} e este é o ${array}`),
    elem * 2;
    
})
console.log(arr);
function funcDeOrdemMaior(callBack){/*Esta função só pode receber outra 
função como parâmetro, pois seu parâmetro referencia uma função 
declarada no seu escopo.*/
    callBack();
    console.log(`Esta é uma função de ordem maior!`);
}


funcDeOrdemMaior(function meuCallBack(){
    console.log(`Esta é uma função de callBack!`);
});


///filter()


const numRepetidos = [2,5,2,6,8,5,3,6,3,8,7,9,10,8];

const numUnico = numRepetidos.filter(function(element,index,array){
                    return array.indexOf(element) === index;
})


console.log(numUnico);

// const semHblt = data.filter((item)=>{
//     return item.habilitação === false;
// })
// console.log(semHblt);
// const comHblt = data.filter((item) => (item.habilitação===true));
// console.log(comHblt);


const folhaSalrial = data.reduce((total, item) => {
    return total + item.salario;
}, 0);

console.log(folhaSalrial);