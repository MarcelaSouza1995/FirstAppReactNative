import { StyleSheet } from 'react-native';
const CardSyles = StyleSheet.create({
  view: {
    // flex: 1,
    width: '45%',
    height: 170,
    backgroundColor: '#CFCFCF',
    padding: 5,
    margin: 5,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  textTitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
  },
  text: {
    fontSize: 10,
  },
  illustration: {
    width: '50%',
    height: '50%',
    borderRadius: 50,
  },
});

export default CardSyles;
