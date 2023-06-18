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