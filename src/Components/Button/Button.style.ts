import { StyleSheet } from 'react-native';
const ButtonStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#FFFF',
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    width: '80%',
    borderColor: '#FFFF',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    padding: 5,
    shadowColor: '#f8ff74',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
});
export default ButtonStyles;
