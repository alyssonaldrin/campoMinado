import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Campo({ minado, aberto, pertoDeMinas }) {

  const styleCampo = [styles.campo]

  if (aberto) {
    styleCampo.push(styles.aberto)
  }
  if (styleCampo.length === 1) {
    styleCampo.push(styles.padrao)
  }

  let cor = null;
  if (pertoDeMinas) {
    switch (pertoDeMinas) {
      case 1:
        cor = '#0000fd'
        break
      case 2:
        cor = '#017e00'
        break
      case 3:
        cor = '#fe0000'
        break
      case 4:
        cor = '#010082'
        break
      case 5:
        cor = '#810200'
        break
      case 6:
        cor = '#008080'
        break
      case 7:
        cor = '#000000'
        break
      case 8:
        cor = '#808080'
        break
    }
  }


  return (
    <View style={styleCampo}>
      {!minado && aberto && pertoDeMinas > 0 &&
        <Text style={[styles.numero, { color: cor }]}>
          {pertoDeMinas}
        </Text>}
    </View>
  )
}
