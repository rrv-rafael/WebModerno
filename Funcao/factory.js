// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// Factory dinamica
// function criarProduto(nome, preco) {
//     return {
//         nome: nome,
//         preco: preco,
//         desconto: preco - 50
//     }
// }

// Forma de fazer mais simples
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Teclado mecanico', 390))
console.log(criarProduto('Monitor 4k', 1390))
console.log(criarProduto('Mouse Gamer', 670))