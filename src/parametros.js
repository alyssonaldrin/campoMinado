import { Dimensions } from 'react-native'

const getNumeroColunas = (parametros) => {
  const width = Dimensions.get('window').width
  const numeroColunas = Math.floor(width / parametros.tamanhoBloco)
  return numeroColunas
}

const getNumeroLinhas = (parametros) => {
  const height = Dimensions.get('window').height * (1 - parametros.tamanhoCabecalho)
  const numeroLinhas = Math.floor(height / parametros.tamanhoBloco)
  return numeroLinhas
}

const parametros = {
  tamanhoBloco: 30,
  tamanhoBorda: 5,
  tamanhoFonte: 15,
  tamanhoCabecalho: 0.15,
  nivelDificuldade: 0.1,
}

const numeroColunas = getNumeroColunas(parametros)
const numeroLinhas = getNumeroLinhas(parametros)

export { parametros, numeroColunas, numeroLinhas }