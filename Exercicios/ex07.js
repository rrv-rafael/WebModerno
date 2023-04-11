const estaEntre = function (numero, minimo, maximo, inclusivo) {
    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo) {
            return true
        }
        return false
    } else {
        if (numero > minimo && numero < maximo) {
            return true
        }
        return false
    }
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))