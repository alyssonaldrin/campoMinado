import React from 'react'
import { View } from 'react-native'
import Campo from '../Campo'
import styles from './styles'

export default Tabuleiro = ({ tabuleiro }) => {
  const linhas = tabuleiro.map((linha, indexLinha) => {
    const campos = linha.map((campo, indexColuna) => {
      return <Campo {...campo} key={indexColuna} />
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