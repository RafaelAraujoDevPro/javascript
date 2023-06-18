let num = 100;
let clima = "sol";
let energia = 100;
if (num > 10) {
    console.log("Numeral maior que 10!");/*Quando o if tem apenas um comando não é necessário colocar {}chaves. É obrigatório quando tem dois ou mais comandos*/ if (num > 50){
        console.log("Numeral maiot que 50!")
    }
}else if(num > 5) {
    console.log("Numeral está entre 6 e 10!")
 } else {
    console.log("Numeral menor ou igual a 5!")
}

 console.log("Fim do programa!")
 //===========================
 //velocidade do carro
 //Exibir na tela a velocidade do carro;
 //Exibir na tela a que ultrapassou o limite de velocidade 60km/h, tomou uma múlta;
 //Exibir na tela a advertencia;

 var vel = 50; 
 console.log(`A velocidade do seu carro era de ${vel}km/h.`) 
 if(vel>60){
    console.log(`Você últrapassou o limite de velocidade de 60km/h. MULTADO!`)
 }
 console.log(`Dirija no limite de velocidade e sempre use cinto de segurança!"`) 

 //=======================================

 //Se a nota for maior ou igual a 7: é aprovado!
 //Se a nota for menor que 7 e maior ou igual a 4: está de recuperação
 //Se a nota for menor que 4: é reprovado!

 let nota = 5;
 if(nota >= 7){
    console.log(`Sua nota foi ${nota}, portanto APROVADO!`);
 } else if((nota < 7) && (nota >= 4)){
    console.log(`Sua nota foi ${nota}, ainda tem chance, RECUPERAÇÃO!`);
 } else {
    console.log(`Sua nota fot ${nota}, sinto muito, foi REPROVADO!`);
 }
 
 //++===================================

 //Nome de pais
 //Se o nome do país for 'Brasil': mostrar que é brasileiro;
 // Se não for: mostrar que é estrangeiro;

 var pais = 'Brasil'
if(pais == 'Brasil'){
    console.log(`Seu país de origem é o ${pais}, então você é BRASILEIRO!`)
} else {
    console.log(`Seu país de origem é o ${pais}, você não é daqui, é um ESTRANGEIRO!`)
}