import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Lineargradient from "../components/lineargradient";
import { COLORS } from "../constants/colors";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addToken } from "../redux/API/token";

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
