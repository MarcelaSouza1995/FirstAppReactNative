import React from 'react';
import { View, Text } from 'react-native';

import { DetailsStyles } from './Details.styles';

const Details = () => {
  const { view } = DetailsStyles;
  return (
    <View style={view}>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
