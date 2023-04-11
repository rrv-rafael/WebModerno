// function calcularSalario(qtdHorasTrabalhadas, valorHora) {
//     salario = qtdHorasTrabalhadas * valorHora
    
//     return `Salário igual a R$ ${ salario }.`
// }

// console.log(calcularSalario(150, 40.5))

const calcularSalario = function (qtdHorasTrabalhadas, valorHora) {
    salario = qtdHorasTrabalhadas * valorHora
    
    return `Salário igual a R$ ${ salario }.`
}

console.log(calcularSalario(150, 40.5))
console.log(calcularSalario(170, 30.5))
console.log(calcularSalario(180, 50.5))