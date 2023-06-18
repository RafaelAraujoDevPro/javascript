//Quando o usuário clickar no botão "buscar preço":
//Obter o valor da opção selecionada, da tag "select", pelo usuário;
//Mostrar na tela o um parágrafo com texto informando o preço da fruta selecionada;


//Selecionar o elemento 'button';
var btnMostrarPreco = document.getElementById('btnMostrarPreco');
console.log(btnMostrarPreco);
//criar uma funçao para o elemento 'button' que será chamado com um evento de "click"
btnMostrarPreco.addEventListener('click', function(evento) {
    evento.preventDefault();
//Obter a lista contida no elemento select;
    let listaFrutas = document.getElementById('whatFruit');
    console.log(listaFrutas);
//obter o indice dos objetos da lista
    let indice = listaFrutas.selectedIndex;
    console.log(indice);
//obter o valor da 'option' da tag 'select';
    let valores = listaFrutas.value;
    console.log(valores);
//obter o conteúdo (texto) da tag 'option'
    let texto = listaFrutas.options[indice].textContent;
    console.log(texto);
//obter a 'div' onde será adicionado um parágrafo;
    let saidaPreco = document.getElementById('saidaDePreco');

/* Formar uma estrutura com várias opções de texto que informa o preço de cada fruta. A informação de preço que será exibida deve ser referente a fruta selecionada pelo usuário.
*/
    switch (valores) {
        case "mat-01":
            saidaPreco.innerHTML+=`<p>Laranjas custam US$ 0,59 o quilo.</p>`;
        break
        case "mat-02":
            saidaPreco.innerHTML+=`<p>Maçãs custam US$ 0,32 o quilo.</p>`;
        break
        case "mat-03":
            saidaPreco.innerHTML+=`<p>Bananas custam US$ 0,48 o quilo.</p>`;
        break
        case "mat-04":
            saidaPreco.innerHTML+=`<p>Cerejas custam US$ 3,00 o quilo.</p>`;
        break
        case "mat-05":
            saidaPreco.innerHTML+=`<p>Mamão custa US$ 0,32 o quilo.</p>`;
            break
        case "mat-06":
            saidaPreco.innerHTML+=`<p>Mangas custam US$ 2,79 o quilo.</p>`;
        break
        default:
            saidaPreco.innerHTML+=`Desculpe estamos sem ${texto}</p>`;
            
     }

})