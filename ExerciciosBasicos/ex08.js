const pontuacao = function (pontuacoes) {
    let maior = 0, count = 0, menor = pontuacoes[0], posicaoMenor
    const retorno = []

    for (let i in pontuacoes) {
        if (i > 0) {
            if (pontuacoes[i] > maior) {
                maior = pontuacoes[i]
                count++
            }            
        }
        
        if (pontuacoes[i] < menor) {
            menor = pontuacoes[i]
            posicaoMenor = parseInt(i) + 1
        }
    }

    retorno[0] = count
    retorno[1] = posicaoMenor

    return retorno
}

const pontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1]

console.log(pontuacao(pontuacoes))