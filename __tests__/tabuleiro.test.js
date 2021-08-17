import { criarTabuleiro, sortearMinas, criarTabuleiroMinado, getAdjacentes, isAdjacentesSemMinas, abrirCampo, todosCampos, teveExplosao, isCampoPendente, ganhouJogo, mostrarMinas } from "../src/tabuleiro"

describe('Testes tabuleiro', () => {
  it('deve criar um tabuleiro de tamanho 2x2 corretamente', () => {
    const tabuleiroEsperado = [
      [
        {
          linha: 0,
          coluna: 0,
          aberto: false,
          marcado: false,
          minado: false,
          explodido: false,
          minasPerto: 0
        },
        {
          linha: 0,
          coluna: 1,
          aberto: false,
          marcado: false,
          minado: false,
          explodido: false,
          minasPerto: 0
        }
      ],
      [
        {
          linha: 1,
          coluna: 0,
          aberto: false,
          marcado: false,
          minado: false,
          explodido: false,
          minasPerto: 0
        },
        {
          linha: 1,
          coluna: 1,
          aberto: false,
          marcado: false,
          minado: false,
          explodido: false,
          minasPerto: 0
        }
      ]
    ]

    const tabuleiroObtido = criarTabuleiro(2, 2)

    expect(tabuleiroObtido).toEqual(tabuleiroEsperado)
  })

  it('deve sortear 20 minas corretamente quando tabuleiro for 10x10', () => {
    const tabuleiro = criarTabuleiro(10, 10)
    const numeroDeMinasEsperado = 20

    const tabuleiroMinado = sortearMinas(tabuleiro, 20)
    const numeroDeMinasSorteadas = tabuleiroMinado.reduce((minas, linha) => {
      return minas + linha.reduce((minasLinha, objeto) => {
        if (!objeto.minado) {
          return minasLinha
        }
        return minasLinha + 1
      }, 0)
    }, 0)

    expect(numeroDeMinasSorteadas).toBe(numeroDeMinasEsperado)
  })

  it('deve criar tabuleiro 20x20 e sortear 100 minas corretamente', () => {
    const linhasEsperadas = 20
    const colunasEsperadas = 20
    const numeroDeMinasEsperado = 100

    const tabuleiroObtido = criarTabuleiroMinado(20, 20, 100)
    const linhasObtidas = tabuleiroObtido.length
    const colunasObtidas = tabuleiroObtido[0].length
    const numeroDeMinasSorteadas = tabuleiroObtido.reduce((minas, linha) => {
      return minas + linha.reduce((minasLinha, objeto) => {
        if (!objeto.minado) {
          return minasLinha
        }
        return minasLinha + 1
      }, 0)
    }, 0)

    expect({ linhas: linhasObtidas, colunas: colunasObtidas, minas: numeroDeMinasSorteadas }).toEqual({ linhas: linhasEsperadas, colunas: colunasEsperadas, minas: numeroDeMinasEsperado })
  })
})

describe('Testes das funcoes de abertura de campos', () => {
  let tabuleiro
  beforeEach(() => {
    tabuleiro = criarTabuleiro(3, 3)
  })

  it('deve retornar todos os 8 campos adjacentes corretamente quando for um campo no centro', () => {
    const adjacentesEsperados = 8

    const adjacentesObtidos = getAdjacentes(tabuleiro, 1, 1)

    expect(adjacentesObtidos.length).toBe(adjacentesEsperados)
  })

  it('deve retornar todos os 3 campos adjacentes corretamente quando for um campo na esquina', () => {
    const adjacentesEsperados = 3

    const adjacentesObtidos = getAdjacentes(tabuleiro, 0, 2)

    expect(adjacentesObtidos.length).toBe(adjacentesEsperados)
  })

  it('deve retornar todos os 5 campos adjacentes corretamente quando for um campo na borda fora da esquina', () => {
    const adjacentesEsperados = 5

    const adjacentesObtidos = getAdjacentes(tabuleiro, 1, 0)

    expect(adjacentesObtidos.length).toBe(adjacentesEsperados)
  })

  it('deve retornar false quando nao existir minas ao redor do campo', () => {
    const adjacentes = getAdjacentes(tabuleiro, 1, 1)
    const isAdjacentesSeguros = isAdjacentesSemMinas(adjacentes)

    expect(isAdjacentesSeguros).toBeTruthy()
  })

  it('deve retornar true quando existir minas ao redor do campo', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 3)

    const adjacentes = getAdjacentes(tabuleiroMinado, 1, 1)
    const isAdjacentesSeguros = isAdjacentesSemMinas(adjacentes)

    expect(isAdjacentesSeguros).toBeFalsy()
  })

  it('deve explodir quando receber um campo minado', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 9)

    abrirCampo(tabuleiroMinado, 1, 1)

    expect(tabuleiroMinado[1][1].explodido).toBeTruthy()
  })

  it('deve retornar o numero de minas corretamente quando receber um campo nao minado com algum adjacente com mina', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 9)
    tabuleiroMinado[1][1].minado = false
    const minasPertoEsperado = 8

    abrirCampo(tabuleiroMinado, 1, 1)

    expect(tabuleiroMinado[1][1].minasPerto).toBe(minasPertoEsperado)
  })

  it('deve abrir todos os campos quando nenhum estiver minado', () => {
    abrirCampo(tabuleiro, 1, 1)

    const isTodosAbertos = todosCampos(tabuleiro).reduce((isAbertos, campo) => {
      if (!isAbertos) return false
      if (!campo.aberto) return false
      return true
    }, true)

    expect(isTodosAbertos).toBeTruthy()
  })

  it('nao deve fazer nada quando receber campo aberto', () => {
    tabuleiro[1][1].aberto = true
    const campoEsperado = {
      linha: 1,
      coluna: 1,
      aberto: true,
      marcado: false,
      minado: false,
      explodido: false,
      minasPerto: 0
    }

    abrirCampo(tabuleiro, 1, 1)

    expect(tabuleiro[1][1]).toEqual(campoEsperado)
  })

  it('deve retornar true quando tiver explosao', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 9)

    abrirCampo(tabuleiroMinado, 1, 1)

    expect(teveExplosao(tabuleiroMinado)).toBeTruthy()
  })

  it('deve retornar false quando nao houver explosao', () => {
    abrirCampo(tabuleiro, 1, 1)

    expect(teveExplosao(tabuleiro)).toBeFalsy()
  })

  it('deve retornar true quando campo estiver minado e nao estiver marcado', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 9)

    expect(isCampoPendente(tabuleiroMinado[1][1])).toBeTruthy()
  })

  it('deve retornar true quando campo nao estiver minado e nao estiver aberto', () => {

    expect(isCampoPendente(tabuleiro[1][1])).toBeTruthy()
  })

  it('deve retornar false quando campo estiver minado e estiver marcado', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 9)
    tabuleiroMinado[1][1].marcado = true

    expect(isCampoPendente(tabuleiroMinado[1][1])).toBeFalsy()
  })

  it('deve retornar false quando campo nao estiver minado e estiver aberto', () => {
    tabuleiro[1][1].aberto = true

    expect(isCampoPendente(tabuleiro[1][1])).toBeFalsy()
  })

  it('deve retornar true quando nao existir campos pendentes', () => {
    abrirCampo(tabuleiro, 1, 1)

    expect(ganhouJogo(tabuleiro)).toBeTruthy()
  })

  it('deve retornar false quando existir campos pendentes', () => {

    expect(ganhouJogo(tabuleiro)).toBeFalsy()
  })

  it('deve mostrar todas as minas quando for chamada', () => {
    const tabuleiroMinado = sortearMinas(tabuleiro, 5)
    const minasEsperadas = 5

    mostrarMinas(tabuleiroMinado)

    const minasMostradas = todosCampos(tabuleiroMinado).filter((campo) => {
      return campo.aberto && campo.minado
    }).length

    expect(minasMostradas).toBe(minasEsperadas)
  })
})
