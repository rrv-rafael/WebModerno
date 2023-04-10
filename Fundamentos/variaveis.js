let numero = 1
{
    let numero = 2
    // console.log('dentro=', numero)
}
console.log('fora=', numero)

const func = []

// for (var i = 0; i < 10; i++) {
//     func.push(function() {
//         console.log(i)
//     })
// }

// func[2]()
// func[8]()

for (let i = 0; i < 10; i++) {
    func.push(function() {
        console.log(i)
    })
}

func[2]()
func[8]()

produto = {}
produto.nome = 'Teclado'

console.log(produto)