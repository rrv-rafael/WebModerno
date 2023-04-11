const repetir = function (elemento, qtdRepeticao) {
    let arrayElementos = []

    for (let i = 0; i < qtdRepeticao; i++) {
        arrayElementos[i] = elemento
    }

    return arrayElementos
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))