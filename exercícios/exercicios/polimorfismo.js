class Animal {
    // peso;
    // idade;
    // membros;
    constructor(peso,idade,membros){
        this.peso = peso;
        this.idade = idade;
        this.membros = membros;
    }

    // get peso(){
    //    return this.peso;
    // }
    // get idade(){
    //    return this.idade;
    // }
    // get membros(){
    //    return this.membros;
    // }
    // set peso(peso){
    //    return this.peso = peso;
    // }
    // set idade(idade){
    //    return this.idade = idade;
    // }
    // set membros(membros){
    //    return this.membros = membros;
    // }
    locomover(){
        return console.log(`Animais se locomovem de várias maneiras`)
    }
    alimentar(){
        return console.log('Animais se alimentam de várias maneiras diferentes.')
    }
    emitirSom(){
        return console.log(`Animais emitem vários tipos de sons diferentes`)
    }
}

class Mamifero extends Animal{
    // corDePelo
    constructor(peso,idade,membros,corDePelo) {
        super(peso,idade,membros);
        this.corDePelo = corDePelo;
    }

    // get corDePelo(){
    //    return this.corDePelo;
    // }
    
    locomover(){     
       return console.log(`Mamíferos andam sobre patas`);
    }
    alimentar(){
       return console.log(`Mamíferos mamam leite`);
    }
    emitirSom(){
       return console.log(`Mamíferos emitem sons de mamíferos`);
    }
  
}
class Reptil extends Animal{
    //corDeEscama
    constructor(peso,idade,membros,corDeEscama) {
        super(peso,idade,membros);
        this.corDeEscama = corDeEscama;
    }

    // get corDeEscama(){
    //    return this.corDeEscama;
    // }
    locomover(){
       return console.log(`Répteis rastejam`);
    }
    alimentar(){
       return console.log(`Répteis não mamam`);
    }
    emitirSom(){
       return console.log(`Répteis emitem sons de Répteis`);
    }

}
class Peixe extends Animal{
   // corDeEscama
    constructor(peso,idade,membros,corDeEscama) {
        super(peso,idade,membros);
        this.corDeEscama = corDeEscama;
    }

    // get corDeEscama(){
    //    return this.corDeEscama;
    // }
    locomover(){
       return console.log(`Peixes nadam na água`);
    }
    alimentar(){
       return console.log(`Peixes se alimentam na água`);
    }
    emitirSom(){
       return console.log(`Peixes não emitem sons`);
    }

    soltarBolhas(){
       return console.log(`Peixes soltam bolhas na água`);
    }
}
class Ave extends Animal{
   // corDePena
    constructor(peso,idade,membros,corDePena) {
        super(peso,idade,membros);
        this.corDePena = corDePena;
    }

    // get corDePena(){
    //    return this.corDePena;
    // }
    locomover(){
       return console.log(`Aves voam no céu`);
    }
    alimentar(){
       return console.log(`Aves se alimentam de sementes e insetos`);
    }
    emitirSom(){
       return console.log(`Aves emitem cantos de aves`);
    }

    fazerNinho(){
       return console.log(`Aves faz ninho para chocar ovos`)
    }
}

let mamiferos = new Mamifero(50,14,4,'caramelo');
console.log(mamiferos.alimentar());

let reptil = new Reptil(1.5,5,4,'verde');
console.log(reptil.alimentar());

let peixe = new Peixe(1,3,4,'colorido');
let aves = new Ave(2,3,4,'marrom');
console.log(mamiferos);
console.log(reptil);
console.log(peixe);
console.log(aves);


class Calculadora {
   constructor(valor1, valor2){
      this.valor1 = valor1;
      this.valor2 = valor2;
   }

   calcMedia(number){
   return ((this.valor1*number) + (this.valor2*number)) / 2;
   }
   
   calcMedia(number=2){
      return ((this.valor1*number) + (this.valor2*number)) / 2;
      }
}

let media = new Calculadora(4,5);
console.log(media.calcMedia(4));
console.log(media.calcMedia());


class MamiferosTerrestres{
   constructor(especie){
       this.especie = especie;
   }
   
   locomover(){
       return console.log(`${this.especie} se locomove correndo`)
   }
}

class Cavalo extends MamiferosTerrestres{
   constructor(especie){
       super(especie)
   }

   locomover(){
       return console.log(`${this.especie} se locomove galopando`)
} 
}

let zeca = new Cavalo('cavalo');
zeca.locomover();