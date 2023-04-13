const determinarTipoTriangulo = function (comprimento1, comprimento2, comprimento3) {
    if ((comprimento1 + comprimento2 > comprimento3) && (comprimento1 + comprimento3 > comprimento2) && (comprimento2 + comprimento3 > comprimento1)) {
        if (comprimento1 == comprimento2 && comprimento2 == comprimento3) {
            return 'Triângulo Equilátero.'
        } else if (comprimento1 == comprimento2 || comprimento1 == comprimento3 || comprimento2 == comprimento3) {
            return 'Triângulo Isósceles.'
        } else {
            return 'Triângulo Escaleno.'
        }
    } else {
        return 'Os comprimentos passados não formam um triângulo.'
    }
}

console.log(determinarTipoTriangulo(20, 20, 100))