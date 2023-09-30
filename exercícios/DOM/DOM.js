let tittleMain = document.getElementsByTagName('h1');
console.log(tittleMain);
let span = document.createElement('span');
let texto = document.createTextNode('D.O.M (Document Object Model)');
let paragrafo = document.getElementsByTagName('p')
span.appendChild(texto);
paragrafo[0].appendChild(span);
