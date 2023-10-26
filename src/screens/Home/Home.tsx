import React from 'react';
import { View, Text, Button } from 'react-native';

import { useMyContext } from '../../State/State';

const Home = ({ navigation }) => {
  const { myState, setMyState } = useMyContext();
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Home;
