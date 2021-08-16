import { black } from "ansi-colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centro: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linhaHorizontal: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black'
  },
  linhaDiagonal1: {
    transform: [{ rotate: '45deg' }]
  },
  linhaVertical: {
    transform: [{ rotate: '90deg' }]
  },
  linhaDiagonal2: {
    transform: [{ rotate: '135deg' }]
  }
})

export default styles