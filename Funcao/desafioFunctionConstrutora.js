function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${ this.nome }`)
    }
}

const pessoa = new Pessoa('Rafael')
pessoa.falar()

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falarClass() {
//         console.log(`Meu nome é ${ this.nome }`)
//     }
// }