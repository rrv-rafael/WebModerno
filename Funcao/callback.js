// const fabricantes = ["Mercedes", "Audi", "BMW"]

// function imprimir(nome, indice) {
//     console.log(`${ indice + 1 }. ${ nome }`)
// }

// fabricantes.forEach(imprimir)
// fabricantes.forEach(function(fabricante) {
//     console.log(fabricante)
// })
// console.log('Usando arrow function:')
// fabricantes.forEach(fabricante => console.log(fabricante))

//Aula 2:
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// Sem callback:
let notasBaixas = []

// for (let i in notas) {
//     if (notas[i] < 7) {
//         notasBaixas.push(notas[i])
//     }
// }

// for (let i in notasBaixas) {
//     console.log(notasBaixas[i])
// }

// Com callback:
// notasBaixas = notas.filter(function (nota) {
//     return nota < 7
// })

// Usando arrow function:
notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)