import React from 'react'
import { View, Modal, Text } from 'react-native'
import ModalButton from '../ModalButton'
import styles from './styles'

export default function Menu({ onClose, isOpen, onSelecaoDificuldade }) {
  const handleSelecaoDificuldade = (dificuldade) => {
    onSelecaoDificuldade(dificuldade)
    onClose()
  }
  return (
    <Modal onRequestClose={onClose} visible={isOpen} animationType='fade' transparent={true}>
      <View style={styles.bg}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Selecione o Nível</Text>
          <ModalButton dificuldade={0.1} onButtonPress={handleSelecaoDificuldade} />
          <ModalButton dificuldade={0.2} onButtonPress={handleSelecaoDificuldade} />
          <ModalButton dificuldade={0.3} onButtonPress={handleSelecaoDificuldade} />
          <ModalButton dificuldade={0.5} onButtonPress={handleSelecaoDificuldade} />
        </View>
      </View>
    </Modal>
  )
}