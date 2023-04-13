const calcularDivisao = function (dividendo, divisor) {
    const resultado = dividendo / divisor
    const restoDivisao = dividendo % divisor

    console.log(`Resultado da divisão: ${ resultado } \nResto da divisão: ${ restoDivisao }`)
}

calcularDivisao(10, 3)