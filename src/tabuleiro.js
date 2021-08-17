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
  const tabuleiroMinado = clonarTabuleiro(tabuleiro)
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

const clonarTabuleiro = (tabuleiro) => {
  return tabuleiro.map((linha) => {
    return [...linha.map((objeto) => {
      return { ...objeto }
    })]
  })
}

export const getAdjacentes = (tabuleiro, linha, coluna) => {
  const adjacentes = []
  const linhasPossiveis = [linha - 1, linha, linha + 1]
  const colunasPossiveis = [coluna - 1, coluna, coluna + 1]
  linhasPossiveis.forEach((l) => {
    colunasPossiveis.forEach((c) => {
      if (l < 0 || l >= tabuleiro.length) return
      if (c < 0 || c >= tabuleiro[0].length) return
      if (l == linha && c == coluna) return
      adjacentes.push(tabuleiro[l][c])
    })
  })
  return adjacentes
}

export const isAdjacentesSemMinas = (adjacentes) => {
  const adjacentesSemMinas = adjacentes.reduce((isSemMinas, campo) => {
    if (!isSemMinas || campo.minado) return false
    return true
  }, true)
  return adjacentesSemMinas
}

export const abrirCampo = (tabuleiro, linha, coluna) => {
  const campo = tabuleiro[linha][coluna]
  if (campo.aberto) return
  campo.aberto = true
  if (campo.minado) {
    campo.explodido = true
  } else {
    const adjacentes = getAdjacentes(tabuleiro, linha, coluna)
    if (isAdjacentesSemMinas(adjacentes)) {
      adjacentes.forEach((campo) => {
        abrirCampo(tabuleiro, campo.linha, campo.coluna)
      })
    } else {
      campo.minasPerto = adjacentes.filter((campo) => {
        return campo.minado
      }).length
    }
  }
}

export const todosCampos = (tabuleiro) => {
  return [].concat(...tabuleiro)
}

export const teveExplosao = (tabuleiro) => {
  if (todosCampos(tabuleiro).find((campo) => {
    return campo.explodido
  }))
    return true
  return false
}

export const isCampoPendente = (campo) => {
  return (campo.minado && !campo.marcado) || (!campo.minado && !campo.aberto)
}

export const ganhouJogo = (tabuleiro) => {
  return todosCampos(tabuleiro).filter(isCampoPendente).length === 0
}

export const mostrarMinas = (tabuleiro) => {
  return todosCampos(tabuleiro).filter((campo) => {
    return campo.minado
  }).forEach((campo) => {
    campo.aberto = true
  })
}
