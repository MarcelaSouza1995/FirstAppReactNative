import { View, Text, Image } from 'react-native';

import { CardProps } from '../../Interfaces/interfaces';

const Card = (props: CardProps) => {
  const { name, image, status } = props;
  console.log(image);
  return (
    <View style={{ borderColor: 'black', borderWidth: 1 }}>
      <Text>{name}</Text>
      <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
      <Text>{status}</Text>
    </View>
  );
};
export default Card;
