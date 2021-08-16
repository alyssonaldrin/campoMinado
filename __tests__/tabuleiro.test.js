import { criarTabuleiro, sortearMinas, criarTabuleiroMinado } from "../src/tabuleiro"

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
