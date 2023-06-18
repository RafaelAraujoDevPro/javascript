//O usuário irá selecionar um modelo de celular
// quando clickar no botão 'Buscar Celular', Exibir um parágrafo 
// no parágrafo deve conter as infomações sobre o celular escolhido

let btnBuscar = document.getElementById('btnCelulares');

btnBuscar.addEventListener('click', function(event) {
    event.preventDefault();
    function Celular(tipo, marca, modelo, memoria, camera, preco) 
    {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.camera = camera;
        this.preco = preco;
    };

let celular1 = new Celular('Smartphone', 'Xiaomi', 'Note 12', '6GB RAM 128GB', 'Câmera Tripla', 1600);

let celular2 = new Celular('Smartphone', 'Samsung', 'Galaxy A54 5G SM-A546E', '8GB RAM 128GB', 'Câmera Tripla', 1550);

let celular3 = new Celular('Smartphone', 'Xiaomi', 'Pocophone Poco X5 5G', '8GB RAM 256GB', 'Câmera Tripla', 2900);

let celular4 = new Celular('Smartphone', 'Apple', 'iPhone', '11 64GB', 'Câmera Dupla', 3000);

let celular5 = new Celular('Smartphone', 'Samsung', 'Galaxy S21 FE 5G SM-G990E', '128GB', 'Câmera Tripla', 2500);

let lojaCell = [celular1, celular2, celular3, celular4, celular5];

let listaCell = document.getElementById('listaCelulares')
let indice = listaCell.selectedIndex;

let selectCell = listaCell[indice].value;

let saidaCell = document.querySelector('.caixaDeSaida');

switch(selectCell) {
    case 'cell1' :
        saidaCell.innerHTML = `<p>Celular <strong>${lojaCell[0].tipo}</strong> da <strong>${lojaCell[0].marca}</strong> modelo <strong>${lojaCell[0].modelo}</strong> com memória de <strong>${lojaCell[0].memoria}</strong> e <strong>${lojaCell[0].camera}</strong> esta custando só <strong>${lojaCell[0].preco}</strong> reais. Aproveite!</p>`;
    break;
    case 'cell2' :
        saidaCell.innerHTML = `<p>Celular <strong>${lojaCell[1].tipo}</strong> da <strong>${lojaCell[1].marca}</strong> modelo <strong>${lojaCell[1].modelo}</strong> com memória de <strong>${lojaCell[1].memoria}</strong> e <strong>${lojaCell[1].camera}</strong> esta custando só <strong>${lojaCell[1].preco}</strong> reais. Aproveite!</p>`;
    break;
    case 'cell3' :
        saidaCell.innerHTML = `<p>Celular <strong>${lojaCell[2].tipo}</strong> da <strong>${lojaCell[2].marca}</strong> modelo <strong>${lojaCell[2].modelo}</strong> com memória de <strong>${lojaCell[2].memoria}</strong> e <strong>${lojaCell[2].camera}</strong> esta custando só <strong>${lojaCell[2].preco}</strong> reais. Aproveite!</p>`;
    break;
    case 'cell4' :
        saidaCell.innerHTML = `<p>Celular <strong>${lojaCell[3].tipo}</strong> da <strong>${lojaCell[3].marca}</strong> modelo <strong>${lojaCell[3].modelo}</strong> com memória de <strong>${lojaCell[3].memoria}</strong> e <strong>${lojaCell[3].camera}</strong> esta custando só <strong>${lojaCell[3].preco}</strong> reais. Aproveite!</p>`;
    break;
    case 'cell5' :
        saidaCell.innerHTML = `<p>Celular <strong>${lojaCell[4].tipo}</strong> da <strong>${lojaCell[4].marca}</strong> modelo <strong>${lojaCell[4].modelo}</strong> com memória de <strong>${lojaCell[4].memoria}</strong> e <strong>${lojaCell[4].camera}</strong> esta custando só <strong>${lojaCell[4].preco}</strong> reais. Aproveite!</p>`;
    break;
}
});


function criarParagrafo(text,color,background) {
    function elemento() {
        const paragrafo = document.createElement('p');
        paragrafo.innerText = text;
        paragrafo.style.color = color;
        paragrafo.style.backgroundColor = background;
        return paragrafo
    }
    return Object.freeze({//Nâo vai poder mudar propriedade
        elemento,
        text
    })
};
let divDeParagrafos = document.querySelector('#divParagf');

let paragrafo1 = criarParagrafo(`Este é uma objeto criado por 
Factory Function!`,
'#fff','brown');
let paragrafo2 = criarParagrafo(`Este outro objeto foi criado pela mesma
 Factory Function que criou o parágrafo anterior!`,
'#aaa','green')

divDeParagrafos.innerHTML += paragrafo1.elemento().outerHTML;
divDeParagrafos.innerHTML += paragrafo2.elemento().outerHTML;