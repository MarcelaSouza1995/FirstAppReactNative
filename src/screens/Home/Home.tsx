import React from 'react';
import { View, Text, Button } from 'react-native';

import HomeStyles from './Home.styles';
import CardList from '../../Components/CardList/CardList';
import Loading from '../../Components/Loading/Loading';
import { useMyContext } from '../../State/State';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Home = ({ navigation }) => {
  const { data } = useMyContext();
  const { container } = GlobalStyles;
  const { view } = HomeStyles;
  return (
    <View style={[container, view]}>
      {data ? <CardList persons={data} /> : <Loading />}
    </View>
  );
};

export default Home;
