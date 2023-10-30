import React from 'react';
import { View, Text, Button } from 'react-native';

import CardList from '../../Components/CardList/CardList';
import Loading from '../../Components/Loading/Loading';
import { useMyContext } from '../../State/State';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Home = ({ navigation }) => {
  const { data } = useMyContext();
  const { container } = GlobalStyles;
  return (
    <View style={container}>
      {data ? <CardList persons={data} /> : <Loading />}
    </View>
  );
};

export default Home;
