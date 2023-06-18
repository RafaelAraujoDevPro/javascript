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