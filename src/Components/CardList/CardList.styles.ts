import { StyleSheet } from 'react-native';

const CardLIstStyles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    borderColor: '#FFFF',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#ADAAAB',
    padding: '2%',
    shadowColor: '#f8ff74',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
});

export default CardLIstStyles;
