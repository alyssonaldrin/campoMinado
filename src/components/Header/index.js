import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Bandeira from '../Bandeira'

export default function Header({ onBandeiraPress, bandeirasRestantes, onNovoJogoPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.bandeiraContainer}>
        <TouchableOpacity onPress={onBandeiraPress} style={styles.bandeiraButton}>
          <Bandeira maior />
        </TouchableOpacity>
        <Text style={styles.bandeiraTexto}> = {bandeirasRestantes}</Text>
      </View>
      <TouchableOpacity onPress={onNovoJogoPress} style={styles.button}>
        <Text style={styles.buttonTexto}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  )
}
