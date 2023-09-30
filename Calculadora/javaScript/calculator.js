const buttonOperadores = document.querySelectorAll("[data-operador]");
const buttonNumero = document.querySelectorAll("[data-numero]");
const btnLimparOutPut = document.querySelector("[data-clear]");
const btnHistorico = document.querySelector("[data-historico]");
const btnBackspace = document.querySelector("[data-backspace]");
const btnPorcentagem = document.querySelector("[data-porcentagem]");
const btnParenteses = document.querySelector("[data-parenteses]");
const btnIgual = document.querySelector("[data-igual]");
const sectionBtns = document.querySelector("[data-teclado-digitos]");

const valorAnteriorString = document.querySelector("[data-anterior]");
const valorAtualString = document.querySelector("[data-atual]");
const outPut = document.querySelector("[data-resultado]");
const caracteres = '&divide;';
console.log(caracteres)
buttonNumero.forEach((elem) => console.log(elem.innerHTML));
buttonOperadores.forEach((elem) => console.log(elem.innerHTML));

console.log(
  btnHistorico,
  btnBackspace,
  btnPorcentagem,
  btnParenteses,
  btnLimparOutPut
);

console.log(valorAnteriorString, valorAtualString, outPut);

const valor1 = "";
const valor2 = "";

class Calculadora {
  constructor(valorAnteriorString, valorAtualString) {
    (this.valorAnteriorString = valorAnteriorString),
      (this.valorAtualString = valorAtualString),
      this.limpar();
  }

  definirResultado() {
    if(this.operandoAtual === ''){
      return;
    }
    const resultadoOperacao = {
      "adicao": parseFloat(this.operandoAterior) + parseFloat(this.operandoAtual),
      "subtracao": parseFloat(this.operandoAterior) - parseFloat(this.operandoAtual),
      'multiplicao':  parseFloat(this.operandoAterior) * parseFloat(this.operandoAtual),
      "divisao":  parseFloat(this.operandoAterior) / parseFloat(this.operandoAtual),
    };
    return resultadoOperacao[this.operador[1]];
  }
  definirValorAnterior(arrayPropriedadesButoes) {
    if(this.operandoAtual === ''){
      return;
    }
    if (this.operandoAterior !== "") {
      this.definirResultado();
    }
    this.operador = arrayPropriedadesButoes();
    this.operandoAterior = `${this.operandoAtual}`;
    this.operandoAtual = "";
  }
  inserirNumero(numeroInserido) {
    if (this.operandoAtual.includes(".") && numeroInserido === ".") return;
    if(numeroInserido === '.' && 
      this.operandoAtual === ""){
        this.operandoAtual = '0'
  }
    this.operandoAtual =
     `${this.operandoAtual}${numeroInserido.toString()}`;
  }
  apagarUltimoCaractere(){
    this.operandoAtual = ((...stringNumeros)=>{
      stringNumeros.pop();
      return stringNumeros.join('');
    })(...this.operandoAtual);
  }
  limpar() {
    this.operandoAtual = "";
    this.operandoAterior = "";
    this.operador = '';
    outPut.innerHTML = '';
  }
  atualizarTela() {
    this.valorAnteriorString.innerText =
    this.operador[0] === undefined ?
    `${this.operandoAterior}` :
     `${this.operandoAterior}${this.operador[0]}`;
    this.valorAtualString.innerText = this.operandoAtual;
  }
  
}



const calculadora = new Calculadora(valorAnteriorString, valorAtualString);

btnLimparOutPut.addEventListener("click", () => {
  calculadora.limpar();
  calculadora.atualizarTela();
});

for (const buttonNum of buttonNumero) {
  buttonNum.addEventListener("click", (event) => {
    const btnClicKado = event.target;
    calculadora.inserirNumero(btnClicKado.innerText);
    calculadora.atualizarTela();
  });
}
for (const buttonOper of buttonOperadores) {
  buttonOper.addEventListener("click", () => {
    calculadora.definirValorAnterior(()=>{
      return [buttonOper.innerText, buttonOper.dataset.operador]
    });
    calculadora.atualizarTela();
  });
}
btnIgual.addEventListener("click", () => {
  if(calculadora.definirResultado() === undefined){
    return;
  }
  outPut.innerText = calculadora.definirResultado();
  calculadora.atualizarTela();
});
btnBackspace.addEventListener('click', ()=>{
  calculadora.apagarUltimoCaractere();
  calculadora.atualizarTela();
})