import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  bandeiraContainer: {
    flexDirection: 'row',
  },
  bandeiraButton: {
    minWidth: 30
  },
  bandeirasRestantes: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#999',
    padding: 5
  },
  buttonTexto: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  }
})

export default styles