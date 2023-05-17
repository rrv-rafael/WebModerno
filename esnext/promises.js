function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))

// falarDepoisDe(3, 'Que legal!')
// .then(frase => { 
//     console.log(frase)
//     return frase.concat('?!?')
// })
// .then(outraFrase => console.log(outraFrase))