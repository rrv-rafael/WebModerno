const aplicacaoFinanceiraJurosSimples = 
(capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial * taxaJuros * tempoAplicacao

const aplicacaoFinanceiraJurosCompostos =
(capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial * (1 + taxaJuros) ** tempoAplicacao

console.log(`Montante da aplicação financeira - Regime Juros Simples: ${aplicacaoFinanceiraJurosSimples(600, 0.12, 5)}`)

console.log(`Montante da aplicação financeira - Regime Juros Compostos: ${aplicacaoFinanceiraJurosCompostos(1500, 0.02, 6)}`)

