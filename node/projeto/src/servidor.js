const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos()) // O método send() irá converter este objeto para JSON
})

app.get('/produtos/:id', (request, response) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })

    response.send(produto) // Isso converte para um JSON
})

app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })

    response.send(produto) // Isso converte para um JSON
})

app.delete('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)

    response.send(produto) // Isso converte para um JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})