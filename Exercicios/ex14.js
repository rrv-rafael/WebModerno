const objetoParaArray = function (objeto) {
    let array = []

    for (let i in objeto) {
        array[i] = (objeto[i])
    }

    return array
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}))