const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento da lista.

console.log(pilotos)

pilotos.push('Verstappen') // O push() adiciona um elemento ao final da lista.

console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista.

console.log(pilotos)

pilotos.unshift('Hamilton') // O unshift() adiciona um elemento no ínicio da lista.

console.log(pilotos)

// O splice() pode adicionar e remover elementos dentro da lista.

// Adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover:
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array gerado a partir do índice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
