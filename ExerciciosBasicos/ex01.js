const calcular = function (n1, n2) {
    let soma, subtracao, multiplicacao, divisao

    soma = n1 + n2
    subtracao = n1 - n2
    multiplicacao = n1 * n2
    divisao = n1 / n2
    
    return `Soma: ${ soma } \nSubtração: ${ subtracao } \nMultiplicação: ${ multiplicacao } \nDivisão: ${ divisao }`
}

console.log(calcular(2, 3))