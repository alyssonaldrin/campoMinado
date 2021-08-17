import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function ModalButton({ dificuldade, onButtonPress }) {

  let style, texto
  if (dificuldade === 0.1) {
    style = styles.facil
    texto = 'Fácil'
  } else if (dificuldade === 0.2) {
    style = styles.medio
    texto = 'Médio'
  } else if (dificuldade === 0.3) {
    style = styles.dificil
    texto = 'Difícil'
  } else {
    style = styles.impossivel
    texto = 'Impossível'
  }
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onButtonPress(dificuldade)}>
      <Text style={styles.buttonTexto}>{texto}</Text>
    </TouchableOpacity>
  )
}