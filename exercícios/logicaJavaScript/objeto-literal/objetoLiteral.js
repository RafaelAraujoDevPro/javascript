
// Propriedade dinâmica

console.log('========================\n função com estrura condicional')
const getFruit = (color)=>{
    switch(color){
        case 'red':
            console.log('apple');
            break;
        case 'green':
            console.log('lemon');
            break;
        case 'yellow':
            console.log('passion fruit');
            break;
        default:
            console.log('no fruit found');
            break;
    }
};
getFruit('yellow');

//========================

console.log('=========================\n função com objeto');

const pegarfruta = (cor)=>{
    const frutas = {
        red: ['maçã',5.43,'f'],
        green: ['limão',3.32,'m'],
        yellow: ['maracujá',7.3,'m'],
        precoFruta: ()=>{
            const codigo = frutas[cor] ? frutas[cor] : `não tem esta fruta`
            const preposicao = codigo[2] === 'm' ? 'do' : 'da';
            return codigo === frutas[cor] ? `${codigo[0]}: O kilo ${preposicao} ${codigo[0]} esta custando: ${codigo[1]} reais.`: codigo;
        }
    };
    return frutas.precoFruta()
};
console.log(pegarfruta('red'),'\n');
 //=========

 console.log('constante não pode ter reatribuição mas objetos podem\n')
const objt = {prop1: 'valor 1'};
objt.prop2 = 'valor 2';
console.log(objt);
//============
console.log('\n')
const arr = ['maçâ',3.5];
arr[2] = 'f';
console.log(arr);

//========

let carColor = {color: 'amarelo'};
let carColor1 = carColor
carColor1.color = 'azul';
console.log('cor do carro',carColor);

// inicializador de objetos. =======

// new Object()

let car = new Object();
car.color = 'amarelo';
car.price = 100000;
car.model = 'Onix';
car.brand = 'GM';

console.log(car);

//Object.create()

let car1 = Object.create({});
car1.color = 'azul';
car1.price = 80000;
car1.model = 'Gol G7';
car1.brand = 'VW';
console.log(car1);

//Função construtora

function Car (color,price,model,brand){
    this.color = color;
    this.price = price;
    this.model = model;
    this.brand = brand;
    this.info = ()=>{
        return `Carro ${this.brand} ${this.model} na cor ${this.color} esta custando ${this.price}`
    };
}
const car2 = new Car('prata',150000,'Corolla','Toyta');

console.log(car2.info());
console.log(car2);

// Abreviação de propriedades

const color = 'red';
const price = 100000;
const model = 'Uno Drive'
const brand = 'Fiat';

const car3 = {color,price,model,brand};
car3.color = 'white'
car3.info = ()=>{
    return `Carro ${brand} ${model}  na cor ${color} esta custando ${price}`
}
console.log(car3);
console.log(car3.info());


const carUno = {
    color: 'white',
    price: 100000,
    model: 'Uno Drive',
    brand: 'Fiat',
    info: ()=>{
        return `Carro ${carUno.brand} ${carUno.model}  na cor ${carUno.color} esta custando ${carUno.price}`
     }
};
console.log('',carUno.info())

//=============================

const microfone = {
    color: 'black',
    isOn: true,
    toggleOnOf: ()=> {
        const onOf = microfone.isOn ? 'ligar' : 'desligar';
        microfone.isOn = !microfone.isOn;
        return onOf;
    }
};
console.log(microfone.toggleOnOf())
console.log(microfone.toggleOnOf())
console.log(microfone.toggleOnOf())

//================================================

var meuObj = new Object(),
    str = 'minhaString',
    aleat = Math.random(),
    obj1 = new Object()

meuObj.tipo = 'Sintaxe de ponto';
meuObj['Data de criação'] = 'String com espaço';
meuObj[str] = 'Valor de string';
meuObj[aleat] = 'Número aleatório';
meuObj[obj1] = 'Objeto';
meuObj[''] = 'Mesmo uma string vazia'

console.log(meuObj);

//=================================

const setAccType = (accType) => {
    const typeCards = {
        platinum: 'Platinum Customer',
        gold: 'Gold Customer',
        silver: 'Silver Customer',
        getAccType(){
            return typeCards[accType]
        }
    }
    return typeCards.getAccType()
}
console.log(setAccType('silver'));

//=================
const meuCarro = {};
const fabricante = 'fabricante';
const modelo = 'modelo';
 meuCarro[fabricante] = 'Ford';
 meuCarro[modelo] = 'Mustang';
 console.log(meuCarro);

 //=======

 let objInspecionado;
 objInspecionado = ['a','b','c'];
 console.log(objInspecionado)

 //===================================
console.log('====================\n')
const convertToHex = (color)=> {
    const colors = {
        green: '#008000',
        red: '#ff0000',
        yellow: '#ffff00',
        blue: '#0000ff',
        orange: '#ffa500',
        getColor(){
            const containsColor = `O hexadecimal para ${color} é ${colors[color]}`;
            const notContainsColor = `Não temos o equivalente para a ${color}`;
            return colors[color] ? containsColor : notContainsColor;
        }
        
    }
    return colors.getColor()
}

const arrayColors = ['red','green','yellow','blue','orange','white','gray','black'];

const logColorMensage = color =>{console.log(convertToHex(color))};
arrayColors.forEach(logColorMensage);

//===================================
console.log('====================\n')

class Person {
    constructor(name,){
         this.name = name
        };

        salutation() {
           return 'Oi meu nome é ' + this.name + '.';
        };
}

const rafael = new Person ('rafael');
console.log(rafael.salutation());

const rafael2 = new Object();
rafael2.name = 'rafael araujo';
rafael2.info = () => `Meu nome é ${rafael2.name}.`;
console.log(rafael2.info());

