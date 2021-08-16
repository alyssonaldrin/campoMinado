import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './styles';
import Campo from './components/Campo';
import Bandeira from './components/Bandeira';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Campo Minado!!!</Text>
      <Campo />
    </SafeAreaView>
  );
}