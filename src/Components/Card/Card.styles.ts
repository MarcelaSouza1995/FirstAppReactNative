import { StyleSheet } from 'react-native';
const CardSyles = StyleSheet.create({
  view: {
    width: '47%',
    height: 170,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',

    padding: 5,
    margin: 5,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    border: '#000',
    borderWidth: 1,
    justifyContent: 'space-around',
  },
  textTitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    marginRight: 15,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  illustration: {
    width: '40%',
    height: '45%',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
  },
  button: {
    width: '80%',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#ADAAAB',
    padding: '2%',
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  heart: {
    position: 'absolute',
    right: 10,
    marginLeft: 5,
  },
});

export default CardSyles;
