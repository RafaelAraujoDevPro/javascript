

//Obter o elemento 'button' Salvar
//Obter o campo de digitação do 'input' referente ao nome de aluno;
//Obter o compo de digitação do 'input' referente a nota de trabalho;
//Obter o compo de digitação do 'input' referente a nota de prova;

// function criarNovoAluno() { 
//     const novoAluno = {
//         nome: document.querySelector('#textNomeId').value,
//         trabalho: document.querySelector('#notaTrabalhoId').value, 
//         prova: document.querySelector('#notaProvaId').value, 
//         mediaNovoAluno(){
//             const media = (Number(this.trabalho) + Number(this.prova)) / 2;
//             return media;
//         }
//     };
//     return [novoAluno.nome,novoAluno.trabalho,novoAluno.prova,novoAluno.mediaNovoAluno()];
//};

function apagarTextoInputs(){
    const arrayDeInpus = [
        document.querySelector('#textNomeId'),
        document.querySelector('#notaTrabalhoId'),
        document.querySelector('#notaProvaId'),
    ];
    const [nome,trabalho,prova] = arrayDeInpus;
    [nome,trabalho,prova].forEach(elem => {
        elem.value = '';
        elem.focus()
    });
};


// ======================= Função principal ====================

// função que adiciona dados de um novo aluno para a tabela.

function addNovaoAluno() {
    const botao = document.querySelector('#btnId')
    const corpoTabela = document.querySelector('#corpoTabela');

    botao.addEventListener('click',(event)=>{
        event.preventDefault();

        //função que seleciona e retorna os elemento inputs e calculo da media
        function pegarElementosInputs(){
            const arrayDeInputs = [
                document.querySelector('#textNomeId'),
                document.querySelector('#notaTrabalhoId'),
                document.querySelector('#notaProvaId'),
                function(){
                    return (Number(arrayDeInputs[1].value) + 
                            Number(arrayDeInputs[2].value)) / 2;
                }
            ];
            return arrayDeInputs;
        };
        const [nome,trabl,prova,media] = pegarElementosInputs()
        
        
        //Função que cria uma nova tr com 4 tds contendo os valres dos inputs.
        function criarNovaLinhaTabela([nome,trabl,prova,media]){
            const linhaTabela = document.createElement('tr');

            [nome.value, trabl.value, prova.value, media()].forEach((elem, ind) => {
            const td = document.createElement('td');
                td.innerHTML = elem

                //função que atribue as classes CSS nas tds correspondentes.
                function addClass(dado){
                    const classes = ['td_nome','td_trabalho','td_prova','td_media'];    
                    return classes[dado];
                };
                td.classList.add(addClass(ind));
                linhaTabela.appendChild(td);
            });
            linhaTabela.classList.add('t_aluno');
            return linhaTabela
            
        };


        const linhaTabelaCriada=criarNovaLinhaTabela(pegarElementosInputs());
        const rotulosNotas = [
            document.querySelector('#rotulo_nome'),
            document.querySelector('#rotulo_trablho'),
            document.querySelector('#rotulo_prova'),
        ];
        const valorDosInputs = [nome.value,trabl.value,prova.value,media()]
        const copiaDasNotas = valorDosInputs.slice(0,3);


        //Função que valída os dados digitados nos inputs
        function validarNota(nota){
            const testeRotulos =
                nota.slice(1,4).every((elem) => elem>=0 && elem<=10);
            const inputNaoVazio = copiaDasNotas.every(elem => elem !== '');
            console.log(inputNaoVazio);
            console.log(copiaDasNotas);

            function impimirLinha(){
                return corpoTabela.appendChild(linhaTabelaCriada);
            };

            if(testeRotulos === true) {
                if(inputNaoVazio){
                    impimirLinha();
                    apagarTextoInputs();
                };
            };


            // copiaDasNotas.forEach((elem,ind) => {
            //     const elemVazio = elem === '';
            //     console.log(elemVazio)
            //         if(elemVazio){
            //             const stringsDigiteUmValor = [
            //                 'Digite o nome do aluno!',
            //                 'Digite a nota do trabalho',
            //                 'Digite a nota da prova',
            //             ]
            //         rotulosNotas[ind].innerHTML = 
            //         `<span style= 'color: red'> ${stringsDigiteUmValor[ind]} </span>`;
            //     } else {
            //         const stringsOriginais = [
            //             'Nome do aluno:',
            //             'Nota do trabalho:',
            //             'Nota da prova:'
            //         ]
            //         rotulosNotas[ind].innerHTML = `${stringsOriginais[ind]}`
            //     }
            // });


        }; 


                // Função que alerta que o Número digitado está errado
        const rotuloTrabProva = rotulosNotas.slice(1,3);

        function alertarNumeroErrado(nota){
            const trabalhoProva= nota.slice(1,3);
            console.log(trabalhoProva);
            console.log(rotuloTrabProva);
            trabalhoProva.forEach((elem, ind) => {
                const numeroincorreto = elem<0 || elem>10 && elem!=='';
                console.log(numeroincorreto)
                const alertasDeInputs = {
                    'true': "<span style='color: red'> valor inválido, digite um número entre 0 até 10</span>",

                    'false': ['Nota do trabalho:','Nota da prova:'],
                    alertarErro(bolean){
                        return rotuloTrabProva[ind].innerHTML = bolean === true? alertasDeInputs[bolean] : alertasDeInputs[bolean][ind];
                    }
                };
                alertasDeInputs.alertarErro(numeroincorreto);
            });
        };

        
                // função que alerta que o input está vazío

        function alertarInputVazio(arrayNotas){
             arrayNotas.forEach((elem, ind) => {
                const elemVazio = elem === '';  
                const stringAlerta = {
                    'true': [
                        'Digite o nome do aluno!',
                        'Digite a nota do trabalho',
                        'Digite a nota da prova',
                    ],
                    'false': [
                        'Nome do aluno:',
                        'Nota do trabalho:',
                        'Nota da prova:'
                    ],
                    impimirString(bolean){ 
                        console.log(bolean === true)
                        rotulosNotas[ind].innerHTML = bolean === true ? `<span style= 'color: red'> ${stringAlerta[bolean][ind]} </span>` : `${stringAlerta[bolean][ind]}`;
                    }
                };
                console.log(elemVazio)
                stringAlerta.impimirString(elemVazio)
            })
        };

        copiaDasNotas.includes('') ? alertarInputVazio(copiaDasNotas): alertarNumeroErrado(valorDosInputs);
        
        console.log('Elementos adicionados: ',corpoTabela);
        const tdMediaCriado = linhaTabelaCriada.querySelector('.td_media');
        console.log(linhaTabelaCriada)


        // função que classifica o aluno de : aprovado, recuperação ou reprovado.

        function classificarNovoAluno(nota){
            const testeLogico = {
                    aprovado: nota >= 7 && nota <=10,
                    recuperar: nota >= 4 && nota < 7,
                    reprovado: nota >= 0 && nota < 4
            };

            if(testeLogico.aprovado){
                    tdMediaCriado.style.color = '#0000ff';
            };
            if(testeLogico.recuperar) {
                    tdMediaCriado.style.color = '#ffa500'
            };
            if(testeLogico.reprovado){
                    tdMediaCriado.style.color = '#f80000'
            };
        };
        
        classificarNovoAluno(media());
        validarNota(valorDosInputs );
        
    });


    // função que calcula a média de todos os alunos da tabela
    
    function calcularMedia(){
        const dadosDeTabela = {
            nome: Array.from(corpoTabela.querySelectorAll('.td_nome')),
            notaDeTrabalho: Array.from(corpoTabela.querySelectorAll('.td_trabalho')),
            notaDeProva: Array.from(corpoTabela.querySelectorAll('.td_prova')),
            notaMedia: Array.from( corpoTabela.querySelectorAll('.td_media')),

            pegarMedia(){
                let notaTrabalho = 
                        this.notaDeTrabalho.map(nota=>Number(nota.innerHTML)),
                    notaProva =
                        this.notaDeProva.map(nota=>Number(nota.innerHTML)),
                    media = 
                        this.notaMedia.map(nota=>Number(nota.innerHTML))

                for(let ind=0; ind<this.nome.length; ind++){
                    media[ind] = ((notaTrabalho[ind]+notaProva[ind])/2 )
                }
                return media;
            },

            set mudarMedia(nota){
                for(let ind=0; ind<nota.length; ind++){
                    this.notaMedia[ind].innerHTML = nota[ind];
                };
            }
        };
        return dadosDeTabela
    };
    const tabela = calcularMedia();

    
    tabela.mudarMedia = tabela.pegarMedia()

    let {notaMedia} = tabela;
    console.log('calcular a média: ', notaMedia);

    //criar função que percorra o array de notas médias e estilazar cada nota de acordo com sua classificação:

    //Aprovado : nota igual ou acima de 7 e menor ou igual que 10; estilizar fonte com cor azul;

    //Recuperação : nota igual ou maior que 4 e menor que 7; estilizar fonte com cor laranja.

    //Reprovado: nota igual ou maior que 0 e menor que 4; estilizar fonte com cor vermelha

    // Passo a passo:

    // A função não precisa retornar valor mais sim efetuar efeito colateral no innerHTML dos elementos tds da tabela.


    function classificarAluno(notas){
       notaMedia.forEach((elem, ind) => { 
            const testeLogico = {
                aprovado: notas[ind].innerHTML >= 7 && notas[ind].innerHTML <=10,
                recuperar: notas[ind].innerHTML >= 4 && notas[ind].innerHTML < 7,
                reprovado: notas[ind].innerHTML >= 0 && notas[ind].innerHTML < 4
            };

            if(testeLogico.aprovado){
                elem.style.color = '#0000ff';
            };
            if(testeLogico.recuperar) {
                elem.style.color = '#ffa500'
            };
            if(testeLogico.reprovado){
                elem.style.color = '#f80000'
            };
        });
    };
    classificarAluno(notaMedia); 

    return corpoTabela;
};

addNovaoAluno()

