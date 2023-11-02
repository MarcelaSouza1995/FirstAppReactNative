import { View, Image } from 'react-native';

import HeaderStyles from './Heeader.styles';
import RickAndMorty from '../../images/RickAndMorty.png';

const Header = () => {
  const { image } = HeaderStyles;
  return <Image style={image} source={RickAndMorty} />;
};

export default Header;
