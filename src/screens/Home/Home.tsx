import React from 'react';
import { View, Text, Button } from 'react-native';

import Loading from '../../Components/Loading/Loading';
import { useMyContext } from '../../State/State';

const Home = ({ navigation }) => {
  const { myState, data } = useMyContext();
  console.log(data.length);
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Home</Text>
      <Loading />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Home;
