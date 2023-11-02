import React from 'react';
import { View, Text, Image } from 'react-native';

import { DetailsStyles } from './Details.styles';

const Details = ({ route }) => {
  const { view, illustration, textTitle, text } = DetailsStyles;
  const { person } = route.params;
  const { name, image, species, gender, origin, location, status } = person;
  console.log(Object.keys(person));

  return (
    <View style={view}>
      <Text style={textTitle}>{name}</Text>
      <Image source={{ uri: image }} style={illustration} />
      <Text style={text}>Status: {status}</Text>
      <Text style={text}>Species: {species}</Text>
      <Text style={text}>Gender: {gender}</Text>
      <Text style={text}>Origin: {origin.name}</Text>
      <Text style={text}>Location: {location.name}</Text>
    </View>
  );
};

export default Details;
