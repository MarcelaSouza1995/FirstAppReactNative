import React from 'react';
import { Image } from 'react-native';

import BackgroundStyles from './Background.style';
import GalaxyBackground from '../../Images/BackgroundGalaxy.jpg';

const Background = () => {
  const { imageBackground } = BackgroundStyles;
  return <Image source={GalaxyBackground} style={imageBackground} />;
};

export default Background;
