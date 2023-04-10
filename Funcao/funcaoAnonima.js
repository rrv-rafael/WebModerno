const soma = function (n1, n2) {
    return n1 + n2
}

const imprimirResultado = function(n1, n2, operacao = soma) {
    console.log(operacao(n1, n2))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (n1, n2) {
    return n1 - n2
})
imprimirResultado(3, 4, (n1, n2) => n1 * n2)