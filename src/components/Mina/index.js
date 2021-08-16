import React from 'react'
import { View } from 'react-native'
import styles from './styles'

export default function Mina() {
  return (
    <View style={styles.container}>
      <View style={styles.centro} />
      <View style={styles.linhaHorizontal} />
      <View style={[styles.linhaHorizontal, styles.linhaDiagonal1]} />
      <View style={[styles.linhaHorizontal, styles.linhaVertical]} />
      <View style={[styles.linhaHorizontal, styles.linhaDiagonal2]} />
    </View>
  )
}
