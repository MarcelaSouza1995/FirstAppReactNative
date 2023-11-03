import { View, Image } from 'react-native';

import HeaderStyles from './Heeader.styles';
import Backgrounddetails from '../../images/BackgroundDetails.png';
import RickAndMorty from '../../images/RickAndMorty.png';

const Header = () => {
  const { image } = HeaderStyles;
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={Backgrounddetails}
        style={{
          //position: 'absolute',
          top: '4%',
          right: '2%',
          width: '45%',
          height: 100,
        }}
      />
      <Image style={image} source={RickAndMorty} />
    </View>
  );
};

export default Header;
