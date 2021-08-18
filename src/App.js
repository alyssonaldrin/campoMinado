import React, { useState } from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import styles from './styles'
import { numeroColunas, numeroLinhas, parametros } from './parametros'
import Tabuleiro from './components/Tabuleiro'
import Header from './components/Header'
import Menu from './components/Menu';
import { abrirCampo, criarTabuleiroMinado, teveExplosao, clonarTabuleiro, ganhouJogo, mostrarMinas, toggleBandeira, bandeirasMarcadas } from './tabuleiro'

export default function App() {

  const getNumeroDeMinas = (parametros, numeroLinhas, numeroColunas) => {
    return Math.ceil(numeroLinhas * numeroColunas * parametros.nivelDificuldade)
  }

  const getTabuleiroInicial = (parametros, numeroColunas, numeroLinhas) => {
    const numeroDeMinas = getNumeroDeMinas(parametros, numeroLinhas, numeroColunas)
    return criarTabuleiroMinado(numeroLinhas, numeroColunas, numeroDeMinas)
  }

  const [tabuleiro, setTabuleiro] = useState(getTabuleiroInicial(parametros, numeroColunas, numeroLinhas))
  const [fimDeJogo, setFimDeJogo] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toOpenCampo = (linha, coluna) => {
    const tabuleiroClone = clonarTabuleiro(tabuleiro)
    abrirCampo(tabuleiroClone, linha, coluna)
    if (teveExplosao(tabuleiroClone)) {
      setFimDeJogo(true)
      mostrarMinas(tabuleiroClone)
      Alert.alert('Pow!', 'Você explodiu!')
    }
    if (ganhouJogo(tabuleiroClone)) {
      setFimDeJogo(true)
      Alert.alert('Parabéns!', 'Você ganhou!')
    }
    setTabuleiro(tabuleiroClone)
  }

  const toMarkCampo = (linha, coluna) => {
    const tabuleiroClone = clonarTabuleiro(tabuleiro)
    toggleBandeira(tabuleiroClone, linha, coluna)
    if (ganhouJogo(tabuleiroClone)) {
      setGanhou(true)
      Alert.alert('Parabéns!', 'Você ganhou!')
    }
    setTabuleiro(tabuleiroClone)
  }

  const novoJogo = () => {
    setTabuleiro(getTabuleiroInicial(parametros, numeroColunas, numeroLinhas))
    setGanhou(false)
    setPerdeu(false)
  }

  const handleSelecaoDificuldade = (dificuldade) => {
    parametros.nivelDificuldade = dificuldade
    novoJogo()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu isOpen={isModalOpen} onSelecaoDificuldade={handleSelecaoDificuldade} onClose={() => setIsModalOpen(false)} />
      <Header
        bandeirasRestantes={getNumeroDeMinas(parametros, numeroLinhas, numeroColunas) - bandeirasMarcadas(tabuleiro)}
        onNovoJogoPress={novoJogo} onBandeiraPress={() => setIsModalOpen(true)}
      />
      <View style={styles.tabuleiro}>
        <Tabuleiro tabuleiro={tabuleiro} onOpenCampo={toOpenCampo} onMarkCampo={toMarkCampo} disabled={fimDeJogo} />
      </View>
    </SafeAreaView>
  );
}