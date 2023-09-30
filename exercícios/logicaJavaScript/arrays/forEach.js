const numbers= [2,65,78,2,1,87,34,54,75];

 for(let index=0; index<numbers.length; index++){
    numbers[index] += 10;

 };
 console.log(numbers);

 /* O loop for(...in...) pode ser usado para manipular a posição e o valor de elementos em um array ou objeto. A variavel dentro do for(...in...) referencia o indice dos elementos do array.*/
for(let ind in numbers){
    numbers[ind] += 10;
    console.log(ind);
};
console.log(numbers.sort((a,b)=> a-b));

/*O loop for(...of...)  é útilizado para termos acesso a somente os valores dos elementos de array. Com ele não temos acesso ao indice de posição de elementos em arrays*/
for(let value of numbers){
    console.log(value * 2);
    console.log(value);

};
console.log(numbers);

/*O método forEach() é um tipo de loop com uma sintaxe mais elegante e so funciona com arrays.*/
numbers.forEach(function(item,index,vetor){
   const valorAteSetenta = item<70;
   if(valorAteSetenta){
    item += 5;
   }
   vetor.sort((a,b)=>a-b);
    console.log(index, item);
});
console.log(numbers);