function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceDeErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.05)
    .then(valor => `Valor: ${ valor }`)
    .then(
        valor => console.log(valor),
        err => console.log(`Erro Esp.: ${ err }`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${ err }`))
    .then(() => console.log('Fim! '))