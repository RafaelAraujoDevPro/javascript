function multiplicador(multiplo) {
  return function (numero) {
    return numero * multiplo;
  };
}
const dobro = multiplicador(2);
console.log("dobro de 5: ", dobro(5));
console.log("dobro de 15: ", dobro(15));
console.log("dobro de 60: ", dobro(60));

//=============================================

function gritar(texto) {
  return texto.toUpperCase();
}
console.log(gritar("cuidado com o buraco"));

function enfatizar(texto) {
  return `${texto}!!!!!!`;
}
console.log(enfatizar(gritar("cuidado com o buraco")));

function tornarlento(texto) {
  return texto.split("").join(" ");
}
console.log(tornarlento(enfatizar(gritar("cuidado com o buraco"))));

// composição de função.
function comporFuncao(func1, func2, func3, valor) {
  return func3(func2(func1(valor)));
}

console.log(
  comporFuncao(gritar, enfatizar, tornarlento, "cuidado com o buraco")
);

//Função curryng flexível

function alternarValor(...funcoes) {
  return function (valor) {
    return funcoes.reduce((acc, func) => {
      return func(acc);
    }, valor);
  };
}
const quaseExagero = alternarValor(gritar, enfatizar);
console.log(quaseExagero("olha a barata"));

const exagerado = alternarValor(gritar, enfatizar, tornarlento);
console.log(exagerado("cuidado, olha o carro"));
console.log(exagerado("cuidado com o cachorro"));
console.log(exagerado("cuidado com a faca"));

//=====================================

const boxOutPut = document.querySelector("div#boxOutPut");
const input = document.getElementById("inputNumber");
const buttonCalcular = document.getElementById("calculator");
const buttonRemove = document.getElementById("remove");

const teste = buttonCalcular.addEventListener("click", () => {
  let mensagem = "";
  const inputNumber = Number(input.value);
  for (let ind = 0; ind <= 100; ind++) {
    mensagem += `${inputNumber} X ${ind} = ${inputNumber * ind} <br>`;
  }
  const novaTabuada = document.createElement("p");
  novaTabuada.classList.add("outPut");
  novaTabuada.innerHTML += mensagem;
  boxOutPut.appendChild(novaTabuada);
  input.value = "";
  input.focus();
});

// backSpace
buttonRemove.addEventListener("click", () => {
  if (boxOutPut.children) {
    boxOutPut.lastElementChild.remove();
  }
});

//========================================

const entradaDeNumero = document.getElementById("inputValue");
const operadores = document.querySelector(".operadores");
const resultado = document.getElementById("resultado");
const igual = document.getElementById("igual");
let expressao = "";

entradaDeNumero.addEventListener("blur", (event) => {
  const entrada = event.target;
  if (entrada.value !== "") {
    const operando = document.createElement("span");
    operando.classList.add("operando");
    operando.innerHTML = entrada.value;
    resultado.appendChild(operando);
    entrada.value = "";

    console.log("blur", operando);
    const calcular = () => {
      expressao += Number(operando.innerHTML);
    };
    console.log(calcular());
  }
  console.log("expressão matemática", expressao);
  let num = eval(expressao);
  console.log(num);
});

// function criarOperador(){

// }
operadores.addEventListener("click", (event) => {
  button = event.target;
  if (button.tagName === "BUTTON") {
    const operador = document.createElement("span");
    operador.classList.add("operador");
    operador.innerHTML = button.innerHTML;
    resultado.appendChild(operador);
    expressao += operador.innerHTML;
    entradaDeNumero.focus();

    console.log("clickou!", operador);
    console.log("clickou!", button.innerHTML);
  }
});
function calcularExpressao(...valor) {
  let numero = valor.map((elem) => {
    return Number(elem);
  });
  [prevValue, operador, currValue] = numero;
  let result = 0;
  const funcOperadores = {
    "+": parseInt(prevValue + currValue),
    "-": parseInt(prevValue - currValue),
    X: parseInt(prevValue * currValue),
    "/": parseInt(prevValue / currValue),
    operacao() {
      return (result = funcOperadores[operador]);
    },
  };
  funcOperadores.operacao();
  return result;
}

const result = calcularExpressao("4+5");
console.log("resultado da função", result);

console.log(operadores);
console.log(entradaDeNumero.value);

//==================================

const exemplo = "5+6*3";
const test = /'\+\*'/;
const test2 = parseInt(exemplo[0], test[0], exemplo[2], test[1], exemplo[4]);
console.log(typeof test);
console.log(typeof test2);
console.log(test2);
console.log(Number(exemplo));
const split = exemplo.split("+");
console.log(split);
console.log("\u{1f600}");

const obj = {
  str: '',
  str1: ''
};
