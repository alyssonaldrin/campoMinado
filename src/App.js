import React, { useState } from 'react';
import { Text, SafeAreaView, View, Alert } from 'react-native';
import styles from './styles';
import { numeroColunas, numeroLinhas, parametros } from './parametros'
import Tabuleiro from './components/Tabuleiro';
import { abrirCampo, criarTabuleiroMinado, teveExplosao, clonarTabuleiro, ganhouJogo, mostrarMinas } from './tabuleiro'

export default function App() {

  const getTabuleiroInicial = (parametros, numeroColunas, numeroLinhas) => {
    const numeroDeMinas = Math.ceil(numeroColunas * numeroLinhas * parametros.nivelDificuldade)
    return criarTabuleiroMinado(numeroLinhas, numeroColunas, numeroDeMinas)
  }

  const [tabuleiro, setTabuleiro] = useState(getTabuleiroInicial(parametros, numeroColunas, numeroLinhas))
  const [ganhou, setGanhou] = useState(false)
  const [perdeu, setPerdeu] = useState(false)

  const toOpenCampo = (linha, coluna) => {
    const tabuleiroClone = clonarTabuleiro(tabuleiro)
    abrirCampo(tabuleiroClone, linha, coluna)
    if (teveExplosao(tabuleiroClone)) {
      setPerdeu(true)
      mostrarMinas(tabuleiroClone)
      Alert.alert('Pow!', 'Você explodiu!')
    }
    if (ganhouJogo(tabuleiroClone)) {
      setGanhou(true)
      Alert.alert('Parabéns!', 'Você ganhou!')
    }
    setTabuleiro(tabuleiroClone)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Campo Minado!!!</Text>
      <View style={styles.tabuleiro}>
        <Tabuleiro tabuleiro={tabuleiro} onOpenCampo={toOpenCampo} />
      </View>
    </SafeAreaView>
  );
}