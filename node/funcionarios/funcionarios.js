const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = funcionario => funcionario.pais === 'China'
const genero = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    // const pais = funcionario => funcionario.pais == 'China'
    // const genero = funcionario => funcionario.genero == 'F'
    // let menorSalario = funcionarios.filter(pais).filter(genero)[0]
    // const salarios = funcionarios.filter(pais).filter(genero)

    // salarios.map(function(elemento) {
    //     if (elemento.salario < menorSalario.salario) {
    //         menorSalario = elemento
    //     }
    // })

    const funcionarioMenorSalario = funcionarios.filter(pais).filter(genero).reduce(menorSalario)

    console.log(funcionarioMenorSalario)
})