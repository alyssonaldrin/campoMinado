import { StyleSheet } from "react-native"
import parametros from "../../parametros";

const styles = StyleSheet.create({
  campo: {
    height: parametros.tamanhoBloco,
    width: parametros.tamanhoBloco,
    borderWidth: parametros.tamanhoBorda,
  },
  padrao: {
    backgroundColor: '#999',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
    borderLeftColor: '#CCC'
  },
  aberto: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numero: {
    fontWeight: 'bold',
    fontSize: parametros.tamanhoFonte
  },
  explodido: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
})

export default styles