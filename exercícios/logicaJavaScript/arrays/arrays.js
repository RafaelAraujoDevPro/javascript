// const data = require('./reduce');
// // console.log(data.developer);

let arr = [10, 30, 15, 50, 90];
// arr[5] = 75
//arr.push(20)
arr.length // length: é um atributo
//arr.sort()
console.log( `Nosso vetor é : ${arr}`);
console.log(`buscar posição do valor 15: ${arr.indexOf(15)}`)
console.log(`O valor que está na posição 3 é: ${arr[3]}`);
console.log(`adicionar valor ${arr[5] = 75} na posição 5: ${arr}`);
arr.push(20)
console.log(`Adicionar valor 20 na última posição: ${arr}`);
console.log(`Este vetor tem comprimento de: ${arr.length} posições!`);
console.log(`Todos os elementos posicionados em ordem crescente: ${arr.sort()}`);
console.log(`Agora vamos dissertar cada valor em cada posição`);
console.log(`maneira tradicional`)
// percurso para exibição de vetores tradicionais
for(pos = 0; pos < arr.length; pos++) {
    console.log(`O valor ${arr[pos]} está na posição ${pos}`)
}
console.log(`maneira moderna ecmaScript!`)
// mesmo percuso simplificado de exibição de vetores
for(let pos in arr) {
    console.log(`O valor ${arr[pos]} está na posição ${pos}`)
}

//Exercício com arrays

function somarArray(arrNumeros){
    let arrInicial = 0;
    for(let ind=0; ind<arrNumeros.length; ind++){
        arrInicial= arrInicial + arrNumeros[ind];//Esta expressão representa um iterado que se acumula na variável. previewValue
   }
   return arrInicial
}

const resultado= somarArray(arr);
console.log(resultado);
 
let arr1 = [3,6,7,1,17,36,26,63,91,10];
console.log(somarArray(arr1));


let arrayBidimencional = new Array(4);
for(let indElem=0; indElem<4; ++indElem){
    arrayBidimencional[indElem]=new Array(4);
    for(let indValue=0; indValue<4; indValue++){
    arrayBidimencional[indElem][indValue] = '['+indElem+','+indValue+']';
        
    }
}
console.log(arrayBidimencional);

//=================================

function addElementToArray(arrayList,...element){
    arrayList.push(...element);
    return arrayList;
}
console.log(addElementToArray(arr1,...arr));

let arrKeysUser = ['name', 'age', 'andress'];
let arrKeysUserId = arrKeysUser.push('id');
console.log(arrKeysUser); 
console.log(arrKeysUserId);

let moreKeysUsers = ['last-name', 'gender', 'profession'];

Array.prototype.push.apply(arrKeysUser, moreKeysUsers);
console.log(arrKeysUser);

//=========================

let objectPush = {
    length: 0,
    addElement: function(element){
        /* 
        objectPush.length é automaticamente incrementado
        toda vez que um elemento for adicionado. 
        */
        [].push.call(this, element);
    }
}

objectPush.addElement('mamifero');
objectPush.addElement('especie');
console.log(objectPush);
console.log(objectPush.length);

//=============================

const cidades = ['Salvador', 'Curitiba', 'Fortaleza', 'Manaus'];
const habitantes = [100, 200, 300,400];
const totalHabitantes = [cidades, habitantes];

let habitantesPorCidades = `Na cidade de ${totalHabitantes[0][0]} tem aproximadamente ${totalHabitantes[1][0]} mil habitantes.`;
console.log(habitantesPorCidades);

let objectCidades = {}
for(let ind=0;ind<4; ind++){
    console.log(`Na cidade de ${totalHabitantes[0][ind]} tem aproximadamente ${totalHabitantes[1][ind]} mil habitantes.`);

    objectCidades[totalHabitantes[0][ind]]=totalHabitantes[1][ind];

}
for(ind in objectCidades){
    console.log(objectCidades[ind]);
}
console.log( objectCidades);
console.log(objectCidades['Manaus']);
console.log(objectCidades['Fortaleza']);


//============================

// Método para transformar uma array de dois array em um objeto literal;

//=============================
function twoArraysOneObject(arrayOfKeysValues){
    let newObject = {}
    for(let ind=0; ind<arrayOfKeysValues[0].length; ind++){
        newObject[arrayOfKeysValues[0][ind]]= arrayOfKeysValues[1][ind];
    }
    return  newObject;
     
};
const objectOfArray= twoArraysOneObject(totalHabitantes);
console.log(objectOfArray);