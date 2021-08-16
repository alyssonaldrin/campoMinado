export const criarTabuleiro = (linhas, colunas) => {
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

export const sortearMinas = (tabuleiro, numeroDeMinas) => {
  const tabuleiroMinado = tabuleiro.map((linha) => {
    return [...linha.map((objeto) => {
      return { ...objeto }
    })]
  })
  const linhas = tabuleiro.length
  const colunas = tabuleiro[0].length
  let linha, coluna

  for (let i = 0; i < numeroDeMinas; i++) {
    do {
      linha = parseInt(Math.random() * linhas)
      coluna = parseInt(Math.random() * colunas)

    } while (tabuleiroMinado[linha][coluna].minado)
    tabuleiroMinado[linha][coluna].minado = true
  }

  return tabuleiroMinado
}

export const criarTabuleiroMinado = (linhas, colunas, numeroDeMinas) => {
  const tabuleiro = criarTabuleiro(linhas, colunas)
  const tabuleiroMinado = sortearMinas(tabuleiro, numeroDeMinas)
  return tabuleiroMinado
}

export default { criarTabuleiroMinado }