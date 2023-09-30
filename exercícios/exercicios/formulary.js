/*Este arquivo terá a finalidade de criar uma função para obter os dados digitados no formulário e depois adicionar esses dados em novas linhas da tabela de notas. */

//Obter o elemento 'button' Salvar
//Obter o campo de digitação do 'input' referente ao nome de aluno;
//Obter o compo de digitação do 'input' referente a nota de trabalho;
//Obter o compo de digitação do 'input' referente a nota de prova;
//Adicionar para o elemento 'button' um evento de 'click' para chamar uma função
//A função deverá pegar os dados digitados nos campos dos  'input´s'
//Obter referência do corpo da tabela: 'tbody'
// Criar elemento 'tr'
//Criar 4 elementos 'td' 
//Adicionar dados em cada elemento 'td' que viram dos 3 'input´s já obtidos e mais um dado de valor '0'
//Colocar as 'td' dentro do elemento 'tr'
//Colocar a 'tr' dentro do element 'table'
//Fazer APAGAR o conteúdo dos 'input´s' depois que apertar o botão "salvar"

var btnSalvar = document.querySelector('#btnId');//Botão "Salvar"
var formNome =document.querySelector("#textNomeId");//input que recebe nome
var formTrabalho = document.querySelector("#notaTrabalhoId");//input que recebe nota de trabalho
var formProva = document.querySelector("#notaProvaId");//input que recebe nota da prova

btnSalvar.addEventListener("click", function(event) {
         event.preventDefault();
         let novoNotaNome = formNome.value;//valor do input
         let novoNotaTrab = Number(formTrabalho.value);
         let novoNotaProv = Number(formProva.value);
         let celMedia = Number((novoNotaTrab+novoNotaProv)/2)  
         
     //Obter referência de do corpo da tabela: 'tbody'

         var tabela = document.querySelector('.l_table').querySelector('tbody');


     // Criar elemento 'tr'
         var novaLinha = document.createElement('tr');       
              
     //Criar elementos 'td'
         var novaCelulaNome = document.createElement('td');
         var novaCelulaTrab = document.createElement('td');
         var novaCelulaProv = document.createElement('td');
         var novaCelulaMedia = document.createElement('td');/*O metodo da class 'document' createElement() tem a funcionalidade de criar um elemento HTML através do javaScript, porém este método apenas cria o elemento mas não o faz ser exibido no documento HTML, para isso podemos usar outro método chamado "appendChild()".*/

     //Adicionar conteúdo em cada elemento 'td'
         novaCelulaNome.textContent = novoNotaNome;
         novaCelulaTrab.textContent = novoNotaTrab;
         novaCelulaProv.textContent = novoNotaProv;
         novaCelulaMedia.textContent = celMedia;

     //Colocar as 'td' dentro da 'tr'
         novaLinha.appendChild(novaCelulaNome);
         novaLinha.appendChild(novaCelulaTrab);
         novaLinha.appendChild(novaCelulaProv);
         novaLinha.appendChild(novaCelulaMedia);/*O método "appendChild()" tem a funcionalidade de inserir um novo elemento que foi criado pelo método "createElement()" para ser exibido no documento HTML*/

     //Colocar a 'tr' dentro da 'table'
         tabela.appendChild(novaLinha);

      //Calcular a média dos valore recebidos dos input´s de nota de trabalho e nota de prova

      novaCelulaNome.classList.add('td_nome');
      novaLinha.classList.add("t_aluno"); /*Para adicionar uma class CSS em um elemento usando o atributo "classList" devemos declarar apenas o nome da class sem o "." antes dele. */

      /*Esta função adiciona o conteúdo: "Valor inválido", para as células da nova "tr". E também deve sobreescrever as condições anteriores as quais de onde ela (função) foi chamada para mudar a cor de texto das células para cinza. */
      function invalido() {
         if((novoNotaTrab<0)||(novoNotaTrab>10)||
            (novoNotaProv<0)||(novoNotaProv>10)||
            (celMedia<0)||(celMedia>10))
         { 
            novaCelulaTrab.innerHTML = "Valor inválido" ;
            novaCelulaProv.innerHTML = "Valor inválido" ;
            novaCelulaMedia.innerHTML = "Valor inválido" ;
            novaLinha.style.color = '#aaa';
         } 
      }

      //*Condição para estilizar a célula de nota "média"

      //Se a "nota média" tiver valor de 7 até 10, então;
      // "Se true", adicionar condição: #("se as notas de trabalho ou nota de prova forem entre 0 até 10"), então;
      // "Se true",  executar o comando da condição. 
      //Repetir a condição #() sempre que a condição anterior for "true".
      if((celMedia>=7) && (celMedia<=10)) {
        
         if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&& // #()
            (novoNotaProv>=0)&&(novoNotaProv<=10)) 
         {
            novaCelulaMedia.style.color = 'blue';
         }       
      } else if((celMedia>=4) && (celMedia<7)) {
               if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&& // #()
                  (novoNotaProv>=0)&&(novoNotaProv<=10)) 
               {
                  novaCelulaNome.innerHTML += `(<span>Recuperação!</span>)`;
                  novaCelulaMedia.style.color = 'orange';
                  novaCelulaNome.style.color = 'orange';
               }              
      } else if((celMedia>=0) && (celMedia<4)) {
               if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&& // #()
                  (novoNotaProv>=0)&&(novoNotaProv<=10)) 
               {
                  novaCelulaNome.innerHTML += `(<span>Reprovado!</span>)`;
                  novaCelulaMedia.style.color = 'red';
                  novaCelulaNome.style.color = 'red';
               }       
      } else {
         invalido();
         
      }

      //Condição para estilizar a célula de nota de "trabalho"

      //Se a "nota de trabalho" tiver valor de 7 até 10, então;
      // "Se true", adicionar condição: #("se as notas de trabalho ou nota de prova forem entre 0 até 10"), então;
      // "Se true",  executar o comando da condição. 
      //Repetir a condição #() sempre que a condição anterior for "true".
      if((novoNotaTrab>=7)&&(novoNotaTrab<=10)) 
      {
         if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&&// #()
            (novoNotaProv>=0)&&(novoNotaProv<=10)) 
         {
            novaCelulaTrab.style.color = 'blue';
         }
      } else if((novoNotaTrab>=4)&&(novoNotaTrab<7)) 
      {
               if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&&// #()
                  (novoNotaProv>=0)&&(novoNotaProv<=10)) 
               {
                  novaCelulaTrab.style.color = 'orange';
               }
      } else if((novoNotaTrab>=0)&&(novoNotaTrab<4)) 
      {
               if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&& // #()
                  (novoNotaProv>=0)&&(novoNotaProv<=10)) 
               {
                  novaCelulaTrab.style.color = 'red';
               }
      } else {
         invalido()
      }

      //Condição para estilizar a célula de nota de "prova"

      //Se a "nota de prova" tiver valor de 7 até 10, então;
      // "Se true", adicionar condição: #("se as notas de trabalho ou nota de prova forem entre 0 até 10"), então;
      // "Se true",  executar o comando da condição. 
      //Repetir a condição #() sempre que a condição anterior for "true".
      if((novoNotaProv>=7)&&(novoNotaProv<=10)) 
      {
         if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&& // #()
            (novoNotaProv>=0)&&(novoNotaProv<=10)) 
         {
            novaCelulaProv.style.color = 'blue';
         }
      } else if((novoNotaProv>=4)&&(novoNotaProv<7)) 
      {
               if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&&// #()
                  (novoNotaProv>=0)&&(novoNotaProv<=10)) 
               {
                  novaCelulaProv.style.color = 'orange';
               }
      } else if((novoNotaProv>=0)&&(novoNotaProv<4)) 
      {
               if((novoNotaTrab>=0)&&(novoNotaTrab<=10)&& // #()
                  (novoNotaProv>=0)&&(novoNotaProv<=10)) 
               {
                  novaCelulaProv.style.color = 'red';
               }        
      } else {
         invalido()
            // novaCelulaTrab.innerHTML = "Valor inválido";
            // novaCelulaProv.innerHTML = "Valor inválido";
            // novaCelulaMedia.innerHTML = "Valor inválido"
      }


      //Fazer APAGAR o conteúdo do '''input''' depois que apertar o botão "salvar"
      formNome.value= '';
      formNome.focus();
      formTrabalho.value = '';
      formTrabalho.focus();
      formProva.value = '';
      formProva.focus();
   })

