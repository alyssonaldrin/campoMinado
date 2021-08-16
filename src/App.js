import React, { useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from './styles';
import { numeroColunas, numeroLinhas, parametros } from './parametros'
import Tabuleiro from './components/Tabuleiro';
import { criarTabuleiroMinado } from './tabuleiro'

export default function App() {

  const getTabuleiroInicial = (parametros, numeroColunas, numeroLinhas) => {
    const numeroDeMinas = Math.ceil(numeroColunas * numeroLinhas * parametros.nivelDificuldade)
    return criarTabuleiroMinado(numeroLinhas, numeroColunas, numeroDeMinas)
  }

  const [tabuleiro, setTabuleiro] = useState(getTabuleiroInicial(parametros, numeroColunas, numeroLinhas))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Campo Minado!!!</Text>
      <View style={styles.tabuleiro}>
        <Tabuleiro tabuleiro={tabuleiro} />
      </View>
    </SafeAreaView>
  );
}