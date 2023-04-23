const calcularBhaskara = function (a, b, c) {
    let delta, raiz = []

    delta = b ** 2 - 4 * a * c

    if (delta < 0) {
        return 'Delta é negativo'
    }

    raiz[0] = (-b + Math.sqrt(delta)) / (2 * a)
    raiz[1] = (-b - Math.sqrt(delta)) / (2 * a)
    
    return raiz
}

console.log(calcularBhaskara(1, 12, -13))
console.log(calcularBhaskara(2, -16, -18))