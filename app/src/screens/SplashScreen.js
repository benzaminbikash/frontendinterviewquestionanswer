import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Lineargradient from "../components/lineargradient";
import { COLORS } from "../constants/colors";
import { StackActions, useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("auth"));
    }, 3000);
  }, []);
  return (
    <Lineargradient colors={[COLORS.linear1, COLORS.linear2, COLORS.linear3]}>
      <View className="flex-1 justify-center items-center ">
        <Text className="font-bold text-white text-6xl">{"</>"}</Text>
        <Text className="text-white font-bold text-xl">
          Programming Interview Question Answer App
        </Text>
        <Text className="text-white mt-1">
          "Interview Ready, Anytime, Anywhere"
        </Text>
      </View>
    </Lineargradient>
  );
};

export default SplashScreen;
