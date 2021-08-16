const criarTabuleiro = (linhas, colunas) => {
  return Array(linhas).fill(0).map((_, linha) => {
    return Array(colunas).fill(0).map((_, coluna) => {
      return {
        linha,
        coluna,
        aberto: false,
        marcado: false,
        minado: false,
        explodido: false,
        minasPerto: 0
      }
    })
  })
}

const sortearMinas = (tabuleiro, numeroDeMinas) => {
  const linhas = tabuleiro.length
  const colunas = tabuleiro[0].length
  let linha, coluna

  for (let i = 0; i < numeroDeMinas; i++) {
    do {
      linha = parseInt(Math.random() * linhas)
      coluna = parseInt(Math.random() * colunas)

    } while (tabuleiro[linha][coluna].minado)
    tabuleiro[linha][coluna].minado = true
  }
}