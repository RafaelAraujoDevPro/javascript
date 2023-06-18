let arr = [10,20,30,40,50]; //coleção de arrays

for (n in arr){
    console.log(n);
}
for (let n=0; n<arr.length; n++) {//length se refere ao comprimento do índice da array.
    console.log(arr[n]);
    console.log("Repetindo for: " + n);
}
            //  key  -  value   key  - value
const pessoa = {nome: "Rafael", idade:  32 } //array

/*for in define de maneira mais simples sobre o que o loop vai iterar,
 sobre o que ele vai buscar a informação */

    //key-value       
for (let key in pessoa){
    console.log(key, pessoa.nome);
    console.log(key, pessoa.idade);
    console.log(key, pessoa[key]);
}
const cores = ['azul','amarelo','verde'] //array
/*todas as propriedades da array serão acessadas pelo indice de cada uma
 delas, exemplo: 0, 1, 2 .*/
/*para ter acesso as propriedades em si da array devemos delara da seguinte forma: (indice, cores[indice]) */
for (let indice in cores) {
    console.log(indice, cores[indice]);
}

/* for of define a iteração sobre os elemetos da array diretamente
 sem considerar o indice deles. */
for (cor of cores) {
    console.log(cor);
}

