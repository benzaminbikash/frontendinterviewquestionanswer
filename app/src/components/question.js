import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Question = ({ item }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("answer")}
      activeOpacity={0.7}
      className="m-2 bg-[#6441A5] px-1 py-3  flex-row rounded-md"
    >
      <Text className="text-white font-bold text-xl">1. </Text>
      <Text className="text-white font-bold text-xl">{item}</Text>
    </TouchableOpacity>
  );
};

export default Question;
