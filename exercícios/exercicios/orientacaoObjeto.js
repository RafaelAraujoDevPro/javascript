//Professor
class Professor {
    constructor(nome,telefone) {
        this.nome = nome;
        this.telefone = telefone;  
    }
}
//Aluno
class aluno extends Professor {
    constructor(nome,telefone,endereco) {
        super(nome,telefone);
        this.endereco = endereco; 
    }
}
//Pessoa
class Pessoa extends aluno {
    constructor (nome,telefone,endereco){
         super(nome,telefone,endereco);
    }
   _mostrar(){
    console.log(`${this.nome} mora em ${this.endereco}. Telefone para contado: ${this.telefone}`);
   }
   
}

let pessoa1 = new Pessoa('Rafael', "555 5555 555",'Boa Vista-RR');
pessoa1._mostrar();
let pessoa2 = new Pessoa('Raylane','555 555 555',"Boa Vista-RR");
pessoa2._mostrar();
let pessoa3 = new Pessoa('Racklane','555 555 444','Boa Vista-RR');
pessoa3._mostrar();

/* ======= */

class Mamiferos {
    constructor(especie,nome,idade) {
        this.especie = especie
        this.nome = nome
        this.idade = idade
        this.glandulamamaria = true
    }
   
    incrementaridade(){
        this.idade++
    }
}
//Herança de atributos da classe "Mamiferos" para a classe "Carnivoros"
class Carnivoro extends Mamiferos {
    constructor(especie, nome, idade, comePessoas) {//Propriedades de uma class sempre serão declaradas dentro de um "constructor(){}"
        super(especie , nome, idade)/*Para uma subclasse declarar propriedades próprias primeiro deve declarar o metodo "super()" com os parâmetros herdados da classe pai"*/
            this.comePessoas = comePessoas      
    }
    naoComeCavalo(animais){
        return animais.filter(animal => animal.especie !== 'cavalo');
    }
}

const zeca = new Mamiferos('zebra','Zeca',4);
const pompeo = new Mamiferos('gnu','Pompeo',5);
const angus = new Mamiferos('cavalo','Angus',9);
const lion = new Carnivoro('leão','Lion',7,false);
console.log(lion);
const animais = [zeca, pompeo, angus];
console.log(lion.naoComeCavalo(animais));
console.log(zeca.especie);
console.log(pompeo.nome);

/*======= */
// Herança Prototipal

function Estudante(nome, email) {
    this.nome = nome;
    this.email = email;
}

Estudante.prototype.login = function login(){
    return `${this.nome} fez o login!`;
};
Estudante.prototype.comentario = function comentario() {
    return `${this.nome} fez um comentário!`;
};
//Esta função hedará propriedades da função "Estudante"
function TutorDeClasse(nome, email, corrigeProva) {
    Estudante.call(this, nome, email);//"this" referencia o escopo do objeto "Estudante"
    this.corrigeProva = corrigeProva
}
/*Um Objeto pode receber um "protótipo novo" criado apartir de outro protótipo de um objeto como herança protótipal.*/
TutorDeClasse.prototype = Object.create(Estudante.prototype);

const Joao = new Estudante('João','João@hotmail.com');
const Pedro = new Estudante('Pedro','Pedro@gmail.com');
const Rafael = new TutorDeClasse('Rafael','Rafael@gmail.com',true);

console.log(Joao.comentario());
console.log(Pedro);
console.log(Rafael);
console.log(Rafael.comentario());

//=======

//Encapsulamento

class Profissional {
    #nome
    #idade
    #profissao
    constructor(nome, idade, profissao) {
        this.#nome = nome;
        this.#idade = idade;
        this.#profissao = profissao;
    }
    get nome(){
        return this.#nome;
    }
    get idade(){
        return this.#idade;
    }
    get profissao(){
        return this.#profissao;
    }
    set nome(nome){
        return this.#nome=nome;
    }
    apresentar() {
        return `Meu nome é ${this.#nome}, tenho ${this.#idade} anos de idades e sou ${this.#profissao}`
    }
    paraJSon(){
        return {
            nome: this.nome,
            idade: this.idade,
            profissao: this.profissao
        };
    }
}

const rafael = new Profissional('Rafael', 32,'developer');
rafael.nome = 'João';
console.log(rafael.paraJSon());
console.log(rafael.nome);
console.log(rafael.idade);
console.log(rafael.profissao);
console.log(Object.keys(rafael))
console.log(Object.values(rafael));
console.log(rafael.apresentar());