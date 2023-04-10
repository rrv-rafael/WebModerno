class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falarClass() {
        console.log(`Meu nome é ${ this.nome }`)
    }
}

const p1 = new Pessoa('João')
p1.falarClass()

const criarPessoa = nome => {
    return {
        falarFunction: () => console.log(`Meu nome é ${ nome }`)
    }
}

const p2 = criarPessoa('Rafael')
p2.falarFunction()