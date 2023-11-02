import { StyleSheet } from 'react-native';
const CardSyles = StyleSheet.create({
  view: {
    width: '45%',
    height: 170,
    backgroundColor: '#CFCFCF',
    padding: 5,
    margin: 5,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-around',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  textTitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
    marginRight: 15,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  illustration: {
    width: '50%',
    height: '50%',
    borderRadius: 50,
  },
  button: {
    width: '70%',
    backgroundColor: '#ADAAAB',
    padding: '2%',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  heart: {
    position: 'absolute',
    right: 10,
    marginLeft: 5,
  },
});

export default CardSyles;
