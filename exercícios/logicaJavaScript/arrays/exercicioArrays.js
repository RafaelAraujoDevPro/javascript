// const data = require('./reduce');
// console.log(data.developer);
// // Contar a quantidade de devs da lista de array através do genero de sexo.

let arrayLiteral = [4,7,2,8,];
console.log(arrayLiteral);

const arrayConstructorInstance= new Array (5,9,59,58);
console.log(arrayConstructorInstance);

const arrayConstructorCall = Array(65,76,87,98);
console.log(arrayConstructorCall);

const arrayFrom = Array.from(arrayLiteral);
console.log(arrayFrom);

const arraySpread = [...arrayLiteral, ...arrayConstructorInstance,...arrayConstructorCall];
console.log(arraySpread);

// Inserção e remoção de elementos de array

let arrNum = [10];
arrNum.push(20);// '.push()' Acrescenta novos elementos ao final de uma matriz e retorna o novo comprimento da matriz.
console.log(arrNum);

arrNum.unshift(5);// '.unshift()' Insere novos elementos no início de uma matriz e retorna o novo comprimento da matriz.
console.log(arrNum);

const arrUnshift = [4,6,7,3];
arrUnshift.unshift('primeiro',true,10);
console.log(arrUnshift);

arrUnshift.splice(0,3);

arrUnshift.unshift('primeiro');
arrUnshift.unshift('true');
arrUnshift.unshift(10);
console.log(arrUnshift);

arrUnshift.splice(0,3);

arrUnshift.unshift({name:'Rafael'},['age','address']);
console.log(arrUnshift);


let user1 = ['name', 'age', 'gender', 'address', 'id'];
const userName = user1.shift();
console.log(user1);
console.log(userName);

arrNum.shift();/*
                'shift()' Remove o primeiro elemento de uma matriz e o retorna. Se o array estiver vazio, retorna indefinido e o array não é modificado.
                */
console.log('Exemplo do método shift(): ',arrNum);

arrNum.pop();/* 
                'pop()' Remove o último elemento de uma matriz e o retorna. Se o array estiver vazio, retorna indefinido e o array não é modificado.
            */
console.log(arrNum);

//Remover elementos em qualquer ponto do array.

let arrayDeNum = [7,4,7,2,5,8];

const returnSplice = arrayDeNum.splice(2,Infinity,'splice');/*
                        Primeiro parâmetro:
                        Localiza um elemento apartir de zero na posição de índice da matriz, na qual irá começar a remover elementos.
                        Segundo parâmetro:
                        indica quantos elementos serão excuidos apartir do indice escolhido no primeiro parâmetro.
                       */
console.log(arrayDeNum);
console.log(returnSplice);
const myFish =  [ "anjo" ,  "palhaço" ,  "mandarim" ,  "esturjão" ] ; 
const arraySplice = myFish.splice(2, undefined, 'tambor');

console.log(myFish);
console.log(arraySplice);


arrayDeNum.fill(10,3,4);/*
                        '.fill()' Primeiro parâmetro:
                        declara o valor que vai ser inserido na matriz
                        Segundo parâmetro: 
                        Declara a posição apartir de '0', onde irá começar a prencher o array com o valor do primeiro parâmetro.
                        Terceiro parâmetro:
                        Declara a posição  em que encerra o prenchimento com o valor do primeiro parâmetro, apartir da posição declarada no segundo parâmetro
                        */
let arrayNumbers = [3,64,75,1,6];
console.log(arrayNumbers);
const arrayFill = arrayNumbers.fill('elemFill',2,8);
const arrayVasio = Array(7);
const arrayPago = arrayVasio.fill('Salário',0).splice(3,2,'pago','pago');
console.log(arrayVasio);
console.log(arrayPago);
console.log(arrayFill);
console.log(arrayFill.length);
console.log(arrayDeNum);

const subarray = arrayDeNum.slice(2,5);/*
                    '.slice()' Retorna uma cópia de uma seção de uma matriz. Para início e fim, um índice negativo pode ser usado para indicar um deslocamento do final da matriz. Por exemplo, -2 refere-se ao penúltimo elemento da matriz.
                    Primeiro parâmetro:
                    Indica o índice inicial da parte especificada da matriz que será copiada. Se o início for indefinido, a fatia começará no índice 0.
                    Segundo parâmetro:
                    Indica o índice final da parte especificada da matriz que será copiada. Isso é exclusivo do elemento no índice 'end'. Se end for indefinido, a fatia se estenderá até o final da matriz.

                    */
console.log(subarray);

arrayDeNum.sort((a,b)=>a-b);/*
                            '.sort()' é uma Função usada para determinar a ordem dos elementos que pode ser crescente ou decrescente dependendo da função de callback passada para ela. 
                            * Se callback a-b for negativo: a ordem deve ser crescente, caso contrário os elementos mudam de posição para seguir a ordem crescente. 
                            * Se a callback b-a for negativo: a ordem será decrescente, caso contrário os elementos mudam de posição para seguir a ordem decrescente. No caso de qualquer uma das opções de callback retornar 0 , os elementos permaneceram na mesma posição no array.
                            */
console.log(arrayDeNum);

const arrayFiltrado = arraySpread
                        .filter((num)=>num<10)
                        .map((elem)=>elem*2)
                        .reduce((acc,eleme)=>acc+eleme);
console
    .log(arrayFiltrado)
        

const somarElementosArray = (...numAleatorio) => {// O '...rest parâmetro' quando declarado para uma função vai armazenar o valor recebido em uma matriz array. 
    return numAleatorio
    .reduce((num,numAtual)=>{
            return num+numAtual;
    },0)
}
const valorSomado = somarElementosArray(...arrayDeNum);
console.log(valorSomado);

//======================================
//  Closures

function func(secret){
return ({getSecret(){
        return secret;
        }});
};
const privateUserData = 'Dado privado';
const obj = func(privateUserData);

console.log(obj);
console.log(obj.getSecret());
