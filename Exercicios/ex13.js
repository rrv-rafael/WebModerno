const filtrarNumeros = function (array) {
    let arrayRetorno = []

    for (let i in array) {
        if (typeof array[i] == "number") {
            arrayRetorno.push(array[i])
        }
    }

    return arrayRetorno
}

console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))