import React from 'react'
import { View } from 'react-native'
import styles from './styles'

export default function Bandeira({ maior }) {
  return (
    <View style={styles.container}>
      <View style={maior ? styles.mastroMaior : styles.mastro} />
      <View style={maior ? styles.bandeiraMaior : styles.bandeira} />
      <View style={maior ? styles.base1Maior : styles.base1} />
      <View style={maior ? styles.base2Maior : styles.base2} />
    </View>
  )
}
