import React from 'react'
import { View } from 'react-native'
import Campo from '../Campo'
import styles from './styles'

export default Tabuleiro = ({ tabuleiro, onOpenCampo }) => {
  const linhas = tabuleiro.map((linha, indexLinha) => {
    const campos = linha.map((campo, indexColuna) => {
      return <Campo {...campo} key={indexColuna} onOpen={() => onOpenCampo(campo.linha, campo.coluna)} />
    })
    return (
      <View key={indexLinha} style={styles.linha}>
        {campos}
      </View>
    )
  })

  return (
    <View style={styles.container}>
      {linhas}
    </View>
  )
}