const converterDinheiro = function (valor) {
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})
}

console.log(converterDinheiro(0.90000000000000004))