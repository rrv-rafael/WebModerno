const inverso = function (valor) {
    if (valor === true) {
        return false
    } else if (valor === false) {
        return true
    } else if (typeof valor == "number") {
        return valor * -1
    } else {
        return 'Booleano ou número esperados, mas o parâmetro é do tipo string'
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))