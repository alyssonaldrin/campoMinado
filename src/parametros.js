import { Dimensions } from 'react-native'

const getNumeroColunas = (parametros) => {
  const width = Dimensions.get('window').width
  const numeroColunas = Math.floor(width / parametros.tamanhoBloco)
  return numeroColunas
}

const getNumeroLinhas = (parametros) => {
  const heigth = Dimensions.get('window').heigth * (1 - parametros.tamanhoCabecalho)
  const numeroLinhas = Math.floor(heigth / parametros.tamanhoBloco)
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

export default { ...parametros, numeroColunas, numeroLinhas }