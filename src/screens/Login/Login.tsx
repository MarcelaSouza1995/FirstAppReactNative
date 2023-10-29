import React from 'react';
import { View, Text } from 'react-native';

import { LoginStyles } from './Login.styles';

const Login = () => {
  const { view } = LoginStyles;
  return (
    <View style={view}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
