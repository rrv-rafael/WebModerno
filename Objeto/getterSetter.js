const sequencia = {
    _valor: 1, // Convenção de variável privada no JS
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}