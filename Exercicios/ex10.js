const simboloMais = function (numero) {
    let simbolo = ''

    for (let i = 0; i < numero; i++) {
        simbolo += '+'
    }

    return simbolo
}

console.log(simboloMais(2))
console.log(simboloMais(4))