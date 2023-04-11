const removerPropriedade = function (objeto, propriedadeObjeto) {
    delete objeto[propriedadeObjeto]
    
    return objeto
}

console.log(removerPropriedade({a: 1, b: 2}, 'a')) // retornará {b: 2}
console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'Não preenchido'
}, 'descricao')) // retornará {id: 20, nome: 'caneta'}

console.log(Object.is(removerPropriedade({a: 1, b: 2}, 'a'), {a: 1, b: 2}))

console.log(Object.is({a: 1, b: 2}, {a: 1, b: 2}))