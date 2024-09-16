import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "../constants/colors";

const Header = ({ level, navigation }) => {
  return (
    <View
      className={`bg-[${COLORS.main}] h-[60px] px-2 flex-row justify-between items-center`}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text className="text-white font-bold text-xl">Level {level} Quiz</Text>
      <View></View>
    </View>
  );
};

export default Header;
