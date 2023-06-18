
/*O loop for cria repetição de execução de comando definido.
Sintaxe: for (inicialização; condição; reflexão tardia) {Declaração}*/
console.log("Inicio do programa");

for(let i=0; i<10; i++) {
    console.log("Loop do for definido");
}
for (let n=0; n<10; n++) {
    if(n%2==0){ /*Ou seja, o restante da disão do primeiro valor com o segundo é igual a 0 */
        console.log(n + " é par!")
    } else {
        console.log(n + " é ímpar!")
    }
}
for ( let i=1; i<=5; i++) {
    if (i%2!==0){
        console.log(i);
    }
    
}
/*Enquanto a condição for true o for executará o loop, quando for false ele para. */
console.log("Fim do programa!")

//for básico

var resultA = "";
for(i=1; i<=6; i++) {
    resultA += `Valor da variável i: ${i} <br>`;
}
// console.log(resultA);
var exibir = document.getElementById('listar');
 exibir.innerHTML += `<p>${resultA}</P>`

 /************* loop em array com for *******/

//  var carrinho = array();
// carrinho[0] = ["Curso de PHP denveloper", 350, 1];
// carrinho[1] = ["Curso de node.js", 350, 1];

var tituloH1 = document.querySelector('.titulo');
var tituloText = tituloH1.textContent;
console.log(tituloText);

function mostrarMsg() {
    alert('O título foi clickado!')
}

function mudarCor() {
    tituloH1.style.backgroundColor = 'azure';
    tituloH1.style.marginBottom = '3rem';
   //tituloH1.removeEventListener('click', mostrarMsg);
}
//tituloH1.onclick = mostrarMsg;
tituloH1.addEventListener('click',mostrarMsg);//a chamada da função é declarada sem parâmetros, sem "()"
//tituloH1.addEventListener('click', mudarCor);


var listaAlunos = document.querySelectorAll('.t_aluno');//isso é uma "nodeList" de 'tr'
console.log(listaAlunos);

for(i=0; i<listaAlunos.length; i++){ //i funciona como um contador de indice

    var trAlunos = listaAlunos[i];
    console.log(trAlunos);
    //*****nome do aluno da tabela****

    var tdNome = trAlunos.querySelector('.td_nome');
    /*isso seleciona uma tag "td" que esta dentro de uma tag "tr", da "nodeList"*/
    var textNome = tdNome.textContent;
    console.log(textNome);

    //********* nota de trabalho da tabela ********

    var notaTrabalho = trAlunos.querySelector('.td_trabalho');
    var trabalho = Number(notaTrabalho.textContent);
    //Validar a nota de trabalho da tabela para que apenas seja válido números maior que 0;
    //caso contrário exibir mensagem de valor inválido na tela do usuário
    
    if((trabalho >= 7) && (trabalho <= 10)) {
    notaTrabalho.style.color= "blue";
    } else if((trabalho >= 4) && (trabalho < 7)) {
        notaTrabalho.style.color = "orange";
    } else if((trabalho >= 0) && (trabalho < 4)){
        notaTrabalho.style.color = "red";
    } else {
        notaTrabalho.textContent= "Valor inválido";
    }
    //******** nota de prova da tabela *********

    var notaProva = trAlunos.querySelector('.td_prova');
    var prova = Number(notaProva.textContent);
    
    if((prova >= 7) && (prova <= 10)) {
        notaProva.style.color= "blue";
        } else if((prova >= 4) && (prova < 7)) {
            notaProva.style.color = "orange";
        } else if((prova >= 0) && (prova < 4)){
            notaProva.style.color = "red";
        } else {
            notaProva.textContent= "Valor inválido";
        }
    //********* nota média da tabela **********

    var tdMedia = trAlunos.querySelector('.td_media')
    var mediaAluno = Number((trabalho + prova) / 2);
    tdMedia.textContent= mediaAluno;/*Dessa maneira altera-se o valor do conteúdo que esta la na tag td no document html, através da variável do javaScript*/
    
    if((mediaAluno >= 7) && (mediaAluno <= 10)) {
    tdMedia.style.color= "blue";
    } else if((mediaAluno >= 4) && (mediaAluno < 7)) {
    /* Para estilizar conteúdo do HTML temos que selecionar o elemento conteiner onde está este conteúdo. */
        tdNome.innerHTML += `<span> (Recuperação!)</span>`;
        tdMedia.style.color = "orange"
        tdNome.style.color = "orange"
    } else if((mediaAluno > 0) && (mediaAluno < 4)) {
        tdNome.innerHTML += `<span> (Reprovado!)</span>`; 
        tdNome.style.color = "red"
        tdMedia.style.color = "red"
    } else {
        tdMedia.textContent= "Valor inválido";
    }  
}

