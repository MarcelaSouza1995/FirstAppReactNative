import { View, Image } from 'react-native';

import HeaderStyles from './Heeader.styles';
import ImageHeader from '../../Images/ImageHeader.png';
import RickAndMorty from '../../Images/RickAndMorty.png';

const Header = () => {
  const { image, imagePersons, view } = HeaderStyles;
  return (
    <View style={view}>
      <Image source={ImageHeader} style={imagePersons} />
      <Image style={image} source={RickAndMorty} />
    </View>
  );
};

export default Header;
