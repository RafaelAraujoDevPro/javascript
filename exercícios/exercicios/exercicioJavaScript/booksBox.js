
// let btnAdicionar = document.querySelector('#adicionarLivro');

// btnAdicionar.addEventListener('click',function(evento){
//     evento.preventDefault();
//     console.log('Helo Word!');

// })


//=================== Objeto  ========================

const booksBox = {
spaces: 5,
booksIn:0,
}

//================== Métodos para reúso  ========================

//Este método deve manipular 'strings' para singular ou plural
function pluralOuSingular(quantidade,singular,plural){
    return quantidade === 1 ? singular : plural
}

//Esta função encapsula o que será o retorno para o if(caixaNaoCabe);
function naoVaiCaber(spaceBox,booksIn){
        const avaliarEspaco =  spaceBox - booksIn;
        const livroSingularPlural = pluralOuSingular(avaliarEspaco,'livro','livros');   
        const caberSingularPlural = pluralOuSingular(avaliarEspaco,'cabe','cabem');

        return `Só ${caberSingularPlural} mais ${avaliarEspaco} ${livroSingularPlural} na caixa`
}

//================== Método que manipula o Objeto  ========================

//Este método 'addBooks', foi adicionado como nova propriedade para o objeto 'booksBox'.  
booksBox.addBooks = function(numBooks){
    let livro = booksBox.booksIn;
    let espaco = booksBox.spaces;
    let caixaCheia = livro === espaco; //Estas variáveis serão as condições dos ifs()
    let caixaNaoCabe = livro + numBooks > espaco;

    if(caixaCheia){ //====== Obs 1*
        return`A caixa ja está cheia`;  
    }
    if( caixaNaoCabe){ //====== Obs 2*
        return naoVaiCaber(espaco,livro);
    }
    
    booksBox.booksIn += numBooks; //====== Obs 3*

    let livroSingularPlural = //Esta variável define a string 'livro' ou 'livros'
        pluralOuSingular(booksBox.booksIn,'livro','livros');

    return `Já há ${booksBox.booksIn} ${livroSingularPlural} na caixa`;
}
console.log(booksBox.addBooks(1));
console.log(booksBox.addBooks(2));
console.log(booksBox.addBooks(1));
console.log(booksBox.addBooks(1));
console.log(booksBox.addBooks(2));
console.log(booksBox);

//====================  Observações  ========================

// Obs 1*
  /*  Este if() quando for satisfeito como true, executará o 'return' da função ingnorará as linhas abaixo. Caso contrário, o próximo 'return' abaixo é que será executado. Isso significa que pode-se condicionar o 'return' de uma função.
    */

// Obs 2*
    /*  Este "if()" esta condicionado para que se o número de "livros" atual for menor que o número de "espaços", e se receber mais um número de "parâmetro", que somado com "livros" resulte em número maior que o do "espaço". Se "true" for satisfeito, este será o "return" da função.
    */

// Obs 3*
    /*  Esta expressão referencia diretamente na propriedade "booksIn" do objeto "booksBox" que esta sendo manipulado. Esta "atribuição de soma" esta declarada abaixo dos "ifs()" para não influênciar no resultado esperado. Cada chamada do método "addBoocks" altera o valor de "booksIn", e os "Ifs()" retornaram algo se suas condições forem satisfeitas sobre o novo valor de "booksIn". Porém se esta expressão for hiçada para o topo do corpo da função, irá quebrar a função esperada. Pois o esperado é que quando algum "if()" for satisfeito o seu "return" será o "return" da função e qualquer código abaixo dele deve ser ignorado incluindo esta expressão de reatribuição de soma.
*/

    
    









        //    booksBox.addBooks = function(numBooks) {
        //         
        //         livro += numBooks;

        //         let espaco = booksBox.spaces
        //         console.log(livro);

                
        //         if((livro + numBooks) > espaco){  
        //             console.log(`Só cabem ${espaco-+livro} livros`);
        //         }  

        //         if(livro === espaco){
        //            console.log(`A caixa esta cheio de livros.`)
        //         }

        //     return console.log(`Já ha ${livro} na caixa, há espaço para mais ${espaco-+livro} livros. `)   
        //     }

// addBooks(3);
// addBooks(3);        
// const qtdeLivros = booksBox.addBooks(2)
// console.log(qtdeLivros)
// console.log(booksBox.addBooks(2))


// addBooks(7)

// let booksAdd = booksBox.addBooks(2);
// console.log(booksAdd);