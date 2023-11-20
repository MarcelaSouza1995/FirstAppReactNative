import React from 'react';
import { TextInput, View } from 'react-native';

import HomeStyles from './Home.styles';
import Background from '../../Components/Background/Background';
import CardList from '../../Components/CardList/CardList';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import { useMyContext } from '../../State/State';

const Home = () => {
  const { data, setFilter } = useMyContext();
  const { view, input } = HomeStyles;

  return (
    <View style={view}>
      <Background />
      <Header />
      <TextInput
        placeholder="Filter by name"
        onChangeText={(text) => setFilter(text)}
        placeholderTextColor="#FFF"
        style={input}
      />
      {data ? <CardList persons={data} screen="Home" /> : <Loading />}
    </View>
  );
};

export default Home;
