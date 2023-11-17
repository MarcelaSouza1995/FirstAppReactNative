import { StyleSheet } from 'react-native';
export const DetailsStyles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: '65%',
    height: '35%',
    borderRadius: 1000,
    marginVertical: '5%',
    borderColor: '#000',
    borderWidth: 1,
  },
  textTitle: {
    fontSize: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
  },
  viewTopic: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '75%',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: '70%',
    borderColor: '#000',
    borderWidth: 2,
  },
  imageTitle: {
    width: '65%',
    height: '8%',
    marginVertical: '10%',
  },
});
