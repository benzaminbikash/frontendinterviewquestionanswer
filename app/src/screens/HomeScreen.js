import { View, Text } from "react-native";
import React from "react";
import Lineargradient from "../components/lineargradient";

const HomeScreen = () => {
  return (
    <Lineargradient check={true}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </Lineargradient>
  );
};

export default HomeScreen;
