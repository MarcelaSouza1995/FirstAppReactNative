import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import CardSyles from './Card.styles';
import { CardProps } from '../../Interfaces/interfaces';

const Card = (props: CardProps) => {
  const { name, image, status, id } = props;
  const { view, textTitle, text, illustration } = CardSyles;
  const navigation = useNavigation();

  const goToDetails = (item: any) => {
    navigation.navigate('Details', { item });
  };
  return (
    <TouchableOpacity style={view} onPress={() => goToDetails(id)}>
      <Text
        style={textTitle}
        numberOfLines={2}
        ellipsizeMode="tail"
        adjustsFontSizeToFit
      >
        {name}
      </Text>
      <Image source={{ uri: image }} style={illustration} />
      <Text style={text}>Status: {status}</Text>
    </TouchableOpacity>
  );
};
export default Card;
