// Exemplo com async e await:
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${ letra }.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let resultado = ''
    
            response.on('data', dados => {
                resultado += dados
            })
    
            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
} // Retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))