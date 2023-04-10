const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero)

// const { logradouro, numero } = pessoa.endereco
// console.log(logradouro, numero)

var count = 0
var count2 = 0

while (count < 10) {
    ++count
    count2++
}

console.log(count, count2)