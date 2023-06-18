


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

