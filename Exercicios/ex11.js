// const receberPrimeiroEUltimoElemento = function (array) {
//     let arrayInterno = [array[0], array[array.length - 1]]

//     return arrayInterno
// }

const receberPrimeiroEUltimoElemento = (array) => [array[0], array[array.length - 1]]

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))