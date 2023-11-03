import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importe o ícone que você deseja usar
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import CardSyles from './Card.styles';
import { CardProps, person } from '../../Interfaces/interfaces';
import { useMyContext } from '../../State/State';

const Card = (props: CardProps) => {
  const { person } = props;
  const { name, image, id, isFavorite } = person;
  const { view, textTitle, button, illustration, text, heart } = CardSyles;
  const navigation = useNavigation();
  const { toggleFavorite } = useMyContext();

  const goToDetails = (person: person) => {
    navigation.removeListener;
    navigation.navigate('Details', { person });
  };

  const handleFavoritar = () => {
    toggleFavorite(person);
  };

  return (
    <View style={view}>
      <TouchableOpacity onPress={handleFavoritar} style={heart}>
        <MaterialCommunityIcons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={20}
          color={isFavorite ? 'red' : 'black'}
        />
      </TouchableOpacity>

      <Text
        style={textTitle}
        numberOfLines={2}
        ellipsizeMode="tail"
        adjustsFontSizeToFit
      >
        {name}
      </Text>
      <Image source={{ uri: image }} style={illustration} />
      <TouchableOpacity style={button} onPress={() => goToDetails(person)}>
        <Text style={text}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
