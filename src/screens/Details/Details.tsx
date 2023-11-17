import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icone from 'react-native-vector-icons/Fontisto';

import { DetailsStyles } from './Details.styles';
import Background from '../../Components/Background/Background';
import ImageDetails from '../../Images/Details.png';

const Details = ({ route }) => {
  const {
    view,
    illustration,
    textTitle,
    text,
    viewTopic,
    icon,
    container,
    imageTitle,
  } = DetailsStyles;
  const { person } = route.params;
  const { name, image, species, gender, origin, location, status } = person;

  return (
    <View style={view}>
      <Background />
      <Image source={ImageDetails} style={imageTitle} />

      <View style={container}>
        <Text style={textTitle}>{name}</Text>
        <Image source={{ uri: image }} style={illustration} />
        <View style={viewTopic}>
          <Icon name="info" size={20} color="#000" style={icon} />
          <Text style={text}>Status: {status}</Text>
        </View>
        <View style={viewTopic}>
          <Icone name="persons" size={20} color="#000" style={icon} />
          <Text style={text}>Species: {species}</Text>
        </View>
        <View style={viewTopic}>
          <Icone name="intersex" size={20} color="#000" style={icon} />
          <Text style={text}>Gender: {gender}</Text>
        </View>
        <View style={viewTopic}>
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={text}>Origin: {origin.name}</Text>
        </View>
        <View style={viewTopic}>
          <Ionicons name="location" size={20} color="#000" />
          <Text style={text}>Location: {location.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
