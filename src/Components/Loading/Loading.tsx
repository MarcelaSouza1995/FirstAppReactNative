import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import { GlobalStyles } from '../../styles/GlobalStyles';

const Loading = () => {
  const { container } = GlobalStyles;
  return (
    <View style={container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

export default Loading;
