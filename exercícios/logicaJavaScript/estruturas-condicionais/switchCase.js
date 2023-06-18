let podium = 4

switch(podium) {
    case 1: console.log("1º Primeiro lugar");   
        break;
    case 2: console.log("2º Segundo lugar");
        break;
    case 3: console.log("3º Terceito lugar");
        break;
    case 4: case 5: case 6: console.log("Prêmio de participação");    
        break;
    default: console.log("Não subiu ao podium.");
        break;
}

//Exemplo de uso de "break"

const foo= 0;
switch(foo) {
    case -1: 
        console.log("1 negativo")
        break
    case 0: /*O valor de foo corresponde a este critério; a execução
     começa a partir daqui.
        */ 
        console.log("valor 0")/*Pausa esquecida! A execução cai através
         do corpo do switch para a próxima case cláusula*/
    case 1: 
        console.log("valor 1")/*nenhuma instrução break no 'case 0:'
         então este case também será executado */  
        break//'break' encontrado, acaba execução do switch.
    case 2: 
        console.log("valor 2")
        break
    default: 
        console.log("padrão")
        break
}

// Escop Léxico

const ação = "dizer_olá";
switch (ação) {
    case "dizer_olá": {
        const mensagem = "olá";
        console.log(mensagem);
    break;
    }
    case "dizer_oi": {
        const mensagem = "oi";
        console.log(mensagem);
    break;
    }
    default: {
        console.log("Ação vazia recebida.");
    }
}
/*Problema:
 pedir para o usuário digitar um número de 1 a 6. Mostrar na tela uma mensagem diferente para cada número. */

 /*let numUsuário = parseInt(prompt("Digite um número de 1 até 6.")); 

 switch(numUsuário) {
    case 1: window.alert("1º Primeiro lugar");
    break;
    case 2: window.alert("2º Segundo lugar");
    break;
    case 3: window.alert("3º Terceito lugar");
    break;
    case 4: case 5: case 6: window.alert("Prêmio de participação");
    break;
    default: window.alert("Não subiu ao podium.");
    break;
 }*/

 //=============================================================================
 //=============================================================================

//Selecionar a opção de fruta escolhida pelo usuário naa tag select e aplicar no ""switch...case"".

 var frutas = document.querySelector('#whatFruit');/* """querySelector()""" seleciona um elemento do documento HTML chamando através de um atributo contido nele. */
 var btnBuscar = document.querySelector("#btnBuscarPreco");
 console.log(frutas);
 console.log(btnBuscar)

  var indice= frutas.selectedIndex;
  var selectedFruit = frutas.selectedOptions;
  var value = frutas.value;
  var text= frutas.options[indice].text;
  
  console.log(indice);
  console.log(value);
  console.log(text);
frutas.addEventListener('change', function(event) {
    event.preventDefault();
    var value2 = function() {
        return selectedFruit.join('')
        console.log(value2);

    }
       
         switch (value2) {
    case "mat-01":
        console.log("Laranjas custam US$ 0,59 o quilo.");
    break
    case "mat-02":
        console.log("Maçãs custam US$ 0,32 o quilo.");
    break
    case "mat-03":
        console.log("Bananas custam US$ 0,48 o quilo.");
    break
    case "mat-04":
        console.log("Cerejas custam US$ 3,00 o quilo.");
    break
    case "mat-05":
    case "mat-06":
        console.log("Laranjas custam US$ 2,79 o quilo.");
    break
    default:
        console.log(`Desculpe estamos sem ${opicaoSelecionada}`)
 }
})
  //se o usuário clickar em uma option dentro da tag select: salvar essa option em uma variável.
  //evento onchange 
 
//função para o botão enviar dados 
//   btnBuscar.addEventListener("click", function(event) {
//     event.preventDefault();/* """preventDefault()""" previne a ação padrão do browser para o evento de "click" no tag "buttom"*/ 
//   })


  //switch...case de respostas para a opção selecionada pelo usuário.


 console.log("Existe mais alguma coisa que você gostaria?");