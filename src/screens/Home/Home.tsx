import React from "react";
import { View, Text } from "react-native";

import { useMyContext } from "../../State/State";

const Home = () => {
  const { myState, setMyState } = useMyContext();
  return (
    <View>
      <Text>Home</Text>
      <Text>{myState}</Text>
    </View>
  );
};

export default Home;
