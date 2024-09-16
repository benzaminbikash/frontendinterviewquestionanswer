import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS } from "../constants/colors";
import { addToken } from "../redux/API/token";
import Lineargradient from "../components/lineargradient";

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const CheckUser = async () => {
    const AUTH = await AsyncStorage.getItem("AUTH");
    if (AUTH != null) {
      navigation.dispatch(StackActions.replace("main"));
      dispatch(addToken(AUTH));
    } else {
      navigation.dispatch(StackActions.replace("auth"));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      CheckUser();
    }, 2000);
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
