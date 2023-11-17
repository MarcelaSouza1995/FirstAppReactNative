import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import ButtonStyles from './Button.style';
import { ButtonProps } from '../../Interfaces/interfaces';
const Button = (props: ButtonProps) => {
  const { title, onPress, textStyle } = props;
  const { text, view } = ButtonStyles;

  return (
    <View style={view}>
      <TouchableOpacity style={textStyle} onPress={onPress}>
        <Text style={[text]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
