import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import ButtonStyles from './Button.style';
import { ButtonProps } from '../../Interfaces/interfaces';
const Button = (props: ButtonProps) => {
  const { title, onPress } = props;
  const { text, button } = ButtonStyles;

  return (
    <View style={{ alignSelf: 'center', width: '60%' }}>
      <TouchableOpacity style={button} onPress={onPress}>
        <Text style={text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
